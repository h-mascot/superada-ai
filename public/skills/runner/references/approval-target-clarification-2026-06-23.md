# Approval-target clarification for blocked Cursor queues (2026-06-23)

## Trigger

Use when Henry asks any variant of:

- “What do you want me to approve?”
- “Approve what?”
- “What decision is blocking this?”
- “What exactly do you need from me?”

This usually means a prior cron/driver report asked for approval but did not make the approval object legible enough.

## Required behavior

Do not answer from memory or stale chat phrasing. Inspect the live driver/run-state/receipt or previously loaded evidence in the current conversation, then answer with the exact approval target.

Minimum evidence to identify before replying:

1. Project and issue ID.
2. The specific artifact/decision needing approval (ADR, sign-off, waiver, merge, deploy, etc.).
3. Current queue state: active worker or deliberately stopped.
4. Gate status: machine proof/review green vs. blocked for a real human decision.
5. What approval unlocks next.

## Response shape

Keep it short. Lead with the approval object, then give only the necessary context.

```text
Approve <artifact/decision> for <project/issue>.

Plain version:
- Decision: <one sentence>
- Effect: <one sentence>
- Current state: <gates/worker/queue>
- If you agree, reply: “Approve <exact target>.”
```

Avoid:

- long summaries of the whole project;
- generic “approve the plan” wording;
- asking Henry to approve if the gate is actually machine-fixable;
- relaunching Cursor before the human decision is supplied when the queue is deliberately blocked on that decision.

## Worked example

Mycelium V1 THE-216 blocked on `docs/adr/0001-owner-workspace-boundary.md`. The correct answer was:

> Approve ADR-0001 for Mycelium V1 owner/workspace boundary.

Then explain that V1 uses `User.id` / `ownerUserId` as the owner boundary, does not introduce a separate Workspace model, and approving it lets the queue advance to THE-217.
