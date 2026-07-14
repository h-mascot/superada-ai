# Cursor CLI requeue + cron supervision pattern (2026-06-22)

## Context

Entity Phase 2 Cursor-driver cron had been GUI-first: it watched/nudged a Cursor window, but stalled when the target Cursor window was alive on a Space the cron could not reach. After authenticating `cursor agent` through Camofox/Google OAuth, the better class-level pattern is CLI-primary supervision.

## Durable lesson

For autonomous Cursor project queues, do **not** require ACP unless a specific limitation appears. Cursor CLI is sufficient as the actuator when logged in:

```bash
cursor agent status
cursor agent models
cursor agent --print --workspace <repo> --model gpt-5.5-extra-high "<bounded instruction>"
cursor agent --continue --print --workspace <repo> --model gpt-5.5-extra-high "<recovery/nudge>"
# Prefer when a stable chat id is known:
cursor agent --resume <chatId> --print --workspace <repo> --model gpt-5.5-extra-high "<recovery/nudge>"
```

Use GUI/computer-use for visual proof or fallback recovery only. The cron should not treat "Cursor GUI window unreachable" as a hard blocker when Cursor CLI is authenticated.

## Model IDs verified in Cursor CLI

Henry's usual model names map to Cursor CLI IDs:

- `gpt-5.5-extra-high` — GPT-5.5 xhigh / Extra High
- `gpt-5.5-extra-high-fast`
- `claude-opus-4-8-xhigh` — Opus 4.8 xhigh
- `claude-opus-4-8-xhigh-fast`
- `claude-opus-4-8-thinking-xhigh`
- `claude-opus-4-8-thinking-xhigh-fast`

Default for Henry's Cursor build queues unless project-specific routing overrides it: `gpt-5.5-extra-high`.

## Requeue pattern

When a Cursor queue stalls after a completed issue:

1. Read project run-state and driver state.
2. Verify repo branch, HEAD, and working tree.
3. Verify receipts for the just-finished issue: machine gate PASS, Book review APPROVED/safeToContinue=true if required, verify `nextChildBlocked=false`.
4. Verify live Linear state for completed/current/next issue. If local receipts say done but Linear is still Todo, reconcile or record the discrepancy before continuing.
5. Start the next issue with Cursor CLI using the run-state's `nextIssueCandidate` rather than reopening/pasting into the GUI.
6. Store in driver state: active CLI process/session handle, log path, model, workspace, current issue, branch, last output summary, and last receipt paths.
7. On later cycles, prefer resuming the same Cursor CLI session via `--resume <chatId>` if available; otherwise `--continue`.

## Cron modification checklist

For an existing GUI-first Cursor-driver cron, patch the prompt so the execution order is:

1. Acquire lock / honor pause sentinel.
2. `cursor agent status`; if not logged in, report actionable auth blocker.
3. If logged in and no active Cursor CLI worker exists, start/resume with `cursor agent --print --workspace <repo> --model <model>`.
4. Watch process output/logs, git state, run-state, Linear state, and CLI Tester receipts.
5. Fix safe local/tooling blockers; otherwise resume Cursor CLI with a short `Book driver note:` recovery instruction.
6. Use GUI screenshot only if a safe Cursor window is available. Do not require screenshots for headless healthy cycles; use receipt/log/commit evidence instead.
7. Keep reports tiny: healthy = one line plus optional evidence; blocked/fixed = blocker line plus fix/back-on-track line. Detailed receipts stay in driver state.

## Common pitfall

`cursor agent --continue` can pick the wrong recent session. Prefer `--resume <chatId>` once the CLI exposes/stores a stable chat id. If no id is available, use `--continue` with a workspace path and a very explicit current-issue instruction, then verify the repo branch/output before trusting it.
