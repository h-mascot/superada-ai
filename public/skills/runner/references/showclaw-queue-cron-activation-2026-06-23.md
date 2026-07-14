# ShowClaw queue + Cursor-driver cron activation lessons (2026-06-23)

Session class: Henry asked to run the part of `runner` that queues tasks and activates the recurring Cursor driver cron.

## Durable pattern

When the execution pack already exists and Henry says to **queue tasks / activate cron**, do not regenerate the whole pack. Run the activation slice:

1. Materialize repo-local runtime files from the pack examples:
   - copy `docs/cursor-execution-pack/<project>/project-gate.example.json` → repo root `.project-gate.json`;
   - copy `docs/cursor-execution-pack/<project>/run-state.example.json` → `.cursor/<project>-autonomous-run-state.json`;
   - ensure both are gitignored, alongside `.cursor/linear-live.json`, `output/`, and logs.
2. Create/update operator driver state outside the repo, usually:
   - `<HOME>/Enterprise/Crew Home/Output/Book/<project>/cursor-driver/state.json`;
   - include repo root, plan links, run-state path, output root, screenshot dir, current issue, approved queue, prompt hash, model, lock/pause paths, hard diff caps, last action, heartbeat counter.
3. Verify Cursor CLI auth before scheduling:
   - `cursor agent status` from repo root should show logged in;
   - do not ask Cursor to OAuth for Linear. Use global `LINEAR_API_KEY`, or source `<HOME>/.hermes/.env` non-verbosely in the Cursor terminal.
4. Create the cron with:
   - skills: `macos-computer-use`, `runner`, `linear`;
   - toolsets: `computer_use`, `terminal`, `file`;
   - model route: `citadel/opus48` when available;
   - delivery: origin;
   - workdir: target repo root;
   - schedule typically every 15m.
5. Manually run the cron once (`cronjob action=run`) to validate scheduling and state access.
6. Start the Cursor CLI worker only after queue/gate/run-state/driver-state exist. Record PID/log/model/prompt hash in driver state.

## Cursor CLI launch notes

Use the currently supported shape:

```bash
cursor agent --print \
  --workspace /path/to/repo \
  --model 'claude-opus-4-8[context=1m,effort=high,fast=false]' \
  --trust --force \
  "$(cat /path/to/cursor-goal-prompt.md)"
```

For direct launch from a supervising session, spawn it as a background OS process or Hermes background terminal and write logs to the driver directory. Do not leave a foreground agent command blocking the operator.

Record in driver state:

```json
{
  "cursorProcessPid": 57377,
  "cursorWorkerLog": "/.../cursor-driver/cursor-worker.log",
  "observedStatus": "cursor_worker_running",
  "workerStartedAt": "...",
  "promptSha256": "..."
}
```

## Gate-config activation gotchas

- `project-test-gate --dry-run book-review` may exit non-zero with `decision: REQUESTED`, `safeToContinue: false` in packet mode. That is expected until Book approval exists; do not keep retrying it as a tool failure.
- A dry-run `run` PASS is enough to prove the machine gate config shape. `book-review` BLOCKED means the review gate is doing its job.
- If banned-term/private scans flag the policy docs, generated issue graph, proof script containing the grep pattern, or the Linear helper mentioning `LINEAR_API_KEY`, normalize `scanExcludePaths` rather than weakening the banned terms. Exclude intentional policy/reference/helper files; keep actual public source paths scanned.

## Reporting shape

After activation, report only the operational facts Henry needs:

- run-state queued path and current issue;
- gate config activated path;
- cron job id/schedule/model/delivery;
- manual run status;
- Cursor worker PID/log and alive check;
- one short status line. No full prompt dump unless Henry asks.
