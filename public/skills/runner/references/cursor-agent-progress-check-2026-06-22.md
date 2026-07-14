# Cursor Agent progress-check pattern — Entity Phase 2 lesson (2026-06-22)

## When this applies

Use when Henry asks variants of:

- “Check Cursor progress”
- “What happened to the task we started?”
- “Is the Cursor agent blocked?”
- “Can it continue to the next issue?”

This is a status/audit task, not a prompt-generation task. Do not answer from the Cursor UI alone.

## Progress-check sequence

1. **Inspect Cursor Agents UI first** when available.
   - In Cursor Agents, the repository section and task card usually expose the active/last run title, age, status badge, touched files, and pending changes.
   - A 0x0 capture can still have a useful AX tree. Do not stop just because the screenshot dimensions are zero; parse labels such as repository, task title, files, “Worked for…”, “Changes +…”, and model selector.

2. **Cross-check the repo, not just the UI.**
   - `git status --short --branch`
   - `git log --oneline -5 --decorate`
   - active branch name and HEAD commits
   - uncommitted files and ignored/local run-state files

3. **Read the project-local run state.**
   - Common paths: `.cursor/<project>-autonomous-run-state.json`, `.cursor/run-state/<project>.json`.
   - The run state is often ignored by git but is the best source for current issue, completed issues, next issue, gate receipts, Linear comments, and blockers.

4. **Read gate and review receipts.**
   - Machine gate PASS is not enough when Book review is required.
   - Read both `output/<project>/test-gate/<ISSUE>.json` and `output/<project>/book-review/<ISSUE>.json`.
   - Report `decision`, `safeToContinue`, `reviewGateStatus`, `nextChildBlocked`, and receipt paths.

5. **Interpret packet-only Book review correctly.**
   - `bookReview.mode=packet` creates a review packet with `decision: REQUESTED`, `status: BLOCKED`, and `safeToContinue: false`.
   - This is not a code/proof failure. It means a real Book approval receipt has not been produced yet.
   - If the run-state or plan says “do not start next issue until Book approval,” do not treat a machine `verify` PASS as sufficient.

6. **Check whether work is committed or just present locally.**
   - Cursor may create commits for the issue output and a later blocker receipt commit, while leaving execution-pack/gate/mapping files uncommitted.
   - Distinguish committed implementation artifacts from uncommitted supporting pack files.

## Recommended status reply shape

- Current Cursor task/title and repo.
- Branch and latest commits.
- Completed issue(s) and artifact files.
- Proof command status.
- Machine gate status.
- Book review status and whether `safeToContinue=true`.
- Linear comment/status if known.
- Current blocker and whether it is a real implementation blocker or a review-mode blocker.
- Next issue, but only if continuation is allowed.
- Repo cleanliness / uncommitted files.

## Pitfalls

- Do not say “done” because the machine gate passed; Book review may still block.
- Do not say “blocked by code” when the blocker is packet-only review mode.
- Do not rely on Cursor UI status alone; stale UI labels and partial task cards miss ignored run-state and receipts.
- Do not requeue the next issue while a run-state explicitly says to wait for Book approval or Henry waiver.
