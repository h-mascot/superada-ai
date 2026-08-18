---
name: runner-low-burn-v2
description: Use when a review-gated autonomous coding runner is burning avoidable tokens - idle supervisor polling, duplicate review passes, full-context replays of an unchanged queue. Adds low-burn operating rules and evidence-first escalation on top of Runner.
---

# Runner Low Burn v2

## Overview

Low Burn v2 is a cost-control operating profile for autonomous coding runners that use Codex workers plus independent review gates. It is designed for the exact failure mode where the work is real, but the runner turns every issue into a token bonfire: repeated generation prompts, full-context replay, high-reasoning reviewers, and supervisor ticks that reread the world.

The goal is **not** to make autonomous coding cheap by magic. The goal is to stop avoidable waste while preserving correctness: fewer full-context reviews, smaller worker envelopes, deterministic proof before model review, and hard stop-losses.

## When to Use

Use this skill when:

- the operator reports weekly token-limit burn from a scheduled coding runner.
- Worker logs show multiple generations per issue.
- Review logs show repeated final reviews or reruns.
- An issue is late-stage and needs targeted repair/closeout, not broad exploration.
- The project is near completion and token preservation matters more than autonomous breadth.

Do **not** use this profile when:

- The project is early and requirements are still unknown.
- The issue is safety/security/payment/production-critical and needs deep independent review.
- The lower-cost route has not passed a same-execution-layer smoke test.
- Applying the policy would interrupt an already-running worker without a clean checkpoint.

## Evidence Gate Before Changing a Live Runner

Before applying v2 to a live runner, collect these facts:

1. **Project completion state**
   - total issues, completed issues, remaining issues, active issue, current state.
   - If ≤2 issues remain and a worker is active, prefer finishing current worker before invasive runner surgery.

2. **Active process state**
   - exact worker/reviewer processes by repo/workdir.
   - logical worker count, not wrapper + node + native binary double-counting.
   - active model and reasoning effort.

3. **Token burn evidence**
   - worker log token receipts by issue and route.
   - review rerun count by issue.
   - session telemetry by project/model where available.

4. **Current gate state**
   - whether the issue is implementing, repairing, reviewing, gating, or closeout.
   - whether review already produced actionable findings.

Only patch live control surfaces after this evidence says the savings are material and the risk is low.

## Default v2 Operating Policy

### Coder route

Default routes:

```text
gpt-5.6-luna / low     deterministic edits, bounded fixes, mechanical implementation
gpt-5.6-luna / medium  normal issue implementation and targeted repair
gpt-5.6-terra / medium cross-file architecture or repeated deterministic failure
gpt-5.6-sol / high     P0/P1 correctness, payment, security, or production-safety only
```

Start at `luna / low` when scope and proof commands are exact. Use `luna / medium` for normal coding. Escalate one rung only after a concrete failure receipt or documented risk. Do not escalate because work is slow or the prompt is vague; narrow the prompt first.

### Reviewer route

Default review ladder:

1. Deterministic gates first: focused tests, lint, typecheck, unit, build, e2e/CTRL where relevant.
2. Cheap/static pre-review only if it can run without full context replay.
3. One exact-HEAD `luna / medium` review after deterministic gates pass when model review is materially useful.
4. Escalate to `terra / medium` for cross-file architectural integrity or a failed Luna review with concrete unresolved findings.
5. Reserve `sol / high` for documented P0/P1 security, payment, production-safety, or severe architectural-integrity risk.

Cap:

- **1 model final review per issue**.
- Permit **1 extra model review** only if product/test files changed after the first review, the first review failed before a verdict, or P0/P1 risk exists.
- Never run repeated reviews on unchanged HEAD.

### Worker generation cap

Per issue:

- Initial implementation: 1 generation.
- Targeted repair: 1 generation.

Hard stop after **2 generations**. Do not disguise a third generation as “emergency repair”; checkpoint the exact blocker and require a new explicit issue/budget decision.

### Token stop-loss

Per issue soft budget:

```text
400k tokens: warn / force narrowing
800k tokens: stop broad work; targeted repair only
1.2M tokens: fail closed; summarize exact blocker and ask for budget decision
```

For late-stage projects with ≤2 issues left, use stricter defaults:

```text
300k warn / 600k targeted-only / 900k fail closed
```

### Prompt envelope rules

Every worker prompt must include:

- exact issue ID and source ID;
- immutable baseline and expected HEAD;
- allowed file list;
- forbidden file list;
- current actionable findings only, deduped;
- required deterministic commands;
- stop condition;
- no generic autoreview helper unless explicitly routed;
- no unrelated issue selection.

Never include full historical review transcripts, whole worker logs, or all prior receipts in the prompt. Persist those as artifacts and feed only session IDs, hashes, finding IDs, changed paths, and verdict summaries.

## Native `/goal` launch profile

For multiple concurrent low-burn goals, isolate each owner with its own Hermes profile and goal workspace rather than relying on a tmux command's shell environment alone. Configure and read back the profile's `terminal.cwd`, then launch one durable tmux/system service per profile.

Keep startup context lean:

- Native `/goal` supplies continuation semantics.
- Preload `runner-low-burn-v2` for execution policy.
- If `GOAL.md` already embeds the required durability, authority, verification, stop-loss, and reporting gates, do not also preload a large supervision skill into every Spark turn. Link the relevant reference or copy the narrow invariants into the contract instead.
- Submit `/title`, `/reasoning medium`, and `/goal ...GOAL.md` separately; verify each acknowledgement, effective profile/CWD, accepted goal text, and first issue-scoped work.
- Treat deterministic test/baseline failures as autonomous engineering repair, not a user-approval gate. Pause only for real credential, authority, irreversible external, or product-decision boundaries.
- If a diagnostic requests sudo or a secret, skip the prompt and choose a non-privileged proof path; never type credentials into an autonomous runner.
- When scope narrows from several projects to one, stop only the skipped goal owners, preserve their artifacts, and pause any combined watcher. Reuse the surviving project's exact original delivery job/channel rather than creating a parallel reporting lane. Inspect that job's saved prompt, runtime identity, delivery, and side-effect authority before triggering it; if it points at a superseded owner or burns model context merely to render status, convert the same exact job to a deterministic `no_agent` status script, preserve `deliver`, force-run it, and inspect the produced artifact/message.
- Treat unrecoverable context-window compression as a checkpoint boundary, not a code failure. Preserve the dirty worktree, stop only the exhausted goal session, launch a fresh isolated-profile `/goal` session in the same worktree with an issue-scoped continuation prompt, and verify its first substantive action reads the compact phase packet/current diff rather than historical state.
- Verify the route's **actual accepted request limit** against the profile context ceiling. If the profile advertises a larger budget than the provider accepts, lower and read back `model.context_length` before relaunch; otherwise compression may trigger too late to recover.
- Restrict issue-scoped coding launches to the minimum tool schemas. `-s runner-low-burn-v2 -t terminal,file` retains the operating policy while disabling skill discovery and most unused tool schemas, materially reducing startup context. Add toolsets only when the phase needs them.
- A watcher must distinguish an idle prompt after context failure from an actively advancing worker; tmux/process presence alone is insufficient. It must also follow a stable alias or dynamically discover the newest versioned session rather than hardcoding the retired tmux name.
- Bind preserved dirty work to its real issue/source. Finish a previous issue's dirty repair checkpoint before directing the replacement owner to implement the next queue item.

Use `references/native-goal-low-burn-launch.md` for general launch acceptance and `references/context-exhaustion-recovery.md` for provider-limit mismatch, binary-safe dirty checkpoints, lean-toolset relaunch, compact phase packets, and versioned watcher repair.

## Supervisor Cadence Rules

When a worker is alive and log bytes/mtime are advancing:

- supervisor should be script-only or delta-only;
- do not wake a large LLM to reread all state;
- send a progress card only on state change, worker exit, blocker, the operator message, or hourly heartbeat.

When no worker is alive and issue remains active:

- reconcile state first;
- then either launch exactly one narrowed worker or classify the issue as blocked.

When the active issue is blocked on protected credentials or vendor setup:

- check the runner protected env and repo env files for variable presence, reporting names only;
- if the operator asks whether a credential exists in Vaultwarden/Bitwarden, check CLI status first and search only item names/field names after the vault is already unlocked;
- never ask for, type, echo, or store the master password or raw secret value;
- if the vault is locked, report `vault locked` and the exact servers/accounts checked, then leave the runner fail-closed;
- do not launch a model worker to “try anyway” when the issue requires real sandbox/vendor credentials.

See `references/credential-blocker-closeout.md` for the Waypost Stripe blocker pattern.

Do not let a scheduled supervisor launch overlapping workers into the same repo/worktree.

### Mandatory idle-loop circuit breaker

Any recurring **agent-backed** runner/manager/supervisor scheduled hourly or faster must be covered by the deterministic script-only guard at `~/.hermes/scripts/runner-idle-circuit-breaker.py` (job name `runner-idle-circuit-breaker`). Do not rely on prompt text as the stop-loss.

Runner tick outputs must use one of these machine markers:

- `NO_ACTION: <bounded reason>` when no substantive action occurred;
- `[SILENT]` only when the delivery contract requires silence;
- a concrete state-change receipt when a worker was launched/resumed, a commit/state boundary changed, or a blocker was created.

The guard fail-closes on the first matching condition:

- **3 consecutive explicit idle ticks** and **100k cumulative idle tokens**;
- **one explicit idle tick ≥400k tokens**;
- **any single manager/supervisor tick ≥1.2M tokens**, even if its receipt claims activity.

It ignores disabled jobs, script-only jobs, incomplete/empty sessions, ordinary reports, and schedules slower than hourly. A trip pauses the exact job and emits a receipt; it never auto-resumes.

Terminal states are not polling states. When a project is complete, intentionally stopped at an issue boundary, waiting on an external policy decision, or has no eligible next action:

1. write the terminal/blocker state to the canonical tracker;
2. pause the manager in the same tick;
3. emit one final receipt with the exact resume condition.

A passive event watcher that routinely returns `[SILENT]` must be converted to a deterministic `no_agent` preflight/delta script. Wake an LLM only when the script finds a new event requiring judgment.

## Implementation Surfaces to Patch Together

When applying v2 to a live runner, patch all relevant surfaces in one controlled pass:

1. Reusable skill/profile: attach `runner-low-burn-v2`.
2. Scheduled job prompt and skill list.
3. Repo runner prompt/template.
4. `.runner/model-route-policy.json` or equivalent route policy.
5. `.runner/*run-state.json` and driver state only when needed for truthful readback.
6. Deterministic idle-loop guard coverage and machine-readable tick outputs.
7. Dedicated executor profile/config (`CODEX_HOME`) if it pins defaults.
8. Progress-card producer if it summarizes policy/cadence.

Then verify:

- scheduler readback shows the new skill/prompt/cadence;
- live process route matches the intended route;
- worker log/session metadata confirms model and effort;
- no duplicate worker exists;
- first tick after patch changes state or correctly stays silent while worker remains healthy.

## Late-Stage Decision Rule

If the project is ≥85% complete:

- Do **not** restart or deeply rewire an active worker just to save tokens.
- Let the current worker reach a checkpoint unless it is clearly looping.
- Apply v2 only to the next issue / next repair boundary.
- Consider stopping after the current issue and doing the final issue manually or with one tightly scoped worker.

If the project is ≥90% complete and only 1-2 issues remain:

- v2 is worth installing as a reusable skill.
- v2 may **not** be worth invasive live patching unless the active issue is already burning >600k tokens or has repeated review loops.
- Best action is usually: finish current worker, cap review, then manually decide whether the final issue deserves automation.

## Common Pitfalls

1. **Switching models without route smoke.** A catalog entry is not a working Codex CLI route.
2. **Saving tokens by killing useful work.** Stopping a healthy active worker can waste more tokens than it saves.
3. **Counting wrapper PIDs as duplicate workers.** Deduplicate launcher, node, tee, and native Codex binary into one logical worker.
4. **Using review as debugging.** Deterministic failing tests should drive repair; expensive review is acceptance, not exploration.
5. **Rereading old logs every tick.** Use offsets, summaries, hashes, and findings ledgers.
7. **Treating credential blockers as coding problems.** If the required sandbox/vendor credentials are absent, record a hard blocker, check only secret presence/item metadata, and fail closed rather than spending a worker generation.
8. **LLM supervisor with conflicting stop/continue instructions (the "Stardate V2" failure mode).** When a human says "stop" and the supervisor's control plane receives conflicting "continue" signals — or when stop is only partially applied to one of multiple overlapping schedulers — the LLM manager burns millions of tokens resolving the ambiguity instead of advancing work. This is a **structural control-plane defect**, not a model problem. The fix is deterministic state authority: a human stop must atomically pause every in-scope scheduler row, native worker, and guardian. No LLM should be in the loop interpreting stop/continue — those are state transitions, not prompts. If a runner's supervisor layer cannot deterministically process a stop signal without model reasoning, the runner architecture is wrong for unattended use. Replace the LLM supervisor with a deterministic engine (state machine, SQLite authority, or a compiled daemon like Runabout/runnerd) that processes lifecycle commands as code.

## Verification Checklist

- [ ] Active project progress checked from live state/tracker.
- [ ] Active worker/reviewer process state checked.
- [ ] Token receipts summarized by issue and route.
- [ ] Review-rerun count checked.
- [ ] Decision made: install-only, apply-next-boundary, or patch-live-now.
- [ ] If patched live: all control surfaces updated together.
- [ ] Hourly-or-faster agent managers are covered by the script-only idle circuit breaker.
- [ ] Terminal states pause the manager in the same tick; no terminal state remains `ACTIVE`.
- [ ] Passive silent polling is script-only or event-triggered rather than an LLM heartbeat.
- [ ] If not patched live: reason recorded and next safe boundary named.
- [ ] No duplicate worker launched.
- [ ] Final user report separates “skill installed” from “live runner changed.”
