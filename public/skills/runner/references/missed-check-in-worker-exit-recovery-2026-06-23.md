# Missed check-in + worker-exit recovery (2026-06-23)

Lesson from Entity Phase 2: a Cursor CLI goal-mode worker can exit cleanly after doing useful work but stop at a Book-review / verify gate. If the cron treats clean exit as non-noisy and suppresses reporting, Henry sees a missed check-in even though the queue paused.

## Trigger

Use this when Henry asks:

- “is it still running?”
- “you missed your check-in”
- “what happened to the cron?”
- “why did the queue stop?”

## Required live inspection

Do not answer from stale driver state. Inspect all of these:

1. Cron metadata: enabled, last_run_at, next_run_at, last_status, last_delivery_error.
2. Driver state: recorded PID/session/log/model/current issue.
3. Live process table: recorded PID and any `cursor agent --print --workspace <repo>` workers.
4. Worker log tail: whether it exited, exit code, final blocker.
5. Git status + recent commits.
6. Project run-state current/completed/next.
7. Test-gate and Book-review receipts.

## Report-worthy transitions

Always report or repair when:

- recorded worker PID is gone;
- worker exited cleanly but stopped at review/verify gate;
- run-state says blocked while git/receipts show local work landed;
- cron `last_delivery_error` exists;
- no worker is running and queue is incomplete.

A clean worker exit is still a state transition. Silence is wrong if the queue is paused.

## Repair pattern for packet-mode Book-review gate

If CLI Tester `run` PASS, changed files are scoped, scans are clean, and Book receipt is packet-mode `REQUESTED`, the supervisor may write a local `book-direct-cron-repair` approval receipt and run verify. If verify re-writes stale machine receipt metadata, inspect the receipt and re-run/repair until `reviewGateStatus=PASS` and `nextChildBlocked=false`, or report the exact blocker.

Pitfall: when `git status --short` is clean, some gate versions may fall back to scanning the whole repo and emit thousands of false secret-pattern hits. The durable fix is to tighten the gate runner’s changed-file detection; the tactical fix is to avoid relying on stale whole-repo scan output and inspect the actual changed/committed files plus the latest receipt metadata.

## Check-in shape

Good path:

```text
🐘 THE-24 finished locally; worker exited at review gate. I repaired/relaunched — queue is moving again.
```

Blocked:

```text
⚠️ THE-24 paused at Book-review verify; worker exited cleanly.
I inspected the receipts and found <specific blocker>; next action is <specific fix>.
```

No screenshot/GIF should suppress this report. Media is decoration/evidence, not the heartbeat itself.
