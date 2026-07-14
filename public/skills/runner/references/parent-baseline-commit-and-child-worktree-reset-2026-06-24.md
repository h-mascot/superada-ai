# Parent-baseline commit + child-worktree reset (Hoshi 2026-06-24)

## Trigger

A Cursor-driver cron is mid-queue on a repo where:

- The parent issue (e.g. THE-180) ran in the **main** worktree and produced proof PASS, Book APPROVED, and the proof comment has already been posted to Linear — but the implementation is still **dirty/untracked** in the main worktree (no commit, no push).
- A dependent child issue (e.g. THE-181) is on a **separate, clean sibling worktree** (`<HOME>/Services/<repo>-<issue>`) branched from `main` at a head that pre-dates the parent's implementation files. Its preflight `branch_baseline` gate fails because `src/.../parent-baseline` is absent on the child's branch.
- The same child worktree is currently clean (no in-flight edits), so it can be fast-forwarded/reset to a new parent commit without losing work.

This is the **parent-baseline-not-committed** failure mode. It always shows up at the child because the rider's instruction "do not commit parent files under this child" collides with the gate that requires the parent to exist on the child's branch.

## The fix (operational sequence)

1. **Materialize the parent as a real commit on its own branch.**
   - In the main worktree, stage only intentional source/context/gate files for the parent issue: provider/transcript/db/ctrl-gate/package configs, `.project-gate.json`, and the parent's tests. Use explicit `git add <list>` — never `git add -A` or `git add .` on an autonomous queue.
   - Do not stage runtime state, receipts, logs, `output/`, `data/`, `artifacts/`, `evidence/`, `.cursor/`, `.claude/`, `CLAUDE.md`, `scripts/hoshi-fda-check.sh`, `scripts/launch-with-secrets.sh`, `scripts/linear/`, or any file the parent issue does not explicitly own. Use `git status --porcelain` filtered by hand to confirm.
   - Commit with a parent-scoped message: `git commit -m "THE-<parent>: <short scope>"`.
   - Capture the full SHA for the receipts.

2. **Re-run the parent's own proof to confirm the commit is green.**
   - `HOSHI_PROVE_ISSUE=THE-<parent> HOSHI_PERSISTENCE=db HOSHI_PERSISTENCE=db HOSHI_DATA_DIR=output/<project>/db-gate npm run ctrl:gate` (or the project's equivalent). The parent's per-issue verdict on the proof-matrix hard gate must remain 0 failing claimable cells owned.

3. **Reset the child's clean sibling worktree to the new parent commit.**
   - From the main worktree, capture the new parent SHA.
   - In the child worktree: `cd <HOME>/Services/<repo>-<issue> && git reset --hard <parent-sha>`.
   - Verify the parent's key files now exist on the child's branch (`test -f src/.../parent-baseline`).
   - The child's branch pointer moves with the worktree, so no separate `git branch -f` is needed.

4. **Refresh GitNexus, then check blast radius.**
   - `npx gitnexus analyze` in the main repo so the new symbols land in the index.
   - `mcp_gitnexus_detect_changes` (or `gitnexus detect_changes`) on the committed diff. **Critical-risk** is expected for a parent that ships a whole new module — that is the parent owning the seam. Do not block the queue on it; record the verdict and proceed.
   - For narrowly-scoped helper files (e.g. a single `mutationLogPath` env-var override), risk should be LOW.

5. **Update state and relaunch the child worker in the child worktree.**
   - In run-state: clear the `branch_baseline` blocker, set `currentIssue` to the child, set `branch` to the child's worktree branch, append a `baseline-commit` receipt with the parent SHA.
   - In driver-state: point `repoRoot` at the child worktree, mark the new baseline commit as `headCommit`, set `blocker: null`, relaunch Cursor CLI in the worktree:
     ```bash
     cd <child-worktree>
     cursor agent --print --workspace <child-worktree> --model gpt-5.5-extra-high-fast --trust --force "$(cat <active-goal-prompt>)"
     ```
   - Always include the no-duplicate-worker preflight: `ps -axo pid=,command= | grep -F '<child-worktree>' | grep -F 'cursor agent'`. Refuse relaunch if a worker is still alive in the worktree.

6. **Record the receipts.**
   - Append a `HENRY_BASELINE_COMMIT_FOR_<child>` history entry to run-state and a corresponding `the<child>_baseline_reset` history entry to driver-state. Future supervisors will read these to understand why the child branch moved.

## Pitfalls

- **Don't `git reset --hard` a child worktree that has in-flight edits.** The reset wipes them. Only reset worktrees that are clean (`git status --porcelain` is empty). If a child has edits, stash them first, reset, then pop the stash on top.
- **Don't use a parent commit that has unrelated changes.** The parent's commit must contain exactly the scope its Linear issue owns. A "kitchen sink" parent commit pollutes downstream issues' diff scopes and breaks the receipt-uniqueness rule.
- **Don't skip the scoped proof re-run on the committed parent.** The dirty tree may have masked a regression; the committed parent must pass its own proof before any child builds on it.
- **Don't branch the child off the parent's branch directly unless the queue is fully linear.** Reset the child's worktree to the parent's commit; do not create a "shared" branch. The per-issue branch discipline matters for separation-of-duties review.
- **Don't push the parent to `origin/main` to "share" the baseline.** Other worktrees and the cron are not expecting a remote-side change. Stay local; the worktree reset propagates the baseline.
- **Don't leave the GitNexus scaffolding behind when committing.** The `npx gitnexus analyze` step injects `.claude/skills/gitnexus/`, `CLAUDE.md`, and a `<!-- gitnexus:start -->` block into `AGENTS.md` (see `references/run-state-pointer-and-generated-artifact-cleanup-2026-06-23.md`). Strip them before staging the parent commit, or add a `--no-index` carve-out so the agent's own commit does not include them. This is the most common pollution observed on autonomous commits.

## Option A waiver cascade (related)

When Option A ("post explicit waiver on the unblocked children") is selected, waivers must be re-posted as each parent lands In Review. The first round of waivers covers children blocked by the **first** proven parent; once that parent lands In Review, a fresh round of waivers is needed for the children that depend on the **second** parent (which is now In Review but was Todo at the first round). Mark this in driver-state as `HENRY_OPTION_A_CONTINUATION_WAIVERS_POSTED` so the next session does not think the cascade is done.

Concretely, the Hoshi cadence was:

- Round 1: THE-180/184/187/190/191/192 waived against their first parents (THE-176/177/178).
- After THE-180 lands In Review: a second round for THE-181/182/183 was needed, because their direct dep is THE-180 and THE-180 was only In Review at round-2 time.

Post the second-round waivers, update run-state `proofCommentQueue` with the new `comment_url`s, then relaunch the next unblocked child.

## GitNexus scaffolding cleanup checklist

Before staging any autonomous commit, verify none of these generated artifacts are present in the staged diff:

- `AGENTS.md` — no `<!-- gitnexus:start -->` / `<!-- gitnexus:end -->` block.
- `CLAUDE.md` — should not exist; remove if present.
- `.claude/` directory tree — remove entirely unless the current issue explicitly owns it.
- `scripts/linear/__pycache__/` — Python bytecode cache; remove.

If any of these appears in `git diff --cached`, unstage and remove before committing. They are scaffolding from `npx gitnexus analyze` and the GitNexus MCP server, not work the issue owns.
