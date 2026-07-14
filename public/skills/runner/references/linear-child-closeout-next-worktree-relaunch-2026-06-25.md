# Linear child closeout edge cases: SIGTERM, partial receipts, and stale helper artifacts (2026-06-25)

## Trigger

Use this when a Cursor CLI child worker exits `143`/SIGTERM or otherwise stops without a rich final log, but the repo/run-state/Linear evidence suggests the child may already be complete.

## Lesson

A dead worker is not automatically a failed child. Reconstruct state from durable receipts and live systems before relaunching or rolling back. In Hoshi, THE-188 exited with SIGTERM and only one log line, but live Linear was already In Review, a save-point commit existed, gates passed, and the next worktree was already created. The right move was verification + continue, not duplicate relaunch.

## Verification sequence

1. Confirm no duplicate worker is alive:

```bash
ps -axo pid=,command= | grep 'cursor agent' | grep -E '<project>|<worktree-prefix>' | grep -v grep || true
```

2. Check the completed worktree:

```bash
git -C <child-worktree> status --short --branch
git -C <child-worktree> log --oneline -5
find <child-worktree>/output -maxdepth 4 -type f 2>/dev/null | sort | sed -n '1,160p'
```

3. Read multiple evidence lanes; do not trust any one artifact:
   - `output/<project>/test-gate/<ISSUE>.json` or project equivalent;
   - `output/<project>/book-review/<ISSUE>.json`;
   - issue-specific proof dir;
   - project run-state completion item;
   - live Linear state and proof comments;
   - git commit and clean status.
4. If the gate receipt was produced before the final commit or shows dirty files, rerun the actual closeout commands at final HEAD before advancing:

```bash
PATH=/opt/homebrew/bin:$PATH HOSHI_PROVE_ISSUE=<ISSUE> HOSHI_PERSISTENCE=db HOSHI_DATA_DIR=output/hoshi/db-gate npm run build
PATH=/opt/homebrew/bin:$PATH HOSHI_PROVE_ISSUE=<ISSUE> HOSHI_PERSISTENCE=db HOSHI_DATA_DIR=output/hoshi/db-gate npm run test:unit
PATH=/opt/homebrew/bin:$PATH HOSHI_PROVE_ISSUE=<ISSUE> HOSHI_PERSISTENCE=db HOSHI_DATA_DIR=output/hoshi/db-gate npm run ctrl:gate
```

5. If live Linear already has a proof comment and the issue is In Review, do not post a duplicate. Record the existing comment URL in run-state/driver-state.
6. If the next child worktree already exists, inspect it before recreating. Reuse only if its HEAD equals the completed child commit and its branch matches the intended next issue; otherwise remove/recreate from the completed commit.

## Artifact-normalization pitfall

Sometimes Cursor writes equivalent proof in the wrong lane (for example `output/proof/manual-import/manual-import/receipt.json`) while the issue body expects `output/proof/<ISSUE>/receipt.json`. Treat this as a warning, not automatically a convoy blocker, when all of these are true:

- live Linear has the proof summary/comment and correct state;
- final HEAD is committed and clean;
- build, unit tests, and scoped gate pass at final HEAD;
- CLI Tester and Book review are PASS/APPROVED;
- per-issue verdict owns zero failing claimable cells.

Do not mutate an already-green completed child just to normalize artifact paths unless the missing artifact is required by a downstream machine gate. Instead, carry a note in run-state and improve the prompt/gate for the next issue.

## Report shape

Keep the chat compact:

- state whether SIGTERM was benign or blocking;
- completed issue, final commit, live Linear comment/state;
- exact rerun gate result if you reran final HEAD;
- next issue worktree + worker PID/session.

Avoid long receipt dumps in Discord; put detailed evidence in artifacts/state.
