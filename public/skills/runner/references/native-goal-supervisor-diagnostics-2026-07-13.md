# Native Hermes /goal supervisor diagnostics (2026-07-13)

When the runner is launched via native Hermes `/goal` mode (not Cursor CLI) with Codex
parallel workers, the verification pattern and failure modes differ from Cursor CLI
goal-mode supervision. This reference captures the Stardate run diagnostics.

## Architecture

- **Supervisor**: `hermes chat -q /goal` with a durable goal contract (PID recorded in
  cron state). The supervisor IS the integration owner.
- **Workers**: `codex exec` in isolated git worktrees, launched by a lock-protected
  parallel launcher script. Ceiling is typically 8 lanes.
- **State**: `.runner/<project>-autonomous-run-state.json` (main state) +
  `.runner/<project>-parallel-lanes.json` (per-lane status).
- **Watchdog**: `scripts/stardate-runner-watchdog.py` (or equivalent) — read-only probe
  that reports `workerCount`, `completeUnverified`, `mandatoryAction`, `nextSafeIssues`.

## Verification procedure

When Henry asks "check the runner" / "is it running in goal mode?" / "are there gaps?":

1. **Confirm goal PID alive**: `ps -p <PID> -o pid,stat,%cpu,etime,command`. Verify the
   command contains `/goal`. A sleeping supervisor (`stat: S`, `%CPU: 0.0`) is normal —
   it waits between ticks.
2. **Read the watchdog**: run the project watchdog script. It reports the authoritative
   view: `workerCount`, `activeIssues`, `completeUnverified`, `mandatoryAction`,
   `lastTickAgeMinutes`, `stalled`.
3. **Read state file**: `.runner/<project>-autonomous-run-state.json` — check `completed`,
   `parallelActiveIssues`, `deferredIssues`, `resumedIssues`, `lastTickAt`.
4. **Read parallel lanes**: `.runner/<project>-parallel-lanes.json` — check each lane's
   `status` (HEALTHY / COMPLETE_UNVERIFIED / INTEGRATED / BLOCKED), `pid`, `exitCode`.
5. **Verify worker PIDs are actually alive**: `ps -p <lane.pid>`. This is the critical
   step — see "State-file vs live-process mismatch" below.
6. **Check repo**: `git -C <repo> log --oneline -1`, `git -C <repo> status --short`.
7. **Check live codex processes**: `pgrep -lf 'codex exec.*<project>-worktrees'` to see
   what's actually running in worktrees.
8. **Report the gap**: compare expected utilization (ceiling=8, should be near-full)
   vs actual (active workers, lanes awaiting integration, time since last tick).

## Known failure modes

### 1. Supervisor serialization bottleneck

**Symptom**: Workers complete faster than the supervisor can integrate them. The pipeline
drains to zero active workers while 4+ lanes sit in COMPLETE_UNVERIFIED.

**Detection**: Watchdog shows:
- `workerCount: 0` (no active implementation workers)
- `completeUnverified: [THE-431, THE-434, ...]` (multiple lanes waiting)
- `mandatoryAction: "INTEGRATE_AND_REFILL"`
- `lastTickAgeMinutes: 45+`

Process table shows the supervisor running a single review (`codex exec --sandbox
read-only` for an exact-diff review) instead of parallelizing reviews while also
launching new implementation workers.

**Root cause**: The supervisor serializes integration work. It runs one review at a
time, blocks on that review completing, then moves to the next. Meanwhile no new
implementation workers are launched.

**Not broken — under-utilized.** The supervisor will eventually recover (integrate the
completed lanes, then refill). But parallel throughput drops to a fraction of capacity.

### 2. State-file vs live-process mismatch

**Symptom**: Parallel lanes file shows `status: HEALTHY` with a `pid` field, but `ps -p
<pid>` returns DEAD. The supervisor completed the worker but hasn't transitioned the lane
to COMPLETE_UNVERIFIED yet.

**Detection**: Always cross-check lane PIDs against the live process table. Do NOT trust
`status: HEALTHY` alone — verify the PID is alive.

**Impact**: Can overcount active workers. The watchdog script is the authoritative view;
it correctly reports `workerCount` based on live process checks, not stale state-file PIDs.

### 3. Deferred issues blocking the tail

**Symptom**: The last 5-6 issues in the queue are dependency-gated or approval-gated.
The supervisor defers them correctly but this means the queue cannot reach 129/129
without external input.

**Detection**: State file `deferredIssues` array lists each blocked issue with its
`blocker.kind` (`dependency-gate`, `signed-product-decision`,
`synthetic-e2e-proof-rejected`, `dependency-and-approval-gate`) and `safeNextAction`.

**Action**: Report the deferred issues to Henry with the specific unblock needed. Do not
attempt to bypass the deferral — these are correct fail-stop triggers.

## Anti-pattern: over-engineering the response

When Henry says "there's some gaps" or "we didn't run runner well," the correct response
is:

1. **Verify live state** (the procedure above)
2. **Report the specific gap** with numbers (active workers vs ceiling, lanes awaiting
   integration, time since last tick)
3. **Identify root cause** (serialization, stale PIDs, deferred tail)
4. **Recommend minimal fix** (let the supervisor recover, tune launcher parallelism, etc.)

Do NOT propose architectural migration (e.g., "move management to Codex GUI") unless Henry
explicitly asks for it. The native goal supervisor is the right tool when it's running
correctly. Migrating to a different control plane mid-run risks losing work and adds
complexity nobody requested.

## Watchdog output shape (reference)

```json
{
  "workerAlive": false,
  "workerCount": 0,
  "targetWorkerCount": 0,
  "ceiling": 8,
  "effectiveCeiling": 8,
  "capacityGap": 0,
  "activeIssues": [],
  "duplicateIssues": [],
  "completeUnverified": ["THE-431", "THE-434", "THE-437", "THE-468"],
  "runStatus": "running",
  "currentIssue": null,
  "completed": 18,
  "recordedCompleted": 18,
  "completedBindingFailures": [],
  "total": 129,
  "blocker": null,
  "lastTickAgeMinutes": 57.5,
  "stalled": false,
  "mandatoryAction": "INTEGRATE_AND_REFILL",
  "readyCount": 0,
  "nextSafeIssues": []
}
```

Key fields for gap analysis:
- `mandatoryAction` tells you what the supervisor should do next
- `workerCount` vs `ceiling` tells you utilization
- `completeUnverified` count tells you the integration backlog
- `lastTickAgeMinutes` tells you if the supervisor is responsive
- `stalled` is a derived flag — if true, the supervisor needs intervention
