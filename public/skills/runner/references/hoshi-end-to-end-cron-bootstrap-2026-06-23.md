# Hoshi end-to-end Cursor CLI + cron bootstrap receipt (2026-06-23)

## Trigger

Henry asked: “run part of runner that's queuing the tasks and activating the cron.”

This means the execution-pack skill should not stop at prompts or a plan. It should perform the autonomous-execution section: stage the goal prompt, launch Cursor CLI, create driver state, register the supervisor cron, and manually run the cron once.

## What worked

For Hoshi, the concrete bootstrap sequence was:

1. Verify Cursor CLI auth and model availability:
   - `cursor agent status`
   - `cursor agent models`
   - selected model: `gpt-5.5-extra-high-fast`
2. Stage the active goal prompt outside the repo:
   - source: `.../hoshi/cursor-execution-pack-20260621/cursor-goal-prompt.md`
   - active: `Enterprise/Crew Home/Output/Book/hoshi-cursor-driver/cursor-goal-prompt.active.txt`
   - record SHA in driver state
3. Write external driver state outside the repo:
   - `Enterprise/Crew Home/Output/Book/hoshi-cursor-driver/state.json`
   - include repo root, queue, run-state path, prompt hash, worker pid/session/log fields, lock/pause paths, and schedule/model policy
4. Launch Cursor CLI with Hermes tracked background process, not `nohup`:
   - `cursor agent --print --workspace <HOME>/Services/hoshi --model gpt-5.5-extra-high-fast --trust --force "$(cat <active-prompt>)"`
   - captured Hermes session: `proc_bc1398f4642d`
   - captured pid: `37060`
5. Create a concrete project cron prompt from the template and save it beside state:
   - `Enterprise/Crew Home/Output/Book/hoshi-cursor-driver/cursor-driver-cron-prompt.md`
6. Register the supervisor cron:
   - name: `hoshi-cursor-driver`
   - schedule: `every 30m`
   - model route: `citadel / opus48`
   - deliver: `origin`
   - workdir: repo root
   - enabled toolsets: `terminal`, `file`
   - attached skill: `runner`
7. Manually run the cron once and record the result.
8. Poll/reconcile the Cursor worker result and update driver state.

## Critical nuance

The first Cursor worker exited cleanly after THE-176 because machine proof passed but Book review was still `REQUESTED` / `safeToContinue: false`. That is not a failure of Cursor CLI. It is the expected gate behavior.

The driver state should be reconciled to something like:

```json
{
  "cursorCli": {
    "status": "exited_after_the176_book_review_gate",
    "workerExitCode": 0,
    "lastOutputSummary": "THE-176 machine proof PASS; worker stopped correctly because book-review is REQUESTED/safeToContinue=false. Queue not advanced."
  },
  "blocker": {
    "issue": "THE-176",
    "gate": "book-review",
    "status": "REQUESTED",
    "safeToContinue": false,
    "next": "supervisor cron can approve if evidence packet is sufficient, then relaunch/resume Cursor"
  }
}
```

## Skill-level lesson

When the autonomous-execution section is triggered, the final receipt must include all four operational handles:

- active prompt path + SHA
- Cursor worker session/pid/model
- supervisor cron job id/schedule/model route
- current gate/blocker after first worker/cron run

Do not report “cron activated” until the cron has been manually run once and the worker state has been reconciled after launch. Quietly essential. Like checking the airlock before admiring the door.