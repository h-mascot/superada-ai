# Run-state pointer, active prompt drift, and generated artifact cleanup — 2026-06-23

## Context

During the OpenCore autonomous Cursor convoy, the supervisor cron and skill had already been patched for Henry's non-stall policy, but the **active goal prompt inside the repo** still carried stale wording:

> Do not continue to the next issue until proof is present and Book/SuperAda verification is complete or explicitly waived.

After OC-033 progress, Cursor was relaunched with `docs/plans/cursor-goal-prompt.md`; because that prompt still emphasized the full queue and review gate more strongly than the project-local run-state pointer, the worker refreshed OC-001 and stopped instead of continuing from OC-023/OC-034.

## Durable lesson

When fixing autonomous queue behavior, patch every actuator surface, not just the supervisor cron:

1. Skill rule / umbrella guidance.
2. Reusable cron template.
3. Live cron prompt/state packet.
4. **Active goal prompt actually passed to Cursor CLI.**
5. Any staged external prompt copy outside the repo.

The active goal prompt must state:

- trust `.cursor/<project>-autonomous-run-state.json` as the queue pointer on relaunch;
- do not restart at the first approved issue unless run-state explicitly points there;
- apply Henry's standing non-stall waiver when proof is green, diff is scoped, no secrets/scope drift/destructive action exists, and no push/merge is being attempted;
- stop only for real blockers.

## Safe patch shape for goal prompts

Replace vague review-gate wording like:

```text
Do not continue to the next issue until proof is present and Book/SuperAda verification is complete or explicitly waived.
```

with:

```text
Apply Henry's standing non-stall waiver: if proof is green, diff is issue-scoped, no secrets/scope drift/destructive action is present, and no push/merge is being attempted, write/refresh output/proof/<ISSUE_ID>/book-review-skipped-waiver.json with safeToContinue=true, post/queue the proof comment, update .cursor/<project>-autonomous-run-state.json, and continue to the next approved child. Do not stop for Book/SuperAda review unless there is a real blocker.

If this run is relaunched after prior progress, trust .cursor/<project>-autonomous-run-state.json as the queue pointer. Do not restart at the first approved issue unless run-state explicitly points there.
```

## Generated GitNexus artifacts during supervision

Running `npx gitnexus analyze` in a repo may inject/update helper docs such as:

- `AGENTS.md` GitNexus block
- `CLAUDE.md`
- `.claude/skills/gitnexus/...`

For Cursor convoy save-points, these are usually **generated tooling artifacts**, not issue-scoped product changes. Before committing/relaunching:

1. Inspect `git status` after `gitnexus analyze` / `detect_changes`.
2. Commit only issue-scoped source/test/context changes.
3. Revert/remove generated GitNexus artifacts unless the ticket explicitly owns GitNexus setup/docs.
4. Re-check `git status --short --branch` before relaunch.

## Risk interpretation

`gitnexus_detect_changes` may return HIGH after a multi-issue checkpoint that legitimately touches workflow/runtime/provider/memory surfaces. Treat HIGH as a review signal, not an automatic stall, when:

- issue scope matches the changed symbols/files;
- typecheck/lint/test/build/smoke/diff-check/secret scan are green;
- no unrelated generated artifacts are staged;
- no push/merge is being attempted.

Record the risk and rationale in driver state, then continue if the non-stall conditions hold.