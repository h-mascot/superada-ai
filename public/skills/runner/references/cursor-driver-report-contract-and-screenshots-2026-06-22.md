# Cursor Driver Report Contract + Screenshot Proof — 2026-06-22

## Trigger

Henry corrected the Entity Phase 2 Cursor driver cron after it posted a long status report with receipt lists, changed-file details, and tooling notes. The cron was supposed to provide lightweight progress proof, not a full audit dump.

## Durable lesson

Cursor-driver crons are supervision loops, not status-report writers. They should keep detailed evidence in the driver state file and send only small, decision-useful updates to the origin channel.

## Chat report contract

For healthy/progressing work:

```text
<one short progress line with issue + state>
MEDIA:/absolute/path/to/safe-cursor-screenshot.png
```

For blocked/broken work that the cron attempted to fix:

```text
<one short line naming the issue/blocker>
<one short line saying what was done and whether it is back on>
MEDIA:/absolute/path/to/safe-cursor-screenshot.png
```

Hard cap: **3 short lines + one MEDIA attachment**.

Do **not** include in the chat report:

- long receipt lists
- changed-file enumerations
- command logs
- markdown sections
- tooling notes unless the tooling issue is the blocker
- broad audit narrative

Put those details in the driver state file instead.

## Screenshot rule

Capture and attach a screenshot of the Cursor work window when:

- the cron reports progress/action/blocker, or
- the cron took an action/nudge/repair, or
- a sparse heartbeat is due.

Do not attach screenshots on silent healthy cycles.

Withhold the screenshot and give a short reason if it may expose:

- secrets/tokens
- password prompts
- 2FA/OAuth/permission dialogs
- private chats
- unrelated personal windows

## Implementation reminder

When registering or updating a live Cursor-driver cron from `templates/cursor-driver-cron-prompt.md`, do not only patch the template. Also update any already-registered cron prompt whose report shape is stale.

Worked example from the correction:

- reusable template patched to include `{{SCREENSHOT_DIR}}`, screenshot capture/attachment, and tiny report contract;
- live Entity Phase 2 job `a0d4a39ec01e` updated so future ticks use the same contract.
