# Auth-blocked supervisor steady state

Use when an autonomous Cursor/Codex queue is healthy locally but the executor reports an interactive-login requirement.

## Cycle discipline

1. Acquire the project driver lock before inspection. Exit silently on a fresh lock; replace only after the configured stale threshold.
2. Inspect pause state before any launch decision.
3. Read driver state, run state, git branch/HEAD/status, latest machine/review receipts, executor status, and live process state.
4. Treat interactive login as human-required. Never launch an OAuth/login command from a headless supervisor and never print credential material.
5. Do not launch a worker while auth is absent. Preserve the current issue and queue state, set the worker PID/session to null, and record a precise remediation command.
6. Reconcile the completed/current boundary against live Linear so local run state cannot silently drift from the board.
7. Update `checkedAt`, heartbeat count, auth status, and reconciliation summary atomically; then release the lock even on blocked paths.

## Reliable process detection

A naive process-table substring search can match the supervisor's own inspection command. Exclude the current shell/probe PID and wrappers whose command line merely contains the search terms. A real worker should match an executable/argv shape such as `cursor agent ...` or the launch script as the actual process, not Python/shell source text performing the check. Cross-check any recorded PID with `kill(pid, 0)` or equivalent and inspect its parent/elapsed time before declaring a worker alive.

## Reporting

- An unchanged auth blocker is not a new transition every cycle.
- Report immediately when first detected, when its credential-class diagnosis changes, when auth recovers, or on the configured periodic heartbeat (for example every sixth healthy/blocked cycle).
- Otherwise emit the scheduler's exact silence token.
- Keep reports to blocker + one-line remediation; receipts and inventories remain on disk.

## Verification before leaving the cycle

- Repo cleanliness and HEAD are known.
- Latest completed issue has PASS/review evidence where required.
- Live Linear agrees on completed/current issue states.
- No genuine worker is alive.
- Driver state was atomically updated.
- Lock was removed.
