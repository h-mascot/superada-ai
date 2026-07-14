# Linear waiver close-out and Cursor relaunch pattern (2026-06-24)

## Trigger

A Cursor-driver queue is blocked by Linear issue-body dependency text requiring blockers to be `Done` or explicitly waived in Linear comments. Henry chooses the waiver path, often tersely (`Do a`, `approved`, `go ahead`).

## Durable lesson

Treat the approval as actionable, but keep the waiver scope precise:

- Waive only children directly blocked by issues that are already proofed, Book-approved, and In Review.
- Do **not** blanket-waive downstream children whose blockers are not implemented yet.
- Preserve separation-of-duties: leave proofed blockers In Review unless Henry explicitly authorizes Done/merge.

This keeps the convoy moving without pretending final review happened.

## Operational sequence

1. Verify live state before writing:
   - target issue states;
   - no live Cursor worker for the same repo/queue;
   - no fresh driver lock/pause file;
   - queued proof/comment artifacts exist when closing out a completed issue.
2. Post explicit Linear waiver comment(s) only for directly unblocked children.
3. Update project run-state and external driver-state with:
   - waiver comment URLs;
   - current issue pointer;
   - cleared blocker/escalation fields;
   - history entry naming Henry approval and exact waiver scope.
4. Relaunch Cursor CLI with the staged goal prompt and tracked Hermes background process.
5. When the worker exits after proofing an issue but cannot write Linear:
   - read proof receipt, CLI Tester run receipt, Book-review receipt, and queued Linear comment body;
   - post the queued proof comment with the live Linear helper;
   - move the issue to In Review, not Done;
   - update run-state/driver-state to advance to the next issue;
   - relaunch Cursor immediately if the next issue is unblocked.
6. If the proof was against a dirty working tree with no new commit, continuing the convoy is okay when gates pass, but record the caveat: do not merge/push until the branch is cleaned and committed.

## Worked Hoshi slice

Henry selected Option A after Hoshi THE-180..THE-193 were blocked by dependency text. Book posted waivers for only the children directly blocked by proofed/In Review blockers:

- THE-180 and THE-184 blocked by THE-176;
- THE-187 blocked by THE-178;
- THE-190, THE-191, THE-192 blocked by THE-177.

Book did **not** pre-waive THE-181/THE-182/THE-183, THE-185/THE-186, THE-188/THE-189, or THE-193 because those depended on not-yet-built issues. After Cursor completed THE-180 and queued the Linear proof comment, Book posted it, moved THE-180 to In Review, updated state to THE-181, and relaunched Cursor.

## Pitfalls

- **Blanket waiver:** waiving every remaining child erases real downstream dependency semantics. Waive only the children directly unlocked by already-proofed blockers.
- **Done vs In Review:** moving blockers to Done just to satisfy dependency text breaks separation-of-duties unless Henry explicitly approved final acceptance.
- **Silent stop after proof:** a clean Cursor exit with `READY_TO_POST` is an auto-closeout path, not a reason to wait for Henry.
- **Dirty-tree proof caveat:** proof can unblock the next issue, but branch promotion still requires a clean, intentional commit.
