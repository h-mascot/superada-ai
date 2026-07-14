# Safe skip-ahead on dependency-reorder blockers (2026-06-23)

Henry correction from ShowClaw: a Cursor-driver cron should not park indefinitely waiting for an operator pick when the immediate next approved issue is blocked by a later approved dependency but a different later issue is independently unblocked and safe.

## Trigger

Use this when all are true:

- The current/next issue in the approved queue is blocked only because it depends on another approved issue that appears later in the same queue.
- The cron has already verified there is no live worker, no lock/pause sentinel, and repo state is clean or safe.
- At least one later approved issue is independently unblocked.
- Running that later issue does not change dependency semantics, skip required proof/review gates, or require broad/destructive work.

## Required decision

Make the safe value-preserving decision without asking Henry:

1. Recompute the remaining approved queue from run-state, plan, and Linear.
2. Classify each remaining issue:
   - `ready`
   - `blocked_by_later_queue_item`
   - `blocked_by_external_or_unknown`
   - `unsafe`
3. Select the earliest `ready` issue that is issue-scoped and independent of the blocked item.
4. Record the skipped issue and blocker in run-state/driver-state as `deferredBlockedIssues`.
5. Relaunch/resume Cursor on the selected ready issue.
6. Report a tiny state-transition line; do not dump the full analysis.

## Worked ShowClaw example

- `THE-327` was next, but blocked by `THE-330`, which appeared later in the approved queue.
- `THE-329` was independently unblocked because its blocker `THE-311` was complete.
- Best action: run `THE-329` next, defer `THE-327` and dependents until `THE-330` exists.
- Do not silently move `THE-330` ahead of the queue; that is a reorder/build-chain decision.
- Do not ask Henry when `THE-329` is safe and delivers value.

## Escalate instead when

- Every remaining issue is blocked, unsafe, or ambiguous.
- The only progress path is to build/reorder the later dependency chain ahead of the approved order.
- The candidate ready issue is broad, destructive, high-risk, or not clearly independent.
- The project plan explicitly forbids skip-ahead decisions.
- Live Linear/plan/run-state disagree and the source of truth cannot be resolved locally.

## Report shape

Good path:

```text
🐘 ShowClaw convoy: THE-327 deferred behind THE-330; THE-329 is the safe unblocked square, relaunching there. No furniture moved.
```

Blocked path:

```text
🐘 ShowClaw convoy: immediate item is dependency-blocked and no safe later issue is ready. Holding for operator decision.
```
