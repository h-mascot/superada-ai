# Per-issue worktree helper gap, stale leftover worktrees, and queued follow-up proof comments (Hoshi 2026-06-25)

## Trigger

A Cursor-driver autonomous queue is running with one **sibling worktree per approved child issue** (e.g. `<HOME>/Services/<repo>-the-NNN`), the same main worktree hosts `scripts/linear/post_proof_comment.py`, and each child closes out at a different cadence. You are the supervisor and have to:

1. Reconcile a worker's commit-only closeout that did not post the final Linear proof comment.
2. Detect/clean a stale leftover worktree from a prior scratch attempt before creating the next child's worktree.
3. Decide whether to relaunch Cursor CLI from the main worktree's scripts or the child worktree's scripts.

## Lessons

### 1. The Linear write helper only exists in the main worktree

`scripts/linear/post_proof_comment.py` (and any other Linear helper) is tracked in the **main** worktree only. Sibling per-issue worktrees (`<repo>-the-NNN`) do not carry those scripts because they are created from a fresh commit on a single-issue branch.

Observed result: a worker that finishes in `<repo>-the-185` legitimately cannot post the queued follow-up proof comment for its hardening commit and is right to queue the body in `hoshi-autonomous-run-state.json#proofCommentQueue`. Telling the worker to "just post it" creates a phantom path and is unsafe.

Operational fix: **the supervisor (Book) is the Linear write executor when the helper is missing in the worker's worktree.**

Pattern:

```bash
# Confirm the helper exists in main and not in the worker's worktree
test -f <main-repo>/scripts/linear/post_proof_comment.py && echo main_present
test -f <worker-worktree>/scripts/linear/post_proof_comment.py && echo wt_present  # absent

# Post from main, write to a per-issue receipt in the worker's worktree so the
# run-state/driver-state can record the comment URL alongside the worker's own receipts.
python3 <main-repo>/scripts/linear/post_proof_comment.py <ISSUE_ID> \
  --body-file <worker-worktree>/output/proof/<ISSUE>/linear-comment.md \
  > <worker-worktree>/output/proof/<ISSUE>/linear-followup-<SHORT-SHA>-output.json

# Update run-state + driver-state with the returned comment URL.
```

The helper reads `LINEAR_API_KEY` from `~/.hermes/.env` (sandbox-redacted); load it via `set -a; source <HOME>/.hermes/.env; set +a` before invoking, or via `os.environ['LINEAR_API_KEY']` from Python — never print it.

Never try to copy or symlink the helper into the worker's worktree to satisfy the worker. The worker is right to queue; the supervisor owns the write.

### 2. Stale leftover worktrees from earlier scratch attempts

A path like `<HOME>/Services/<repo>-the-186` may already exist on the **wrong** branch (e.g. `the-186-fireflies-ingest-pipeline-with-audit-redaction-and-failure-injection`) at an unrelated commit (e.g. `4edd01d`) left over from an earlier scratch attempt. If you blindly `git worktree add -b the-186-<correct-title> <path> <BASE>`, git will refuse because the path is occupied, or — worse — you reuse the wrong branch by accident.

Operational fix: detect, tear down, and recreate.

```bash
BR=the-186-<correct-slug>
WT=<HOME>/Services/<repo>-the-186

# 1. Confirm the existing branch does not match the issue title slug.
git -C <main-repo> branch --list '*186*'

# 2. Tear down the wrong worktree + delete the stale branch.
git -C <main-repo> worktree remove --force "$WT" || true
git -C <main-repo> branch -D <wrong-branch> 2>/dev/null || true
git -C <main-repo> branch -D "$BR" 2>/dev/null || true

# 3. Recreate on the prior close-out baseline.
BASE=$(git -C <previous-completed-worktree> rev-parse HEAD)
git -C <main-repo> worktree add -b "$BR" "$WT" "$BASE"

# 4. Verify.
git -C "$WT" status --short --branch
git -C "$WT" log --oneline -3
```

Record the teardown + recreate in driver-state `history[]` with a clear `event` (e.g. `the185_complete_the186_recreated`) so the next supervisor can see why the worktree path was rebuilt.

### 3. Two-commit closeout with a queued follow-up proof comment

A worker may complete an issue in **two commits**: the initial implementation, then a review-driven hardening. The worker correctly:

- Posts the Linear proof comment for the **first** commit and moves the issue to In Review (separation of duties: it does write to Linear here).
- Commits the hardening commit.
- Writes the hardening commit's proof comment body to `hoshi-autonomous-run-state.json#proofCommentQueue` because the write helper is missing in the worktree.
- Stops.

The supervisor must:

1. Inspect the latest commit SHA on the branch and confirm the hardening work is intentional/issue-scoped.
2. Post the queued follow-up comment from the main worktree using pattern 1 above.
3. Update `completed[]` in run-state with the follow-up `commentUrl` and `postedAt`.
4. Mark the queued entry in `proofCommentQueue` as `POSTED` and copy the URL.
5. Relaunch on the next child.

Do **not** rewrite the existing `linearCommentUrl` in run-state; that was the first commit's proof. Append `followupLinearCommentUrl` so the chain is auditable: first-commit proof URL + hardening-commit proof URL + comment counts.

If a worker stops with **three or more** commits, that is a yellow flag — the worker is iterating past its scope. Inspect what it added; if the extra commits are doc/test/scope-narrow follow-ups, accept and post; otherwise treat as drift, stop the queue, and ask Henry.

### 4. Sequence to verify before every relaunch

Before relaunching the next worker, run the cheap live-state checks in this order. Anything below returning wrong is a hard stop, not a soft stop.

```bash
# A. No duplicate worker already alive for the next worktree.
ps -axo pid=,command= | grep 'cursor agent' \
  | grep -F "<next-worktree>" | grep -v grep || true

# B. Next worktree HEAD matches the close-out baseline you just committed.
git -C <next-worktree> rev-parse --short HEAD
git -C <next-worktree> status --short --branch

# C. Run-state nextIssue / driver-state currentIssue match the child you're launching.
python3 -c 'import json; print(json.load(open("<HOME>/Services/<repo>/.cursor/<repo>-autonomous-run-state.json"))["current"]["issueId"])'

# D. Helper availability.
test -f <main-repo>/scripts/linear/post_proof_comment.py && echo main_helper_ok
test -f <next-worktree>/scripts/linear/post_proof_comment.py && echo wt_helper_ok || echo wt_helper_missing
```

If A finds a worker, stop — never double-launch. If B is dirty, stop and clean first. If C doesn't match, update before launch. If D shows `wt_helper_missing`, that is normal — the worker will queue, you will post from main.

### 5. Anti-patterns

- Telling a worker to `cd <main-repo> && python3 scripts/linear/post_proof_comment.py ...` from inside the per-issue worktree. That mixes worktrees and breaks the per-issue branch discipline. The worker should queue; the supervisor should post from main.
- Reusing a stale worktree on a wrong branch because `git worktree add` failed silently. Always verify the existing branch slug against the Linear issue title slug before reusing.
- Overwriting the first-commit `linearCommentUrl` when posting a follow-up. Append `followupLinearCommentUrl`.
- Calling the Linear write helper with `--state-name` set to a string the helper cannot resolve. The helper does exact-name lookup; pass the exact team state name (e.g. `In Review`) or omit `--state-name` entirely.
- Posting a follow-up proof comment whose body still claims commit A when the branch head is commit B. Always update the body to reference the **latest** commit SHA before posting.
- Skipping the linear-state reconciliation step after the follow-up post — re-query live Linear and confirm the issue still reads In Review with both comments visible before declaring the closeout fully closed.

## Report shape

Keep the supervisor heartbeat tiny when this reference is the active pattern:

```text
THE-185 complete at <sha>; follow-up proof posted (comment <id>). THE-186 worktree recreated on the right branch; fresh worker pid <pid> session <session>. Queue count: 10 done, 1 active, 7 left.
```

Detailed receipts (run-state patches, helper-exec receipts, branch teardown) belong in the driver state and the per-issue `output/proof/<ISSUE>/linear-followup-<sha>-output.json` file, not in the chat heartbeat.