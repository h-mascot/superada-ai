# Terse option approval → Linear waiver + relaunch (2026-06-24)

## Trigger

Henry replied `Do a` to a prior recommendation that named Option A as the preferred path for a blocked Cursor convoy.

This is an approval, not a request for another recap. Treat terse option-letter replies (`Do A`, `A`, `do option a`, etc.) as actionable when the current driver/run-state already identifies the pending options and blocker.

## Worked Hoshi pattern

Situation:

- Hoshi queue had THE-176..179 proofed and In Review.
- THE-180..193 were still Todo.
- Remaining issue bodies said blockers must be Done or explicitly waived in Linear comments.
- Henry approved Option A: waiver, then relaunch at THE-180.

Correct action sequence:

1. Reconfirm no live worker/lock/pause and read current run-state/driver-state.
2. Post explicit Linear waiver comments for children blocked by already-proofed/In Review blockers.
3. Do **not** blanket-waive children whose blockers are not built yet.
4. Update run-state and driver-state with the waiver receipt URLs and `READY_AFTER_HENRY_WAIVER` / relaunch state.
5. Relaunch Cursor CLI from the active staged goal prompt.
6. Verify the new worker PID is alive and record the Hermes process session.
7. Final reply: tiny receipt — waived issues, worker PID/session/model, receipt path.

## Waiver scope rule

Waive only dependencies backed by already-proofed/In Review issues. Keep downstream dependency semantics intact.

For Hoshi, that meant waiving:

- THE-180 and THE-184 blocked by THE-176
- THE-187 blocked by THE-178
- THE-190/THE-191/THE-192 blocked by THE-177

It did **not** mean waiving THE-181/182/183 (blocked by THE-180), THE-185/186 (blocked by THE-184), THE-188/189 (blocked by THE-187), or THE-193 (blocked by several not-yet-built children). Those should unblock naturally as the queue completes.

## Linear comment shape

Use a comment that preserves separation-of-duties:

```text
Henry approved Option A in Discord on <timestamp>: explicit waiver of the issue-body dependency text for this child.

Waived blocker(s): <ISSUE_IDS>.

Reason: blocker issue(s) have already produced proof receipts and Book approval and are currently In Review under separation-of-duties. This waiver permits the Cursor convoy to continue without marking the blocker issue(s) Done prematurely. Final Done/merge review remains separate.
```

## Pitfalls

- Do not move proofed issues to Done unless Henry explicitly authorizes final acceptance/merge semantics.
- Do not ask Henry to restate the option if the replied-to context clearly identifies it.
- Do not over-waive the whole remaining queue; downstream unbuilt blockers remain real.
- Do not claim the convoy is moving until a new Cursor worker process is alive or the precise launch blocker is reported.
