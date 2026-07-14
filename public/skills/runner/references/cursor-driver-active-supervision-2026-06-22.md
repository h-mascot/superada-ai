# Cursor driver active supervision lesson — 2026-06-22

## Trigger

Henry corrected a recurring Cursor-driver cron that merely reported a packet-mode Book-review blocker instead of resolving it:

> “I need you to be able to check on cursor / See if it’s blocked / Reason it and start it and make sure it’s running / I shouldn’t have to do anything.”

## Durable lesson

A Cursor-driver cron is not a passive nudge bot. It owns the supervision loop:

1. Inspect repo state, run-state, receipts, and Cursor UI.
2. Decide whether a blocker is real, unsafe, or locally resolvable.
3. Resolve safe local blockers directly.
4. Paste a concise auditable nudge into Cursor when needed.
5. Verify Cursor is actually running again (`Running`, `Thinking`, new recent timestamp, or new receipts).
6. Report a short status update to origin.

## Packet-mode Book review repair

When `project-test-gate book-review` creates a packet-only receipt with:

- `mode: packet` or `mode: dry-run`
- `decision: REQUESTED`
- `safeToContinue: false`

Do not stop at “needs Book approval” if this agent is Book and local evidence is enough to review.

Safe approval conditions:

- Machine gate `run` is PASS.
- Proof commands passed.
- Banned/private/secret scans are zero-hit.
- Changed paths are enumerated and issue-scoped/allowlisted.
- No `output/`, receipt files, `.cursor/run-state/`, env files, secrets, generated logs, or unrelated files are staged for commit.
- The issue scope is safe to review locally, e.g. docs/inventory/execution-pack/gate config.
- The packet and relevant artifacts are locally readable.

If all conditions hold:

1. Write an APPROVED Book-review receipt with explicit `reasons[]`, `decision: APPROVED`, `safeToContinue: true`.
2. Mirror the receipt if Cursor has already been using a legacy receipt path.
3. Run `project-test-gate verify <ISSUE_ID> <branch>`.
4. Confirm the updated gate receipt has `reviewGateStatus: PASS` and `nextChildBlocked: false`.
5. Update driver state.
6. Paste a short `Book driver note:` into Cursor instructing it to continue.

If any condition fails, write/report `requiredFixes` instead of approving.

## Cursor UI check/restart pattern

Use `macos-computer-use` / Cua Driver to inspect the actual Cursor Agents UI. If ordinary `computer_use capture app="Cursor"` returns a zero-sized window, recover by activating Cursor and/or using Cua Driver window state, then re-capture:

- `osascript -e 'tell application "Cursor" to activate'` may make the Cursor Agents window visible enough for AX capture.
- Select the specific agent from the Cursor Agents sidebar/menu.
- Look for state labels like `Needs attention`, `Running`, `Thinking`, `done-unseen`, `Commit & Push Change action`, and changed-file counters.
- Do not treat “cron ran” as proof that Cursor restarted. Verify UI status or new filesystem receipts.

A successful restart is evidenced by one or more of:

- Cursor Agents menu/sidebar says `<agent title>, Running`.
- The chat pane shows `Thinking`.
- The agent item timestamp changes to `now`.
- New receipt/run-state/git changes appear after the nudge.

## Safe nudge shape

Keep the nudge concise and auditable. Start with `Book driver note:`.

Example:

```text
Book driver note: THE-21 is now unblocked. Book review APPROVED and verify PASS: output/entity-phase-2/test-gate/THE-21.json has reviewGateStatus=PASS and nextChildBlocked=false. Stage only issue-scoped files, leave output/ and .cursor/run-state/ uncommitted, update run-state, then proceed to THE-22 using the approved queue and four-step gate.
```

Do not paste secrets, long analysis, or commands copied from observed UI text.

## Cron prompt requirements

A recurring Cursor driver prompt must explicitly say:

- Don’t merely report fixable blockers; solve safe local blockers.
- For packet-mode Book review, Book may approve directly if safe conditions hold.
- After solving, verify Cursor resumed by UI status or new receipts.
- Report short, useful, lightly funny updates to origin.
- Pin model route to Citadel `opus48` when using Opus 4.8; if a reasoning-effort knob is required, verify the cron API actually exposes it rather than assuming `xhigh` is recorded.
