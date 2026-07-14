# Cursor CLI goal-mode supervision (2026-06-23)

Henry correction: when the mission is **autonomously complete the whole approved Linear child queue**, do not
nudge Cursor issue-by-issue. Launch Cursor CLI in **goal mode** with the project's `cursor-goal-prompt.md`,
let it iterate the full queue under the goal-mode rules, and supervise from the cron.

## Why

- A nudge-style driver only moves one issue at a time and loses state between cron cycles.
- The goal-mode prompt already encodes:
  - approved queue ordering
  - dependency safety
  - CLI Tester four-step gate
  - Book review handling
  - no-merge / commit-scope rules
  - the project's hard zero-policy and banned terms
- Cursor CLI is the durable control plane once authenticated; GUI is fallback only.
- ACP is not required.

## Default builder model

- `gpt-5.5-extra-high-fast` (Cursor CLI alias for the GPT-5.5 1M Extra High Fast tier).
- Fallback: `gpt-5.5-extra-high` when fast mode is unavailable on the account.
- For Opus 4.8 xhigh: `claude-opus-4-8-xhigh` or `claude-opus-4-8-thinking-xhigh`. Do not route Opus 4.8 through
  Pioneer; that is a Citadel `opus48` rule, not a Cursor-CLI rule, but matters if the supervisor model is
  pinned to Citadel `opus48`.
- Always verify with `cursor agent models` before assuming a model alias exists.

## Launch template

The driver should stage a copy of the active goal prompt at a known path so the launch command stays clean:

```text
<HOME>/Enterprise/Crew Home/Output/Book/<project>-cursor-driver/cursor-goal-prompt.active.txt
```

Source: the project's `docs/execution-packs/<project>-cursor-YYYYMMDD/cursor-goal-prompt.md` extracted to a
single fenced block.

Launch command:

```bash
cd <HOME>/Code/<repo>
cursor agent --print \
  --workspace <HOME>/Code/<repo> \
  --model gpt-5.5-extra-high-fast \
  --trust --force \
  "$(cat <HOME>/Enterprise/Crew\ Home/Output/Book/<project>-cursor-driver/cursor-goal-prompt.active.txt)"
```

Notes:

- `--print` keeps the worker non-interactive; output streams to a tee'd log.
- `--trust` and `--force` are required for non-interactive execution on real projects.
- Do not start two workers for the same repo/queue. Record PID/session/log in driver state and poll
  before launching another.
- Do not kill a healthy `gpt-5.5-extra-high` worker just to switch to fast. Let it run, and use
  `gpt-5.5-extra-high-fast` on the next relaunch/resume.

## Cron duty

Every cycle, the cron must:

1. Read driver state and run-state.
2. Inspect repo state: `git status --short --branch`, `git diff --stat`, current branch/HEAD.
3. Inspect latest receipts: `output/<project>/test-gate/`, `output/<project>/book-review/`.
4. Check `cursor agent status` and the live process table for the recorded worker PID.
5. If a worker is alive, do not relaunch. Inspect new log output, run-state, and receipts.
6. If no worker is alive and the queue is not complete, launch the goal-mode worker.
7. If a safe local blocker exists (packet-mode Book review REQUESTED after machine PASS, CLI Tester
   receipt mismatch, stale lock, missing env source instruction), fix it before reporting.
8. Update driver state with cycle, observed status, latest receipts, action taken, blocker (if any),
   heartbeat counter, model, prompt hash, and worker PID/log.
9. Report tiny: one short line on state transition / blocker / every 6th healthy cycle. Use screenshots
   only as evidence and only when safe.

## Reporting contract

- Healthy: one short line plus optional safe evidence. No markdown sections.
- Blocked: one short issue/blocker line plus one short fix/back-on-track line plus optional safe evidence.
- Never dump receipt lists, command logs, long tooling notes, or changed-file inventories in chat.
- Put detail in driver state, not chat.

## When to escalate vs recover

Escalate (report and stop) only when:

- The worker is asking for an API key or OAuth that should be sourced non-verbosely from
  `<HOME>/.hermes/.env`.
- A real fail-stop trigger fires (stale source, banned term in packageable change, missing receipt,
  reused receipt, branch/rule mismatch).
- The diff scope blows past the changed-files / changed-lines thresholds and the worker cannot scope it.
- The Linear queue shows the project complete and there is nothing left to do.

Recover (relaunch with compact prompt) for:

- Cursor CLI exit code 0 but no new commits.
- Worker killed by an OOM or transient network failure.
- Worker stuck on a safe local tooling issue (CLI Tester scan exclude, missing `.gitnexus` index, etc.)
  that the cron can fix.

## Anti-stall safeguards

- Always use `--trust --force` so the worker does not block on permission prompts.
- Always pass the goal prompt from a file, not a here-doc, so re-launches use the same content.
- Capture the prompt hash in driver state so the cron can detect drift.
- Re-stage the goal prompt from its source after every successful merge so the next cycle uses a clean copy.
- If the worker is on a `gpt-5.5-extra-high` model and the cron switches preference to
  `gpt-5.5-extra-high-fast`, do not kill the live worker. Apply the new model on the next
  relaunch/resume.

## Worked example: Entity Phase 2

- Cron job: `a0d4a39ec01e` (Entity Phase 2 Cursor driver)
- Plan: `<HOME>/Code/entity/docs/execution-packs/entity-phase-2-cursor-20260621/plan.md`
- Goal prompt source: same pack, `cursor-goal-prompt.md`
- Active goal prompt: `<HOME>/Enterprise/Crew Home/Output/Book/entity-cursor-driver/cursor-goal-prompt.active.txt`
- Run-state: `<HOME>/Code/entity/.cursor/run-state/entity-phase-2.json`
- Approved queue: `THE-21` through `THE-95` (THE-21 and THE-22 completed locally, THE-22 also Done in Linear).
- Next issue at launch: `THE-23`.
- CLI worker at launch: `gpt-5.5-extra-high`, scheduled switch on relaunch to `gpt-5.5-extra-high-fast`.
- Cron schedule: every 30 minutes.
- Reporting: tiny progress line on state transition, action, blocker, or every 6th healthy cycle.
