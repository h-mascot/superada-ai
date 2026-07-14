# Linear Paperwork Mule Desync — Repair Recipe

A class-level failure mode for autonomous Cursor/Codex convoys:

- Local run-state says `N/N complete` and `main` is already merged.
- The supervisor cron has self-paused.
- But live Linear still has every child issue in `Backlog`, with no proof comments.

Observed live on ShowClaw v0 (2026-06-23/24). 56/56 children were merge-green, but live Linear still showed 56/56 in Backlog until a separate repair pass walked the API.

## Root cause

Proof-comment posting in the CLI Tester / driver depends on session-scoped env vars:

- `PROJECT_GATE_POST_LINEAR` — gate-flag for posting live on run-pass
- `BOOK_API_BASE` / `API_SERVER_KEY` — Hermes API for the `book-review` step

When these are unset for a session, the run-step records the intended comment body in `proofCommentQueue` and skips the live post with a note like `PROJECT_GATE_POST_LINEAR unset this session; gate-pass comment queued in proofCommentQueue.` The verify-step may then overwrite or skip that entry.

Net effect: the **build mule (code/merge) finishes**, the **paperwork mule (Linear state + comments) does not**. Run-state lies about Linear being green.

## Detection

When Henry asks "are the tasks moved on Linear?" or "is the agent updating Linear?", or when a queue reports drained, do **not** trust local run-state alone. Run a live audit:

```python
# Required env: LINEAR_API_KEY (load from ~/.hermes/.env non-verbosely)
import os, json, urllib.request
key = os.environ["LINEAR_API_KEY"]

def gql(q, v=None):
    r = urllib.request.urlopen(
        urllib.request.Request(
            "https://api.linear.app/graphql",
            data=json.dumps({"query": q, "variables": v or {}}).encode(),
            headers={"Authorization": key, "Content-Type": "application/json"},
        ),
        timeout=30,
    )
    out = json.loads(r.read())
    if out.get("errors"):
        raise RuntimeError(out["errors"])
    return out["data"]

# State histogram
rows = [
    gql(
        "query($id:String!){ issue(id:$id){ state { name type } comments(first:20){ nodes { body } } } }",
        {"id": i},
    )["issue"]
    for i in ISSUE_IDS
]
from collections import Counter
print(dict(Counter(f"{r['state']['name']}|{r['state']['type']}" for r in rows)))
print("not_done:", [i for i, r in zip(ISSUE_IDS, rows) if r["state"]["type"] != "completed"])
print("missing_proof_comment:", [
    i for i, r in zip(ISSUE_IDS, rows)
    if not any(("gate-green" in c["body"] or "CLI Tester" in c["body"]) for c in r["comments"]["nodes"])
])
```

If `not_done` is non-empty **or** `missing_proof_comment` is non-empty, the paperwork mule is asleep.

## Repair

Goal: bring live Linear back in line with the already-completed local state without re-running any build step.

1. **Resolve the team's `Done` workflow state UUID** (use `workflowStates(filter:{team:{key:{eq:$teamKey}}})`).
2. **For each child issue**:
   - If `state.type != "completed"`: `issueUpdate(id, input:{stateId: $doneId})`.
   - If no proof/gate comment is present, post a concise comment:
     - Use the existing queued body from `proofCommentQueue` if one is queued.
     - Otherwise compose a one-shot completion comment with the issue ID, source ID, commit SHA, branch, proof receipt paths, and `merged to main at <commit>`.
3. **Update local run-state** to reflect the live post (write `linearComment.posted: true` and the comment id back into the `completedIssues[].linearComment` entry).
4. **Drain the local `proofCommentQueue`** after use.
5. **Re-run the live audit** and assert `not_done: []` and `missing_proof_comment: []`.

`issueUpdate` quirks baked into the recipe:

- `id` is a top-level `String!`; `stateId` is a workflow-state `ID!` (not `state: "Done"`).
- The shared `scripts/linear/set_issue_state.py` and `scripts/linear/post_proof_comment.py` helpers from the `linear` skill handle this. See `references/linear-api-quirks-2026-06-22.md`.
- Idempotent: re-running the audit/repair is safe; `issueUpdate` is upsert-style.

## Hard rule: do not let this recur

Three layers must move together, or the paperwork mule will desync again:

1. **The live cron prompt** (`~/.hermes/cron/jobs.json`) must check live Linear as part of its drain logic, not just `state.json`. Patch the live prompt, not just the reusable template.
2. **The reusable template** (`templates/cursor-driver-cron-prompt.md`) should describe the live-Linear check as a first-class drain signal.
3. **The driver state file** should record `lastLinearReconciledAt` and the per-issue `linearComment.posted` flags, so a future session can distinguish a healthy idle cron from a paperwork-asleep one.

## Verification

After repair:

- `not_done: []`
- `missing_proof_comment: []`
- `proofCommentQueue` empty in driver state
- Cron job still `state: paused`, `enabled: false`
- Repo still on `main...origin/main` at the same merge commit
- One short summary to the origin channel; no healthy heartbeats

## Anti-patterns

- **Trusting run-state.** It can report 56/56 while Linear says 0/56. Always audit live.
- **Re-running the build convoy.** The work is already done and merged. Re-running risks dirty diffs and re-burned tokens for no gain.
- **Patching only the template.** Future crons are fine; the live cron keeps the old behavior until `jobs.json` is patched too. Patch all three layers.
- **Skipping the comment post.** A Done state without a proof comment is still paperwork-asleep. Post concise comments that include commit SHA + branch + receipt paths.
- **Calling this a one-off.** It is a class-level failure mode when proof-comment posting depends on unset session env vars. Treat every convoy-drained check as a chance for the paperwork mule to be asleep.
