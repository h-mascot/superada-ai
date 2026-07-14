# Cursor Driver Active Unblock + Packet Book Review Repair — 2026-06-22

## Trigger

Use this when a recurring Book/Hermes cron is supervising a Cursor Agent session and finds a blocker that is locally resolvable, especially CLI Tester `book-review` receipts in packet/dry-run mode.

Henry correction from the Entity Phase 2 driver session:

> If the cron runs, finds an issue, and cannot solve it, it is not working well. The driver should solve safe blockers, not just nudge/report.

## Durable lesson

A Cursor-driver cron is not just a reporter. It should be an active supervisory operator:

1. Observe repo/Cursor/run-state/receipts.
2. Classify blockers as:
   - **safe-local-repair** — solve now.
   - **cursor-nudge** — paste a concise instruction into Cursor.
   - **human-required** — report blocker only when truly not safely resolvable.
3. Execute safe local repairs before reporting.
4. Report short progress/action lines to origin.

## Packet-mode Book review repair pattern

CLI Tester `bookReview.mode: "packet"` intentionally creates a request packet and blocks continuation:

```json
{
  "decision": "REQUESTED",
  "status": "BLOCKED",
  "safeToContinue": false,
  "mode": "packet"
}
```

For a Book-run cron, this is not automatically human-required. Book can act as reviewer when all checks are locally verifiable.

### Safe approval conditions

The driver may write an APPROVED Book-review receipt when all are true:

- `project-test-gate run` receipt is `PASS`.
- Proof commands have zero exit codes or documented acceptable warnings only.
- Banned/private/secret scans are zero-hit.
- Changed paths are fully enumerated.
- No `output/`, receipt files, `.cursor/run-state`, env files, secrets, generated logs, `node_modules`, or unrelated source files are staged for commit.
- The issue scope is safe to verify locally: docs/inventory/pack-gate/mapping/config or similarly bounded non-production work.
- The reviewer can read enough local evidence to decide: implementation artifact, plan, gate receipt, preflight artifacts, and run-state.
- No destructive action, external send, merge, deploy, payment, permission prompt, password prompt, or OAuth is involved.

### Repair steps

1. Read the active gate config and receipt paths. Beware projects that previously wrote receipts under both `output/project/...` and `output/<project-slug>/...`.
2. If `.project-gate.json` is stale/thin but the execution pack has a reviewed `.project-gate.example.json`, copy the reviewed config only when that is part of the pack contract and scope.
3. Write an APPROVED Book-review receipt with:
   - `decision: "APPROVED"`
   - `status: "PASS"`
   - `safeToContinue: true`
   - explicit evidence-based `reasons[]`
   - `mode: "book-direct-cron-repair"` or equivalent audit marker
4. Mirror the receipt into legacy/alternate paths only when Cursor/run-state references both paths and the mirror is needed for compatibility.
5. Run:

```bash
<HOME>/Code/cli-tester/bin/project-test-gate \
  --root <repo-root> \
  --config <repo-root>/.project-gate.json \
  verify <ISSUE_ID> <branch-or-pr>
```

6. Confirm the resulting test-gate receipt has:
   - `status: "PASS"`
   - `reviewGateStatus: "PASS"`
   - `nextChildBlocked: false`
7. Update the driver state file with the repair and next recommended action.
8. Report to origin in the short driver style.

## When not to approve

Do **not** repair/approve when:

- Diff scope is not fully enumerated.
- Any changed path is unrelated or suspicious.
- Secret/private/default scans hit real risk.
- Tests/proofs failed and the cause is not understood.
- The issue touches high-risk runtime authority, permissions/RBAC, secrets, provider routing, dangerous actions, deploy/release, migration/backfill, or live sends.
- The blocker is a real product/design/requirements ambiguity.
- Human explicitly required SuperAda/Henry review and did not delegate Book to decide.

In those cases write/return required fixes or a blocker report.

## Reporting style

Henry wants these cron updates short and useful, with a small dry joke when appropriate.

Good:

```text
Elephant bite swallowed: THE-21 is approved and the gate is green. Next bite is THE-22.
```

Avoid long transcripts unless asked. Put evidence paths in 1–3 bullets.

## Cron scheduling pitfall

For Hermes cron recurring intervals, use:

```text
every 30m
```

Do not use bare `30m` when the job must recur; that schedules a one-shot run. If you accidentally create a one-shot job, immediately update it to `schedule: "every 30m"` and verify via `cronjob list`.
