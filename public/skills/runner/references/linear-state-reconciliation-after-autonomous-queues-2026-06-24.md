# Linear state reconciliation after autonomous queues (2026-06-24)

## Trigger

Use when a Cursor-driver/autonomous queue says it is complete, merged, or queue-drained for a Linear-backed project.

## Lesson

Do not trust local run-state, gate receipts, Git commits, or driver-state as proof that Linear moved. They prove the work happened locally; they do **not** prove the live Linear board reflects it.

Observed ShowClaw failure: local run-state said 56/56 child issues were complete and the branch was merged to `main`, but live Linear still showed all 56 issues in `Backlog`. Some proof comments had posted, some were queued, and many had no Linear completion comment. The cron had stopped because it treated queue completion as enough.

## Required completion gate

Before saying a Linear-backed queue is done:

1. Query live Linear for every approved child issue.
2. Verify each completed local issue has live Linear state type `completed`.
3. Verify each issue has a proof/gate comment marker, or an intentionally skipped comment recorded with reason.
4. Drain `proofCommentQueue` and `stateChangeQueue` before marking the queue terminal.
5. If any issue is still backlog/started/unstarted, move it to the team's completed state via `issueUpdate(id, input:{stateId})`.
6. Re-query live Linear after writes and report counts from the live API, not from local state.

## Repair pattern

- Resolve the team completed state with `workflowStates(filter:{ team:{ key:{ eq:$teamKey }}})` and choose the `type: completed` state, usually `Done`.
- For each completed local issue:
  - add the queued proof comment if present;
  - otherwise add a compact gate-green comment if Linear has no gate/proof marker;
  - update state to Done if not already completed.
- Update run-state with a `linearReconciliation` block containing `reconciledAt`, `updatedCount`, `commentedCount`, and the merge commit.
- Re-query and require `not_done: []` before final status.

## Anti-patterns

- Declaring queue completion from `.cursor/*run-state*.json` alone.
- Treating `linearComment.posted: true` on some issues as proof all issues moved.
- Stopping/pausing the supervisor cron before live Linear is reconciled.
- Reporting “fully done” after merge + screenshot when the Linear board still shows Backlog.

## Minimal final receipt

```text
Linear verified live: THE-291..THE-346 = 56/56 Done; not_done=[]; all issues have gate/proof comments.
```
