# Benign SIGTERM closeout and final-HEAD verification (2026-06-25)

## Trigger

Use when a Cursor CLI worker exits with `143` / SIGTERM, reconnect noise, or a short/partial log, but durable repo/run-state/Linear artifacts suggest the child may already be complete.

## Lesson

Treat the worker death as a state transition, not the verdict. Reconstruct completion from durable evidence before relaunching, rolling back, or asking Henry. In the Hoshi convoy, THE-188 and THE-189 both had noisy terminations, but the right move was to verify final HEAD, post missing Linear proof if needed, then advance.

## Closeout checklist

1. Confirm no duplicate worker is alive:

```bash
ps -axo pid=,command= | grep 'cursor agent' | grep -E '<project>|<worktree-prefix>' | grep -v grep || true
```

2. Inspect the child worktree:

```bash
git -C <worktree> status --short --branch
git -C <worktree> log --oneline -8
find <worktree>/output -maxdepth 4 -type f 2>/dev/null | sort | sed -n '1,220p'
```

3. Read at least three evidence lanes:
   - issue proof receipt/summary under `output/proof/<ISSUE>/` or documented equivalent;
   - CLI Tester `output/<project>/test-gate/<ISSUE>.json`;
   - Book review `output/<project>/book-review/<ISSUE>.json`;
   - project run-state completed item;
   - live Linear state/comments;
   - git final commit + clean status.

4. If the CLI Tester receipt predates the final commit or shows dirty files, rerun the final-HEAD gate sequence manually:

```bash
PATH=/opt/homebrew/bin:$PATH HOSHI_PROVE_ISSUE=<ISSUE> HOSHI_PERSISTENCE=db HOSHI_DATA_DIR=output/hoshi/db-gate npm run build
PATH=/opt/homebrew/bin:$PATH HOSHI_PROVE_ISSUE=<ISSUE> HOSHI_PERSISTENCE=db HOSHI_DATA_DIR=output/hoshi/db-gate npm run test:unit
PATH=/opt/homebrew/bin:$PATH HOSHI_PROVE_ISSUE=<ISSUE> HOSHI_PERSISTENCE=db HOSHI_DATA_DIR=output/hoshi/db-gate npm run ctrl:gate
```

5. If `.next`/Next.js build trace artifacts are stale and `ctrl:gate` fails with an `ENOENT` under `.next/server/.../*.nft.json`, remove `.next` and rerun `ctrl:gate`. Capture the retry as the proof pattern; do not encode the transient ENOENT as a durable tool failure.

6. Rerun CLI Tester at final HEAD when its receipt is stale or dirty:

```bash
export PATH=/opt/homebrew/bin:$PATH
export HOSHI_PROVE_ISSUE=<ISSUE>
export HOSHI_PERSISTENCE=db
export HOSHI_DATA_DIR=output/hoshi/db-gate
<HOME>/Code/cli-tester/bin/project-test-gate --config .project-gate.json --root . request <ISSUE> <branch>
<HOME>/Code/cli-tester/bin/project-test-gate --config .project-gate.json --root . run <ISSUE> <branch>
<HOME>/Code/cli-tester/bin/project-test-gate --config .project-gate.json --root . book-review <ISSUE> <branch>
<HOME>/Code/cli-tester/bin/project-test-gate --config .project-gate.json --root . verify <ISSUE> <branch>
```

7. If Linear lacks the proof comment/state, post the issue summary via the helper and move to In Review:

```bash
python3 /path/to/scripts/linear/post_proof_comment.py <ISSUE> --body-file output/proof/<ISSUE>/summary.md --state-name 'In Review'
```

8. Create or verify the next issue worktree. Reuse it only when its branch and HEAD match the intended next issue and completed child commit; otherwise recreate from the completed child commit.

## Artifact-normalization warning

Do not block a convoy just because a proof artifact is in an equivalent nonstandard path when all hard proof lanes are green and Linear is already correct. Record the warning in run-state and improve the next prompt/gate. Normalize only if a downstream machine gate requires that exact path.

## Report shape

Keep chat compact:

- SIGTERM benign/blocking;
- issue, final commit, live Linear comment/state;
- final-HEAD gate result if rerun;
- next issue worktree and worker PID/session.
