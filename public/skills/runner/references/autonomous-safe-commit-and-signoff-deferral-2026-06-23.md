# Autonomous safe commits and sign-off deferral (2026-06-23)

## Trigger

Henry corrected the Cursor supervisor flow after a Mycelium V1 run stalled twice on issues that were already safe to continue:

1. Cursor completed `THE-210`, proof was green, but stopped before the next issue because earlier P0 setup files were still uncommitted and it wanted Henry authorization for the stacking/commit strategy.
2. Cursor completed and committed `THE-211`, proof was green, but stopped before `THE-212` because the issue body contained an acceptance criterion that said the owner/workspace invariant statement needed Henry sign-off.

Henry's correction: if the common-sense thing is safe and nothing is breaking, the driver should do it autonomously, update the skill/cron, and keep the queue moving.

## Class-level rule

For autonomous Cursor/Linear queues, the Book supervisor is expected to be an active unblocker, not a permission-seeking reporter. Do not ask Henry for routine local save-point commits or for non-decision sign-off wording when deterministic gates already establish that the current issue is safe.

## Safe local save-point commits

Make a local commit autonomously when all are true:

- CLI Tester `run` is PASS.
- Book review is `APPROVED` and `safeToContinue=true` when required.
- `verify` reports `nextChildBlocked=false`.
- GitNexus/diff risk is LOW or equivalent.
- Secret scan is clean.
- Changed files are intentional, issue-scoped, or source-controlled project context/gate files.
- Runtime state and receipts are excluded (`output/`, logs, `.cursor/*run-state*.json`, temp audit files, secret/env files, unrelated work).

Recommended sequence:

1. Stage only intentional source/context/gate files.
2. Run `git diff --cached --check`; fix whitespace/conflict-marker problems.
3. Run a literal-secret scan that ignores env-var names/policy prose but flags real-looking token values or private keys.
4. Commit with a narrow message that names the queue/issue when applicable.
5. Update driver state with commit SHA, rationale, and exclusions.
6. Relaunch/resume Cursor on the next issue.

Push and merge are still separate. Local save-point commits are autonomous under the rule above; push/merge still require explicit authorization unless the project policy says otherwise.

## Human sign-off criteria

Do not fabricate Henry sign-off. Instead, classify the sign-off:

### Continue with explicit deferral

Continue autonomously when all are true:

- The current issue only documents, inventories, or inspects an invariant.
- Proof/gates are green and risk is LOW.
- A later approved issue explicitly owns the formal decision, ADR, or sign-off.
- Continuing does not make the undecided point irreversible.

Record the deferral in both run-state and driver-state. Name the owning follow-up issue and state clearly that Henry sign-off was not fabricated.

Example wording:

```json
{
  "henrySignoff": "DEFERRED_TO_<ISSUE>_FORMAL_ADR; CURRENT_INSPECTION_ACCEPTED_FOR_QUEUE_CONTINUATION"
}
```

### Stop and escalate

Stop when the human sign-off is the actual product/architecture decision and there is no later approved owner for the decision, or when continuing would create irreversible product/API/data shape, security, customer-facing, destructive, push, or merge consequences.

## Prompt/cron update pattern

When this correction appears during a live run:

1. Patch the umbrella skill with the class-level rule.
2. Patch the active supervisor cron prompt with the same rule.
3. Append a concise continuation note to the active goal prompt so Cursor does not re-create the same stop.
4. Update the external driver state.
5. Relaunch/resume Cursor using the tracked Hermes background process, not `nohup`.

## Reporting style

Report the state transition compactly:

- what was safely committed or deferred;
- current issue/status/blockers;
- worker PID/session/model;
- no long receipt dumps unless there is a real blocker.

This was the user-facing correction: autonomy means the system should keep going when deterministic proof says it is safe. Dry hands, no ceremony.
