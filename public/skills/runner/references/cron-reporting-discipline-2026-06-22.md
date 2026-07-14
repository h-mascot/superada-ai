# Cursor driver cron reporting discipline — 2026-06-22

Session signal: Henry corrected a Cursor driver cron report that was too large and did not include the expected screenshot.

## Required reporting shape

For Cursor driver / project-execution cron jobs:

- **Healthy / going well:** send the screenshot of the Cursor work window plus **one or two short progress lines**. Do not dump full receipt inventories, changed-file risk details, gate internals, or long tooling notes in the channel.
- **Not going well:** send the screenshot if safe, then a compact summary:
  - what is stuck or failing
  - what the cron did to fix or recover it
  - whether Cursor/project execution is back on track
- **Details belong in artifacts**, not the chat message. Keep receipts, logs, changed-files analysis, and long evidence under the output directory / run-state so they can be inspected on demand.
- **Screenshot rule:** attach a Cursor-window screenshot on meaningful status reports/actions/blockers unless it may expose secrets, 2FA, password prompts, private chats, or unrelated personal windows. If withheld, say `screenshot withheld: <brief reason>`.

## Anti-pattern caught

A report like this is too large for normal progress:

- long narrative opener
- multiple receipt paths
- full changed-files policy inventory
- multi-item tooling notes
- test-gate internals

That belongs in a receipt file. The channel gets the postcard, not the flight recorder.
