# Cursor CLI worker completion: auto-continue + save-point commits (2026-06-23)

## Trigger

A tracked Cursor CLI goal-mode worker exits normally and prints a completion message such as:

- `Completed OC-006 and OC-007 with green proof`
- `Queue pointer is now OC-008`
- `No merge was performed`
- `Should I continue with OC-010?`

In Henry's autonomous Cursor queues, that question is a handbrake, not a decision point.

## Required supervisor behavior

1. Treat clean worker exit as a report-worthy state transition.
2. Inspect the completed worker log and project run-state.
3. Verify the queue pointer moved to the next approved child issue.
4. Inspect git status/diff and proof directories.
5. Re-run the current aggregate gates before saving:
   - `npm run typecheck`
   - `npm run lint`
   - `npm test`
   - `npm run build`
   - project smoke for the most recently completed issue, e.g. `bash scripts/proof/opencore-v1-smoke.sh OC-009`
6. If gates are green and diff scope is issue-scoped, make a local save-point commit without asking Henry.
   - Commit intentional source/config/test/proof-script files only.
   - Do not commit `output/`, `.cursor/*run-state*.json`, logs, receipts, env/secrets, or unrelated files.
   - Do not push or merge unless explicitly authorized.
7. Relaunch the Cursor CLI worker on the next approved issue immediately.
8. Update driver state with:
   - completed issues
   - save-point commit SHA
   - next issue
   - new worker PID/session
   - no blocker
9. Send a tiny heartbeat only: completed range, commit SHA, next issue/session. No long receipts.

## Stop conditions

Stop instead of relaunching only when verification finds a real blocker:

- failed proof/test/build/lint/typecheck
- dirty or unrelated diff scope
- secrets/security-sensitive files
- destructive/push/merge action required
- ambiguous product/architecture decision
- missing source authority or unmapped next issue

## Example outcome

After OpenCore worker `proc_90b42be71440` exited cleanly through OC-009:

- verified run-state pointed to OC-010
- re-ran gates: typecheck/lint/test/build/smoke OC-009 all green
- committed `255e45b feat: register Hoshi capabilities through OC-009`
- relaunched Cursor on OC-010 as `proc_19df9e0d481d`
- reported compactly; did not ask Henry for permission to continue
