# Cursor CLI live requeue + cron patch receipts (2026-06-23)

## Trigger

Use when a project previously supervised through Cursor GUI/computer_use needs to be requeued to Cursor CLI as the primary actuator, and the recurring Book/Hermes cron must watch CLI state rather than a visible Cursor window.

## Durable pattern

1. Verify Cursor CLI auth and model availability before launch:

```bash
cursor-agent status
cursor-agent models | grep -E 'gpt-5\.5-extra-high-fast|gpt-5\.5-extra-high'
```

2. Stage the active goal-mode prompt to a stable driver path, extracting the outer fenced `text` block from the pack's `cursor-goal-prompt.md`.

```text
<HOME>/Enterprise/Crew Home/Output/Book/<project>-cursor-driver/cursor-goal-prompt.active.txt
```

Pitfall: prompt files may contain nested fenced blocks such as `bash`; do not use a naive `text.index('```', start)` parser. Choose the closing fence for the outer goal-prompt block, or parse line-wise and stop before the next section heading.

3. Launch Cursor CLI through Hermes' tracked background process mechanism, not shell-level background wrappers.

Wrong in Hermes terminal foreground mode:

```bash
nohup cursor-agent ... &
```

Hermes blocks shell-level background wrappers in foreground commands. Use `terminal(background=true, notify_on_complete=true)` with:

```bash
cd <HOME>/Code/<repo> && cursor-agent --print \
  --workspace <HOME>/Code/<repo> \
  --model gpt-5.5-extra-high-fast \
  --trust --force \
  "$(cat '<HOME>/Enterprise/Crew Home/Output/Book/<project>-cursor-driver/cursor-goal-prompt.active.txt')"
```

4. Record the live worker in driver state immediately:

```json
{
  "cursorCli": {
    "hermesProcessSessionId": "proc_...",
    "pid": 61338,
    "model": "gpt-5.5-extra-high-fast",
    "workspace": "<HOME>/Code/<repo>",
    "promptPath": "<HOME>/Enterprise/Crew Home/Output/Book/<project>-cursor-driver/cursor-goal-prompt.active.txt",
    "promptSha256": "...",
    "controlPlane": "cursor-cli-primary"
  },
  "actionTaken": "launched-cursor-cli-goal-worker"
}
```

5. Patch the existing recurring Cursor-driver cron prompt so future ticks supervise the CLI worker first:

- inspect `cursorCli.pid` / `hermesProcessSessionId` from driver state;
- check process table, run-state, receipts, and git state;
- do not require a visible Cursor GUI while the CLI worker is healthy;
- launch/resume Cursor CLI with the staged goal prompt only when no worker exists and the queue is not complete;
- use GUI/computer_use only as fallback observability or screenshot proof.

6. Keep runtime state and one-off audit artifacts out of git:

```gitignore
.cursor/*run-state*.json
output/
```

Do not commit driver state, run-state, receipts, cron audit files, or process logs.

## Mycelium V1 receipt from the live session

- Cursor CLI account: logged in as `user@example.com`.
- Model verified: `gpt-5.5-extra-high-fast`.
- Project: `<HOME>/Code/Mycelium`.
- Staged prompt: `<HOME>/Enterprise/Crew Home/Output/Book/mycelium-v1-cursor-driver/cursor-goal-prompt.active.txt`.
- Prompt hash: `3eb16562cef4283b3b39d2faa99cc4cdf061b947c526eacf678ff78516cab3ae`.
- Launched process: PID `61338`, Hermes process session `proc_1ac68579f1f7`.
- Queue state at launch: `currentIssue=THE-210`, with `THE-207`, `THE-208`, `THE-209` already complete/pass in `.cursor/mycelium-v1-autonomous-run-state.json`.
- Existing cron patched: `4a4c132b06de` (`Mycelium V1 Cursor driver`) to watch CLI first.

## Report shape

When reporting this class of requeue, include receipts only:

- auth/model verified;
- worker PID/session id;
- prompt path + hash;
- current issue / queue continuation point;
- cron id patched;
- next cron duty.

Do not paste the full prompt unless the user explicitly asks for it; the prompt is already staged and the worker is running.
