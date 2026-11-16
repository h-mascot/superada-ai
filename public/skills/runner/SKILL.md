name: runner
aliases: [cursor-project-execution-pack]  # legacy kebab-slug alias (Hermes loader does not honor aliases, but kept as frontmatter breadcrumb and for any future loader that does)
description: "Use when preparing a Linear-backed project for autonomous Cursor/Codex execution: audit source-of-truth, map issues to source IDs, clean stale issue bodies, generate an Entity-linked plan, Cursor prompts, gate config, approved queue, and fail-stop preflight. Project-agnostic replacement for the Helm incident workflow. Always paste the active Cursor prompt inline in the chat reply, and ship self-sufficient fallbacks for any live external API the agent must read (Linear, GitHub, etc.) so the run does not dead-end on missing secrets. Hard gates with matrix-shaped checks (proof matrices, capability tables) must support per-issue ownership so the queue can keep moving when the current issue does not own a failing cell. Default executor is Cursor CLI (`cursor agent --print --workspace <repo> --model <model> --trust --force <prompt>`) with the goal-mode prompt; GUI/computer_use is fallback observability only."
version: 1.1.0
author: Book (Henry Mascot's Enterprise Crew)
license: MIT
metadata:
  hermes:
    tags: [cursor, linear, autonomous-builds, execution-plan, cli-tester, entity-fs, project-gates]
    related_skills: [linear, loom, helm-v1-zero-policy-and-apply-discipline, codex, github-pr-workflow]  # loom is the renamed grill-to-linear-execution-graph skill (kebab slug retired 2026-07-02)
---

# Runner (formerly "Cursor Project Execution Pack")

## Overview

Use this to turn a project with Linear issues into a hardened Cursor execution packet: a Helm-style human handoff operating plan, top-of-page copy/paste prompts, a single-issue prompt, a bounded-queue prompt, an end-to-end goal-mode prompt, a CLI Tester + operator review gate config, cleanup manifests, visual-proof policy, receipt-uniqueness rules, and Entity FS links.

**Default executor: Cursor CLI** (`cursor agent --print --workspace <repo> --model <model> --trust --force <prompt>`). The goal-mode prompt is the default launcher for autonomous whole-queue execution. GUI/computer_use is fallback observability only — never the primary control plane. Do not introduce ACP for these crons; Cursor CLI is enough.

**Default builder model:** `gpt-5.5-extra-high-fast` (Cursor CLI alias `gpt-5.5-extra-high-fast` for the GPT-5.5 1M Extra High Fast tier). Fall back to `gpt-5.5-extra-high` when fast mode is unavailable on the account. For Opus 4.8 xhigh use `claude-opus-4-8-xhigh` or `claude-opus-4-8-thinking-xhigh`; do not route Opus 4.8 through Pioneer. Verify model availability with `cursor agent models` before launching; never assume a model alias exists.

**Usage-limit cascade:** When a worker dies instantly with `ActionRequiredError: ... out of usage`, the cap is account-level — switching to another named premium model (`gpt-5.3-codex-high-fast`, `composer-2.5-fast`, etc.) will fail identically. The recovery is to switch the launch script's `MODEL` default to `auto`, which routes to whatever tier the account currently has budget for. Do NOT iterate through named premium models expecting a different result. Full diagnostic + recovery reference:. If `auto` is also rejected, enter a quiet steady state with bounded probes instead of relaunching every tick; see.

**Codex capacity-restoration protocol:** When the user resets or adds Codex capacity, do not immediately launch the next queued issue. Smoke the pinned coder, manager, and reviewer routes independently; pause the supervisor; then reconcile Git, canonical run-state, the zero-drop ledger/receipts, and live Linear. If the prior issue lacks an exact-final-HEAD clean review, canonical gate, operator approval, verify receipt, zero actionable findings, or live state/comment proof, restore it as current and repair that chain first. Resume through a generation-bound single-issue envelope only after strict completion.

The primary artifact is **not** a thin artifact index and not a raw API URL. It is a human-readable `plan.md` that another Book/Cursor session can open and execute from. Return the `/docs/source/.../plan.md` handoff link first; include `/api/file/raw?...` only as a secondary machine link.

This skill exists because Helm showed the failure mode: a strict prompt can still block forever if live Linear is stale, the repo branch lacks local rules, proof commands are imaginary, the approved queue is empty, the handoff plan omits the actual Cursor prompt/gate instructions, local Cursor is assumed to provide video by magic, or a machine PASS is mistaken for operator approval. The fix is not prompt theater. The fix is a source audit, explicit mapping, live issue cleanup, a complete operating handoff page, issue-specific receipts, and fail-stop gates before Cursor continues.

## When to use

Use when Henry asks for any of these:

- “make Cursor build this autonomously”
- “generate the plan and prompt for Cursor”
- “run through Linear issues with testing/video evidence”
- “use the Helm workflow for another project”
- “check Cursor progress” / “what happened to the task we started?” / “is the Cursor agent blocked?”
- multi-issue Cursor/Codex builds with local proof gates
- Linear-backed project execution needing Entity FS plan links

Do **not** use for a one-off tiny edit.

Default operating mode now depends on Henry's wording:
- If Henry asks to **generate a pack / prepare prompts / handoff only**, produce the execution pack and leave the cron section as opt-in.
- If Henry asks to **run this skill on a project**, **set up autonomous Cursor**, **queue all tasks**, or **make Cursor build this autonomously**, the deliverable is the completed end-to-end run: execution pack + full approved queue + active selected-executor goal worker + recurring Book supervisor + every approved issue strictly complete + final full build/E2E proof + live Linear reconciliation + queue-drained auto-stop. Do not stop at pack generation, baseline commit, worker launch, partial queue completion, or a review-finding loop.

## Delegated controller and relentless completion loop

A whole-queue Runner invocation is a **durable execution mission**, not one long parent-agent tool loop. Use delegation to keep the calling session out of repetitive implementation and review work while preserving a real selected-executor/model receipt.

### Control-plane split

1. **Parent controller — bounded calls only.** The parent retrieves source context, selects the executor/model, records approval boundaries, dispatches the preflight orchestrator, independently verifies the resulting baseline/pack, launches the durable goal worker, registers the supervisor, and verifies final closure. Do not make the parent perform issue-by-issue coding or an open-ended autoreview/fix loop.
2. **Preflight orchestrator subagent.** Dispatch one `delegate_task(role="orchestrator")` with the repo path, exact source authority, issue graph, executor/model requirement, proof commands, and completion predicate. It may spawn focused leaf subagents for source/mapping audit, pack generation, tests, and review fixes. It must write artifacts first, work from the absolute canonical repo path, and return exact paths plus gate output—not a prose-only self-report.
3. **Durable implementation worker.** Launch the selected executor as a tracked background CLI process from the parent (`terminal(background=true, notify_on_complete=true)`) or via the project launcher, then supervise it with the recurring cron. `delegate_task` is not durable across parent-session termination and must not be the only owner of a multi-hour build.
4. **Closure orchestrator subagent.** After the worker reports queue drain, delegate a bounded independent audit of the final issue graph, committed deltas, proof receipts, final full gate, live Linear distribution, and summary. The parent verifies the audit's handles before declaring completion.

### Model-route rule

If Henry pins an executor/model/effort, subagent execution is not proof that the requested route built the product. Delegated agents may prepare, inspect, review, or repair, but implementation must still run through the requested CLI/model/effort and produce an actual route receipt. For example, a Codex `gpt-5.6-terra` high run must show a real Codex CLI launch and session/model metadata; an inherited Hermes subagent model does not satisfy that requirement.

### Relentless completion predicate

Once safe preflight passes, stay in a resume/relaunch/review-fix loop until exactly one terminal state is true:

- **DONE:** every approved issue is strictly complete; all required issue gates and reviews pass; the final integrated HEAD passes the full repository gate and required browser/E2E proof; no proof/state-change queues remain; live Linear reports `not_done: []`; the final queue summary exists; no selected-executor worker remains; and the supervisor has self-paused.
- **HARD BLOCKED:** progress requires a human-only authentication step, explicit product/architecture decision with no approved owner, destructive/external commitment, unavailable source of truth, or an unsafe write for which the API exposes no concurrency guard. Record the exact blocker, affected issues, completed work, preserved artifacts, and one precise unblock action.

The following are **not terminal blockers**: parent tool-call pressure, a subagent timeout, a worker exit, a failing test, an autoreview finding, a dirty generated receipt, stale cached state, or an issue-scoped implementation bug. Inspect what landed, delegate or relaunch the missing bounded phase, fix the finding, rerun proof, and continue. Never convert “the pack is ready” or “the worker was launched” into a final success response.

### Delegation safety

- Serialize issues that share files or dependencies. Parallelize only proven-disjoint worktrees/areas, with a single integration owner.
- A subagent self-report is evidence to inspect, not completion. Verify files, git state, tests, process identity, receipts, and external mutations from the parent or closure auditor.
- On timeout, inspect the repo, logs, processes, and receipts before re-dispatching. Resume only the missing work; do not restart a completed mutation.
- Keep the recurring supervisor delta-first and durable so parent-session compaction or tool-call exhaustion cannot strand a healthy worker.

### Isolation and ownership lease

Before launch, prove that the selected Linear project, repository branch/worktree, and driver state have one execution owner.

- Record `runId`, `owner`, `linearProjectId`, `sourceProjectId`, `repo`, `branchOrWorktree`, `executor`, `model`, `startedAt`, `heartbeatAt`, and lease status in driver state.
- If another person/agent is actively working the same Linear project or writable worktree, do not share it. Duplicate the Linear project into an owner-named project, create a separate branch/worktree, clear inherited assignees, and rebuild every identifier/dependency/mapping artifact against the duplicate before launch.
- A project clone is not complete when only the project shell exists. Verify issue count, unique source IDs, rewritten self/dependency identifiers, native dependency relations when used, no inherited assignees, proof labels, project URL, and a saved old→new identifier map.
- Supervisors and workers must compare their recorded `linearProjectId` and `repo/worktree` lease before every write. A mismatch is HARD BLOCKED; never fall back to the source project silently.

Full clone, identifier-rewrite, relation-copy, verification, receipt, and active-pack rewire recipe:.

### Bounded preflight launch budget

Preflight exists to make launch safe, not perfect.

- Run one complete selected-executor review and at most two focused repair/re-review cycles before classifying remaining findings.
- P0/P1 safety, source-authority, secret, mapping, concurrency, auth, and broken-gate findings block launch.
- P2/P3 maintainability or enhancement findings that do not invalidate the baseline become explicit approved-queue work with owners and proof criteria; they do not keep the launchpad in an endless review loop.
- The delegated preflight orchestrator owns this budget and writes a classification receipt. The parent should spend only bounded verification calls before launching the durable worker.

## Executor selection — Cursor or Codex CLI

The executor is a project-level decision, not a hard-coded Cursor assumption. Resolve it before generating artifacts.

- Default remains Cursor CLI only when no executor is specified.
- If Henry specifies **Codex CLI**, all generated pack artifacts, worker commands, state names, and supervisor prompts must use Codex. Do not generate Cursor commands and relabel them.
- Codex Enterprise preflight: verify `command -v codex`, `codex --version`, `codex login status`, clean intended repository, and a real one-shot smoke inside the repository.
- Codex launch pattern for a Henry-authorized **autonomous local implementation run**: `codex exec --dangerously-bypass-approvals-and-sandbox -C <repo> - < <goal-prompt>`. This is the default whole-queue route because build tools may require subprocesses and loopback ports that workspace-write denies. The preflight must first prove a clean baseline, candidate-commit secret scanning, a single-owner worktree lease, and a goal prompt that forbids push, PR, merge, deploy, destructive operations, external messages, secret exposure, and collaborator/source-project writes. Use `--full-auto` for bounded or untrusted work where those safeguards or autonomous authorization are absent. See.
- **Codex CLI flag drift:** before writing any launcher script, run `codex exec --help` and grep for the flags you plan to use — `--output-format stream-json` was removed in newer builds (use `--json` for JSON events, `-o/--output-last-message <FILE>` for the final message); a removed flag aborts the worker instantly with `error: unexpected argument`. Wire protocol drifts too: `wire_api = "chat"` is rejected at config load, so Codex can only serve responses-wire upstreams (e.g. responses-wire upstreams on your gateway). Never add a chat-wire provider block to `~/.codex/config.toml` — one invalid `[model_providers.*]` entry breaks config load for EVERY codex run until removed; run a one-line canary `codex exec` after any provider edit. When the operator pins a chat-wire model (e.g. a gateway DeepSeek route), pick the harness by wire type (chat-completions harness such as `dsh --profile headless`) and say so in the receipt. A healthy `--json` worker log is newline-delimited `item.started`/`item.completed`/`agent_message`/`turn.completed` events; parse the tail for the last `agent_message` to get the worker's own progress/bar/blocked report.
- **Match the executor harness to the model's wire protocol before generating any pack.** Codex speaks responses-wire only: chat-completions-served models (DeepSeek/Anthropic upstreams on a chat-capable gateway) are rejected by the endpoint itself, and writing `wire_api = "chat"` into `~/.codex/config.toml` to fix it makes codex refuse to load the whole config — every codex run dies globally, not just that provider's. Route chat-wire models through a chat-capable harness (e.g. a chat-completions headless one-shot harness, model wired in the harness profile) and keep codex for responses-wire models. Canary the exact model id through the chosen harness with an exact-marker reply before building a queue around it.
- **Worker-vs-supervisor handoff in packet mode works.** A goal-mode Codex worker with a packet-mode `bookReview` config implements the full issue contract, runs the four gate steps itself, then self-blocks on `book-review` (`decision: REQUESTED`) — which is correct behavior, not a failure. When the worker process then exits (turn completed), the supervisor owns the full manual closeout: independently re-verify the ACs (run the tests/typecheck yourself, don't trust the log), flip the packet receipt to APPROVED with digests bound to the gate's FRESH `evidenceDigest`, re-run `verify`, make the safe commit, advance run-state, and relaunch the worker for the next issue. Trust the worker's self-report only as evidence to inspect.
- Codex runtime state belongs under `.codex/` or a neutral `.runner/` path, not `.cursor/`. External-API snapshots and write queues remain required.
- The Runner verification, issue mapping, dependency ordering, CLI Tester four-step gate, operator review, safe-commit, Linear reconciliation, final summary, and supervisor auto-stop contracts apply unchanged.
- Patch generated prompts and the supervisor to name the selected executor consistently. A pack containing both `cursor agent` and `codex exec` as primary commands is invalid.
- Name prompt artifacts for the selected executor (`cursor-*.md` or `codex-*.md`) and validate with `scripts/validate_execution_pack.py <pack-dir> --executor <cursor|codex>`. Do not create Cursor-named compatibility files in a Codex pack just to satisfy an old validator.
- Use for canonical-approval checks, atomic external snapshots, race-safe Linear cleanup, candidate-commit secret scanning, receipt hygiene, and final prelaunch closure.

## Supervisor economics and stop-loss

A recurring supervisor is part of the workload, not free control-plane magic. Before launching any whole-queue run:

- Keep CLI workers as the primary execution path. A scheduled GUI/Codex task may observe or perform a bounded recovery, but it must never become the long-lived primary manager for a full issue graph.
- Record a strict baseline: verified completions, live Linear distribution, integrated main SHA, active workers, wall-clock start, and model token counters when available.
- Make each tick delta-first. Read compact indexes, hashes, changed receipts, and new process/task transitions; do not reread enormous skills, PRDs, state files, and full conversation history every few minutes.
- Track controller cost separately from worker cost: total/cached/uncached input, output/reasoning tokens, supervisor share of total burn, completions/hour, and tokens per strict completion.
- Install a stop-loss before launch. Pause and investigate when ready work exists but there is no strict completion across three consecutive ticks or one hour; when materialized lanes remain below the safe target for two ticks; when the controller consumes more than 25% of total tokens over the measurement window; or when state, Git, receipts, and Linear disagree about completion.
- A positive throughput deficit is `STALLED`, not healthy. Queued/requested/reviewer packets are not active workers.
- When a stop-loss fires, pause the supervisor first, preserve worktrees and receipts, and run a separate bounded salvage/reconciliation goal. Do not keep tuning the live manager while it continues burning budget.
- Salvage success is not backlog completion. Report proven merged issues and remaining backlog separately.
- Final closeout must reconcile four surfaces independently: integrated local main, remote GitHub main/PR state, exact commit bindings/receipts, and live Linear state/comments.

**Launching a background worker from `execute_code`:** the `hermes_tools.terminal()` wrapper available inside `execute_code` does NOT accept `background`/`notify_on_complete` kwargs — those belong to the top-level `terminal` tool only. Calling `terminal(..., background=True)` from inside `execute_code` raises `TypeError: terminal() got an unexpected keyword argument 'background'`. To launch a tracked background Cursor worker from a supervisor cron that is itself running inside `execute_code`, either (a) use the top-level `terminal` tool with `background=true` + `notify_on_complete=true` directly (not via `hermes_tools`), or (b) `subprocess.Popen` the `launch-worker.sh` and track the PID via the `process` tool. Do not pass background kwargs through the `execute_code` `terminal()` wrapper. **Quoting pitfall when paths contain spaces** (e.g. paths containing spaces): composing `cursor agent --workspace $REPO ... --force "<prompt>"` through `subprocess.run(shell=True, ...)` with an unquoted `$REPO` fails cryptically (`/bin/sh: .../Crew: Is a directory`, no worker log written, rc=126/1). The durable fix is to write the prompt to a file and generate a bash launcher script in which every path is Python-`repr()`-quoted (single-quoted literal that survives spaces) and every expansion is double-quoted, then `bash <script>` rather than executing the raw composed command. Also prefer `--json` for long Codex workers so the supervisor can tail new log bytes each cycle instead of waiting for EOF (see the Codex CLI flag-drift note above — verify flags with `codex exec --help` before writing any launcher).

See for the launch ledger, stop-loss decision table, and salvage closeout receipt.

## Hard rules

- Autonomous safe-commit policy: when Cursor or the driver has completed an issue with proof green, CLI Tester run PASS, operator review APPROVED/safeToContinue=true, verify nextChildBlocked=false, GitNexus/diff risk LOW, and secret scan clean, make the obvious local save-point/stack commit without asking Henry. Commit only intentional source/context/gate/issue-scoped files. Never commit runtime state, receipts, logs, output/, `.cursor/*run-state*.json`, secrets, or unrelated files. **Tracked-but-ignored receipt leak (supervisor recovery):** files under an `.gitignore`'d path (e.g. `output/`) still land in a builder's commit if they were tracked *before* the ignore rule was added — `.gitignore` does not untrack already-tracked files. Each gate re-run then dirties them (`M output/...`) and the builder's commit silently absorbs generated receipts. Detect with `git ls-files output/` (non-empty = leakage) or `M output/...` lines in `git status --porcelain`. Recovery: `git rm --cached <receipt files>` + `git commit --amend --no-edit` to keep the issue-scoped commit clean, then re-run `project-test-gate run <ISSUE>` (this regenerates `evidenceDigest`), copy the fresh digest into both `evidenceDigest` and `gateEvidenceDigest` of the packet book-review receipt, then re-run `verify`. Check this on every issue where `output/` is gitignored but `git status` shows `M output/...`. Push/merge still requires explicit authorization.
- Autonomous sign-off deferral policy: do not fabricate Henry sign-off, but also do not stop a healthy queue for a documentation/inspection sign-off when a later approved issue explicitly owns the formal decision/ADR. Record the deferral in run-state/driver-state, name the owning follow-up issue, and continue if proof/gates are green and risk is LOW. Stop only when the human sign-off is the actual product/architecture decision with no owning follow-up, or when gates/risk/secrets/destructive/push/merge conditions require escalation.
0. **Running the skill means producing the execution pack, not auditing the skill.** When Henry invokes this skill or asks whether a plan/prompt should come from it, locate or generate the concrete artifacts: human `plan.md` link, raw fallback link, artifact directory, Cursor prompt location/section, Cursor-ready verdict, and blockers. Do not stop after summarizing the skill text.
1. **Source audit and execution-authority gate first.** Do not generate or approve executor prompts until source-of-truth docs, repo rules, live Linear issue bodies, proof commands, branch context, and canonical status language have been inspected. A hash-valid source that still says `draft`, `do not ticket`, or `pending approval` is a hard blocker. Record explicit execution authorization in the canonical status or a higher-authority decision record, then regenerate source hashes, mapping artifacts, plan text, mirrors, and runtime baselines.
2. **No ordinal or invented-fragment mapping.** Build `linear_id_to_source_id.json` from title/scope/structured source IDs. Store the canonical path plus exact heading text and 1-based line number; abort if the heading is absent. Do not emit fabricated fragments such as `file.md#§7` unless that anchor actually exists. If a mapping is unknown, mark it `needs_review`; never map “first child to first spec section.”
3. **Parent epics are containers.** Cursor implements child issues unless Henry explicitly approves a parent-level coordination task.
4. **Approved queue only.** Cursor may only work issue IDs present in the approved queue. No self-discovery, no “pick next safe issue,” no broad project scan as work selection.
5. **Persistent run-state file per project.** Use a project-local state file such as `.cursor/<project>-autonomous-run-state.json`; add it to `.gitignore`; never commit runtime state.
6. **Per-issue reread contract.** Every Cursor prompt must tell Cursor to reread the issue body, plan, repo rules, gate config, and state file before each issue and after any compaction/restart.
7. **CLI Tester by default.** Use a shared project test-gate script with a per-project `.project-gate.json`. Do not copy generic gate runners into app repos.
8. **operator review is distinct from machine PASS, but must not become a stall.** `project-test-gate run` proves commands/scans/receipts. A separate operator review is useful only when it adds signal. If automated review gates are clean — especially Codex autoreview plus thermo-nuclear review for high-risk work, or equivalent configured review gates — the driver may record an explicit `bookReviewSkipped`/`safeToContinue=true` waiver and continue to the next issue. Default new pack configs should avoid hard-stopping on Book packet review when stronger automated review has passed; use operator review as escalation for ambiguous scope, dirty diffs, failed/partial proof, secrets/security concerns, or user-facing risky changes. The operational definition of "low-risk fast-path" — the cases where local auto-approve is the right default — is in. Every driver cron and every project gate config must use the same wording; do not fork the policy per project. After Henry accepts a recommendation set, codify it: see the **Approval-to-codification workflow** section below and for the live `jobs.json` patch pattern.
9. **Fail-stop.** Stop on stale/mismapped issues, banned terms, invalid proof commands, failed tests, missing gate receipts, missing operator review receipts/approval, reused receipts, or branch/rule mismatch.
10. **Review ladder.** Codex autoreview is default for non-trivial changes. GitNexus/AGENTS commit gate is required when configured and fresh. Thermo-nuclear review is only for high-risk issues.
11. **Video proof policy.** Cursor Cloud is the preferred path when Henry asks for video evidence. Local Cursor must at least produce browser/DOM/screenshot proof for UI-facing work; local video requires an explicit Playwright/browser/macOS recording step. Do not require video for backend/docs work unless the issue asks for it.
12. **Receipt uniqueness.** Every CLI, review, screenshot, or video receipt must be tied to the issue ID, branch/PR, commit SHA, changed files, and commands. Never reuse one child issue’s receipt as proof for another.
13. **Plan links.** Publish the plan to your docs host and provide both a human-friendly link and a raw machine-readable link. Do not make the raw API link the primary artifact.

14. **Full child queue by default.** When Henry asks for an autonomous project execution pack and the mapped Linear graph is clean, the approved queue must be **all mapped child issues** in dependency-safe order, not a tiny pilot/sampler. Parent epics are containers. Use a smaller pilot queue only if Henry explicitly asks for canary/pilot, if preflight/mapping is unresolved, or if source blockers make downstream children unsafe.
15. **Cron launch is wording-dependent.** For handoff-only asks, include cron/check-in text only as an optional bottom section labelled “do not register unless explicitly asked.” For autonomous execution asks — “run this skill on the project,” “set up Cursor CLI,” “queue all tasks,” “make Cursor build this autonomously,” or equivalent — the skill must continue through registration: stage the goal prompt, verify Cursor CLI auth/model, launch the goal-mode worker, create/update driver state, and register the recurring Book supervisor cron.
16. **Helm-style goal-mode prompt is the default.** Every generated pack MUST include an executor-native goal prompt (`cursor-goal-prompt.md` or `codex-goal-prompt.md`) mirroring the Helm v1 shape:
    - `/goal` invocation at the top
    - Repository, plan, raw-fallback, and Linear project block
    - Linear API access note: use global `LINEAR_API_KEY`; if absent in the selected executor, do **not** OAuth — open a new terminal or source your environment secrets non-verbosely
    - Linear access fallback block pointing at the in-repo snapshot + helper (see hard rule 18) so the agent is not forced to acquire a secret
    - Authority order ending with the plan file as operating guidance
    - "Before coding" reread list aligned with the bounded-queue prompt
    - Project-specific known policy block
    - Hard zero-policy block naming any project-banned external coordination/plugin/service terminology
    - All four CLI Tester steps: `request`, `run`, `book-review`, `verify`
    - UI proof / video evidence policy consistent with the plan
    - Receipts/state/Book-review sections
    - Canonical no-merge sentence: `Do not merge without Book/SuperAda verification unless Henry has explicitly authorized Cursor to merge.`
16. **Four-step CLI Tester gate.** Every selected-executor prompt file (`<executor>-single-issue-prompt.md`, `<executor>-bounded-queue-prompt.md`, `<executor>-goal-prompt.md`) MUST declare all four steps in order: `request`, `run`, `book-review`, `verify`. The `run` step alone is never sufficient when `bookReview.required` is true. **Format requirement (validator):** the validator matches each step with one of four prefixes — `` `<step> <ISSUE_ID>...` `` (backtick + space), `` `<step>` `` (backtick only), `<step> <ISSUE`, or `<step> <ISSUE_ID`. A bare shell line like `project-test-gate --config .project-gate.json request <ISSUE_ID>` does NOT satisfy the check. Use the backtick form, one line per step. See §3b.
17. **Canonical no-merge sentence.** Every prompt and the plan MUST use the exact sentence: `Do not merge without Book/SuperAda verification unless Henry has explicitly authorized Cursor to merge.` Do not paraphrase, shorten, or weaken it.
18. **Self-sufficient external-API fallbacks.** Every prompt that reads from a live external API (Linear, GitHub, Sentry, OpenAI, Notion, etc.) MUST ship:
    - an in-repo data snapshot at a documented, gitignored path (e.g. `.cursor/linear-live.json`);
    - a helper script that reads the snapshot first and re-fetches live only when the secret is in env (e.g. `scripts/linear/get_issue.py`); refresh into a temporary file, validate it, and atomically replace the cache only on success so transient API/rate-limit failures preserve the last known-good snapshot;
    - a write-path queue (e.g. `proofCommentQueue` in the run-state file) for actions that genuinely require the secret, so the agent can record the intended body and a later session can post it.
    Block only when both snapshot and secret are unavailable. Treat the live key as optional for read paths, required for write paths. See.
19. **Inline prompt in chat reply.** After running this skill, the chat reply MUST include the active selected-executor prompt inline as a fenced `text` code block (not `bash`). Default to the goal-mode prompt when whole-queue execution is expected; otherwise paste single-issue and bounded-queue too. The user must be able to copy/paste without opening any sibling file. If the reply lacks a fenced code block whose first line is `/goal` or `# Cursor ` or `# Codex `, the reply is incomplete. See.
20. **Per-issue ownership for matrix-shaped hard gates.** When a hard gate is checking a matrix of (resource, attribute) cells (proof matrices, source/provider coverage, capability tables), the gate MUST expose a per-issue verdict in addition to the queue-wide verdict. Queue-wide FAIL must not block issues that own zero failing cells. Persist the deferred cells in a `deferred-claimable-cells-<TS>.json` manifest at `output/<project>/proof-matrix/` so downstream sessions see what is owed and by whom. The runner should forward a per-issue env var (e.g. `HOSHI_PROVE_ISSUE`) to the gate script. Print the per-issue verdict line BEFORE any `exit 1` so `set -euo pipefail` does not swallow it. On macOS `/bin/bash` (no associative arrays), use a `case`-statement `cell_owners()` function for ownership lookup. See.
21. **CLI Tester gate-config normalization.** The shared `~/Code/cli-tester/bin/project-test-gate` scanner uses exact-string prefix matching, not globs: `docs/specs/**` does not match. Use plain prefixes (`docs/specs`, `codedb.snapshot`, etc.) in `scanExcludePaths`. The runner reads `bannedTerms`, `privateDefaultPatterns`, and `scanExcludePaths` at the root of the gate config; mirror the legacy nested `scans.*` block only for back-compat. Always exclude `.cursor/linear-live.json` (or any in-repo external-API snapshot) — it is the largest source of false-positive banned-term hits. `proofCommands` must be an array of shell command strings; richer metadata goes under `xProofCommandsDetailed`. See.
22. **Packet-mode Book-review local approval.** When `bookReview.mode` is `packet` (no Hermes API reachable) and CLI Tester `run` shows `status: PASS` with `bannedTermScan.hitCount: 0`, `privateDefaultScan.hitCount: 0`, all changed paths are issue-scoped and allowlisted, and no `output/`, `evidence/`, `artifacts/`, `.cursor/*run-state*.json`, `.env*`, or secret-pattern files are staged, the supervisor cron is allowed to convert `decision: REQUESTED, safeToContinue: false` into `decision: APPROVED, safeToContinue: true` locally, re-run `verify` to clear `nextChildBlocked`, drain the queued Linear actions via helpers, and advance the queue. Otherwise leave the BLOCKED state and report the blocker. Hard rule: this repair lives in the cron, not in `bookReview.autoApprove` config — keep the verification explicit. **Evidence-digest requirement:** when you locally write or mutate the packet book-review receipt, its `evidenceDigest` AND `gateEvidenceDigest` must exactly equal the gate receipt's current `evidenceDigest` (`output/<project>/test-gate/<ISSUE>.json`). A mismatch makes `verify` fail with `operator review blocked continuation: review evidence digest does not match current gate evidence` and leaves `nextChildBlocked` true. Copy the gate's `evidenceDigest` into both fields, then re-run `verify`. The receipt must ALSO carry the gate's `branchOrPr` and the exact post-commit `commit` SHA (`git rev-parse HEAD` after the issue commit) — `verify` compares the review's branch/commit bindings against the gate receipt, and a digest-only receipt fails with `review branch does not match gate evidence` even when both digests match. Bind all four fields (digest ×2, branch, commit) on every approval. **Goal-mode worker self-advance:** when the long-lived goal-mode CLI worker is alive, it polls the book-review receipt itself — flipping the decision to APPROVED is enough; the worker runs its own verify, reconciles Linear (state + proof comment), and advances to the next issue. The supervisor must NOT relaunch, signal, or write run-state/Linear for that issue concurrently (write race); only record the transition idempotently in driver-state/run-state after observing the worker move on. Before approving, run the issue-relevant integration checks the gate's `proofCommands` skipped — they are commonly `skipped` without their own env vars (`TEST_DATABASE_URL`/`TEST_REDIS_URL`, not the app's `DATABASE_URL`/`REDIS_URL`) and there is usually no `test:integration` script, so run them directly via `pnpm --filter <pkg> exec vitest run <file.integration.test.ts>` with the `TEST_*` vars exported. See,, (live worker: supervisor does minimal, worker self-advances), and (dead worker: supervisor owns the full manual closeout — approve + verify + Linear reconcile + run-state advance + relaunch — because the worker's self-advance poll loop is gone).

**CLI Tester invocation:** the shared gate runner at `~/Code/cli-tester/bin/project-test-gate` is a **Node.js** script. Invoke it with `node ~/Code/cli-tester/bin/project-test-gate --config .project-gate.json verify <ISSUE>` (or `request`/`run`/`book-review`). Invoking it with `python3` fails with `SyntaxError: invalid decimal literal` from the JS regex literal in the source. When launching from a supervisor cron or `execute_code`, detect the runtime once (`head -1` shebang or `file`) and use the correct interpreter.
23. **Linear API quirks.** `IssueUpdateInput` does not accept `id` or `state`. Pass `id` as a top-level mutation arg and use `stateId` (workflow-state UUID), not `state: "<name>"`. Workflow state UUIDs are resolved via `workflowStates(filter:{name:{eq:"In Review"}})`. Read the global `LINEAR_API_KEY` from `~/.hermes/.env` non-verbosely (sandbox redacts the literal token; load it via a temp file with mode 0600 and reference `os.environ['LINEAR_API_KEY']`). Use helpers (`scripts/linear/post_proof_comment.py`, `scripts/linear/set_issue_state.py`) instead of letting Cursor call Linear directly. See.
24. **Safe skip-ahead beats operator wait.** When a Cursor-driver cron is blocked only because the immediate next approved issue depends on a later approved issue, it must look for the earliest later approved issue that is independently unblocked, issue-scoped, and safe. If one exists, update run-state/driver-state to defer the blocked issue, run the safe issue next, and keep the original dependency semantics intact. Do not ask Henry for a pick in that case. Escalate only if every remaining issue is blocked/unsafe or if progress requires reordering/building the dependency chain ahead of the approved order. Worked ShowClaw example: `THE-327` blocked by later `THE-330`; `THE-329` independently unblocked, so run `THE-329` and defer `THE-327`/dependents.
25. **Live Linear reconciliation is part of done.** For Linear-backed queues, queue-drained/local-complete/merged is not complete until the live Linear board is reconciled. Before pausing/stopping the supervisor or saying “fully done,” query every approved child issue in Linear, verify state type `completed`, verify proof/gate comments or intentional skip receipts, drain `proofCommentQueue`/`stateChangeQueue`, repair missing state/comments, and re-query for `not_done: []`. See.
25a. **Paperwork mule can desync from the build convoy.** Local run-state can report N/N complete and `main` may already be merged while live Linear still shows every child in `Backlog`. The most common cause is that proof-comment posting depends on session env vars (`PROJECT_GATE_POST_LINEAR`, `BOOK_API_BASE` / `API_SERVER_KEY`) that were unset for the run, so the convoy queued comments in `proofCommentQueue` instead of posting live. Run-state lying and Linear disagreeing is a **known packet-mode failure mode**, not a one-off. If Henry asks "why haven't the tasks moved on Linear?" or "is the agent updating Linear?", do not trust run-state alone: query live Linear for `state.type` distribution and `comments` count, and reconcile. The repair pattern is documented in.
25. **Queue-drained auto-stop is mandatory for every driver cron.** When a driver’s approved Linear child queue is fully drained (run-state `status` is `completed`/`queue_drained`, `currentIssue` is null, `proofCommentQueue`/`stateChangeQueue` are empty, no Cursor worker is active for the repo, and the final validation/promotion receipt exists), the cron must self-pause: write `queueDrained: true`, `observedStatus: "queue_drained_auto_stopped"`, `stoppedAt`, `cronJobId`, and `finalProofPaths` to driver state; run `hermes cron pause <job_id>`; emit exactly one tiny final line. Do not keep heartbeating or relaunching the worker for a completed queue. Patch all three layers together: the reusable template, the live cron prompt in `~/.hermes/cron/jobs.json`, and any sibling driver state. Full signal/verification/anti-pattern reference:.
26. **Queue final summary is mandatory.** At the end of any autonomous queue, before or alongside queue-drained auto-stop, write `output/<project>/queue-summary/<timestamp>.md` (or the project’s equivalent proof root) and send a compact final summary to the origin channel. The summary must include: number of Linear items worked on in the queue/run, number still blocked with blocker reasons, number of agents/workers involved (Cursor/Codex/Book/etc.), total wall-clock hours from first recorded queue/worker start to final stop, live Linear reconciliation counts (`completed`, `not_done`, comments posted/queued), final commit/branch/proof paths, and whether the cron self-paused. If any field is unknown, say `unknown` and name the missing source; do not guess. This final summary is required even when normal healthy-cycle reports stay tiny.
27. **External bulk writes require real concurrency protection.** Save immutable current/proposed bodies, compare snapshot/proposed/live hashes by UUID, paginate audit comments, and persist the manifest atomically after every item. If the API exposes no expected revision, ETag, version, or `updatedAt` guard, do not perform an unconditional automatic body rewrite; mark `manual_body_update_required`, apply through a reviewed/manual path, refresh live state, and rerun idempotent reconciliation. A second read only narrows the race and is not compare-and-swap. See.
28. **Secret gates scan the candidate commit, not only the worktree.** Scan every staged blob with `git show :<path>`, plus modified and non-ignored untracked files from disk. Do not exempt docs/source or docs/runner. Any force-staged runtime/proof/secret path (`.runner/`, `.cursor/` run-state, `output/`, `evidence/`, `artifacts/`, `.env*`) fails immediately even when no recognized secret pattern matches. Print path/line/pattern, never the credential value. Regression-test untracked secrets, index-only secrets, documentation secrets, and force-added prohibited paths.
29. **Generated receipt hygiene is part of preflight.** Provider, Linear, gate, and review receipts can expose internal endpoints, response IDs, local paths, key-source locations, or mutable remote metadata without containing a literal secret. Keep them under ignored proof roots, audit imported receipts before staging, and reject receipt files from the baseline commit unless they are deliberately redacted immutable source evidence.
30. **Baseline closure precedes launch.** After every accepted autoreview fix, rerun focused tests and review until clean, but run that iterative fix/review loop inside a delegated bounded preflight lane rather than consuming the parent controller's tool budget. Rebuild pack artifacts after canonical or live-source changes, verify the Entity/API readback hash, refresh driver-state baselines to the final canonical hash, create the clean baseline commit, and only then launch one worker plus the supervisor. A prepared pack without a live worker receipt is not a completed autonomous-run request.
31. **Delegate phases, not accountability.** For whole-queue runs, the parent must dispatch a preflight orchestrator subagent, use the selected executor as the durable implementation worker, and dispatch a closure auditor. The parent independently verifies the handles each phase returns. Do not run dozens of issue/review iterations directly in the parent session when they can execute inside a bounded subagent or the durable CLI worker.
32. **Tool-call exhaustion is a controller defect, not a project blocker.** Before a long run, move iterative work behind subagents/background workers and register the supervisor early. If the parent approaches its context/tool budget, persist state and hand the next bounded phase to a subagent or cron; do not stop a healthy build merely because the calling session is expensive.
33. **No premature terminal state.** If approved work remains and there is no HARD BLOCKED condition, the Runner must resume, fix, re-review, relaunch, or advance the next dependency-safe issue. “Pack ready,” “baseline green,” “worker launched,” “review found issues,” and “some issues complete” are progress states, never final deliverables for an autonomous execution ask.
34. **Final response gate.** An autonomous Runner run may report success only after the DONE predicate in “Delegated controller and relentless completion loop” is independently verified. Otherwise report HARD BLOCKED with one precise unblock action; never summarize partial work as though the skill finished.
35. **One owner per writable surface.** Before launch, acquire and verify the run ownership lease for the exact Linear project ID and repo branch/worktree. If another active human/agent owns either surface, isolate the run by cloning the project and creating a separate branch/worktree; clear inherited assignees and regenerate identifier/dependency artifacts. Never let two builders share a live issue graph or writable tree by convenience.
36. **Bound preflight, not safety.** One full review plus two focused repair cycles is the default prelaunch budget. Unresolved P0/P1 findings remain blockers; non-blocking P2/P3 findings must be converted into owned queue work rather than extending preflight indefinitely. This budget does not weaken proof gates after implementation.
37. **Freshness and provenance precede generation.** Active-pack generators must fail before any write unless the external snapshot proves the exact target project, live endpoint/provenance, UTC capture time within the configured short TTL, expected unique source-ID set, and complete issue count. Canonicalize paths so a source snapshot cannot overwrite the active target snapshot through alternate spellings.
38. **PASS is a receipt, not prose.** Generated plans/checklists may mark live scan, full gate, model route, or publication readback PASS only when current ignored receipts bind exact target ID, snapshot/log/artifact hashes, timestamps, command exit status, and HTTP/API readback where applicable. Clean-checkout tests must pass without `.runner/`; cross-target runtime progress must be archived and reset, never transferred.
39. **Close the runtime verification handshake.** Comprehensive wrapper gates and receipt scripts remain the proof of breadth, but after the final code edit also run at least one directly detectable canonical project command (`pnpm run lint`, `pnpm run typecheck`, `pnpm run test`, `pytest`, or the ecosystem equivalent) as a top-level tool call and confirm the runtime records passing verification evidence. If a real suite exists, never answer an `unverified` runtime prompt with an ad-hoc verifier; use the canonical command, then keep the full gate receipt alongside it.
40. **A start-status check is an execution audit.** Distinguish PACK_READY, WORKER_LAUNCHED, ISSUE_CLAIMED/PRE_EDIT, IMPLEMENTING, GATED, and DONE using exact process argv, route receipt, run-state, git/product deltas, and supervisor state. When an earlier autonomous execution request remains authorized and the audit finds no worker, answer “No” plainly and resume through baseline, exact-route launch, supervisor registration, and first-issue verification unless a new approval boundary exists. Never describe an issue claim as code implementation; say explicitly when no product diff exists. See.
41. **Baseline build defects are supervisor-owned recovery work.** When an issue's focused proof is green but the repository build fails in a pre-existing baseline file, do not misclassify it as user-authority `HARD BLOCKED`. Reproduce and classify the failure, acquire the driver lock, preserve the issue delta, add a baseline regression, make one issue-neutral repair, run the full gate, explicitly stage a separate local baseline commit, release the lock, and resume the same issue through the exact requested route. Repeated remote-fetch failures are structural nondeterminism even if one retry passes. Use.
42. **Hermes schedules; Runner registers and proves the supervisor.** Do not describe Runner as installing a second cron manager. For autonomous runs, register one project-scoped supervisor in the existing Hermes scheduler, persist its job ID, and verify enabled state, cadence/workdir, first `last_run_at`/`last_status`, delivery error, and `next_run_at`. Report scheduler, supervisor job, and implementation worker as three separate surfaces; “registered, enabled, and ticking” is the precise supervisor claim.
43. **Autonomous Codex uses the dangerous skip route deliberately.** For a Henry-authorized whole-queue local implementation mission, default the worker and every supervisor relaunch to `--dangerously-bypass-approvals-and-sandbox`; record approval policy `never`, sandbox `danger-full-access`, exact argv, model, and effort. This is permitted only after the baseline, secret scan, ownership lease, and explicit no-external/no-destructive goal contract pass. Keep `--full-auto` for bounded or untrusted work. If host and worker outcomes differ, still diagnose the sandbox before patching product code, and update the tracked project artifact, live Hermes cron prompt, and driver state together. Use.
44. **Every progress update starts with a strict progress bar.** Compute `done` only from issues that have issue commit + required tests + machine gate + review/waiver + verify + target-Linear reconciliation. Denominator is the original approved queue size. Render exactly 20 cells with `filled = floor(done * 20 / total)`, then print `done/total`, integer percent, current issue, and runtime state before prose: `[████░░░░░░░░░░░░░░░░] 4/20 (20%) · THE-561 · RUNNING`. Never count claimed, in-progress, locally green, or merely committed issues as done. Include blocked/deferred counts after the bar when non-zero.
45. **Progress state is durable, not chat math.** Persist `completed`, `total`, `percent`, `barWidth`, `bar`, `currentIssue`, `state`, `blockedCount`, `deferredCount`, and `calculatedAt` in driver state after every report-worthy transition. The recurring supervisor emits the bar on transition, hourly heartbeat, HARD BLOCKED, and final DONE; quiet ticks may remain `[SILENT]`.
46. **The route lock includes nested autoreview.** A worker launched on a pinned model/effort may not call a review helper that silently falls back to user-config defaults. Generate the exact review command with model, reasoning, and dangerous-skip flags—for example `codex -m <model> -c 'model_reasoning_effort="<effort>"' --dangerously-bypass-approvals-and-sandbox review --uncommitted`—and verify the review receipt reports the locked route. Helper defaults or inherited config labels are not proof.
47. **Policy scans and secret scans have different scopes.** CLI Tester's literal banned-term scan should cover product surfaces and exclude control-plane/source-evidence paths that necessarily define or prohibit those terms (`.project-gate.json`, execution prompts/plans, imported source packets, Runner generators, generated bytecode). The independent candidate-commit secret scan must still inspect those tracked docs/scripts and staged blobs. Never remove a path from secret scanning merely to silence a banned-term false positive; never exclude `src`, `app`, `lib`, or equivalent product roots from the policy scan.
48. **Bind all four CLI Tester steps to the immutable pre-issue commit.** Before edits, persist `ISSUE_BASELINE_COMMIT_SHA=$(git rev-parse HEAD)`. Invoke `request`, `run`, `book-review`, and `verify` with that same baseline SHA. The gate's changed-file set is `baseline...HEAD`, while the receipt's candidate commit must be the current checked-out `HEAD`. Never pass the moving current branch name or the post-issue commit as the diff base: an empty successful diff must remain empty rather than falling back to a whole-repo walk. Before review, require `changedFiles` to equal the issue commit's exact path set and `commit` to equal the issue commit SHA.
49. **Use tiered routes instead of paying reviewer latency for coding and orchestration.** Default autonomous local queues to three explicit roles: manager/supervisor `gpt-5.6-sol` at medium reasoning, coding worker `gpt-5.6-luna` at medium reasoning, and nested/final autoreview `gpt-5.6-terra` at high reasoning. If Luna produces no product delta for 20 minutes, fails the same issue twice, or receives unresolved Terra P1/P2 findings twice, retry that issue once with `gpt-5.5` at medium before escalating coding itself to Terra/high. Persist independent route receipts for manager, coder, fallback, and reviewer; never infer one role's route from another. Route migrations happen at a clean issue boundary when possible. If a worker already owns an issue delta, preserve it and let that issue close or explicitly hand the same delta to the replacement—never discard work merely to switch models.
50. **Every flag enters a zero-drop finding ledger.** Record every actionable test failure, scan hit, review P0/P1/P2, browser/console defect, gate blocker, and live-state mismatch with a stable finding ID, issue, source, severity, owner, and status. Valid terminal statuses are `FIXED` with fix commit plus fresh proof, or `REJECTED_WITH_EVIDENCE` with explicit rationale and verification; `OPEN`, `IN_PROGRESS`, `QUEUED`, or silently omitted findings block issue completion and the next dependency child. Review requests and external approvals may remain `AWAITING_GATE`, but they still block progression. Product decisions or unsafe external mutations become explicit HARD BLOCKED/deferred entries, never quiet deferrals. Before strict completion, reconcile the ledger to zero actionable open findings and persist counts in progress/state receipts. Use for the ledger schema, swallowed-diff detection, safe baseline reconstruction, stale-review invalidation, and model-handoff checks.
51. **A successful cron tick is not yet supervisor proof.** `last_status: ok` proves Hermes invoked the job; it does not prove the project supervisor observed or persisted current state. After registration or prompt changes, wait for or run one tick after the parent lock is released, then verify a read-back change in `checkedAt`/`heartbeatCounter`, exact worker observation, current issue, progress object, and next-run metadata. A lock-skipped silent tick is scheduler proof only.
52. **Worker evidence must be cron-readable.** Every durable worker launch writes stdout/stderr to a gitignored project log and records `logPath`, byte offset, wrapper PID, durable child PID, process/session handle, prompt hash, model/effort, and launch time in driver state. Process-session output is supplementary; the recurring supervisor tails the shared log file so a fresh cron session can inspect deltas and diagnose exits without the parent conversation.
53. **Background completion notices are events, not current truth.** Before applying any worker-exit notification, compare its process/session ID, PID, exact repo/worktree argv, and launch generation to the current driver-state worker identity. If it belongs to a superseded worker, record it as stale history only: do not regress `currentIssue`, blocker, completed count, progress bar, or active-worker fields, and do not relaunch. For the current worker, inspect landed HEAD/diff, gate/review receipts, run-state, and live Linear before deciding repair, closeout, or relaunch. Use.
54. **Launch immutable single-issue envelopes, not mutable whole-queue recovery prompts.** The supervisor owns queue selection; each coding worker receives exactly one current issue. Generate a launch envelope binding run ID, target project ID, issue/source ID, immutable baseline SHA, expected HEAD, allowed paths, exact canonical sections, proof commands, coder/reviewer routes, finding-ledger path, prompt generation, and expiry. The worker rereads run-state and rejects the launch when the envelope names a completed/different issue, stale baseline, wrong project, or mismatched generation. Never persist one-off “resume ISSUE-X only” directives inside a reusable goal prompt; keep the base prompt immutable and regenerate or delete the per-launch envelope after the issue boundary. Start from `templates/codex-single-issue-launch-envelope.md`.
55. **Use a dedicated minimal executor profile when global CLI context pollutes or dominates startup.** Benchmark a route-matched no-op with the normal profile and a project profile before changing launches. The project profile may omit irrelevant global skills, hooks, persona-review rituals, and generic planning artifacts only when the active prompt and repository rules already carry TDD, proof, safety, and review contracts. Preserve authentication via a protected local link/copy, lock down permissions, smoke both coder and reviewer routes, and record token/wall-time deltas plus actual model/effort. Never trade away tests, finding-ledger checks, Terra/high review, or Book/closure authority merely to reduce startup context. The dedicated profile must explicitly forbid unsupported reviewer claims and out-of-scope `tasks/todo.md` artifacts.
56. **Make the pre-issue gate request a machine invariant, not prompt advice.** For immutable-baseline Runner projects, request must record request-time HEAD and worktree status, prove HEAD equals the supplied baseline, and prove the tree is clean before edits. Refuse a second request that would overwrite existing baseline evidence after HEAD advances or files change unless an explicit supervisor repair mode supplies a durable reconstruction receipt. Product-code gates require a non-empty exact `baseline..issue-commit` delta; a PASS label with empty/swallowed paths is invalid. Every rerun that changes the gate digest invalidates prior review approval. Verify closure with `scripts/verify_issue_gate_receipt.py`.
57. **Keep one canonical run-state and derive process state transactionally.** Run-state owns queue, current issue/baseline, strict completions, finding counts, and external reconciliation. Driver-state owns process identity, launch generation, log offsets, scheduler heartbeat, and observed hashes; it must not maintain independent stale copies of issue truth. Use one lock implementation and one atomic state transaction helper for parent, supervisor, and repair paths. Derive progress and evidence summaries from canonical state/receipts on each tick, then read back before releasing the lock. If duplicated fields disagree, ledger the drift and reconcile before launch or completion.
58. **Optimize measured bottlenecks, not proof gates.** Measure wall time and tokens for coding, startup/context, review rounds, supervisor ticks, packet waits, and deterministic gates separately. When gates are a small share of issue time, keep them and optimize worker context, launch reuse, review scheduling, and packet closeout instead. Use ledger-derived pre-review checklists to catch recurring defects before expensive final review. Evidence-bound fast-path approval is allowed only under hard rule 8/22; high-risk issues still receive independent review. See for the measurement and rollout pattern.
59. **Book closes the review chain against exact final HEAD, not the latest summary.** Before approval, enumerate every reviewer invocation from durable logs, map every actionable P0/P1/P2 to a finding-ledger ID or an explicit duplicate-source link, and reject any unledgered finding. Snapshot the worktree before each reviewer and quarantine reviewer-generated scope side effects (including tracked instruction-file injections, untracked skill trees, and ignored launchers that pollute lint) before gating. If any fix, cleanup, artifact removal, or amend occurs after a clean review or gate, invalidate that review, gate digest, Book decision, and verify receipt; run a fresh locked-route `--commit HEAD` review, regenerate the machine gate from the original immutable baseline, bind Book to the new digest, and verify again. Out-of-scope planning/persona files and unsupported reviewer claims must be removed before strict completion. After wrapper proof, run one directly detectable canonical project command so the runtime does not retain an earlier failed verification as current truth. Use.
60. **Strict Runner role separation is a product invariant.** The pinned Cursor/Codex worker writes all product code and product tests. Book/manager supervises, inspects evidence, ledgers findings, emits bounded fix envelopes, approves packets, verifies, reconciles Linear, and reports progress; it does not make “small” product patches during closeout. Route every product finding back to the same coder lane while preserving the existing delta. Book may repair only control-plane/state/receipt/scheduler artifacts and quarantine reviewer-generated pollution. A direct product edit requires explicit user authorization, a recorded exception, and complete review/gate invalidation plus exact-final-HEAD reruns.
61. **One manager, one existing progress conversation.** Before enabling the recurring supervisor, choose the designated existing conversation and bind thread-capable delivery explicitly as `platform:<chat_id>:<thread_id>` with `attach_to_session=false` unless the user asks for a dedicated job thread. Prove one live delivery lands there. The recurring manager is the only scheduled progress publisher; parent and repair sessions do not duplicate granular heartbeats or create per-tick/per-issue threads. If routing is wrong, pause manager delivery—not the active coder—and preserve the worker while correcting the target.
62. **Verify finalized commits without colliding with a live writer.** If the coder still owns a moving canonical worktree, verify the finalized commit in a detached temporary worktree. On macOS/APFS, clone `node_modules` with `cp -cR`; do not symlink it across the worktree root because Turbopack rejects external-root symlinks. Run focused tests, typecheck, build, and a directly detectable canonical command such as lint last, then remove the temporary worktree. This verifies the exact commit without touching the active coder delta.
63. **Optional provider auth blockers require source-aware decisions and memory evidence.** Never use production credentials to satisfy a sandbox acceptance criterion. Re-read the canonical source and live issue to distinguish mandatory integration from optional/deferrable hardening, preserve deterministic mock/replay paths, and report core completion separately from strict queue completion. Before asking the user which provider they previously used, search the relevant crew memories and project evidence; distinguish an account or consumer checkout history from confirmed developer sandbox credentials. Provider substitution requires explicit source/issue approval and must go through the pinned coding worker. Use.
64. **A worker receipt proves only what its proof commands ran.** Issue proof commands are narrower than the repo-level gate, so an honest receipt can read green while the full check fails or wedges. Read which suite the receipt actually ran, run the full-tree gate yourself, and treat a wedged gate as unknown — kill it and dissect per-suite under timeouts. Attribution recipe and baseline banking:.

**Vite/vitest caches break gate `run` between reruns.** Running tests between gate invocations regenerates `<pkg>/node_modules/.vite/vitest/<hash>/results.json`, so the gate's next `verify`/`run` fails with `candidate changed after gate run` on a file the agent never wrote. Before a gate rerun, delete the cache directory (iterate files then rmdir — `rm -rf` and `shutil.rmtree` are blocked by destructive-command guards), then re-run `run` and re-bind any packet review receipt to the FRESH `evidenceDigest` before `verify`; every rerun that changes the digest invalidates prior approval.

**Exclude the runner's own control-plane directory from the banned-term scan.** A launcher script necessarily contains the literal executor flag (e.g. `--dangerously-bypass-approvals-and-sandbox`); if a banned pattern matches part of that flag name (e.g. `bypass-approval`), the gate FAILs on a file the worker will never edit. Add the control-plane dir (`.runner`, launcher scripts, prompts) to `scanExcludePaths` at gate-config authoring time — product roots stay in scope. And when a gate invocation prints only usage/help, the subcommand signature has likely changed: run `project-test-gate --help` and adapt (e.g. `request <issue-id> <branch-or-pr>` requires the branch argument) instead of treating it as a gate failure.

**Verify can hang on reachable-mode network probes — run it with a timeout.** A gate `verify` that probes Linear/API endpoints can sit far past any reasonable duration when there is no board/secret; wrap invocations (`timeout 90 node ... verify ...`) so the failure is a diagnosable exit, not a silent stall, and inspect the receipt JSON directly for the real blocker list.

**Fact-check a live-integration blocker before escalating it: prove the endpoint's identity.** A worker's "X is down" probe against a shared localhost port may be hitting a different service entirely — identify the listener first (`lsof -nP -iTCP:<port> -sTCP:LISTEN` + `ps -p <pid> -o command`) and probe the target host's real address before concluding it is down. Then re-read the issue contract: when it specifies a down-path ("if X is down, ship without X + blocker note"), implement that path in the closeout instead of parking the queue on HARD BLOCKED — the worker's conservative stall is not the authority, the contract is.

**Generated launcher/probe scripts must survive macOS bash 3.2 under `set -u`.** Apple's `/bin/bash` aborts on `"${empty_array[@]}"` (unbound variable) even when the array was legitimately initialized empty, so the failure surfaces only at first real execution (e.g. mid release gate). Use the guarded expansion `${arr[@]+"${arr[@]}"}` for every conditionally-empty array (auth headers, optional flags) in `set -euo pipefail` scripts the pack generates.

Operational recipe and pitfalls:.

Detailed registration, log, tick, and read-back handshake:.

## Prompt taxonomy (Helm-style)

Every pack ships three selected-executor prompt files: `<executor>-single-issue-prompt.md`, `<executor>-bounded-queue-prompt.md`, and `<executor>-goal-prompt.md` (`executor` is `cursor` or `codex`). They are not interchangeable. for the scope, invocation, and required sections of each. The Helm v1 goal-mode prompt remains the structural example; executor commands, artifact names, and state paths must be translated consistently.


62. **Live supervisor discipline after Waypost repair (2026-07-20).** Every Runner supervisor prompt and live cron prompt must include these invariants when supervising a durable Cursor/Codex worker:
    - Henry messages first: at tick start, read the last recent messages in the bound progress conversation. If Henry asked a question, correction, or command since the last progress card, answer directly in <=8 lines before long-running work. Never reply only with "steered into current run".
    - Book/manager is not the product coder: Book may repair `.runner/`, `docs/runner/`, ignored receipts/logs, cron config, Linear metadata/comments, and verification artifacts; all product code and product tests go through the pinned worker lane.
    - Progress channel stays compact: one bounded Runner card on transitions/heartbeats; no raw JSON, terminal tails, diffs, process dumps, tool traces, or giant receipts in Discord/Telegram. Store evidence in files and cite paths.
    - Duplicate-writer self-exclusion: process enumeration must exclude the worker's own shell wrapper PID, Codex/Cursor child PID, `tee`, current process tree, and current log path. Halt only for a distinct external worker for the same repo/issue with a different launch generation/log path.
    - Worker-alive lock exit: if an exact-repo worker is already alive, the supervisor may read state/report but must release any driver lock before exit and must not recreate a "reacquire-after-worker-removed-lock" style lock. A missing lock while one live worker exists is healthy.
    - A successful cron `last_status: ok` is not proof. Verify post-tick state readback: `checkedAt`/heartbeat or state transition, exact worker observation, lock released, no duplicate workers, and compact delivery in the bound conversation.
    - If any of these fail, classify `BROKEN_ROLE_SEPARATION` or `BROKEN_SUPERVISOR_LOCK_LIFECYCLE`, repair the control plane, and do not mark the run `HEALTHY`.

For checking progress of an already-running Cursor Agent task, use: combine Cursor UI labels with git state, local run-state, machine gate receipts, operator review receipts, and correct interpretation of packet-only review blockers.

For native Hermes `/goal` supervisor diagnostics (Codex parallel workers), use: watchdog script interpretation, supervisor serialization bottleneck, state-file vs live-process mismatch, deferred-tail blocking, and the over-engineering anti-pattern (don't migrate control planes mid-run when the native supervisor just needs to cycle).

For Entity/Cursor Cloud loop pilots where cloud agents should propose PRs but Enterprise owns runtime truth, use: make the first task a receipt-backed hard gate, keep downstream tasks blocked on source/runtime/dirty-state failures, and treat Enterprise replay + local gates + sandbox receipts as the only verification authority.

## Spec-backed queues (no Linear)

When no Linear board exists, a canonical super-spec/PRD IS the issue source of truth and a spec-backed queue replaces the Linear scan:

- Mirror the spec into the repo (e.g. `docs/spec.md`), record its SHA in run-state, and verify heading line numbers before anchoring anything.
- Stage one queue file per issue under `.runner/queue/<ISSUE>.md`, written to the same full contract shape as a rewritten Linear body: `## Source ID` (spec task anchor + requirement line numbers), `## Mapping basis`, `## Read first`, `## What to build`, `## Target files`, `## Boundaries / non-goals`, `## Acceptance criteria`, `## Required PRD test IDs`, `## Proof required`, `## Local agent commands`, `## Blocked by`, `## Not done until`.
- Build `.runner/linear_id_to_source_id.json` (or `<project>_id_to_source_id.json`) with the same schema/policy — exact heading anchors, `ordinalMappingAllowed: false`. When the queue was derived from the spec's own task list by the same agent that wrote the spec, confidence is high by construction; still record the anchors.
- Read-order discipline for the worker: run-state → issue file → spec → patterns/plan. The issue files ARE the tracker; there is no live board to reconcile, so queue-drained closeout verifies run-state + commits + gate receipts instead of Linear distribution.
- Fail-stop does not relax: mapping anchors must exist in the mirrored spec or the queue is stale.

**Worker exited cleanly at a BLOCKED review is the normal relay cadence, not a failure.** A goal worker that implements, tests, runs the gate, then exits with `blocked_book_review` has completed its turn; the packet approval is manager work. The manager's dead-worker closeout is: re-verify independently (run the proof commands yourself, grep the test IDs, check the import/scope boundaries the gate cannot see) → commit the issue-scoped delta if the worker left it uncommitted → gate `run` (binds the fresh commit) → write the packet review receipt bound to the gate's digest ×2 + branch + commit → `verify` → advance run-state (completed, next currentIssue, 20-cell bar) → relaunch the worker for the next issue. A new exit notification for an OLD generation is history only — reconcile PID/argv/generation before reacting (hard rule 53).

## Required inputs

Collect these before writing outputs:

- Project name and slug.
- Repo root and intended branch/worktree.
- Linear project/team and issue IDs, OR a canonical spec/PRD to back a spec-backed queue (see above).
- Source-of-truth docs/specs/PRDs/decision logs.
- Banned terms or contaminated concepts for this project.
- Repo-real proof commands from `package.json`, scripts, Makefile, CI, or docs.
- Shared gate runner path and desired `.project-gate.json` checks.
- Entity FS output root for the plan link.

If any input is missing but discoverable, use tools. Ask only when it cannot be retrieved.

## Workflow

### 0. Cursor progress/status checks

When Henry asks to check progress of an already-running Cursor Agent task, do a status audit before generating new prompts or requeueing anything:

1. **Cursor CLI is primary.** Run `cursor agent status` from the repo root and confirm the account is authenticated for CLI actuation. If auth is absent (`Not logged in` / `Authentication required` / models list rejected), do **not** attempt `cursor agent login` (or `codex login`) from a supervisor cron — these require interactive browser OAuth and will hang the background process indefinitely. Instead record a precise blocker in driver state (e.g. `observedStatus: "blocked_cursor_cli_not_authenticated"`, name the missing credential class — check `~/.cursor/auth.json`, keychain, and `CURSOR_API_KEY`/`CURSOR_AUTH_TOKEN` env, and whether cursor creds exist in `~/.hermes/.env`) and link the one-time interactive remediation command in the report to Henry. The next supervisor cycle will launch the worker automatically once he runs the interactive login. This is a **fail-stop, not a self-recover**: a non-interactive cron can never complete an OAuth handshake. Distinguish this (human-required auth) from self-recoverable blockers (stale locks, packet-mode review waivers, missing env-source instructions) which the cron fixes before reporting. Never print, paste, or log `LINEAR_API_KEY`, `CURSOR_API_KEY`, or any credential token. Treat `cursor agent status` success as necessary, not sufficient: status reads stored/keychain auth while agent calls validate it upstream — a token can be rejected even after a successful interactive login. `unset CURSOR_API_KEY CURSOR_AUTH_TOKEN` before probing (the CLI prefers a stale exported env token over fresh stored auth, and terminal exports persist across calls), then run a one-marker `cursor agent --print` canary before declaring the cursor lane available.

   **Lock lifecycle is exception-safe.** Acquire the driver lock atomically before inspection, then release it in a `finally` path on every outcome: normal completion, `[SILENT]`, parser/tool failure, denied shell action, or early blocker return. Prefer a single small lock wrapper over acquisition and cleanup scattered across unrelated calls. If the host guard blocks direct deletion, atomically rename the lock to a timestamped `.released.<timestamp>` marker. Re-check age immediately before replacing a stale lock to avoid racing another supervisor. A failed inspection must not strand a fresh lock for the full stale-lock interval.

   **State-write verification precedes silence.** Treat the supervisor cycle as incomplete until the atomic driver-state write has been read back and the expected cycle, timestamp, current issue, action, and next-probe boundary match. Do not infer success from the wrapper's exit path or an empty/malformed tool response. Keep lock release independent from state serialization/report formatting so a post-write verification failure still reaches rename-based cleanup. If read-back fails, preserve the prior valid state and report the transition rather than returning `[SILENT]`.

   **Quiet usage-limit cycles still need a complete state transaction.** When the fixed probe boundary is not due, increment the cycle once, preserve (never slide) `nextProbeAfterCycle`, normalize every worker field to inactive and the blocked probe model to `auto`, atomically write and read back the state, then release the lock by rename before returning `[SILENT]`. A failed inspection or serialization attempt must not strand the lock; recover through the same verified write/release path rather than starting an untracked retry that can double-increment the cycle.
2. Inspect the live Cursor CLI worker first: check the driver-state PID/log path and the live process table. Identify workers by parsing the actual process argv: require `basename(argv[0]) == "cursor-agent"` and require the token immediately after `--workspace` to equal the repo path. Do not use raw substring matching for `cursor-agent` + repo — the supervisor's own inspection shell/Python command can contain both literals and masquerade as a worker. Do not require the prompt's issue ID to match current run-state because a long-lived goal worker may retain stale issue text. **Never truncate raw `ps` output before parsing it**: filter the complete process table for the exact executor/workspace inside the command or Python process, then truncate only the filtered rows for logging. Also probe the recorded PID directly before declaring the worker absent. A tracked background launch may return a shell-wrapper PID rather than the durable child PID, so reconcile and persist the actual child after launch. If a worker is alive, inspect only new log output, run-state, and receipts. Do not start a second worker. After every launch, re-enumerate exact-workspace workers, verify the fresh log, and restore a single writer immediately if duplicates exist. If a recorded worker exited since the last check, treat that as a report-worthy state transition even when it exited cleanly; inspect the log tail and either repair/relaunch or send the compact check-in instead of going silent. See for process identity/recovery receipts and for the truncation-safe, self-match-safe enumeration pattern.
3. If the Cursor GUI is also available, use it as **observability only**: task title/status, touched files, model, and “Changes +…” count. GUI screenshots are evidence, not the control plane.
4. Cross-check the repo branch, recent commits, and dirty/untracked files. For scope thresholds, count real paths from tracked diffs plus `git ls-files --others --exclude-standard`; do not count `git status --porcelain` rows, because one `?? directory/` row may hide many files and `git diff --numstat` omits all untracked lines. If a live worker crosses the threshold, mark review pending but inspect the stable issue commit/base at the packet boundary rather than approving a moving target. See.
5. Read project-local run-state files such as `.cursor/<project>-autonomous-run-state.json` or `.cursor/run-state/<project>.json`.
6. Read machine gate and operator review receipts. Machine `run` PASS is not enough when operator review is required. If the builder committed before `request`, the receipt may show `changedFiles: []` and a repository-wide `allChangedFiles` baseline; neither is the issue delta. Review the exact committed delta from the receipt commit/base, apply scope thresholds to that delta, run fresh issue-relevant checks, and record the manual review before packet approval. **Audit acceptance-criterion comparators literally:** trace `<`, `<=`, `>`, `>=`, `exactly`, `at most`, `all`, ordering, and uniqueness language into both production logic and test assertions. A green test using `<= N` does not prove an AC requiring `< N`; distributed/cache guarantees must be checked on the worst-case remote-instance path and should retain margin below strict bounds. See. For large production-path changes and requirements that rank a full source set before applying a cap, also use: inspect the live AC, run skipped `TEST_*` integration tests, and reject prefix-sampling implementations that do not compute the true global Top-K. Also use when a bounded display list publishes an aggregate/coverage count, or when a human-friendly formatter is reused for a canonical machine contract; require boundary-sized regression tests and exact committed-delta review. See also. When the threshold is crossed mainly by deterministic generated output or a lockfile, use: review the exact issue commit range, verify regeneration is diff-clean, run package/typecheck smoke, and record the threshold crossing honestly rather than treating generated lines as either an automatic block or an exemption.
7. Interpret packet-only operator review correctly: `decision: REQUESTED`, `status: BLOCKED`, `safeToContinue: false` means review approval is missing, not that the implementation proof failed.
8. Report whether the next issue may start. If run state says wait for operator approval or Henry waiver, do not requeue the next issue. When the long-lived worker is concurrently closing the issue, keep run-state updates idempotent: reread before write, do not duplicate completion/history, never move `currentIssue` backward, and let the supervisor own review/verify/Linear reconciliation while the worker owns implementation/commit.
9. If Henry asks “what do you want me to approve?” or similar, switch to approval-target clarification mode: inspect live driver/run-state/receipt evidence, name the exact artifact/decision/issue, state the one-sentence decision and what approval unlocks, and give the exact approval phrase. Do not provide a broad project recap. See.
9a. **Approval request legibility is an acceptance criterion.** Lead with plain-language impact: what changes, how many records/issues are affected, what definitely does *not* happen, whether this approval executes the action or only approves a plan, and whether unrelated lanes continue. Then give one recommendation and simple `A — Approve / B — Reject / C — Defer` choices. Put hashes, fingerprints, internal source IDs, and receipt paths in a technical footer—not in the decision Henry must decode. Never label a run `BLOCKED_AUTHORITY` without an adjacent plain-language sentence saying exactly what Henry must decide. If no Henry decision is required, say `No Henry action required` and use `STALLED`, `BROKEN`, or `HEALTHY_HOST_CONSTRAINED` as appropriate.
10. Keep healthy cron-driver reports terse: one short progress line plus optional safe evidence (CLI log tail, commit SHA, receipt path, or GUI screenshot). Do not dump receipts, changed-file inventories, or long tooling notes when things are going well. If things are not going well, send a short summary of the issue, what was done to fix/recover it, and whether Cursor is back on track. Detailed evidence belongs in receipts/log files, not the Discord heartbeat.

Worked pattern:. Start-state semantics and proactive resume after an already-authorized run stalls at preflight:. Goal-mode CLI supervision:. For repeated interactive-auth blockers, lock-safe state updates, live Linear boundary checks, false-positive process-match avoidance, and silence/heartbeat behavior, use. For per-child closeout and relaunch, use; for SIGTERM/partial-log closeouts, stale final-head receipts, equivalent proof in nonstandard paths, and final-HEAD reruns after noisy worker exits, use plus.

### 1. Source-of-truth inventory

Find and list the real sources Cursor should trust:

- repo `AGENTS.md`, `.cursor/rules/*`, project context docs
- PRD/spec/superspec/source packet/decision records
- live Linear issue bodies and titles
- actual package/test/build scripts
- current branch/worktree and whether Cursor will see the same files
- If the authoritative source is an uncommitted/untracked tree (especially on another host), bank it before any modification: rsync the tree (excluding `node_modules`) into the working repo, `git init` + commit the import + tag it, and leave the original untouched — all edits happen on the banked copy. An untracked tree has no rollback point until it is committed somewhere.

Completion criterion: an inventory artifact names every source, path/URL, freshness status, and whether Cursor can read it.

### 2. Linear scan and drift audit

Fetch live Linear titles/bodies for the target set. Compare each issue title, body heading, scope, acceptance criteria, dependencies, and proof commands.

Flag:

- stale source claims
- title/body mismatch
- parent issue used as a build task
- banned terms/contaminated concepts
- impossible proof commands
- local-only references not available to Cursor
- dependency contradictions

Completion criterion: no issue enters the approved queue until it is either clean or listed in the cleanup manifest.

### 3. Explicit mapping table

Create `linear_id_to_source_id.json` with one row per issue. The validator expects a top-level `issues` object keyed by Linear ID plus a `mappingPolicy`; if you also keep a human-readable `mappings[]` array, preserve it but do not rely on it alone.

```json
{
  "schemaVersion": 1,
  "mappingPolicy": {
    "ordinalMappingAllowed": false,
    "approvedQueueRequiresMappedStatus": true,
    "unknownStatusBlocksCursor": true
  },
  "issues": {
    "THE-123": {
      "source_id": "PRD-P2-C04",
      "mapping_basis": "title + body heading + source section slug",
      "confidence": "high",
      "source_paths": ["docs/specs/project-v1.md"],
      "source_sections": [{"heading": "7. Data model", "line": 597}],
      "status": "mapped"
    }
  }
}
```

Recommended live-verification fields inside each issue entry when Linear is the work source:

- exact live canonical title, with any generated short title preserved separately as `short_title` / `shortTitle`;
- Linear UUID;
- parent Linear ID/title;
- mapping-basis booleans: `title_contains_source_id`, `title_exact_match`, `body_heading_match`, `body_contains_source_id`, `source_section_slug_match`, `linear_uuid_match`, `parent_link_match`.

Allowed statuses: `mapped`, `needs_review`, `extra_child_keep`, `merge_candidate`, `close_candidate`, `blocked_by_source_cleanup`.

Completion criterion: every approved issue has `status: mapped` or an explicit Henry-approved exception, and the live Linear body includes the same source key the mapping uses. A title/URL slug match is not enough if the skill contract says body heading/source section slug.

### 4. Cleanup or full rewrite before Cursor approval

If issue bodies are stale, too thin, or lack the source key required by the mapping basis, draft a cleanup packet before writing Linear:

- proposed title/body files
- dry-run diffs vs current Linear
- banned-term scan
- proof-command validation
- dependency sanity check
- write order
- post-write verification checks

For small body/source-key blockers, a safe patch can be body-only: insert an explicit `## Source ID` / `## Mapping basis` anchor near the top of the issue body, preserve all existing acceptance/proof text, and leave titles/comments/status/labels/assignees unchanged unless separately approved. Store rollback bodies (`<ISSUE>.current.md`) and proposed bodies (`<ISSUE>.proposed.md`) for every issue.

**But do not over-preserve bad issue bodies.** If the live Linear bodies are thin stubs, point to a private companion file, lack acceptance criteria, or are otherwise not Cursor-executable, rewrite the whole child body and re-upload it. Henry correction from Hoshi (2026-06-21): *"if something is broken in the new spec to issues, rewrite them and reupload; do it properly; quality over speed."* Full rewrite is the right fix when the body itself is the defect.

A full Cursor-ready child body must include, inline:

- `## Source ID`
- `## Mapping basis`
- `## Read first (repo context)`
- `## What to build`
- `## Target files / existing patterns`
- `## Boundaries / non-goals`
- `## Acceptance criteria`
- `## Required PRD test IDs`
- `## Proof required`
- `## Local Cursor / local-agent commands`
- `## Blocked by`
- `## Not done until`

Safe full-rewrite pattern:

1. Fetch live Linear bodies and save `<ISSUE>.current.md` backups.
2. Generate `<ISSUE>.proposed.md` for every child from the canonical PRD/spec/context pack.
3. Structurally lint every proposed body for required sections, no placeholders, proof path, and repo-real commands.
4. Upload by Linear UUID, not ordinal order. Re-fetch immediately before writing and use the API's optimistic-concurrency token when available. If no guarded update exists, stop at `manual_body_update_required`; do not perform an unconditional overwrite.
5. Add an audit comment to each rewritten issue explaining that the body was replaced with the full Cursor-ready execution contract.
6. Re-fetch live Linear.
7. Re-run drift audit against live Linear, not local drafts.
8. Only then mark preflight PASS / Cursor-ready.

Apply only after approval unless Henry has explicitly told you to fix/rewrite it now. After applying, re-fetch and scan live Linear.

Completion criterion: live Linear, not local drafts, passes the checks, including body/source-key alignment and self-contained Cursor execution sections for every approved issue.

### 5. Gate config

Generate `.project-gate.example.json` from repo-real commands and project policy. Prefer copying it to `.project-gate.json` only after review.

CLI Tester compatibility rule: the live `~/Code/cli-tester/bin/project-test-gate` expects `proofCommands` as an array of shell command strings. If the pack wants richer metadata (`name`, `required`, `workdir`, `expectedExitCode`), put it under `xProofCommandsDetailed` or another sidecar key, and keep `proofCommands` as strings. Also expose `bannedTerms`, `privateDefaultPatterns`, and `scanExcludePaths` at the root level unless the live CLI schema has been verified to read nested `scans.*`.

Default gate checks:

- proof commands and exit codes
- banned-term scan
- private default / secret scan
- changed-files summary
- receipt existence
- CLI Tester operator review gate (`request`, `run`, `book-review`, `verify`)
- Codex autoreview receipt
- GitNexus/AGENTS gate when configured/fresh
- optional UI screenshot/video/DOM proof for UI issues
- receipt uniqueness: issue ID, branch/PR, commit SHA, changed files, commands, and visual proof must match the child issue

Default `bookReview` config depends on run type:

For **manual/packet handoff** packs where a human Book session will inspect each review later, use packet mode:

```json
{
  "bookReview": {
    "required": true,
    "mode": "packet",
    "receiptDir": "output/<project>/book-review",
    "sessionIdPrefix": "<project>-book-review",
    "retryAttempts": 3,
    "retryDelayMs": 1000
  }
}
```

For **autonomous end-to-end Cursor runs**, prefer Hermes API mode once the API is reachable and env vars are present, otherwise Cursor will stop after every issue with `decision: REQUESTED`:

```json
{
  "bookReview": {
    "required": true,
    "mode": "hermes-api",
    "apiBaseEnv": "BOOK_API_BASE",
    "apiKeyEnv": "API_SERVER_KEY",
    "receiptDir": "output/<project>/book-review",
    "sessionIdPrefix": "<project>-book-review",
    "timeoutMs": 120000,
    "retryAttempts": 2,
    "retryDelayMs": 1000
  }
}
```

Verify without printing secrets:

```bash
set -a; source ~/.hermes/.env; set +a
curl --noproxy '*' -sS "$BOOK_API_BASE/health"
```

Use `mode: "hermes-api"` only after confirming `BOOK_API_BASE` and `API_SERVER_KEY` are configured; never print those secrets in receipts. If Hermes API returns `NEEDS_FIX`, treat that as a real review blocker and fix the evidence/branch/receipt rather than removing the gate. `verify` must block the next child unless operator review is either not required or has `decision: APPROVED` and `safeToContinue: true`.

Per-issue hard gates with matrix-shaped checks: when the gate checks cells owned by different issues (proof matrices, capability tables), the runner must forward a per-issue env var (e.g. `HOSHI_PROVE_ISSUE`) to the gate script so the script can emit a per-issue verdict line. See and hard rule 20.

CLI Tester scan-exclude normalization: see and hard rule 21. Strip `**` from excludes; always exclude the in-repo external-API snapshot; mirror bannedTerms/privateDefaultPatterns/scanExcludePaths at the root. For the regexp syntax compilation pitfall in `privateDefaultPatterns` (which causes `SyntaxError: Nothing to repeat` on glob patterns), see.

Completion criterion: the gate command can be run from repo root and writes `output/<project>/test-gate/<issue-id>.json` and `.md` receipts, and if operator review is required, `book-review` + `verify` also work for the issue.

### 6. Human handoff operating plan and prompts

Generate the required output files from the templates:

- `plan.md` — **primary Helm-style human handoff operating plan**, not a thin index
- `<executor>-single-issue-prompt.md`
- `<executor>-bounded-queue-prompt.md`
- `<executor>-goal-prompt.md` — **required**, mirrors Helm v1 goal-mode shape
- `<executor>-driver-cron-prompt.md` — required for autonomous execution; instantiate the Codex-native template for Codex rather than relabeling Cursor text
- `linear-cleanup-manifest.md` / `.json`
- `linear_id_to_source_id.json`
- `.project-gate.example.json`
- `preflight-checklist.md`
- `entity-fs-link-instructions.md`

`plan.md` must include, inline and readable without opening sibling files:

- current state / preflight status
- source-of-truth inventory
- hard rules
- approved queue status
- per-issue flow
- shared CLI Tester gate
- repo-real proof commands
- commit / PR review gates
- Codex / GitNexus / thermo-nuclear review ladder
- top-of-page prompt to run now when preflight cleanup is required
- top-of-page Cursor prompt to use later after preflight passes
- active single-issue Cursor execution prompt
- bounded-queue/autonomous Cursor prompt when applicable
- end-to-end goal-mode Cursor prompt when Henry expects whole-queue execution
- UI proof / video evidence policy
- receipt uniqueness rule
- operator review / verify commands when configured
- bottom-only cron/check-in template marked **do not run/register unless explicitly asked**

Completion criterion: the plan and prompts say approved queue only, fail-stop, per-issue reread, CLI Tester run/book-review/verify gate, no cron by default, no self-discovery, no reused receipts, and no local video assumptions. The returned primary link is `/docs/source/.../plan.md`; raw `/api/file/raw?...` is secondary only.

### 7. Preflight before telling Henry to run Cursor

Do not say “Cursor can run” until preflight passes:

- canonical status or higher-authority decision record explicitly authorizes this execution scope
- live Linear issue bodies are clean
- mapping table exists and has no unresolved approved issue
- repo branch has `AGENTS.md` / `.cursor/rules` / context docs Cursor needs
- run-state file path is documented and ignored by git
- approved queue is non-empty and deliberate
- `.project-gate.json` or reviewed example exists
- CLI Tester config includes `bookReview.required` when Book is the reviewer of record
- `project-test-gate run`, `book-review`, and `verify` are executable for the config, or the missing API/env blocker is explicit
- proof commands are repo-real
- UI/visual proof policy is stated, with Cursor Cloud video preferred when video is required and local Cursor screenshot/DOM proof as the minimum
- Entity FS plan link resolves or its exact publication blocker is stated

Completion criterion: preflight artifact says PASS with paths and receipts, including either operator review/verify readiness when it adds signal or an explicit non-stalling skip policy when automated review gates are sufficient.

### 8. End-to-end Cursor CLI + supervisor cron bootstrap

Run this section when Henry's ask implies autonomous execution, not just handoff generation.

1. Stage the active goal prompt outside the repo:
   - Source: `<pack-dir>/cursor-goal-prompt.md`.
   - Extract the fenced `/goal` text into `<workspace-output>/<project>-cursor-driver/cursor-goal-prompt.active.txt`.
   - Hash the staged prompt and record the source path