# Cursor-driver crons: headless autonomy beats GUI puppeteering

## Context

Henry pushed back after Entity/Mycelium Cursor-driver crons reported scheduler success but failed to advance work autonomously. We gathered real cron state and ran the evidence through Citadel `opus48` for an autonomy review.

Key evidence:
- Entity driver `a0d4a39ec01e` completed multiple scheduler runs but THE-23 never branched after THE-22.
- Cursor local state showed no new chat bubbles after the supposed nudges; the driver typed into the wrong AXTextArea / did not reach the composer.
- Cron context could not reliably use GUI capture: `focus_app` saw no on-screen Cursor window and `screencapture` could not create an image from display.
- Mycelium driver had the same class of issue: no live Cursor thread visible, and it parked waiting for Henry on a tiny doc-link gap that was safe to fix under policy.
- CLI Tester clean-tree fallback caused false changed-file / scan explosions; unrelated vitest flakes contaminated unrelated work.
- Packet-mode/auto-approved Book review can become self-approval theatre if it validates changed-file emptiness rather than content.

## Durable lesson

For **fully autonomous** project execution, do not make Cursor's GUI chat the primary actuator. A cron cannot depend on hidden/off-Space GUI state, correct composer targeting, screenshots, or Cursor waking itself up.

Use GUI tooling only as secondary observability/recovery:
- Peekaboo / computer_use can inspect visible Cursor state, capture screenshots, or recover a visibly stuck session.
- They should not be the only path that starts or advances work.

The primary autonomous loop should be headless:

```text
Hermes cron / Geordi-style executor
Toolsets: terminal + file (+ Linear/GitHub as needed)
Model: Citadel opus48 or stronger

1. acquire lock
2. read run-state + approved queue
3. claim current dependency-safe issue
4. create branch off origin/main
5. perform the file edits directly
6. commit scoped diff under allowlist
7. run request → run → book-review → verify
8. run content assertions
9. auto-fix tiny scoped blockers under policy, otherwise stop with a real blocker
10. advance queue and report only real transitions
```

## Required gates before claiming autonomy

- No `computer_use`, Peekaboo, `focus_app`, or screenshots are required for progress.
- No `nextRecommendedAction` says Henry must click/paste/open Cursor.
- Clean tree verification returns zero changed files, not whole-repo scans.
- Book-review verifies issue-specific content assertions, not just scan cleanliness or zero diff.
- Cron cannot author its own trusted Book-review/verify receipts (`book-direct-cron-repair` is audit-only, not trusted approval).
- Auto-fix policy exists for tiny, doc-only, mechanically specified blockers.
- Scheduler `last_status=ok` is not reported as work progress unless a real state transition happened.

## Acceptance test shape

Run with Henry absent and Cursor hidden/closed. The job passes only if it:
- creates the next branch from `origin/main`,
- edits/commits scoped files,
- runs all four gate steps cleanly from a clean tree,
- advances run-state,
- emits one short transition report,
- never calls UI tooling or asks Henry to click/paste.

## Reporting contract

For autonomous executor crons, reports should be state-transition based, not screenshot based:
- good path: one short progress/transition line;
- blocked path: one blocker line + one line saying what was tried/fixed;
- detailed receipts live in state/receipt files, not chat.

Screenshots are useful for human-readable Cursor status, but they are not proof of autonomous progress.