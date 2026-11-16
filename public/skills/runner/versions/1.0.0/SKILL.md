---
name: runner
aliases: [cursor-project-execution-pack]  # legacy kebab-slug alias (Hermes loader does not honor aliases, but kept as frontmatter breadcrumb and for any future loader that does)
description: "Use when preparing a Linear-backed project for autonomous Cursor/Codex execution: audit source-of-truth, map issues to source IDs, clean stale issue bodies, generate an Entity-linked plan, Cursor prompts, gate config, approved queue, and fail-stop preflight. Project-agnostic replacement for the Helm incident workflow. Always paste the active Cursor prompt inline in the chat reply, and ship self-sufficient fallbacks for any live external API the agent must read (Linear, GitHub, etc.) so the run does not dead-end on missing secrets. Hard gates with matrix-shaped checks (proof matrices, capability tables) must support per-issue ownership so the queue can keep moving when the current issue does not own a failing cell. Default executor is Cursor CLI (`cursor agent --print --workspace <repo> --model <model> --trust --force <prompt>`) with the goal-mode prompt; GUI/computer_use is fallback observability only."
version: 1.3.0
author: Book (Henry Mascot's Enterprise Crew)
license: MIT
metadata:
  hermes:
    tags: [cursor, linear, autonomous-builds, execution-plan, cli-tester, entity-fs, project-gates]
    related_skills: [linear, loom, helm-v1-zero-policy-and-apply-discipline, codex, github-pr-workflow]  # loom is the renamed grill-to-linear-execution-graph skill (kebab slug retired 2026-07-02)
---

# Runner (formerly "Cursor Project Execution Pack")

## Overview

Use this to turn a project with Linear issues into a hardened Cursor execution packet: a Helm-style human handoff operating plan, top-of-page copy/paste prompts, a single-issue prompt, a bounded-queue prompt, an end-to-end goal-mode prompt, a CLI Tester + Book review gate config, cleanup manifests, visual-proof policy, receipt-uniqueness rules, and Entity FS links.

**Default executor: Cursor CLI** (`cursor agent --print --workspace <repo> --model <model> --trust --force <prompt>`). The goal-mode prompt is the default launcher for autonomous whole-queue execution. GUI/computer_use is fallback observability only — never the primary control plane. Do not introduce ACP for these crons; Cursor CLI is enough.

**Default builder model:** `gpt-5.5-extra-high-fast` (Cursor CLI alias `gpt-5.5-extra-high-fast` for the GPT-5.5 1M Extra High Fast tier). Fall back to `gpt-5.5-extra-high` when fast mode is unavailable on the account. For Opus 4.8 xhigh use `claude-opus-4-8-xhigh` or `claude-opus-4-8-thinking-xhigh`; do not route Opus 4.8 through Pioneer. Verify model availability with `cursor agent models` before launching; never assume a model alias exists.

The primary artifact is **not** a thin artifact index and not a raw API URL. It is a human-readable `plan.md` that another Book/Cursor session can open and execute from. Return the `/docs/source/.../plan.md` handoff link first; include `/api/file/raw?...` only as a secondary machine link.

This skill exists because Helm showed the failure mode: a strict prompt can still block forever if live Linear is stale, the repo branch lacks local rules, proof commands are imaginary, the approved queue is empty, the handoff plan omits the actual Cursor prompt/gate instructions, local Cursor is assumed to provide video by magic, or a machine PASS is mistaken for Book approval. The fix is not prompt theater. The fix is a source audit, explicit mapping, live issue cleanup, a complete operating handoff page, issue-specific receipts, and fail-stop gates before Cursor continues.

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
- If Henry asks to **run this skill on a project**, **set up autonomous Cursor**, **queue all tasks**, or **make Cursor build this autonomously**, the deliverable is end-to-end bootstrap: execution pack + full approved queue + active Cursor CLI goal-mode worker + recurring Book supervisor cron. Do not stop at plan/prompt generation unless a preflight blocker makes launch unsafe.

## Executor selection — Cursor or Codex CLI

The executor is a project-level decision, not a hard-coded Cursor assumption. Resolve it before generating artifacts.

- Default remains Cursor CLI only when no executor is specified.
- If Henry specifies **Codex CLI**, all generated pack artifacts, worker commands, state names, and supervisor prompts must use Codex. Do not generate Cursor commands and relabel them.
- Codex Enterprise preflight: verify `command -v codex`, `codex --version`, `codex login status`, clean intended repository, and a real one-shot smoke inside the repository.
- Codex launch pattern: `codex exec --full-auto -C <repo> - < <goal-prompt>` for bounded workspace-safe work. Use `--sandbox danger-full-access` only when the host sandbox demonstrably blocks required commands.
- Codex runtime state belongs under `.codex/` or a neutral `.runner/` path, not `.cursor/`. External-API snapshots and write queues remain required.
- The Runner verification, issue mapping, dependency ordering, CLI Tester four-step gate, Book review, safe-commit, Linear reconciliation, final summary, and supervisor auto-stop contracts apply unchanged.
- Patch generated prompts and the supervisor to name the selected executor consistently. A pack containing both `cursor agent` and `codex exec` as primary commands is invalid.

## Hard rules

- Autonomous safe-commit policy: when Cursor or the driver has completed an issue with proof green, CLI Tester run PASS, Book review APPROVED/safeToContinue=true, verify nextChildBlocked=false, GitNexus/diff risk LOW, and secret scan clean, make the obvious local save-point/stack commit without asking Henry. Commit only intentional source/context/gate/issue-scoped files. Never commit runtime state, receipts, logs, output/, `.cursor/*run-state*.json`, secrets, or unrelated files. Push/merge still requires explicit authorization.
- Autonomous sign-off deferral policy: do not fabricate Henry sign-off, but also do not stop a healthy queue for a documentation/inspection sign-off when a later approved issue explicitly owns the formal decision/ADR. Record the deferral in run-state/driver-state, name the owning follow-up issue, and continue if proof/gates are green and risk is LOW. Stop only when the human sign-off is the actual product/architecture decision with no owning follow-up, or when gates/risk/secrets/destructive/push/merge conditions require escalation.
0. **Running the skill means producing the execution pack, not auditing the skill.** When Henry invokes this skill or asks whether a plan/prompt should come from it, locate or generate the concrete artifacts: human `plan.md` link, raw fallback link, artifact directory, Cursor prompt location/section, Cursor-ready verdict, and blockers. Do not stop after summarizing the skill text.
1. **Source audit first.** Do not generate or approve Cursor prompts until source-of-truth docs, repo rules, live Linear issue bodies, proof commands, and branch context have been inspected.
2. **No ordinal mapping.** Build `linear_id_to_source_id.json` from title/scope/source IDs. If a mapping is unknown, mark it `needs_review`; never map “first child to first spec section.”
3. **Parent epics are containers.** Cursor implements child issues unless Henry explicitly approves a parent-level coordination task.
4. **Approved queue only.** Cursor may only work issue IDs present in the approved queue. No self-discovery, no “pick next safe issue,” no broad project scan as work selection.
5. **Persistent run-state file per project.** Use a project-local state file such as `.cursor/<project>-autonomous-run-state.json`; add it to `.gitignore`; never commit runtime state.
6. **Per-issue reread contract.** Every Cursor prompt must tell Cursor to reread the issue body, plan, repo rules, gate config, and state file before each issue and after any compaction/restart.
7. **CLI Tester by default.** Use shared `<HOME>/Code/cli-tester/bin/project-test-gate` with a project `.project-gate.json`. Do not copy generic gate runners into app repos.
8. **Book review is distinct from machine PASS, but must not become a stall.** `project-test-gate run` proves commands/scans/receipts. A separate Book review is useful only when it adds signal. If automated review gates are clean — especially Codex autoreview plus thermo-nuclear review for high-risk work, or equivalent configured review gates — the driver may record an explicit `bookReviewSkipped`/`safeToContinue=true` waiver and continue to the next issue. Default new pack configs should avoid hard-stopping on Book packet review when stronger automated review has passed; use Book review as escalation for ambiguous scope, dirty diffs, failed/partial proof, secrets/security concerns, or user-facing risky changes. The operational definition of "low-risk fast-path" — the cases where local auto-approve is the right default — is in `references/low-ri<REDACTED_API_KEY>.md`. Every driver cron and every project gate config must use the same wording; do not fork the policy per project. After Henry accepts a recommendation set, codify it: see the **Approval-to-codification workflow** section below and `references/live-cron-prompt-edit-technique-2026-06-24.md` for the live `jobs.json` patch pattern.
9. **Fail-stop.** Stop on stale/mismapped issues, banned terms, invalid proof commands, failed tests, missing gate receipts, missing Book review receipts/approval, reused receipts, or branch/rule mismatch.
10. **Review ladder.** Codex autoreview is default for non-trivial changes. GitNexus/AGENTS commit gate is required when configured and fresh. Thermo-nuclear review is only for high-risk issues.
11. **Video proof policy.** Cursor Cloud is the preferred path when Henry asks for video evidence. Local Cursor must at least produce browser/DOM/screenshot proof for UI-facing work; local video requires an explicit Playwright/browser/macOS recording step. Do not require video for backend/docs work unless the issue asks for it.
12. **Receipt uniqueness.** Every CLI, review, screenshot, or video receipt must be tied to the issue ID, branch/PR, commit SHA, changed files, and commands. Never reuse one child issue’s receipt as proof for another.
13. **Entity FS links.** Publish the plan under a mapped Entity FS docs root and provide both links in the final response: primary human handoff `http://<REDACTED_IP>:3000/docs/source/<source>/<path>/plan.md`; secondary raw machine `http://<REDACTED_IP>:3000/api/file/raw?source=<source>&path=<path>/plan.md`. Do not make the raw API link the primary artifact. Do not create Mission Control tasks just to get a plan link.
14. **Full child queue by default.** When Henry asks for an autonomous project execution pack and the mapped Linear graph is clean, the approved queue must be **all mapped child issues** in dependency-safe order, not a tiny pilot/sampler. Parent epics are containers. Use a smaller pilot queue only if Henry explicitly asks for canary/pilot, if preflight/mapping is unresolved, or if source blockers make downstream children unsafe.
15. **Cron launch is wording-dependent.** For handoff-only asks, include cron/check-in text only as an optional bottom section labelled “do not register unless explicitly asked.” For autonomous execution asks — “run this skill on the project,” “set up Cursor CLI,” “queue all tasks,” “make Cursor build this autonomously,” or equivalent — the skill must continue through registration: stage the goal prompt, verify Cursor CLI auth/model, launch the goal-mode worker, create/update driver state, and register the recurring Book supervisor cron.
16. **Helm-style goal-mode prompt is the default.** Every generated pack MUST include a `cursor-goal-prompt.md` mirroring the Helm v1 shape:
    - `/goal` invocation at the top
    - Repository, plan, raw-fallback, and Linear project block
    - Linear API access note: use global `LINEAR_API_KEY`; if absent in Cursor, do **not** OAuth — open a new terminal or source `<HOME>/.hermes/.env` non-verbosely
    - Linear access fallback block pointing at the in-repo snapshot + helper (see hard rule 18) so the agent is not forced to acquire a secret
    - Authority order ending with the plan file as operating guidance
    - "Before coding" reread list aligned with the bounded-queue prompt
    - Project-specific known policy block
    - Hard zero-policy block naming any project-banned external coordination/plugin/service terminology
    - All four CLI Tester steps: `request`, `run`, `book-review`, `verify`
    - UI proof / video evidence policy consistent with the plan
    - Receipts/state/Book-review sections
    - Canonical no-merge sentence: `Do not merge without Book/SuperAda verification unless Henry has explicitly authorized Cursor to merge.`
16. **Four-step CLI Tester gate.** Every prompt file (`cursor-single-issue-prompt.md`, `cursor-bounded-queue-prompt.md`, `cursor-goal-prompt.md`) MUST declare all four steps in order: `request`, `run`, `book-review`, `verify`. The `run` step alone is never sufficient when `bookReview.required` is true. **Format requirement (validator):** the validator matches each step with one of four prefixes — `` `<step> <ISSUE_ID>...` `` (backtick + space), `` `<step>` `` (backtick only), `<step> <ISSUE`, or `<step> <ISSUE_ID`. A bare shell line like `project-test-gate --config .project-gate.json request <ISSUE_ID>` does NOT satisfy the check. Use the backtick form, one line per step. See `references/mycelium-v1-live-pack-2026-06-22-gotchas.md` §3b.
17. **Canonical no-merge sentence.** Every prompt and the plan MUST use the exact sentence: `Do not merge without Book/SuperAda verification unless Henry has explicitly authorized Cursor to merge.` Do not paraphrase, shorten, or weaken it.
18. **Self-sufficient external-API fallbacks.** Every prompt that reads from a live external API (Linear, GitHub, Sentry, OpenAI, Notion, etc.) MUST ship:
    - an in-repo data snapshot at a documented, gitignored path (e.g. `.cursor/linear-live.json`);
    - a helper script that reads the snapshot first and re-fetches live only when the secret is in env (e.g. `scripts/linear/get_issue.py`);
    - a write-path queue (e.g. `proofCommentQueue` in the run-state file) for actions that genuinely require the secret, so the agent can record the intended body and a later session can post it.
    Block only when both snapshot and secret are unavailable. Treat the live key as optional for read paths, required for write paths. See `references/linear-access-fallback-for-cursor-prompts-2026-06-22.md`.
19. **Inline prompt in chat reply.** After running this skill, the chat reply MUST include the active Cursor prompt inline as a fenced `text` code block (not `bash`). Default to the goal-mode prompt when whole-queue execution is expected; otherwise paste single-issue and bounded-queue too. The user must be able to copy/paste without opening any sibling file. If the reply lacks a fenced code block whose first line is `/goal` or `# Cursor `, the reply is incomplete. See `references/inline-prompt-in-chat-2026-06-22.md`.
20. **Per-issue ownership for matrix-shaped hard gates.** When a hard gate is checking a matrix of (resource, attribute) cells (proof matrices, source/provider coverage, capability tables), the gate MUST expose a per-issue verdict in addition to the queue-wide verdict. Queue-wide FAIL must not block issues that own zero failing cells. Persist the deferred cells in a `deferred-claimable-cells-<TS>.json` manifest at `output/<project>/proof-matrix/` so downstream sessions see what is owed and by whom. The runner should forward a per-issue env var (e.g. `HOSHI_PROVE_ISSUE`) to the gate script. Print the per-issue verdict line BEFORE any `exit 1` so `set -euo pipefail` does not swallow it. On macOS `/bin/bash` (no associative arrays), use a `case`-statement `cell_owners()` function for ownership lookup. See `references/proof-matrix-per-issue-ownership-2026-06-22.md`.
21. **CLI Tester gate-config normalization.** The shared `<HOME>/Code/cli-tester/bin/project-test-gate` scanner uses exact-string prefix matching, not globs: `docs/specs/**` does not match. Use plain prefixes (`docs/specs`, `codedb.snapshot`, etc.) in `scanExcludePaths`. The runner reads `bannedTerms`, `privateDefaultPatterns`, and `scanExcludePaths` at the root of the gate config; mirror the legacy nested `scans.*` block only for back-compat. Always exclude `.cursor/linear-live.json` (or any in-repo external-API snapshot) — it is the largest source of false-positive banned-term hits. `proofCommands` must be an array of shell command strings; richer metadata goes under `xProofCommandsDetailed`. See `references/cli-tester-scan-exclude-normalization-2026-06-22.md`.
22. **Packet-mode Book-review local approval.** When `bookReview.mode` is `packet` (no Hermes API reachable) and CLI Tester `run` shows `status: PASS` with `bannedTermScan.hitCount: 0`, `privateDefaultScan.hitCount: 0`, all changed paths are issue-scoped and allowlisted, and no `output/`, `evidence/`, `artifacts/`, `.cursor/*run-state*.json`, `.env*`, or secret-pattern files are staged, the supervisor cron is allowed to convert `decision: REQUESTED, safeToContinue: false` into `decision: APPROVED, safeToContinue: true` locally, re-run `verify` to clear `nextChildBlocked`, drain the queued Linear actions via helpers, and advance the queue. Otherwise leave the BLOCKED state and report the blocker. Hard rule: this repair lives in the cron, not in `bookReview.autoApprove` config — keep the verification explicit. See `references/packet-mode-book-review-local-approval-2026-06-22.md`.
23. **Linear API quirks.** `IssueUpdateInput` does not accept `id` or `state`. Pass `id` as a top-level mutation arg and use `stateId` (workflow-state UUID), not `state: "<name>"`. Workflow state UUIDs are resolved via `workflowStates(filter:{name:{eq:"In Review"}})`. Read the global `LINEAR_API_KEY` from `~/.hermes/.env` non-verbosely (sandbox redacts the literal token; load it via a temp file with mode 0600 and reference `os.environ['LINEAR_API_KEY']`). Use helpers (`scripts/linear/post_proof_comment.py`, `scripts/linear/set_issue_state.py`) instead of letting Cursor call Linear directly. See `references/linear-api-quirks-2026-06-22.md`.
24. **Safe skip-ahead beats operator wait.** When a Cursor-driver cron is blocked only because the immediate next approved issue depends on a later approved issue, it must look for the earliest later approved issue that is independently unblocked, issue-scoped, and safe. If one exists, update run-state/driver-state to defer the blocked issue, run the safe issue next, and keep the original dependency semantics intact. Do not ask Henry for a pick in that case. Escalate only if every remaining issue is blocked/unsafe or if progress requires reordering/building the dependency chain ahead of the approved order. Worked ShowClaw example: `THE-327` blocked by later `THE-330`; `THE-329` independently unblocked, so run `THE-329` and defer `THE-327`/dependents.
25. **Live Linear reconciliation is part of done.** For Linear-backed queues, queue-drained/local-complete/merged is not complete until the live Linear board is reconciled. Before pausing/stopping the supervisor or saying “fully done,” query every approved child issue in Linear, verify state type `completed`, verify proof/gate comments or intentional skip receipts, drain `proofCommentQueue`/`stateChangeQueue`, repair missing state/comments, and re-query for `not_done: []`. See `references/linear-state-reconciliation-after-autonomous-queues-2026-06-24.md`.
25a. **Paperwork mule can desync from the build convoy.** Local run-state can report N/N complete and `main` may already be merged while live Linear still shows every child in `Backlog`. The most common cause is that proof-comment posting depends on session env vars (`PROJECT_GATE_POST_LINEAR`, `BOOK_API_BASE` / `API_SERVER_KEY`) that were unset for the run, so the convoy queued comments in `proofCommentQueue` instead of posting live. Run-state lying and Linear disagreeing is a **known packet-mode failure mode**, not a one-off. If Henry asks "why haven't the tasks moved on Linear?" or "is the agent updating Linear?", do not trust run-state alone: query live Linear for `state.type` distribution and `comments` count, and reconcile. The repair pattern is documented in `references/linear-paperwork-mule-desync-repair-2026-06-25.md`.
25. **Queue-drained auto-stop is mandatory for every driver cron.** When a driver’s approved Linear child queue is fully drained (run-state `status` is `completed`/`queue_drained`, `currentIssue` is null, `proofCommentQueue`/`stateChangeQueue` are empty, no Cursor worker is active for the repo, and the final validation/promotion receipt exists), the cron must self-pause: write `queueDrained: true`, `observedStatus: "queue_drained_auto_stopped"`, `stoppedAt`, `cronJobId`, and `finalProofPaths` to driver state; run `hermes cron pause <job_id>`; emit exactly one tiny final line. Do not keep heartbeating or relaunching the worker for a completed queue. Patch all three layers together: the reusable template, the live cron prompt in `~/.hermes/cron/jobs.json`, and any sibling driver state. Full signal/verification/anti-pattern reference: `references/queue-drained-auto-stop-for-cursor-driver-cron-2026-06-24.md`.
26. **Queue final summary is mandatory.** At the end of any autonomous queue, before or alongside queue-drained auto-stop, write `output/<project>/queue-summary/<timestamp>.md` (or the project’s equivalent proof root) and send a compact final summary to the origin channel. The summary must include: number of Linear items worked on in the queue/run, number still blocked with blocker reasons, number of agents/workers involved (Cursor/Codex/Book/etc.), total wall-clock hours from first recorded queue/worker start to final stop, live Linear reconciliation counts (`completed`, `not_done`, comments posted/queued), final commit/branch/proof paths, and whether the cron self-paused. If any field is unknown, say `unknown` and name the missing source; do not guess. This final summary is required even when normal healthy-cycle reports stay tiny.

## Prompt taxonomy (Helm-style)

Every pack ships three prompt files: `cursor-single-issue-prompt.md`, `cursor-bounded-queue-prompt.md`, and `cursor-goal-prompt.md`. They are not interchangeable — see `references/helm-style-prompt-taxonomy.md` for the scope, invocation, and required sections of each. The Helm v1 goal-mode prompt in `book/output/helm/cursor-end-to-end-plan/cursor-goal-prompt.md` is the canonical worked example.

For checking progress of an already-running Cursor Agent task, use `references/cursor-agent-progress-check-2026-06-22.md`: combine Cursor UI labels with git state, local run-state, machine gate receipts, Book review receipts, and correct interpretation of packet-only review blockers.

For native Hermes `/goal` supervisor diagnostics (Codex parallel workers), use `references/native-goal-supervisor-diagnostics-2026-07-13.md`: watchdog script interpretation, supervisor serialization bottleneck, state-file vs live-process mismatch, deferred-tail blocking, and the over-engineering anti-pattern (don't migrate control planes mid-run when the native supervisor just needs to cycle).

For Entity/Cursor Cloud loop pilots where cloud agents should propose PRs but Enterprise owns runtime truth, use `references/entity-loop-hard-gate-cursor-cloud-2026-07-01.md`: make the first task a receipt-backed hard gate, keep downstream tasks blocked on source/runtime/dirty-state failures, and treat Enterprise replay + local gates + sandbox receipts as the only verification authority.

## Required inputs

Collect these before writing outputs:

- Project name and slug.
- Repo root and intended branch/worktree.
- Linear project/team and issue IDs.
- Source-of-truth docs/specs/PRDs/decision logs.
- Banned terms or contaminated concepts for this project.
- Repo-real proof commands from `package.json`, scripts, Makefile, CI, or docs.
- Shared gate runner path and desired `.project-gate.json` checks.
- Entity FS output root for the plan link.

If any input is missing but discoverable, use tools. Ask only when it cannot be retrieved.

## Workflow

### 0. Cursor progress/status checks

When Henry asks to check progress of an already-running Cursor Agent task, do a status audit before generating new prompts or requeueing anything:

1. **Cursor CLI is primary.** Run `cursor agent status` from the repo root and confirm the account is authenticated for CLI actuation. If auth is absent (`Not logged in` / `Authentication required` / models list rejected), do **not** attempt `cursor agent login` (or `codex login`) from a supervisor cron — these require interactive browser OAuth and will hang the background process indefinitely. Instead record a precise blocker in driver state (e.g. `observedStatus: "blocked_cursor_cli_not_authenticated"`, name the missing credential class — check `~/.cursor/auth.json`, keychain, and `CURSOR_API_KEY`/`CURSOR_AUTH_TOKEN` env, and whether cursor creds exist in `~/.hermes/.env`) and link the one-time interactive remediation command in the report to Henry. The next supervisor cycle will launch the worker automatically once he runs the interactive login. This is a **fail-stop, not a self-recover**: a non-interactive cron can never complete an OAuth handshake. Distinguish this (human-required auth) from self-recoverable blockers (stale locks, packet-mode review waivers, missing env-source instructions) which the cron fixes before reporting. Never print, paste, or log `LINEAR_API_KEY`, `CURSOR_API_KEY`, or any credential token.
2. Inspect the live Cursor CLI worker first: check the driver-state PID/log path and the live process table. If a worker is alive, inspect only new log output, run-state, and receipts. Do not start a second worker. If a recorded worker exited since the last check, treat that as a report-worthy state transition even when it exited cleanly; inspect the log tail and either repair/relaunch or send the compact check-in instead of going silent.
3. If the Cursor GUI is also available, use it as **observability only**: task title/status, touched files, model, and “Changes +…” count. GUI screenshots are evidence, not the control plane.
4. Cross-check the repo branch, recent commits, and dirty/untracked files.
5. Read project-local run-state files such as `.cursor/<project>-autonomous-run-state.json` or `.cursor/run-state/<project>.json`.
6. Read machine gate and Book review receipts. Machine `run` PASS is not enough when Book review is required.
7. Interpret packet-only Book review correctly: `decision: REQUESTED`, `status: BLOCKED`, `safeToContinue: false` means review approval is missing, not that the implementation proof failed.
8. Report whether the next issue may start. If run state says wait for Book approval or Henry waiver, do not requeue the next issue.
9. If Henry asks “what do you want me to approve?” or similar, switch to approval-target clarification mode: inspect live driver/run-state/receipt evidence, name the exact artifact/decision/issue, state the one-sentence decision and what approval unlocks, and give the exact approval phrase. Do not provide a broad project recap. See `references/approval-target-clarification-2026-06-23.md`.
10. Keep healthy cron-driver reports terse: one short progress line plus optional safe evidence (CLI log tail, commit SHA, receipt path, or GUI screenshot). Do not dump receipts, changed-file inventories, or long tooling notes when things are going well. If things are not going well, send a short summary of the issue, what was done to fix/recover it, and whether Cursor is back on track. Detailed evidence belongs in receipts/log files, not the Discord heartbeat.

Worked pattern: `references/cursor-agent-progress-check-2026-06-22.md`. Goal-mode CLI supervision: `references/cursor-cli-goal-mode-supervision-2026-06-23.md`. For repeated interactive-auth blockers, lock-safe state updates, live Linear boundary checks, false-positive process-match avoidance, and silence/heartbeat behavior, use `references/auth-blocked-supervisor-steady-state.md`. For per-child closeout and relaunch, use `references/linear-child-closeout-next-worktree-relaunch-2026-06-24.md`; for SIGTERM/partial-log closeouts, stale final-head receipts, equivalent proof in nonstandard paths, and final-HEAD reruns after noisy worker exits, use `references/linear-child-closeout-next-worktree-relaunch-2026-06-25.md` plus `references/benign-sigterm-closeout-and-final-head-verification-2026-06-25.md`.

### 1. Source-of-truth inventory

Find and list the real sources Cursor should trust:

- repo `AGENTS.md`, `.cursor/rules/*`, project context docs
- PRD/spec/superspec/source packet/decision records
- live Linear issue bodies and titles
- actual package/test/build scripts
- current branch/worktree and whether Cursor will see the same files

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
      "source_paths": ["docs/specs/project-v1.md#section"],
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
4. Upload by Linear UUID, not ordinal order.
5. Add an audit comment to each rewritten issue explaining that the body was replaced with the full Cursor-ready execution contract.
6. Re-fetch live Linear.
7. Re-run drift audit against live Linear, not local drafts.
8. Only then mark preflight PASS / Cursor-ready.

Apply only after approval unless Henry has explicitly told you to fix/rewrite it now. After applying, re-fetch and scan live Linear.

Completion criterion: live Linear, not local drafts, passes the checks, including body/source-key alignment and self-contained Cursor execution sections for every approved issue.

### 5. Gate config

Generate `.project-gate.example.json` from repo-real commands and project policy. Prefer copying it to `.project-gate.json` only after review.

CLI Tester compatibility rule: the live `<HOME>/Code/cli-tester/bin/project-test-gate` expects `proofCommands` as an array of shell command strings. If the pack wants richer metadata (`name`, `required`, `workdir`, `expectedExitCode`), put it under `xProofCommandsDetailed` or another sidecar key, and keep `proofCommands` as strings. Also expose `bannedTerms`, `privateDefaultPatterns`, and `scanExcludePaths` at the root level unless the live CLI schema has been verified to read nested `scans.*`.

Default gate checks:

- proof commands and exit codes
- banned-term scan
- private default / secret scan
- changed-files summary
- receipt existence
- CLI Tester Book review gate (`request`, `run`, `book-review`, `verify`)
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
set -a; source <HOME>/.hermes/.env; set +a
curl --noproxy '*' -sS "$BOOK_API_BASE/health"
```

Use `mode: "hermes-api"` only after confirming `BOOK_API_BASE` and `API_SERVER_KEY` are configured; never print those secrets in receipts. If Hermes API returns `NEEDS_FIX`, treat that as a real review blocker and fix the evidence/branch/receipt rather than removing the gate. `verify` must block the next child unless Book review is either not required or has `decision: APPROVED` and `safeToContinue: true`.

Per-issue hard gates with matrix-shaped checks: when the gate checks cells owned by different issues (proof matrices, capability tables), the runner must forward a per-issue env var (e.g. `HOSHI_PROVE_ISSUE`) to the gate script so the script can emit a per-issue verdict line. See `references/proof-matrix-per-issue-ownership-2026-06-22.md` and hard rule 20.

CLI Tester scan-exclude normalization: see `references/cli-tester-scan-exclude-normalization-2026-06-22.md` and hard rule 21. Strip `**` from excludes; always exclude the in-repo external-API snapshot; mirror bannedTerms/privateDefaultPatterns/scanExcludePaths at the root. For the regexp syntax compilation pitfall in `privateDefaultPatterns` (which causes `SyntaxError: Nothing to repeat` on glob patterns), see `references/cli-tester-private-patterns-regex-syntax-pitfall-2026-07-14.md`.

Completion criterion: the gate command can be run from repo root and writes `output/<project>/test-gate/<issue-id>.json` and `.md` receipts, and if Book review is required, `book-review` + `verify` also work for the issue.

### 6. Human handoff operating plan and prompts

Generate the required output files from the templates:

- `plan.md` — **primary Helm-style human handoff operating plan**, not a thin index
- `cursor-single-issue-prompt.md`
- `cursor-bounded-queue-prompt.md`
- `cursor-goal-prompt.md` — **required**, mirrors Helm v1 goal-mode shape
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
- Book review / verify commands when configured
- bottom-only cron/check-in template marked **do not run/register unless explicitly asked**

Completion criterion: the plan and prompts say approved queue only, fail-stop, per-issue reread, CLI Tester run/book-review/verify gate, no cron by default, no self-discovery, no reused receipts, and no local video assumptions. The returned primary link is `/docs/source/.../plan.md`; raw `/api/file/raw?...` is secondary only.

### 7. Preflight before telling Henry to run Cursor

Do not say “Cursor can run” until preflight passes:

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

Completion criterion: preflight artifact says PASS with paths and receipts, including either Book review/verify readiness when it adds signal or an explicit non-stalling skip policy when automated review gates are sufficient.

### 8. End-to-end Cursor CLI + supervisor cron bootstrap

Run this section when Henry's ask implies autonomous execution, not just handoff generation.

1. Stage the active goal prompt outside the repo:
   - Source: `<pack-dir>/cursor-goal-prompt.md`.
   - Extract the fenced `/goal` text into `Enterprise/Crew Home/Output/Book/<project>-cursor-driver/cursor-goal-prompt.active.txt`.
   - Hash the staged prompt and record the source path