# Clean Cursor worker completion: auto-continue + no-op savepoint handling

Session lesson from OpenCore V1 autonomous Cursor driver.

## Trigger

A tracked `cursor agent --print --workspace ... --force "$(cat docs/plans/cursor-goal-prompt.md)"` background worker exits `0` after completing one or more approved issues and the worker text says some version of:

- "Should I continue?"
- "Say the word if you want me to continue"
- "No commit or merge was performed"

For an autonomous full-queue driver, that is not a user question. It is a supervisor event.

## Correct driver behavior

1. Inspect the finished worker log, run-state pointer, proof directories, and repo status.
2. Re-run aggregate gates for the latest completed issue:
   - `npm run typecheck`
   - `npm run lint`
   - `npm test`
   - `npm run build`
   - `bash scripts/proof/opencore-v1-smoke.sh <LATEST_ISSUE>`
3. If gates are green, make/record a local save-point commit for intentional source changes only.
4. If `git commit` reports `nothing to commit, working tree clean` because Cursor already created the save-point, treat it as success after verifying:
   - `git status --short --branch` is clean apart from ahead count;
   - `git log --oneline -1` names the expected save-point;
   - `git show --stat --oneline --name-status -1` contains the expected issue-scoped files.
5. Update driver state with the completed issue range, current run-state pointer, last save-point commit, and next issue.
6. Relaunch Cursor immediately on the next approved issue.
7. Do not push or merge unless Henry explicitly authorized it.

## Pitfalls

- Do not ask Henry to approve the worker's "continue?" text. Henry already approved autonomous full-queue movement.
- Do not treat a no-op commit exit as a blocker when the tree is clean and HEAD is the expected save-point. Git is being literal, not useful.
- Do not commit runtime state, proof receipts, `output/`, `.cursor/*run-state*.json`, logs, secrets, or unrelated files.
- Keep the chat heartbeat tiny: issue range completed, gates green, save-point commit, next worker session/PID.
