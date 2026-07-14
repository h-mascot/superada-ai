---
name: runner-codex-gui
description: "Use when turning a Linear-backed repository queue into an autonomous Codex desktop-app run with one visible manager task, visible top-level worker/reviewer tasks, isolated worktrees, serialized integration, native Scheduled automation, self-healing recovery, blocker escalation, and exact completion proof. Use for Codex GUI/ChatGPT desktop execution, GUI task threads, sidebar-visible lanes, CLI-to-GUI cutovers, or repairing a stalled Codex GUI project. Do not use for Codex CLI, Cursor CLI, Hermes /goal, or one-off edits."
version: 1.2.0
author: Ada + Henry Mascot's Enterprise Crew
license: MIT
platforms: [macos, linux, windows]
metadata:
  hermes:
    tags: [codex-gui, runner, linear, worktrees, scheduled-automation, self-healing, task-threads]
    related_skills: [runner, coding-agent, durable-goal-supervision, computer-use]
---

# Runner — Codex GUI

## Overview

Use this skill to run a full project queue inside the native Codex desktop app. It is the GUI sibling of `runner`, not a cosmetic wrapper around the CLI workflow.

The control plane is:

```text
approved queue + DAG
  -> one visible parent manager task
  -> visible top-level worker/reviewer tasks
  -> one issue per isolated worktree
  -> manager-only serial integration
  -> exact integrated-tree gates
  -> Linear/state reconciliation
  -> immediate refill
  -> native Codex Scheduled automation self-heals until semantic completion
```

The old Runner remains authoritative for source audit, issue mapping, queue construction, proof commands, CLI Tester semantics, and Linear reconciliation. This skill replaces its executor/control-plane assumptions:

- Codex desktop app is primary; Codex CLI is forbidden.
- Visible sibling tasks replace terminal workers and nested Subagents.
- Native Codex Scheduled automation replaces Hermes/OpenClaw cron, launchd, and shell supervisors.
- GUI state is evidence only when triangulated with repository artifacts and receipts.

## When to Use

Use when Henry asks to:

- run a whole Linear project in Codex GUI;
- keep issue lanes visible in the Codex sidebar;
- create a Codex manager plus worker/reviewer tasks;
- migrate an active CLI Runner into Codex GUI;
- make Codex continue autonomously through a full queue;
- add a native Codex automation that checks and repairs progress;
- diagnose or recover stalled/missing Codex GUI tasks.

Do not use for:

- `codex exec`, Cursor CLI, Claude Code CLI, Hermes `/goal`, ACP, or shell-managed workers;
- a one-off small edit;
- hidden nested Subagents when Henry requested visible task lanes;
- an automation whose only job is to report health without repairing it.

## Non-Negotiable Architecture

1. **One manager.** Exactly one visible top-level Codex task owns queue selection, integration, canonical run state, tracker reconciliation, and scheduling policy.
2. **Top-level lanes.** Every implementation worker and independent reviewer is a visible sibling task in the Codex sidebar. A nested Subagent does not satisfy this requirement.
3. **One issue, one writer, one worktree.** Record issue, task ID, ownership generation, role, branch, worktree, expected base, and expected HEAD/range.
4. **Independent review.** The implementation task cannot certify itself. A fresh top-level reviewer binds its verdict to the exact candidate HEAD.
5. **Serial integration.** Only the manager mutates canonical `main`, run state, queue truth, and shared tracker state.
6. **Native scheduler.** Long-running continuation uses one Codex Scheduled automation attached to the existing manager task. Never create a duplicate scheduler for the same queue.
7. **No control-plane substitution.** Never use Codex CLI as the fallback control plane. Do not silently fall back to Cursor CLI, Hermes goals, OpenClaw cron, launchd, shell loops, or hidden workers.
8. **Semantic stop.** Continue until every approved child issue is independently verified, integrated, reconciled in Linear, and the final completion receipt passes. Scheduler expiry or queue polling is not completion.

## Required Inputs

Before launch, resolve:

- repository root and clean canonical branch;
- full approved child queue and dependency DAG;
- source authority order, accepted decisions, and live Linear/fallback snapshot;
- repository `AGENTS.md` and direct paths to Runner, testing, review, and gate contracts;
- run-state, manager-state, worktree, manifest, receipt, blocker, and checkpoint paths;
- exact per-issue proof commands and integrated-tree gate sequence;
- allowed remote checkpoint policy and explicit merge/deploy/release boundaries;
- host resource ceiling and Codex GUI task concurrency observed in practice.

Completion criterion: the parent prompt can name every input by exact path or URL without relying on inherited chat context.

## Workflow

### 1. Preflight Runtime Reality

Inspect before creating any task:

- Codex app process, actual visible window ID, app version, sign-in, repository/project binding, and native task/scheduled-automation availability;
- CUA/Accessibility health and available native Codex task tools;
- canonical branch/HEAD/status, existing worktrees, dirty files, active worker processes, stale CLI supervisors, scheduler rows, queue state, receipts, and tracker state;
- whether remote branch or draft PR creation triggers CI, deployment, or production.

Do not trust remembered PID/window IDs. Do not restart the app merely because the window disappeared; recover the existing window first.

Completion criterion: one preflight receipt identifies the live app/window, manager target, repository HEAD, old control-plane owners, preserved dirty state, and safe checkpoint boundary.

### 2. Build the Full Manager Directive

Create the parent manager task before stopping any old mutating control plane. Its directive must include:

- the full approved queue, not only the first wave;
- DAG and authority order;
- every direct contract path the GUI task must reread after compaction;
- one-issue/worktree/writer rules;
- worker -> reviewer -> manager integration lifecycle;
- exact candidate and integrated-tree gates;
- state, manifest, receipt, blocker, and checkpoint schemas/paths;
- adaptive task ceiling and refill behavior;
- GitHub checkpoint versus merge/release authority;
- semantic completion and scheduler stop conditions.

A prompt that says “process these four issues” is a wave prompt, not a project manager. The manager must explicitly continue through the entire approved queue.

Use `templates/manager-directive.md` as the starting structure.

Completion criterion: read back a distinctive full-project clause from the rendered user message and obtain a manager acknowledgement that names the full queue, control plane, lane model, and stop condition.

### 3. Cut Over Without Split-Brain

For CLI-to-GUI migration:

1. Inventory all old supervisors, restart services, worker process groups, branches, worktrees, dirty state, and receipts.
2. Start the GUI parent manager in read-only takeover mode.
3. Create visible read-only audit/review tasks for in-flight worktrees and build a takeover ledger.
4. Verify the GUI tasks are real top-level sidebar tasks and have exact assignments.
5. Stop the old supervisor and all old CLI writer process groups; wait and rescan for late children.
6. Only after zero old writers remain, authorize GUI worker writes.
7. Persist a cutover receipt and update repository executor authority at the next clean manager-owned boundary.

Never stop the old control plane before the GUI parent exists. Never authorize GUI writers while old writers can still mutate the same worktrees.

Completion criterion: exactly one mutating control plane remains, every dirty worktree has one recorded owner, and no CLI worker can respawn.

### 4. Create Visible Lane Tasks

The manager writes one complete manifest per ready lane. A top-level task is then created from that manifest with a descriptive title:

```text
Implement THE-123 — <scope>
Review THE-123 @ <short-head>
Audit THE-123 integrated commit @ <short-head>
```

Workers receive:

- issue/source identity and full live requirements;
- exact worktree, branch, base, owned paths, and non-goals;
- RED/proof expectations and test commands;
- candidate receipt path;
- prohibition on main, Linear, shared state, merge, push, self-review, and issue switching.

Reviewers receive:

- exact candidate/integrated HEAD or range;
- read-only role and fresh review requirement;
- source/acceptance/proof authority;
- required receipt schema and PASS/FAIL consequences.

Use `templates/lane-manifest.md`. Queue overflow rather than hiding work in nested tasks or overloading the host.

Completion criterion: each active lane has one visible task ID, one ownership generation, one worktree, one role, and one expected HEAD/range; no issue has duplicate live owners.

### 5. Drive the Exact Completion Ladder

For every issue:

1. Re-read live issue, authority, accepted decisions, repo rules, gate config, and current main.
2. Worker reproduces RED where applicable and produces scoped GREEN implementation.
3. Run focused/full tests, scans, diff/secret checks, and configured evidence.
4. Produce one clean issue commit and candidate receipt.
5. Create a fresh independent exact-HEAD reviewer task.
6. On FAIL, steer the same sole worker with the exact findings; do not spawn a second writer.
7. On PASS, the manager rebases/cherry-picks/merges serially onto current clean main.
8. Run the integrated-tree gate sequence, including CLI Tester `request -> run -> agent-review/book-review -> verify` as configured.
9. Bind receipts to the integrated commit without rewriting candidate history.
10. Reconcile run state, queue, dependencies, and live Linear.
11. Refill the freed lane immediately.

A candidate commit, worker exit, local PASS, or review PASS is not integrated completion.

Completion criterion: the issue's integrated commit is ancestral to canonical main, integrated-tree proof is green, live tracker/state agree, and every unlocked dependency was recomputed from that proof.

### 6. Install One Native Self-Healing Automation

Create or upgrade exactly one Codex Scheduled automation attached to the existing manager task. Default cadence: **every 10 minutes**. Five minutes risks overlapping long repair/integration ticks.

Every tick must:

1. Acquire a singleton lease in manager state.
2. Re-read contracts, queue/DAG, authority, tracker/fallback, manager/run state, manifests/receipts, Git/worktrees, visible tasks, checkpoint PR/CI, and accepted decisions.
3. Classify the run `HEALTHY`, `STALLED`, `BROKEN`, `BLOCKED_AUTHORITY`, or `COMPLETE` from evidence.
4. Advance healthy lanes and refill ready capacity.
5. Diagnose and repair stalled/broken lanes in the same tick.
6. Prefer steering the same task. Replace only after checkpointing, revoking old ownership, and proving it is irrecoverably dead.
7. Persist a timestamped tick receipt, ownership map, progress delta, repair results, exact next action, and lease release.
8. Continue until semantic completion; pause only on completion or a real unsafe/authority boundary.

If GUI/controller pickup fails, the scheduled tick must repair native task delivery or perform manager-safe work directly. Missing pickup is not a permanent excuse and does not authorize an external runner.

Use `templates/scheduled-automation-directive.md` and validate with `scripts/validate_runner_codex_gui.py`.

Completion criterion: native Scheduled UI readback shows `ACTIVE`, the existing manager task ID, 10-minute recurrence, one matching scheduler, and a manually exercised tick that performs a real state transition or repair.

### 7. Blocker Triage and Henry Escalation

Reconcile all blockers every tick. Use exactly four obstacle classes:

- `AUTO_FIX` — manager/worker can safely repair now.
- `WAITING_DEPENDENCY` — valid DAG or capacity wait; continue other work and never alert Henry.
- `RETRYING_TRANSIENT` — UI/service/network/controller issue; bounded retry plus alternate native Codex/Peekaboo path.
- `HENRY_DECISION` — unresolved conflicting canonical authority, a credential/access grant only Henry controls, or an irreversible production/financial/external approval executable now.

Failed review/test, stale receipts, dirty worktrees, missing tasks, stale GUI/AX state, controller failure, synthetic proof, CI failure, capacity, and metadata-only authority drift are repair work. Attempt at least two distinct safe repairs before escalation unless the obstacle is inherently authority-only.

Dependencies and future approval gates are not active blockers. If accepted decisions already answer the question, apply them and reconcile stale Linear/state without asking Henry to repeat himself.

A true Henry decision creates exactly one visible task with a plain-language outcome in its title:

```text
HENRY DECISION — Approve proposed Linear metadata updates? (THE-535)
```

Never lead with internal codes, file paths, checksums, or phrases such as “approve exact artifact.” The first screenful must let Henry decide without opening repository files. Use this order:

1. **Decision needed:** one plain-English sentence.
2. **What changes if approved:** systems affected, exact object counts, fields/actions, and whether anything is created, deleted, deployed, released, charged, or sent externally.
3. **Why this is needed now:** dependency and user-visible consequence.
4. **Evidence:** tests/review/conflict counts summarized in normal language.
5. **Recommendation:** one option and why.
6. **Reply:** `A — Approve`, `B — Reject`, or `C — Defer`; include optional correction text.
7. **Technical receipt:** hashes, paths, issue IDs, and provenance last.

Before surfacing the task, verify every referenced artifact exists at the stated canonical path and its current hash matches the packet. Missing files, stale hashes, unclear scope, or contradictory authority are `AUTO_FIX`, not a Henry decision. Withdraw/replace any defective decision task before asking Henry to act.

#### Approval-Surface Agreement and Authority Split

Do not collapse plan approval, execution authority, and release authority into one ambiguous “approve.” Treat them as separate grants unless Henry explicitly combines them. A reviewed plan/artifact can be approved while loader execution, Linear/API writes, merge, deploy, release, payment, send, and external commitment remain unauthorized.

Before notifying Henry, prove three surfaces agree in substance:

1. canonical issue-specific packet;
2. rendered visible decision task;
3. manager-state `henry_blockers[]` row and explicit authority booleans.

Compare decision wording, affected system/object counts, creates/deletes/conflicts, non-actions, recommendation, reply choices, task ID, packet/artifact hashes, and flags such as `writes_authorized`, `loader_execution_authorized`, `linear_write_authorized`, and `release_authorized`. Persist one agreement receipt containing packet hash plus rendered first-screen readback. State-only success is not completion: an updated JSON row can coexist with an old jargon-first packet or a rendered task that grants broader authority.

Only Henry’s direct response grants authority. A task model’s synthetic `A — Approve`, inferred sentiment, recommendation text, or prior agent output is never approval. Record direct response provenance and bind it to the unchanged packet fingerprint; any scoped artifact change invalidates approval.

If a packet is defective, mark/rename the visible task `INVALID` or withdraw it, force all write/execution/release flags false, repair canonical artifacts, rewrite impact-first, update the rendered task, run the three-surface agreement check, then wait for Henry. Continue unrelated lanes throughout.

Read `references/human-approval-packets.md` for the authority model, first-screen template, agreement check, and recovery procedure.

Also write:

- `output/<project>/henry-blockers/ACTIVE.md`;
- one issue-specific packet;
- `henry_blockers[]` in manager state.

The packet contains exact conflicting clauses, investigations/repairs attempted, why Codex cannot choose, one plain-English question, 2–3 options, recommended default, concrete consequences, paste-ready response, unblock verification, and work continuing meanwhile. Fingerprint alerts to prevent duplicates. On answer, record provenance, close/rename the task, clear state, resume the lane in the same tick, and verify the unblock.

Completion criterion: every obstacle has one class; stale blockers are removed; unrelated work continues; `henry_blockers` contains only executable human decisions whose scope and consequence are understandable from the first screenful.

### 8. Adaptive Capacity and Refill

Default configured ceiling: **8 concurrent visible lanes**. Treat 8 as the operating target whenever dependency-ready work and live host headroom exist.

Compute effective capacity from fresh evidence on every tick:

```text
min(8, dependency-ready supply, live host headroom, observed GUI task cap, integration backlog allowance)
```

Rules:

- Measure CPU/load immediately during the tick. Never reuse a load value from manager state, an earlier receipt, or a previous tick to throttle current work.
- Persist both `configured_ceiling: 8` and `effective_ceiling`, plus sample timestamp, logical CPUs, load average, load ratio, ready supply, and limiting reason.
- When live load is below 0.75 × logical CPUs, target all 8 lanes. At 0.75–1.0×, target 6; at 1.0–1.25×, target 4; above 1.25×, target 2. A stale or internally inconsistent sample is invalid and must be remeasured before throttling.
- Count implementation workers, independent reviewers, candidate-ready lanes, and manager integration backlog separately. Keep implementation and review moving in parallel; a control-plane/helper repair must not consume every productive lane when unrelated DAG-ready work exists.
- Do not fill capacity with duplicate, dependent, or blocked work. When load rises, shrink safely without terminating healthy tasks; when capacity frees, refill immediately from the earliest dependency-ready manifests in the same tick.
- If fewer than the effective ceiling are active despite safe ready work, classify the tick `STALLED` and repair/refill before reporting `HEALTHY`.

Completion criterion: configured ceiling is 8, active ownership never exceeds the fresh effective ceiling, and every free slot with safe ready work is refilled without waiting for the next human prompt.

### 9. Checkpoint Without Releasing

Remote checkpoint authority is separate from release authority. When authorized:

- push only clean, exact-reviewed, fully integrated/gated batches;
- use one rolling integration branch and one draft PR;
- record included issues and exact SHA;
- inspect CI for that SHA and repair failures;
- keep local queue execution moving;
- never merge remote main, deploy, release, or trigger production without explicit authority.

Audit deployment triggers before the first push.

Completion criterion: remote branch readback and exact-SHA CI correspond to the verified local checkpoint, while release authority remains unchanged.

### 10. Complete and Stop Semantically

Before pausing the native automation:

- every approved child issue is integrated and ancestral to canonical main;
- all integrated-tree tests/gates/reviews pass;
- live Linear has no approved child outside completed state and queued comments/actions are drained;
- canonical branch is clean;
- remote checkpoint/CI is verified when required;
- final queue summary and completion receipt exist;
- no worker/reviewer task remains active;
- the exact native scheduler is paused and read back as paused.

Emit Henry's compact card within 12 lines using a 10-cell progress bar and evidence-derived percentage.

Completion criterion: semantic completion proof, clean runtime, reconciled tracker, and paused scheduler all agree. “Automation ran N times” is not proof.

### 11. Report Progress Without Creating a Second Manager

When Henry requests periodic external progress updates, add a read-only observer job rather than teaching the Codex manager to call Discord directly or creating another execution supervisor.

- The Codex Scheduled automation remains the sole execution/control-plane owner.
- The observer reads canonical manager state, run state, scheduler health, receipts, and true Henry blockers; it must never create tasks, mutate worktrees, integrate code, or repair lanes.
- Deliver a maximum 12-line ASCII card with a 10-cell bar and `State`, `Done`, `Now`, `Blocker`, and `Next`; include native scheduler and delivery health.
- Derive progress only from strict integrated + gated + tracker-reconciled children. Do not use elapsed time, tick count, candidate commits, or stale claimed completion.
- If two consecutive observer runs show no hard delta in strict completion, canonical HEAD, lane state/HEAD, or real transition, report `STALLED`; a rewritten heartbeat receipt is not progress.
- On semantic completion, emit one final `COMPLETE` card and then remain silent or retire the bounded observer.
- Keep delivery destination explicit and thread-scoped. The observer is visibility infrastructure, never an alternate runner.

Completion criterion: one manual observer run reaches the intended thread with a truthful card, while the native manager task, scheduler identity, and lane ownership remain unchanged.

## GUI Delivery Verification

A successful accessibility call is not delivery proof. For every prompt or policy overlay:

1. Take a fresh AX snapshot; never reuse stale element tokens after UI change.
2. Locate the correct composer by role, frame, current task title, and expected pane.
3. Prefer setting the text-area value directly; click-then-type is fallback.
4. Verify the composer AX value contains a distinctive clause and expected character count.
5. Press the actual send control. In the Codex app it may be an unlabeled button beside `Dictate`.
6. Refresh and prove the directive appears as a rendered user-message node.
7. Confirm `Working`/`Stop` or an acknowledgement naming the changed policy.
8. For asynchronous overlays, verify the current lane was preserved and no replacement manager was created.

On remote macOS, avoid y-coordinates below 100 when coordinate fallback is unavoidable; menu-bar/title-bar traps can redirect input. Prefer element-index actions.

For non-destructive window recovery and stale-token handling, read `references/native-codex-gui-control.md`.

## State and Artifact Contract

Recommended layout:

```text
.runner/<project>-autonomous-run-state.json
output/<project>/gui-handoffs/next/*.md
output/<project>/gui-thread-receipts/*.md
output/<project>/henry-blockers/ACTIVE.md
<crew-output>/<project>-codex-driver/sidebar-manager-state.json
<crew-output>/<project>-codex-driver/driver-state.json
<repo-parent>/<project>-worktrees/<ISSUE>-<role>/
```

Manager state should expose:

- manager task ID and scheduler ID;
- canonical main HEAD/status;
- configured/effective capacity;
- active task ownership map;
- ready/waiting queues;
- delivery health;
- obstacle classifications and `henry_blockers`;
- lease and last tick receipt;
- checkpoint branch/PR/CI;
- next executable action.

Use atomic writes with a backup at control-plane transitions. Runtime state and receipts are not source commits unless repository policy explicitly says otherwise.

## Common Pitfalls

1. Calling nested Subagents “sidebar threads.” They are not visible top-level tasks.
2. Giving the manager only the first wave, then claiming it owns the full queue.
3. Stopping the CLI supervisor before the GUI manager and takeover ledger exist.
4. Leaving old restart services alive, causing late duplicate writers.
5. Assuming skill attachments from Hermes/OpenClaw enter an existing Codex GUI task.
6. Treating a blue dot, title, PID, or automation card as sufficient health evidence.
7. Reporting a successful `set_value`/click without proving the message rendered.
8. Reusing stale AX tokens or clicking the macOS menu bar by coordinate.
9. Creating a five-minute scheduler that overlaps long ticks.
10. Creating duplicate schedulers instead of upgrading the existing one.
11. Building a heartbeat that reports blockers but does not repair them.
12. Escalating failed tests, dependency waits, capacity, synthetic evidence, or checksum drift to Henry.
13. Replacing a stalled task before revoking the old owner.
14. Letting a true authority blocker freeze unrelated ready lanes.
15. Treating candidate review PASS as integrated completion.
16. Pushing a checkpoint without auditing deploy triggers or checking exact-SHA CI.
17. Restarting Codex to recover a missing window and losing task continuity.
18. Updating automation config but not verifying the active scheduled runtime readback.
19. Calling a plan/artifact approval permission to execute the write, loader, merge, deploy, or release.
20. Updating manager state while leaving the canonical packet or rendered decision task stale, opaque, or broader than the recorded authority.
21. Accepting a decision task model’s synthetic response as Henry’s approval instead of requiring direct-human provenance.

## Verification Checklist

- [ ] Codex desktop app, account, repository, native task tools, and Scheduled automation verified live
- [ ] Full approved queue and DAG injected into one visible manager task
- [ ] Direct contract paths included; no reliance on inherited skill context
- [ ] CLI/external mutating control plane fully stopped after safe takeover
- [ ] Every active lane is a visible top-level task with unique ownership/worktree/role
- [ ] Same-worker remediation and fresh independent exact-HEAD review enforced
- [ ] Manager-only serial integration and integrated-tree gate ladder active
- [ ] One native 10-minute Scheduled automation attached to existing manager
- [ ] Manual tick exercised and produced a real repair/state transition
- [ ] Blockers classified; stale entries removed; `henry_blockers` contains only true decisions
- [ ] Every Henry decision starts with plain-English impact, counts, recommendation, A/B/C reply, and verified canonical artifacts
- [ ] Canonical packet, rendered task, and manager-state blocker agree; plan, write/loader, and release authority are separate explicit flags
- [ ] Only Henry’s direct response can flip authority; synthetic task-agent output remains non-authoritative
- [ ] Prompt delivery proven by rendered message and acknowledgement/working state
- [ ] Configured ceiling is 8; fresh live load sets effective ceiling; every safe free lane is refilled immediately
- [ ] Any external progress observer is read-only, thread-scoped, and reports strict evidence only
- [ ] Checkpoint authority remains separate from merge/deploy/release authority
- [ ] Final completion requires clean main, tracker reconciliation, proof, no live lanes, and paused scheduler

## References

- `references/native-codex-gui-control.md` — remote macOS window recovery, fresh AX snapshots, composer/send verification, and stale-token repair.
- `references/control-plane-and-recovery.md` — manager/task lifecycle, self-healing scheduler, obstacle classification, replacement rules, and runtime health.
- `references/human-approval-packets.md` — impact-first approval packets, plan/write/release authority separation, direct-human provenance, three-surface agreement, and defective-packet recovery.
- `templates/manager-directive.md` — full-project parent manager prompt skeleton.
- `templates/scheduled-automation-directive.md` — native 10-minute self-healing automation prompt skeleton.
- `templates/lane-manifest.md` — worker/reviewer/audit task manifest skeleton.
- `scripts/validate_runner_codex_gui.py` — static validator for generated manager/automation artifacts.
