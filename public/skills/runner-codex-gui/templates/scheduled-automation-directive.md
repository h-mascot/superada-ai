# Native Codex Scheduled Automation Directive

Upgrade or create exactly one native Codex Scheduled automation named `<PROJECT> GUI manager tick`, attached to manager task `<MANAGER_TASK_ID>`. Reuse the existing automation when present. Schedule every 10 minutes.

Every tick:

1. Acquire a singleton lease in `<MANAGER_STATE>`. Never overlap managers or duplicate issue owners.
2. Re-read the Codex GUI Runner skill, repository rules, full approved queue/DAG, authority and accepted decisions, gate config, run/manager state, live Linear/fallback, manifests/receipts, canonical main/worktrees, visible top-level Codex tasks, and rolling checkpoint PR/CI.
3. Classify the run `HEALTHY`, `STALLED`, `BROKEN`, `BLOCKED_AUTHORITY`, or `COMPLETE`. Polling or state rewrites alone are not progress.
4. Advance healthy worker -> fresh independent reviewer -> serialized manager integration -> integrated-tree gates -> tracker/state reconciliation. Refill ready capacity immediately.
5. Diagnose and repair stalled/broken work in the same tick. Inspect and steer the same task first. Replace only after checkpointing, revoking ownership, and proving irrecoverable death. Never leave two live owners.
6. Missing GUI/controller pickup is repair work. Use native Codex task tools and Peekaboo/CUA. If self-interaction is unavailable, perform manager-safe actions directly. Never fall back to Codex CLI, Cursor CLI, Hermes/OpenClaw, launchd, shell runners, or nested Subagents.
7. Reconcile every obstacle as exactly one:
   - `AUTO_FIX`: repair now;
   - `WAITING_DEPENDENCY`: continue unrelated work, no alert;
   - `RETRYING_TRANSIENT`: bounded retries and alternate native GUI path;
   - `HENRY_DECISION`: only unresolved canonical conflict, Henry-only credential/access, or executable irreversible production/financial/external approval.
8. Attempt at least two distinct safe repairs before escalation unless inherently authority-only. Failed review/test, stale/missing receipt/task, dirty worktree, stale GUI/AX state, controller failure, synthetic proof, CI failure, capacity, and metadata-only drift are not Henry blockers.
9. If accepted authority already answers the question, apply it and reconcile stale tracker/state. Dependencies and future approval gates are not active blockers.
10. A true Henry decision creates exactly one visible impact-first task titled `HENRY ACTION REQUIRED — <PLAIN DECISION> (<ISSUE>)`, `<HENRY_BLOCKER_DIR>/ACTIVE.md`, one evidence packet, and one fingerprinted `henry_blockers[]` row. Separate plan approval from loader/write and release authority with explicit false-by-default flags. Require Henry's direct A/B/C response; synthetic task-agent output is never approval. Before alerting Henry, prove the canonical packet, rendered task first screen, and manager-state blocker row agree in wording, counts, hashes, task ID, and authority flags; persist an agreement receipt. Continue unrelated lanes.
11. Push only clean exact-reviewed integrated checkpoints to `<ROLLING_BRANCH>`/one draft PR when authorized. Never merge remote main, deploy, release, or trigger production without explicit authority.
12. Write one timestamped receipt containing classification, progress delta, repairs, blocker reconciliation, ownership map, main/worktree HEAD/status, gates/CI, next executable action, next tick, and lease release. Back up then atomically update manager state.
13. Pause only after semantic completion and verify the scheduled runtime is actually paused.

After saving, manually exercise one tick. Return saved automation readback, scheduler/task identity, before/after state, repair or progress transition, true Henry blockers, receipt path, and proof unrelated lanes continue.
