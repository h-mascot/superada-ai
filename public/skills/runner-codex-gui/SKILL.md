name: runner-codex-gui
description: "Use when turning a Linear-backed repository queue into an autonomous Codex desktop-app run with one visible manager task, visible top-level worker/reviewer tasks, isolated worktrees, serialized integration, native Scheduled automation, self-healing recovery, blocker escalation, and exact completion proof. Use for Codex GUI/ChatGPT desktop execution, GUI task threads, sidebar-visible lanes, CLI-to-GUI cutovers, or repairing a stalled Codex GUI project. Do not use for Codex CLI, Cursor CLI, Hermes /goal, or one-off edits."
version: 1.1.0
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

#### Factory chat-queue lanes as the old control plane

When the repo was dogfooded through a factory chat-queue control plane, the old writers are the queue directory (e.g. `~/.hermes/factory-tests/queue`) plus any `foreman_e2e_submit.py --poll` process. A clean cutover additionally requires:

1. Zero queued `.json` jobs, zero `.claimed`/`.running` files, and no poller process — record that snapshot as the retirement receipt; never kill a poller still serving other repos' jobs.
2. Carry the factory's acceptance spine into the runner lanes: each slice's protected contract (`tools/run_tNN_contract.py --phase run` or equivalent) becomes that lane's proof command; keep exact-HEAD independent review, ff-only integration, and re-running ALL prior slice gates plus the startup contract on canonical main after every integration. A slice blocked on two consecutive review rejections stays blocked with the reviewer findings embedded in the new worker brief — the runner lane inherits the finding, not just the task.
3. Stage runner artifacts OUTSIDE the product repo in a sibling `<repo>-runner/` dir (APPROVED-QUEUE.md, manager-directive.md, run-state JSON, receipts) — runtime state is never a source commit.
4. Verify the GUI surface by process evidence, not an `/Applications` listing: on this fleet the Codex desktop surface runs inside ChatGPT.app (`ps aux | grep "Codex (Service)"` shows the framework helpers); a standalone Codex.app need not exist, so `ls /Applications | grep -i codex` returning nothing does not mean the GUI is unavailable.

### 4. Create Visible Lane Tasks

The manager writes one complete manifest per ready lane. A top-level task is then created from that manifest with a descriptive title:

```text
Scout THE-123 — <scope>
Implement THE-123 — <scope>
Review THE-123 @ <short-head>
Audit THE-123 integrated commit @ <short-head>
```

#### Team-mode roles (intra-lane scout/worker model)

Each implementation lane may spawn a small team inside the Runner envelope. The manager controls the budget; the team controls the thinking.

- **Scout** — read-only discovery agent. Low/medium effort. Fresh context (`fork_turns: none`). Owns narrow questions: trace a code path, find relevant tests, locate config, check dependency behavior. Does not write.
- **Worker** — sole implementation owner. Medium effort default. High effort only for cross-file architecture, repeated test failures, P0/P1 issues. Inherits scout findings via direct message or manager relay.
- **Coordinator (optional, manager-delegated)** — a smart worker may coordinate scouts while staying available. The manager remains primary integration authority and owner-of-record.

Rules:

1. **One implementation owner per lane.** Scouts investigate; only the worker writes. No competing editors.
2. **Scouts are bounded.** Each scout gets a precise brief, a single question area, read-only tool access, and a leaf boundary: *"Complete this assignment directly. Do not spawn other agents."*
3. **Fresh context by default.** Scouts start with `fork_turns: none`. Workers may inherit scout findings but not scout context — findings are explicitly passed as structured output.
4. **Effort by role, not by model switching.** Same model family, different `reasoning_effort`:
   - Scouts: `low` (quick lookups, simple traces)
   - Workers: `medium` (routine implementation)
   - Hard problems: `high` (ambiguity, cross-file refactor, repeated test failures)
5. **Parallel scouts.** Up to 3 scouts per lane, each with a distinct question. Concurrency counted against the lane's effective capacity allocation.
6. **No delegation chains.** Scouts and workers are leaves. No scout spawns another scout. No worker spawns a sub-worker.
7. **Findings handoff.** Scouts write findings to the lane manifest or message the worker directly. Workers do not wait for all scouts to finish before starting if enough context exists.
8. **Same token/generation budget.** Scout + worker tokens count against the same issue-level budget. Scouts that burn tokens without producing useful findings are trimmed on next tick.

When to use team mode:

- Cross-file features where the code path is unclear.
- Issues with scattered context (config, tests, types, production behavior).
- Repeated test failures where root cause is ambiguous.
- P0/P1 issues where correctness matters more than latency.

When to stay single-agent:

- One-file changes with clear scope.
- Mechanical refactors.
- Dependency bumps.
- Documentation-only issues.

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
8. Run the integrated-tree gate sequence, including CLI Tester `request -> run -> verify`. For Stardate, Book/`book-review`/CLI Tester `agent-review` is removed from the mandatory ladder: never request it, wait on it, or use it as completion evidence. Preserve historical receipts as audit history only and regenerate stale blocked gate receipts with review requirement disabled.
9. Bind receipts to the integrated commit without rewriting candidate history.
10. Reconcile run state, queue, dependencies, and live Linear.
11. Refill the freed lane immediately.

A candidate commit, worker exit, local PASS, or review PASS is not integrated completion.

Completion criterion: the issue's integrated commit is ancestral to canonical main, integrated-tree proof is green, live tracker/state agree, and every unlocked dependency was recomputed from that proof.

#### Review deduplication and cost control

Treat `(issue_id, role, candidate_head, candidate_tree)` as the immutable review key.

- Before creating a reviewer, search manager state, native task inventory, queued controller deliveries, and existing receipts for that exact key. A valid PASS/FAIL receipt for the exact key is final evidence; reuse it. Unrelated movement on canonical `main` does not invalidate a candidate review.
- Permit at most one authoritative reviewer task and one outstanding native delivery for a review key. An accepted-but-queued delivery is pending, not dead: record it, refill other lanes, and do not submit another delivery for the same key.
- On missing pickup or `systemError`, steer/retry the same task twice. Replace only after checkpointing evidence, marking the old task revoked, proving it cannot continue, and atomically transferring the same review key. Never increment generations merely because a queued task has not materialized during the current tick.
- Before replacement, rescan the native task inventory and receipt paths. If the original or delayed task materialized, keep the earliest authoritative task and revoke later duplicates before they do work.
- Reviewers inspect the diff, acceptance mapping, risky invariants, adversarial cases, and exact candidate proof. They may reuse exact-HEAD worker test evidence. Do not rerun the full repository suite inside every reviewer unless the reviewer has evidence that the suite result is stale or suspect.
- After a candidate review passes, do not launch a second semantic integrated audit by default. The manager integrates, then CLI Tester performs the full integrated-tree proof. A new semantic review is required only when integration conflict resolution or manager-authored edits change reviewed code, or an explicit security/release policy requires it.
- Keep exact candidate review valid across unrelated `main` advancement. If rebase/cherry-pick is mechanical and produces the same tree/diff semantics, bind integration evidence without rereview; if conflict resolution changes reviewed content, create one new keyed review.
- Review delivery failure must not freeze the DAG. Materialize unrelated implementation/review lanes up to the fresh effective ceiling while the pending review remains queued.
- Persist per tick: authoritative review keys, task IDs, queued delivery IDs, receipt hashes, retry count, revoked duplicates, and avoided duplicate count. A tick that creates two live tasks for one review key is `BROKEN`, never `HEALTHY`.
- Keep the Scheduled automation prompt invariant-only. Never embed mutable completion counts, current HEADs, load/capacity samples, task generations, delivery IDs, receipts, lane lists, or next actions in the scheduler definition; those snapshots go stale and manufacture churn. Derive them from live sources each tick and persist them only in manager state and timestamped receipts.

#### Review-gate efficacy rule

Treat each blocking gate as a measurable control, not inherited ceremony. Keep the gate executable, optional review stage, reviewer identity/model, methodology contract, and actual runtime path as separate fields—never rename the whole gate after one reviewer behind an optional stage. Periodically audit its **marginal** catches after earlier review stages: unique defects, resulting repairs, queue changes, and reviewer provenance, deduplicated by issue and exact HEAD. Skill reads, catalog mentions, task titles, and reviews of different candidate generations do not prove invocation counts or reviewer specialization. Compare review systems on the same exact HEAD before claiming unique catch patterns or an intrinsic winner. A gate with no demonstrated marginal catches must not remain universally blocking unless it covers a distinct policy/security/authority boundary. Downgrade weak gates to targeted or sampled audits, then migrate source config, docs, validators, manager skill, scheduled automation, and stale receipts together. Prove removal with a detached exact-HEAD gate smoke test plus one released live manager tick. When comparing systems, an unused reviewer is **untested**, not worse.

Read for the audit model, removal sequence, receipt assertions, and Stardate example.

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

#### Direct operator pause overrides autonomous stop policy

A direct instruction from Henry to pause overrides the scheduler directive's normal “pause only on semantic completion” condition. That condition prevents autonomous premature stopping; it is not authority to ignore the operator.

For an unqualified **pause the run**:

1. Snapshot scheduler, manager lease, active task IDs/worktrees/HEADs, and canonical state.
2. Stop any active manager tick through its native `Stop` control and verify the rendered stopped state; then reconfirm lease release so the finishing tick cannot overwrite the pause.
3. Pause the exact native Scheduled automation and obtain native `PAUSED` readback. An atomic config status change is an implementation step, not sufficient verification.
4. Stop every active worker/reviewer through its own native task control after recording its checkpoint. Do not kill the app, delete worktrees, revoke ownership, or discard dirty state merely to pause.
5. Rescan and report scheduler, manager, workers, and reviewers separately. Never say the whole run is paused when only future scheduler ticks are disabled.
6. Persist a timestamped pause receipt with direct-human provenance and exact resume preflight. Resume only on direct instruction and after fresh ownership/repository reconciliation.

If Henry explicitly says **pause the scheduler**, leave healthy child tasks running and say so. When asked how long it ran, distinguish manager age, scheduler age, and evidenced productive progress; never label wall-clock age as continuous compute or work. A verified UUIDv7 task ID can supply manager creation time, while scheduler `created_at` supplies scheduler age.

Read for the full pause, duration, receipt, and resume procedure.

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

Read for the authority model, first-screen template, agreement check, and recovery procedure.

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

#### Hard Throughput Recovery Gate

Before any tick may persist `HEALTHY`, enforce this fail-closed gate:

1. Recompute dependency-ready supply from the canonical DAG after every integration, review completion, verification, or reconciliation transition. A stored empty `ready_queue` is not evidence.
2. Count only materialized tasks with live task IDs and `ACTIVE`/working readback. `QUEUED`, requested packets, pending materialization, finished auditors, and stale ownership rows consume zero active capacity.
3. Compute `deficit = min(fresh_effective_ceiling, fresh_ready_supply) - active_materialized_lanes`. When deficit is positive, classify `STALLED` and fill every safe slot in the same tick before long serial verification or reporting.
4. Materialize queued reviewers immediately and verify task ID, worktree, role, and working state. If native delivery fails, attempt two distinct native repairs in the same tick and persist evidence.
5. Keep unrelated implementation/review lanes moving while CLI Tester verification, Linear reconciliation, or one issue-specific authority gate waits. These stages may serialize mutation of main; they may not serialize the whole DAG.
6. Batch independent external review requests where the gate supports it. Never wait on one response before requesting the next independent packet.
7. Persist `active_materialized_lanes`, `queued_not_active`, `fresh_ready_supply`, `deficit`, and one limiting reason. A tick with positive deficit cannot claim `HEALTHY`.

Completion criterion: configured ceiling is 8, active ownership never exceeds the fresh effective ceiling, and every free slot with safe ready work is materialized without waiting for the next human prompt.

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
- Never emit an opaque state label by itself. If state is `BLOCKED_AUTHORITY`, immediately explain in plain English: exact decision needed, prevented operation, whether unrelated lanes continue, and whether it blocks whole run or one lane. `WAITING_DEPENDENCY` must not be promoted to global `BLOCKED_AUTHORITY`.
- Re-read live manager state immediately before delivery. After Henry responds, next card must clear stale authority label when `henry_blockers[]` is empty and report current classification; old observer output is history, not current truth.
- Derive progress only from strict integrated + gated + tracker-reconciled children. Do not use elapsed time, tick count, candidate commits, or stale claimed completion.
- If two consecutive observer runs show no hard delta in strict completion, canonical HEAD, lane state/HEAD, or real transition, report `STALLED`; a rewritten heartbeat receipt is not progress.
- On semantic completion, emit one final `COMPLETE` card and then remain silent or retire the bounded observer.
- Keep delivery destination explicit and thread-scoped. The observer is visibility infrastructure, never an alternate runner.

Completion criterion: one manual observer run reaches the intended thread with a truthful card, while the native manager task, scheduler identity, and lane ownership remain unchanged.

### Diagnose “Why Is This So Slow?” From Fresh Throughput Evidence

When Henry questions speed, do not repeat the manager’s `HEALTHY` label or its last progress card. Run an immediate read-only throughput audit:

1. Read live manager/run state and latest tick receipt, but treat stored classification as a claim.
2. Measure host load now. Recompute the capacity tier from the fresh sample; reject `capacity.sampled_at` when it predates the current diagnostic/tick.
3. Compare fresh effective ceiling with truly active, materialized tasks. `QUEUED`, pending task materialization, completed auditors, and stale ownership rows are not active lanes.
4. Count idle usable slots and name the pipeline stage occupying each active lane: implementation, candidate review, integration, integrated audit, external gate/review, reconciliation, or authority wait.
5. Cross-check manager ownership/state against the native task registry and recent session activity. A task emitting current events but absent from manager state is drift; two live tasks for one issue/role are duplicate ownership, not two productive lanes.
6. Measure review latency from the first session event to the first terminal verdict. Report median, upper quartile, and named outliers rather than using a generic “10–30 minutes” estimate. Call this **wall-clock elapsed time**; overlapping sessions are not additive compute time.
7. Count revoked, duplicate, and system-error review tasks separately from completed verdict-bearing reviews. Quantify churn by issue and exact HEAD where possible; raw task count is not throughput.
8. Distinguish strict visible progress from latent work. Integrated issues waiting on final review/verify may cause the strict count to stay flat, but they do not excuse idle capacity when unrelated DAG-ready work exists.
9. Recompute ready supply and dependency unlocks after reviewers finish or integrations land. A stale empty `ready_queue` is not proof that no work is ready.
10. Override an unsupported health label in the report. If safe ready work exists and active materialized lanes are below the fresh effective ceiling, report `STALLED` even when manager state says `HEALTHY`.
11. State bottleneck plainly: host capacity, dependency supply, visible-task materialization, serialized integration/gate, external reviewer, review-generation churn, or control-plane refill failure. Include exact active/ceiling/idle counts and near-term strict completions waiting behind final gates.

When review churn is the bottleneck, preserve quality while removing duplication: one reviewer per issue + exact candidate HEAD; steer/retry the same task on delivery failure; revoke duplicate generations; avoid a fresh semantic review merely because unrelated commits advanced `main`; keep the candidate review focused on acceptance, diff, and adversarial invariants; let the deterministic integrated-tree gate run the full configured suite. Broader integrated semantic audits remain appropriate only for an explicit high-risk boundary.

Never answer speed concerns from elapsed time or percentage alone. Required verdict: **maximally utilized**, **dependency constrained**, **host constrained**, or **orchestration stalled**, with evidence.

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

For non-destructive window recovery and stale-token handling, read.

### Creating the first task from a headless host

When the operator session is headless (no local computer-use), create the manager task — or any first lane task — by dispatching a bounded, file-backed brief to the Mac's own Hermes rather than driving `cua-driver` over SSH yourself:

```bash
ssh <mac> 'nohup hermes -z "Read /tmp/<brief>.txt and execute it exactly." --yolo --cli > /tmp/<brief>_output.txt 2>&1 & echo PID=$!'
```

The brief must pin, in order:

1. Create a NEW task; name the target window/app and pid; never edit, close, or type into existing tasks; never dismiss app permission popups.
2. Paste the full staged directive from disk — no truncation, no rewording.
3. Before sending, verify the composer holds a distinctive clause of the directive and a character count within ~5% of the file size.
4. After sending, verify the rendered user message and an acknowledgement naming queue count, lane model, integration owner, and stop condition.
5. Report the task title, visible thread/task ID, acknowledgement excerpt, and screenshot path — then stop. Do not wait for the created task to execute.

Verify landing driver-free: a new `rollout-*.jsonl` under `~/.codex/sessions/YYYY/MM/DD/` proves the Codex task was created and began executing; its absence means it has not landed, whatever the dispatch agent claims. While the dispatched agent drives, poll only filesystem/process probes — never `cua-driver`, which serializes behind the driving session (see `enterprise-computer-use-routing`, async dispatch fallback). Expect 10–25 min wall time; the one-shot writes its report only at exit.

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
22. Keeping a universal review gate because it sounds independent without measuring unique catches after earlier stages.
23. Calling an unused review system worse; zero observed runs means untested.
24. Removing a gate from source while the live manager, scheduler, validator, or stale receipts still enforce it.
25. Patching the live scheduler during an active manager lease, then trusting the successful write; the finishing tick may overwrite it with its older in-memory contract. Patch/read back after lease release and verify again after the next exercised tick.
26. Treating “scheduler status = PAUSED” as a full-run pause while a manager tick, worker, or reviewer is still active.
27. Letting the automation's completion-only stop clause override Henry's direct pause instruction.
28. Reporting manager/scheduler wall-clock age as productive compute time without an evidenced baseline and strict progress delta.
29. Reporting token burn from the manager thread alone, summing `last_token_usage`, or adding cached/reasoning subsets twice. Aggregate cumulative `total_token_usage` deltas for every repository rollout in the exact window.
30. Calling local `main` “merged” without separately checking remote ancestry/PR state, dirty and non-ancestral worktrees, strict receipts, and live tracker reconciliation.
31. Comparing a 129-item approved queue to all issues in a larger tracker project without separating child execution items from parent/meta issues.
32. Spawning scouts for every issue regardless of complexity. Mechanical one-file changes do not need a discovery team — use team mode only when context is genuinely scattered or ambiguous.
33. Letting a scout write code. Scouts are read-only. If a scout's findings suggest a fix, the worker implements it — scouts never mutate the worktree.
34. Counting scouts as free capacity. Scout tokens burn the same issue-level budget and their lane concurrency counts against the effective ceiling.
35. Inheriting scout conversation context into the worker. Pass scout findings as structured output (text in manifest or direct message), not as inherited chat history.
36. Creating an unbounded delegation tree. Scouts and workers are leaves. No scout spawns another scout; no worker spawns a sub-worker. One level of delegation only.
37. Using team mode to bypass the one-writer rule. Multiple agents investigating is fine; multiple agents editing the same issue is broken.

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
- [ ] Any direct operator pause is verified across scheduler, manager tick, workers, and reviewers; a pause receipt preserves exact resume state
- [ ] Any burn report aggregates exact-window cumulative token deltas across all repository rollouts and separates cached/uncached/output subsets
- [ ] Any salvage/merge report distinguishes local main, remote PR/merge state, active/dirty worktrees, strict receipts, and live tracker state
- [ ] Team-mode scouts are read-only, have `fork_turns: none`, a leaf boundary, and share the same issue-level token budget
- [ ] Reasoning effort is assigned by role (scout=low, worker=medium, hard=high), not by switching model families
- [ ] One implementation owner per lane enforced; scouts never write; workers never spawn sub-workers

## References

- — direct-human pause authority, manager/scheduler/child-task stop sequence, duration accounting, pause receipts, and safe resume.
- — exact JSONL token-delta accounting plus post-pause Git/worktree/PR/tracker reconciliation; use before reporting burn, salvage, merge, or completion status.
- — marginal-defect audit model, universal-gate decision rule, coordinated removal workflow, smoke assertions, and Stardate example.
- — queued-vs-active diagnosis, hard deficit gate, scheduler/template upgrade sequence, and exercised runtime acceptance proof.
- — remote macOS window recovery, fresh AX snapshots, composer/send verification, and stale-token repair.
- — manager/task lifecycle, self-healing scheduler, obstacle classification, replacement rules, and runtime health.
- — comparison notes for `kunchenguid/firstmate`: what to borrow from its agent-distro/runtime patterns and what Runner-Codex-GUI must keep stricter.
- — impact-first approval packets, plan/write/release authority separation, direct-human provenance, three-surface agreement, and defective-packet recovery.
- — the Provencher/Codex Multi-Agent V2 scout/worker/coordinator pattern that inspired team mode; what we adopted, what we rejected, and the envelope-vs-cognition split.
- `templates/manager-directive.md` — full-project parent manager prompt skeleton.
- `templates/scheduled-automation-directive.md` — native 10-minute self-healing automation prompt skeleton.
- `templates/lane-manifest.md` — worker/reviewer/audit task manifest skeleton.
- `scripts/validate_runner_codex_gui.py` — static validator for generated manager/automation artifacts.
