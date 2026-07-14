# End-to-end Cursor CLI + supervisor cron bootstrap (2026-06-23)

Henry correction: when he says to **run `runner` on a project** for autonomous execution, the deliverable is not just a plan and prompt. The skill should take the project all the way to a live Cursor CLI goal-mode worker plus a recurring Book cron that supervises it.

Use handoff-only mode only when Henry explicitly asks for a pack/prompt/plan and does not ask to start execution.

## Trigger phrases

Treat these as end-to-end bootstrap requests:

- “run this skill on the project”
- “set up Cursor CLI”
- “queue all the tasks”
- “make Cursor build this autonomously”
- “set up the cron”
- “use goal mode and queue all tasks”
- “autonomously complete all the tasks”

## End-to-end deliverable

1. Source audit + Linear drift audit.
2. Clean/full approved child queue in dependency-safe order.
3. Cursor-ready execution pack:
   - `plan.md`
   - `cursor-goal-prompt.md`
   - single/bounded prompts where useful
   - mapping table
   - `.project-gate.json` or reviewed example
   - preflight checklist
   - run-state path
4. Active goal prompt staged outside repo.
5. Cursor CLI auth/model verified.
6. Goal-mode Cursor CLI worker launched with the full queue prompt.
7. Driver state written outside repo.
8. Supervisor cron registered/updated and manually run once.
9. Final response includes worker + cron receipts.

## Active goal prompt staging

Stage the prompt outside the repo so the worker and cron share one stable source:

```text
Enterprise/Crew Home/Output/Book/<project>-cursor-driver/cursor-goal-prompt.active.txt
```

Extract the fenced `/goal` block from the generated `cursor-goal-prompt.md`. Record:

- source prompt path
- active prompt path
- SHA/hash
- model
- queue summary

## Cursor CLI launch

Preferred:

```bash
cd <repo-root>
cursor agent --print \
  --workspace <repo-root> \
  --model gpt-5.5-extra-high-fast \
  --trust --force \
  "$(cat '<active-goal-prompt-path>')"
```

Fallback model:

```text
gpt-5.5-extra-high
```

Do not kill a healthy non-fast worker just to switch models. Switch on the next relaunch/resume.

Use Hermes tracked background process support (`terminal(background=true, notify_on_complete=true)`) rather than shell-level `nohup ... &`, so the supervisor can poll and recover.

## Driver state

Write outside the repo, usually:

```text
Enterprise/Crew Home/Output/Book/<project>-cursor-driver/state.json
```

Include at minimum:

```json
{
  "schemaVersion": 1,
  "project": "<project>",
  "projectSlug": "<project-slug>",
  "repoRoot": "<repo-root>",
  "runStatePath": "<repo>/.cursor/run-state/<project>.json",
  "outputRoot": "<repo>/output/<project>",
  "driverPolicy": {
    "modelRoute": "citadel/opus48",
    "schedule": "30m",
    "deliver": "origin",
    "lockPath": "<state>.lock",
    "pausePath": "<state>.pause",
    "staleLockMinutes": 25
  },
  "cursorCli": {
    "preferredModel": "gpt-5.5-extra-high-fast",
    "goalPromptPath": "<active-goal-prompt-path>",
    "workerPid": null,
    "workerSessionId": null,
    "workerLogPath": null,
    "lastPromptHash": null
  }
}
```

Never commit this state file.

## Supervisor cron

Register/update with:

- schedule: `every 30m` default; `every 15m` for high-touch launches
- deliver: `origin`
- model/provider: Citadel `opus48`
- skills: `runner`, `linear`; add `macos-computer-use` if GUI fallback/screenshots are needed
- enabled toolsets: `terminal`, `file`; add `computer_use` if GUI fallback/screenshots are needed
- workdir: repo root

The cron should:

- acquire lock
- inspect repo/run-state/receipts
- poll live Cursor CLI worker PID/log
- never launch duplicates
- relaunch goal-mode worker if exited and queue incomplete
- repair safe local blockers
- report tiny updates only

## Fun reports + Giphy

If Henry asks for personality, reports may include:

- tiny ASCII banners
- emoji
- dry jokes
- public Giphy links such as `https://giphy.com/gifs/...`
- safe screenshot attachments

Rules:

- Giphy is decoration, never evidence.
- Keep good-path reports to 1–3 lines.
- For blockers, name the blocker first; joke second or not at all.
- Do not attach screenshots if they may show secrets, private chats, password prompts, 2FA, or unrelated personal windows.
- Disable cron wrapper/footer (`cron.wrap_response: false`) when Henry wants clean reports without “To stop or manage this job...” footer.

## Final response receipt

Report:

- human plan link + raw fallback
- active goal prompt path
- model
- worker PID/session/log
- cron job ID + schedule
- current issue / next issue / queue summary
- preflight PASS or named blocker
- whether cron wrapper/footer was disabled

If the worker or cron could not be started, say exactly which gate failed and what to fix next.
