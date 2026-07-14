# Henry approval gate clearance + stale-prompt relaunch recovery (2026-06-23)

Lesson from Mycelium V1 THE-216/THE-217: when Henry replies with a terse approval in chat, that is actionable approval for the named gate currently in context. The driver must clear the gate end-to-end, not just acknowledge it.

## Trigger

Use when Henry says a compact approval such as:

- "Approved"
- "Go ahead"
- "Approve ADR-0001"
- "Yes, continue"

…and the active Cursor/project driver state is blocked on a specific Henry approval/sign-off gate.

## Required clearance sequence

1. Reconfirm the approval target from current driver/run-state, not from memory alone.
2. Record the approval in the source artifact that was waiting on sign-off (ADR/spec/context doc), with date and source surface.
3. Update project run-state:
   - add the blocked issue to `completedQueue`;
   - advance `currentIssue` to the next approved child;
   - clear `blockers` / set `status: ready`;
   - record `henrySignoff: APPROVED...` in review gates or issue receipt metadata.
4. Post a concise Linear comment with the approval receipt and move the issue to the completed state when appropriate.
5. Re-run the deterministic verify step for the completed issue (`project-test-gate ... verify <ISSUE>`), even if earlier verify was green.
6. Relaunch Cursor CLI from the active goal prompt with the intended model.
7. Verify the launched process is alive and that driver state points at the new PID/session.
8. Inspect early worker output. A launch that exits quickly with a blocker is not success.

## Stale-prompt recovery

A long-running driver may have an active goal prompt outside the repo that contains stale continuation tails, old `currentIssue` notes, or obsolete blockers. If a freshly relaunched Cursor worker exits quickly or appears to resume the wrong issue:

1. Inspect the active staged prompt file, not only the canonical plan.
2. Re-extract or rewrite a clean goal prompt from the canonical pack.
3. Remove stale continuation notes that contradict run-state.
4. Hash and record the new prompt in driver state.
5. Relaunch Cursor CLI and verify the worker remains alive.

Do not report "moving" until the worker is actually alive or the exact blocker is named.

## High-impact gate nuance

If Cursor stops because GitNexus/impact reports HIGH for the next issue, distinguish:

- **expected ticket scope**: the issue inherently owns that UI/hook/module change, so the supervisor may need an explicit high-impact authorization or a stronger review ladder before continuing;
- **stale-prompt or wrong-scope artifact**: clean the staged prompt / state first, then relaunch or re-run the gate.

Never silently waive a HIGH/CRITICAL impact gate. Either escalate the specific authorization needed or route through the skill's high-risk review ladder.

## Compact report shape

```text
THE-216 approval recorded; Linear is Done; run-state advanced to THE-217.
Cursor relaunched on gpt-5.5-extra-high-fast: PID <pid>, session <session>. Supervisor is watching it.
```

If recovery was needed:

```text
Tiny wrinkle: first relaunch hit a stale prompt / impact stop. I cleaned the staged goal prompt and relaunched; worker is now live on THE-217.
```
