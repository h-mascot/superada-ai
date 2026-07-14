# Mycelium V1 execution-pack lesson — full queue + Book review API

Session date: 2026-06-22
Project: Mycelium V1 (`<HOME>/Code/Mycelium`)

## What Henry corrected

Henry pushed back that an execution pack should not approve a tiny sampler queue when the task was to run the full Linear-backed project end-to-end. A 3-issue queue was too timid and contradicted the class-level purpose of `runner`.

**Durable rule:** when the user asks for an autonomous project execution pack and the Linear issue graph is already mapped/clean, default the approved queue to **all mapped child issues** in dependency-safe order. Parent epics stay containers. Use a small pilot queue only when the user explicitly asks for a pilot/canary, when mapping/preflight is unresolved, or when the source graph itself marks downstream blockers.

## What changed in the pack

- Approved queue expanded from `THE-210 → THE-212` to all 74 Mycelium child issues (`THE-207`..`THE-280`, excluding parent epics `THE-194`..`THE-206`).
- Verified queue properties:
  - 74 issues
  - 0 duplicates
  - 0 sibling `blocks` edge order violations
- Updated:
  - `plan.md`
  - `linear_id_to_source_id.json`
  - `.cursor/mycelium-v1-autonomous-run-state.json`
  - `cursor-bounded-queue-prompt.md`
  - `cursor-goal-prompt.md`
- Pack validator stayed green: 58/58.

## Linear access contract Henry wanted embedded

Cursor must not use OAuth/browser login for Linear.

Use the terminal with env loaded from Hermes:

```bash
set -a; source <HOME>/.hermes/.env; set +a
python3 <HOME>/.hermes/skills/productivity/linear/scripts/linear_api.py whoami
python3 <HOME>/.hermes/skills/productivity/linear/scripts/linear_api.py get-issue THE-207
```

Subsequent Linear operations should prefer the local helper:

```bash
python3 <HOME>/.hermes/skills/productivity/linear/scripts/linear_api.py get-issue <ISSUE_ID>
python3 <HOME>/.hermes/skills/productivity/linear/scripts/linear_api.py add-comment <ISSUE_UUID> "..."
python3 <HOME>/.hermes/skills/productivity/linear/scripts/linear_api.py raw '<GraphQL query>'
```

## Book review gate pitfall

`bookReview.mode: "packet"` is safe but **always blocks continuation** because it creates a packet and returns `decision: REQUESTED`, `safeToContinue: false`. That is appropriate for manual audit handoff, not for autonomous Cursor execution.

For end-to-end autonomous runs, configure `bookReview.mode: "hermes-api"` when the Hermes API is reachable and credentials exist:

```json
{
  "bookReview": {
    "required": true,
    "mode": "hermes-api",
    "apiBaseEnv": "BOOK_API_BASE",
    "apiKeyEnv": "API_SERVER_KEY",
    "timeoutMs": 120000,
    "retryAttempts": 2,
    "retryDelayMs": 1000
  }
}
```

Set/verify env:

```bash
# <HOME>/.hermes/.env
BOOK_API_BASE=http://<REDACTED_IP>:8642
API_SERVER_KEY=...

curl --noproxy '*' -sS "$BOOK_API_BASE/health"
```

Smoke pattern used successfully:

```bash
curl --noproxy '*' -sS "$BOOK_API_BASE/health"
POST "$BOOK_API_BASE/api/sessions"
POST "$BOOK_API_BASE/api/sessions/<session-id>/chat"
```

## Important distinction

After switching to `hermes-api`, the API worked and returned in ~69s, but Book returned `NEEDS_FIX` for THE-207 because the gate receipt evidence was not issue-scoped: changed files and commit evidence were broader than THE-207. That is a **good block**, not API failure.

Durable lesson: do not remove the review gate just because it blocks. First distinguish:

- infrastructure drop/hang (`BOOK_API_BASE` missing, request timeout, parse failure)
- legitimate review block (`NEEDS_FIX`, dirty/broad receipt, changed files do not match issue scope)

If a legitimate review block occurs, fix the evidence/branch/receipt, not the gate.

## Future improvement candidate

Consider adding a fast local auto-approve policy to CLI Tester for low-risk docs-only issues:

- gate PASS
- zero banned/private hits
- changed files within issue-scoped allowlist
- no app/server/schema/auth files
- receipt includes issue ID, branch, commit SHA, changed files, commands

Still call Book/Hermes API for app/schema/auth/broad/high-risk changes.