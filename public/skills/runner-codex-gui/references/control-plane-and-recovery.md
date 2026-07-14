# Control Plane and Recovery

## Manager state machine

```text
PREFLIGHT -> TAKEOVER_READ_ONLY -> ACTIVE ->
HEALTHY | STALLED | BROKEN | BLOCKED_AUTHORITY ->
ACTIVE -> COMPLETE -> SCHEDULER_PAUSED
```

`STALLED` and `BROKEN` are execution obligations, not reporting categories.

## Tick lease

The scheduled automation acquires one lease containing:

```json
{
  "owner": "<manager-task-id>",
  "acquired_at": "<ISO8601>",
  "expires_at": "<ISO8601>",
  "state": "ACTIVE",
  "classification": "<pending>",
  "action": "<next executable action>",
  "receipt": null
}
```

If another real tick is active, inspect/continue it; do not create a second manager. On completion, release the lease with classification, action/result, timestamp, and receipt path. Expired leases require live task/repository inspection before takeover.

## Ownership generations

Every lane claim increments an ownership generation. A task may write only when its task ID and generation match manager state. Before replacement:

1. capture task/worktree/HEAD/dirty state;
2. checkpoint useful work;
3. revoke the old generation;
4. prove the old task cannot continue writing;
5. create one replacement with a new generation;
6. verify pickup before recording it active.

## Blocker protocol

Exclusive classes:

- `AUTO_FIX`
- `WAITING_DEPENDENCY`
- `RETRYING_TRANSIENT`
- `HENRY_DECISION`

The scheduler removes stale/resolved entries every tick. It must perform a repair or transition before repeating an unchanged blocker. Attempt two distinct safe repairs before escalation unless authority-only by nature.

Metadata-only drift is not a product decision. Compare normalized substantive requirements, repair exact anchors when authorized, read back live tracker state, refresh fallback snapshots, clear stale manager/run blockers, and preserve an immutable receipt.

## Henry decision fingerprint

Fingerprint the normalized tuple:

```text
project + issue + authority-sources + conflicting-clauses + decision-question
```

One fingerprint maps to one visible alert task, one packet, and one manager-state row. On resolution, store Henry's exact answer/provenance, verification, and closure timestamp before removing it from active state.

## Delivery failure

Missing controller pickup is `RETRYING_TRANSIENT` then `AUTO_FIX`, not an authority blocker.

Recovery ladder:

1. refresh task registry/sidebar and AX state;
2. steer/create via native Codex task tools;
3. recover the existing app/window and retry delivery;
4. let the scheduled manager execute manager-safe work directly;
5. checkpoint and replace only an irrecoverably dead lane.

Never jump to Codex CLI, Hermes/OpenClaw runners, launchd, or nested Subagents.

## Runtime verification

After any control-plane mutation verify all three:

- static state/config readback;
- active Codex runtime/scheduled-card/task reality;
- repository/artifact transition caused by the change.

Config-only is not done.
