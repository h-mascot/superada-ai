---
name: runner
description: Worked pattern for stopping a recurring Cursor-driver cron once its approved Linear child queue is fully drained — queue-drained signal, run-state fields, live cron pause, and the “don’t keep heartbeating a completed queue” trap.
license: MIT
metadata:
  hermes:
    tags: [cursor, cron, driver, lifecycle, run-state, queue-drained, auto-stop]
---

# Queue-Drained Auto-Stop For Cursor-Driver Crons

When Henry asked Book to "update the cron skill template and cron to auto stop after the queue is drained" (2026-06-23, OpenCore V1 finalization), the OpenCore supervisor cron was busy heartbeating every 15 minutes even though the goal-mode worker had exited cleanly and all 40/40 child issues were complete. That heartbeat was both wasteful and noisy: it kept writing to `state.json`, kept trying to relaunch a worker that no longer existed, and produced a stream of "still healthy, awaiting Henry push authorization" lines to the origin channel for a queue that was effectively done.

The fix is a class-level rule, not a per-cron hack: **a Cursor-driver cron whose queue is drained must self-pause and stop heartbeating.** It must not wait for a separate "stop" command from Henry, it must not keep sending healthy ticks for a completed queue, and it must not silently re-spin a worker that is no longer the work.

## Queue-drained signal (all must be true)

1. Run-state `status` is `completed` or `queue_drained`.
2. `currentIssue` is null.
3. `proofCommentQueue` and `stateChangeQueue` are both empty (or absent).
4. The approved queue has no remaining uncompleted issue (every entry is in `history`/`completedIssues` with a terminal status).
5. No Cursor worker is active for the repo (`ps` shows no `cursor agent …` process; driver state `worker.pid` is null or exited).
6. A final validation/promotion receipt exists at the path recorded in run-state / driver state (e.g. `output/proof/OC-040/promotion-report.md`).

## Required actions on queue-drain detection

1. **Mark driver state terminal** with at least:
   - `queueDrained: true`
   - `observedStatus: "queue_drained_auto_stopped"`
   - `stoppedAt: <ISO-8601 UTC>`
   - `cronJobId: <id>` (so future sessions know which job paused itself)
   - `actionTaken: "cron auto-paused after drained <project> queue; no Cursor relaunch"`
   - `nextRecommendedAction: "await Henry explicit authorization for git push / PR; supervisor cron is paused because the queue is drained"`
   - `finalProofPaths: [...]` for the receipts that justify the drain
2. **Pause the cron job itself** using the live scheduler:
   - `hermes cron pause <job_id>` (or the equivalent tool call).
   - Verify the readback shows `enabled: false` and `state: "paused"`.
3. **Send exactly one tiny final line** to the origin channel. No more healthy heartbeats. No screenshots, GIFs, or Giphy links unless something actually changed since the last report.
4. **Do not** relaunch Cursor, do not reissue the goal prompt, do not re-run proof commands, and do not write a "ready to merge" report. The drain is the conclusion of the cron's job, not a launchpad for new work.

## When NOT to auto-stop

- The queue has at least one approved child with status `ready` or `in_progress` — keep supervising.
- The worker is alive and a `nextRecommendedAction` is set in driver state — keep supervising, but record the drain check in driver state so a later pass does not double-check.
- The run-state is `blocked` or `paused` for an issue-scoped reason that needs Henry — stop supervising *and* report a blocker line, but do not write `queueDrained: true`.
- The cron job itself is required to deliver a non-Cursor heartbeat (e.g. an unrelated downstream watcher). In that case, branch the drain check to a sibling driver rather than pausing the only cron.

## Patching the live cron prompt

The reusable template `templates/cursor-driver-cron-prompt.md` already contains the auto-stop rule under "Inspection loop → if the queue is drained". To make the rule bite on an already-registered driver, edit the live cron prompt in `~/.hermes/cron/jobs.json`:

1. Back up `jobs.json` first: `cp ~/.hermes/cron/jobs.json ~/.hermes/cron/jobs.jobs.json.bak-<YYYYMMDDTHHMMSSZ>`.
2. Use `python3` to parse the JSON, replace the `prompt` field for the target `job_id`, and write back atomically.
3. Verify the new string contains the drain keyword (e.g. `grep -c "Queue-drained auto-stop" ~/.hermes/cron/jobs.json`).
4. Pause the job: `hermes cron pause <job_id>` and re-list to confirm `enabled: false`, `state: "paused"`.

Always patch all three layers at once: the reusable template, the live cron prompt, and any sibling driver state. A template patch without a `jobs.json` patch only helps future crons; a `jobs.json` patch without a template patch lets the rule drift. See `references/live-cron-prompt-edit-technique-2026-06-24.md` for the exact edit pattern.

## Verification

After auto-stop:

- `hermes cron list` shows the driver job with `enabled: false`, `state: "paused"`, and `paused_at` populated.
- `state.json` contains the `queueDrained`, `stoppedAt`, `cronJobId`, and `finalProofPaths` fields.
- A single final line is delivered to the origin channel; no further ticks appear in the next scheduled window.
- `git status --short --branch` on the repo shows the local save-point HEAD and `ahead N of origin/main` so the human author knows what is awaiting push/merge authorization.

## Anti-patterns

- **Telling yourself "the queue is drained" without writing the receipt.** If `queueDrained: true` is not in driver state, the next session cannot distinguish a healthy idle cron from one that should have stopped. Write the state, then act.
- **Pausing the cron but still posting healthy heartbeats.** A paused cron that keeps sending status lines is a confused cron. One tiny final line, then silence.
- **Re-launching the worker for a "sanity check" after drain.** That re-opens the gate you just closed and burns tokens for no value. The drain check is the conclusion.
- **Editing only the template.** Templates only help future crons. The live cron reads its prompt from `jobs.json`; if you skip that, the running driver keeps the old behavior.
- **Hardcoding the job id in the template.** The template is generic; the job id is project-specific. Put the id in the live cron prompt and reference the template by name.
