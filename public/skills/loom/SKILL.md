---
name: loom
aliases: [grill-to-linear-execution-graph]  # legacy kebab-slug alias (Hermes loader does not honor aliases, but kept as frontmatter breadcrumb and for any future loader that does)
description: Use when converting a completed Grill-Me decision log into a SuperSpec/Oracle PRD, full Linear issue graph, and Cursor/local-agent execution context. Covers post-grill synthesis, Oracle/GPT + Opus critique passes, goal-mode continuation, parent+child Linear loading, and repo-native context packs for agents without Hermes skills.
version: 1.0.0
author: Book
license: MIT
metadata:
  hermes:
    tags: [grill, superspec, oracle, linear, cursor, issue-graph, goal-mode]
    related_skills: [grill-me, super-spec, to-prd, to-issues, linear, context-engineering, model-routing-forensics]
---

# Loom (formerly "Grill → SuperSpec → Oracle → Linear Execution Graph")

## Overview

Use this workflow after a long Grill-Me session has settled product/spec decisions and Henry wants the work converted into a buildable Linear plan.

The output is **not** just a PRD and not just a few epics. The target deliverable is:

1. source packet from the grill decisions;
2. SuperSpec / Oracle spec pass;
3. PRD pass;
4. second-model critique pass;
5. canonical merged PRD/spec;
6. parent epic spine in Linear;
7. full child execution issue graph in Linear;
8. repo-native Cursor/local-agent context pack;
9. verification receipts.

Core lesson: **15 parent issues are a skeleton, not the full body.** If the goal is “Cursor connects to Linear and builds,” create child issues until every issue is execution-ready.

## When to Use

Use when Henry says things like:

- “after the grill, turn this into issues”
- “combine Grill-Me with SuperSpec and Oracle”
- “do this in goal mode and load everything into Linear”
- “Cursor should connect to Linear and build it”
- “save the process that led from the grill to issues”

Do not use for small one-off implementation tasks. Use normal `to-issues` for modest plans.

## Phase 0 — Inputs and corrections

When this skill is invoked after a completed Grill-with-Docs run, start here immediately. Do not merely summarize the lanes or ask a broad confirmation question; the whole point of this skill is to move from settled grill decisions into the artifact chain that can eventually populate Linear. See `references/showclaw-grill-to-linear-route-failclosed-2026-06-21.md` for the ShowClaw correction: Henry explicitly corrected "run SuperSpec?" drift to "run loom". If Phase 1 hits `pro_gate_failed` or browser attach trouble, use `references/oracle-browser-route-recovery.md` before rerunning; a listening port is not enough — verify `/json/version`, `/json/list`, and signed-in Pro/Enterprise page state.

**Discipline note (added 2026-06-22).** When the user names this skill by name ("run loom") and then a route fails, the next action is **route recovery and re-run, not summarization or asking confirmation**. The session-level failure mode this skill was created to prevent is the agent drifting to "give me the lane summary" or "wait until the route is fixed" instead of running the skill's documented recovery. The accepted loop when Oracle browser is down is:

1. confirm the route failure with receipts (route JSON, `pro_gate_failed` or `upstream_timeout`);
2. surface the failure and the recovery options to the user once;
3. on the user's explicit go-ahead (or on a previously-authorized override), run the documented second-attempt route and produce the artifact;
4. write the override-attempt receipt; do not summarize lanes in place of an artifact.

If the user has previously authorized an override lane in the same session, that authorization carries forward — do not re-ask. The user expects the loop to converge on a real spec artifact, not on a series of summaries.

Before generating anything, assemble a source packet:

- completed Grill-Me decision log, with Q-numbered decisions;
- current product/spec docs;
- code/runtime evidence if the product is non-greenfield;
- latest user corrections and scope boundaries;
- explicit non-goals;
- requested model route and reasoning level.

Preserve scope corrections verbatim. In the Entity Phase 2 run, these were load-bearing:

- Paperclip is an external competitor/reference, not internal product.
- Curacel is design-customer/pilot context, not a demo deliverable.
- Entity is the agent-native work plane, not just Mission Control.
- Helm is runtime/admin control; ClickClack is chat/collaboration substrate.
- OpenClaw/Hermes are runtimes/providers, not Entity itself.
- Google Docs V1 is read/index/link/preview; canonical proof is Entity-native markdown receipt.

Completion criterion: one source packet exists and names the authority order when inputs conflict.

## Phase 1 — SuperSpec / Oracle spec pass

**Default SuperSpec model = Oracle GPT-5.5 Pro in Enterprise browser mode** (per the `super-spec` skill: generation uses `gpt-5.5-pro` via Oracle `--engine browser` against a signed-in Enterprise Chrome/ChatGPT tab. No direct Azure generation, no LiteLLM, no silent fallback to GPT-5.4 Pro, GPT-5.5 non-Pro, Codex, or local/runtime models.). Run via the SuperSpec runner on Enterprise:

```bash
bash <HOME>/Enterprise/Crew\ Home/Skills/super-spec/scripts/run-super-spec.sh \
  --title "<title>" --input <file> \
  --model gpt-5.5-pro \
  --remote-chrome 127.0.0.1:<debug_port> \
  --browser-tab current
```

Operational sequence:

1. load `model-routing-forensics` and its Oracle 5.5 Pro browser default reference;
2. find/verify the signed-in Enterprise Chrome remote-debugging port;
3. run SuperSpec with `--model gpt-5.5-pro --remote-chrome 127.0.0.1:<port> --browser-tab current`;
4. if browser mode is unavailable or automation fails, stop and report route failure — do **not** downgrade;
5. save output to a deterministic path;
6. report route, line count, SHA-256, model evidence, route JSON, and output path.

### Henry-authorized non-Oracle override (Phase 1 attempt 2)

When the user explicitly writes an override (e.g. "if it doesn't work, try citadel azure 5.4-pro xhigh"), that override is authorization to attempt a documented alternative route, **not** permission to invent a spec or write Linear issues from preview lanes. Treat the override as a second-attempt route, not a default.

Override procedure (record every receipt):

1. **Smoke the alternative lane first.** A short token-budget probe (e.g. 64 tokens, single short prompt) is enough to confirm the lane answers and to capture the `model` field the proxy returns. Save the smoke response. The smoke must come back with the expected body marker (e.g. `AZURE_54PRO_XHIGH_OK`) before any structured-spec attempt.
2. **Capture the override receipt.** Include: the user's exact authorization words, the alternative route id, the smoke proof, the proxy base URL, the lane's `available_concurrency` (from `/v1/models` or the proxy's own status endpoint), and the **expected model name** the proxy will report in the structured-spec response.
3. **Bound the generation by what the proxy will actually return.** Do not assume a 64k `max_tokens` will succeed on a long structured super-spec — most proxies time out somewhere between 12k and 32k output tokens for `reasoning_effort >= medium` on this kind of input. Start at `max_tokens=8000–12000` with `reasoning_effort=medium` and grow only after a successful small response.
4. **Avoid parallel attempts against the same lane.** Several endpoints in this stack report `available_concurrency: 1/2`; three concurrent calls will all time out. Make calls sequential. The same rule applies across **sibling passes on the same lane** — if you split the spec into sections 1–7 / 8–12 / 13–21 and run them as three background curls in parallel, all three will likely fail. Run them one at a time and poll.
5. **Recognize "reasoning burns all tokens, emits nothing" as a distinct failure mode.** On dense super-spec prompts, `azure-openai-responses/gpt-5.4-pro` at `max_tokens=9000 reasoning_effort=medium` has been observed to return `output_tokens: 9000, reasoning_tokens: 9000, content: ""` — the model spends the entire output budget on internal reasoning and emits zero visible content. Symptoms: HTTP 200, `usage.output_tokens` equals `max_tokens`, `content` is empty. Recovery: switch to a **sibling lane** (`azure-openai-responses/gpt-5.4` — non-pro) at the same `max_tokens` and `reasoning_effort`; the lower-tier lane typically returns real content for the same prompt. This is a per-lane-content, not a prompt-shape, problem.
6. **On `upstream_timeout`, `upstream_4xx`, `concurrency_gate`, or `prompt triggered upstream content filter`, stop and write the override-attempt receipt.** Do not retry forever on the same prompt shape. The first non-success on a new lane is a signal to either:
   - change the prompt shape (e.g. drop embedded transcript material, paraphrase, lower reasoning effort), or
   - escalate the failure to the user with the full attempt ledger and the unblock options.
7. **Never silently substitute the override lane's output for the Oracle artifact.** The override response is documented in its own lane-receipt; the canonical spec chain still names the Oracle route as authoritative. Override output is, at best, a derived reference, not a replacement.

### Upstream_timeout / content_filter escalation (Phase 1 attempt N)

If the alternative lane returns `upstream_timeout` (proxy level), `upstream_4xx` (HTTP 400 from upstream), or `prompt triggered upstream content filter` for **every** reasonable prompt shape:

- Do **not** keep retrying with smaller `max_tokens` and lower `reasoning_effort` after the first two distinct attempts have both failed. The pattern is a lane-level issue, not a per-call issue.
- Write a route-recovery receipt listing every attempt with `model`, `reasoning_effort`, `max_tokens`, and the exact error type and message. Include the size and first/last bytes of the prompt at each attempt.
- Report three unblock options and stop:
  1. wait and retry (lane busy / rate-limited);
  2. fix the signed-in Oracle browser route and rerun the documented `run-super-spec.sh`;
  3. write an explicit, narrowly-scoped override authorizing a different lane and a different artifact role (e.g. "you may use X only for a section-level outline, not the canonical spec").

### Phase 1 derived-artifact recipe (when override succeeded but Oracle did not)

When Phase 1 produces a real spec via the override lane (e.g. `azure-openai-responses/gpt-5.4-pro` or `gpt-5.4`), the artifact must be **labeled derived-from-required-route, not canonical**. The recipe is:

- **Markdown header comment** (the first lines of the artifact file):
  ```
  <!-- Generated by loom Phase 1 SuperSpec
       Override route per Henry: <route description>
       Required route oracle:gpt-5.5-pro[browser] was unavailable: <reason>
       Pass A: <model> (<max_tokens> <reasoning_effort>) - SUCCEEDED (N chars)
       Pass B: <first attempt result>, re-run on <model> - SUCCEEDED (N chars)
       Pass C: <first attempt result>, re-run on <model> - SUCCEEDED (N chars)
       Per skill rule, non-Oracle output is a derived reference, NOT a canonical replacement.
       This artifact is the derived-from-oracle-required-route artifact. The canonical chain still names Oracle as authoritative.
  -->
  ```
- **Route JSON** (`<date>-<slug>.route.json`) must include:
  - `status: "ok"`
  - `selected_route: "<override-route-name>"`
  - `reason: "henry_override_non_oracle_route"` (or the user's verbatim authorization marker)
  - `required_route: "oracle:gpt-5.5-pro[browser]"`
  - `required_route_status: "failed"` and `required_route_reason: "<short reason>"`
  - `override_route.passes: [...]` — one entry per pass with `pass`, `sections`, `model`, `max_tokens`, `reasoning_effort`, `result`, `content_chars`
  - `linear_writes: 0`
  - `authority: "derived-from-required-route; not a replacement for Oracle browser artifact"`
  - `output_path`, `output_bytes`, `output_sha256`
- **SHA-256** of the full artifact body must be in the route JSON (`output_sha256`) so downstream phases can detect edits.
- The route JSON is the only durable signal a later agent has that the artifact is derived. Without it, a later session may treat the artifact as canonical and feed it into Phase 2 as if it were Oracle-authored — that is a documented failure mode in the pitfalls section.

### Source-packet sanitization (one pre-emptive fix)

If the source packet contains embedded transcript segments (channel-message dumps, quoted user replies, "Recent channel messages" blocks), strip them before submitting to a non-Oracle OpenAI endpoint. The substring "Recent channel messages" and the "HiM" / "Bubbling" framing are reliable `content_filter` triggers. Keep the locked decisions, the receipt-clearance review, and the lane split; drop the embedded session material.

A reusable script is in `scripts/source-packet-sanitize.py`. It removes any `## Recent channel messages` block, paraphrases obvious "Bubbling" transcript prefixes, and trims to a configurable char budget.

The SuperSpec output should include product framing, architecture, boundaries, policy, migration/backfill, rollout, and a first-pass ticket graph.

Completion criterion: Oracle/SuperSpec artifact exists, has receipts, and the latest corrections are visibly represented.

## Phase 2 — PRD and critique passes

Recommended two-model flow:

1. GPT/Oracle drafts the PRD from the source packet + spec.
2. Opus 4.8 critiques the PRD as second architect / hard reviewer.
3. Merge pass produces canonical PRD.

**Critique-route smoke before critique runs.** When using Citadel `citadel/opus48` for the critique, do a one-shot smoke first (e.g. `Reply with exactly: OPUS48_PHASE2_OK`) and require the response body to include both `model: claude-opus-4-8` and the expected content before kicking off the critique. Opus critiques without a confirmed route produce opinions, not architect-grade review.

**Critique outputs MUST split into MUST-FIX vs SHOULD-FIX vs DEFER.** Critique reviews that only list "consider" or "you might want to" items are not actionable. Require every critique pass to label each finding as **MUST-FIX** (apply in the merge artifact), **SHOULD-FIX** (apply, but with explicit ordering), or **DEFER** (requires a Henry decision; carry the finding forward with an owner and an open question). After the critique, write a `phase2-canonical-merge-receipt.json` with `must_fix_total`, `must_fix_applied`, `must_fix_deferred`, `henry_decisions_pending` counts so the merge is auditable.

**Model-output quality gate:** reject model output that is obviously unusable, even if the model route exits `0`. Examples: a 1-line / 1-character PRD draft (`I`), empty markdown, missing the requested PRD template, or an answer that says it could not read the attached source. Record the route/log/bytes/sha as a failed-unusable receipt; do not feed it forward as if it were a draft.

**Oracle authority rule:** when Henry asked for Oracle/SuperSpec/PRD, never skip the Oracle-based spec/PRD because one run failed or returned garbage. Retry the required Oracle route first — usually with a compact source packet, explicit `--force`/fresh slug, and browser route if the API route is degraded. Only use a deterministic/local parent-merge as an interim loader artifact when Henry explicitly approves or when it is clearly labeled **non-authoritative**. If all Oracle retries fail, report the exact blocker instead of substituting.

**Phase 2 derived-artifact guardrail (PRD/Spec, not fresh Oracle).** When the PRD or critique is a transformation of an existing Oracle SuperSpec (not a fresh Oracle generation), the derived artifact must:

- Carry the canonical source SHA-256 in a "Source authority" block (e.g. `Canonical SHA-256: 26d6c0de…`) AND in the receipt JSON.
- Be labeled **"derived from Oracle SuperSpec, not a fresh Oracle artifact"** in the body, header, AND in `linear_writes: 0` of the receipt.
- Preserve the source contradiction/open-question list verbatim. Do not summarize RISK-N or OQ-N entries into paraphrases; the next phase needs the exact titles + body pairs to wire them as Linear ticket acceptance criteria. When the source has 18 open questions, the derived artifact must carry 18, not 16.
- Apply critique MUST-FIX items as literal text edits to the merged artifact, not as a separate doc. Each applied fix must appear in the merged artifact with `(applied)` next to the bullet so a future reviewer can grep it.
- Carry deferred items forward with the reason (`requires Henry decision`) and a numbered "Outstanding Henry decisions" list at the end of the merged artifact.

**Oracle SuperSpec extraction via logged-in CDP** (when Oracle browser mode is broken but the response exists): see `references/oracle-cdp-extraction-recipe-2026-06-21.md` for the full recipe. The short version: switch the working `/c/<id>` tab to the active one, then `Runtime.evaluate({expression: 'document.body.innerText'})` over Python `websockets` with `origin=None` (NOT `devtools://` — Chrome rejects it on this Mac). Do not use `pbpaste` after clicking AX "Copy message" — it does not route to the system clipboard. Do not synthesize a "local deterministic PRD" as a substitute; the artifact is the Oracle response, period.

For the PRD + critique flow:

- Oracle PRD draft must be retried until it yields a usable PRD or reports a real blocker.
- Opus critique must receive the full PRD and enough full SuperSpec/source content to cite sections/D-numbers. Passing only a checksum/path produces weak “I cannot verify” critiques.
- Use Citadel `opus48` for Opus 4.8 critiques; do not route Opus through Pioneer.
- If a deterministic merge is used after a valid Oracle PRD exists, preserve the Oracle PRD as the authority and include traceability for every critique must-fix applied/deferred.

The canonical PRD should include a traceability section showing exactly how critique must-fixes were applied or deferred. If an interim deterministic PRD was used while retrying, update the receipt once the Oracle PRD lands and clearly name which artifact is authoritative.

Completion criterion: an Oracle-authored PRD exists (or a real blocker is reported), critique had access to source bodies, canonical PRD includes critique must-fix traceability, rejects unusable model output with receipts, and can feed issue creation without relying on hidden conversation context.
- read draft, critique, and spec, parse MUST-FIX bullets, apply literal-anchor replacements, append deferred fixes verbatim;
- emit a `prd-canonical.md` with a Traceability section naming every applied/deferred fix and the spec section it ties to;
- validate that all required `to-prd` template sections are present and surface any gaps as `## Open Template Gaps`;
- write a merge receipt (`phase2-merge-receipt.md`) with byte/lines/SHA-256 and the per-fix ledger;
- update the phase ledger with `must_fix_total`, `applied`, `deferred`, `missing_template_sections`.

A reusable shell + script recipe is in `templates/helm-prd-parent-merge.sh` and `scripts/helm-parent-merge.py` (added 2026-06-21). The script is CLI-driven (`--spec --draft --critique --source --out --receipt --ledger`), runs in <5s, and emits a deterministic Traceability block. Save your own copy under the run directory.

The canonical PRD should include a traceability section showing exactly how critique must-fixes were applied.

Completion criterion: canonical PRD exists, includes critique must-fix traceability, and can feed issue creation without relying on hidden conversation context.

## Phase 2.5 — Cross-route route receipts

Before Phase 3, capture receipts for every model that touched the artifact chain:

- SuperSpec: generator route (e.g. `oracle-browser:gpt-5.5-pro`), line/byte/sha256, output path, exception ledger entry if a default was overridden.
- PRD draft: same shape.
- PRD critique: same shape, plus the smoke proof for the critique model alias (e.g. `curl /v1/chat/completions` returning the right `model` field).
- Canonical PRD: input SHA chain (spec + draft + critique), applied/deferred counts, missing-template-section list.

If a phase uses a non-default route, the receipt must show (a) the default route was attempted and failed, (b) the user override (or session evidence) that authorized the new route, and (c) the new route succeeded. The Phase 1 receipt pattern in `loom` sessions is `## Exception Ledger` followed by `## Run #N Validation`.

## Phase 2.75 — Project and repository bootstrap

Before any Linear issue creation, verify the target project and implementation repository exist. This phase is mandatory for greenfield work and idempotent for established projects.

1. Query Linear by exact project name. Create the project under the intended team when absent; record project ID and URL. Never create issues into an unrelated default project.
2. Verify the canonical GitHub owner and exact repository slug. Create the repository when absent (private by default unless Henry explicitly requests public), initialize `main`, and clone it to the execution host.
3. Install repo-native sources before issue loading: `AGENTS.md`, canonical PRD, candidate graph, build-context docs, and README with the Linear project and authority order.
4. Commit and push the bootstrap artifacts; verify the remote default branch and clean clone.
5. Write receipts for Linear project creation/readback and GitHub repository creation/readback.
6. Pass explicit `projectId` and repository URL/path to the Linear loader. Every issue must be assigned to the project; every child must be parented; issue bodies must point to repo-readable context.

If the project or repository already exists, reuse it after exact-name/owner verification. Never create suffixed duplicates to route around uncertainty.

Completion criterion: Linear project and GitHub repository both exist, are read back from their live APIs, repo-native context is committed, and their identifiers are available to the issue loader.

## Phase 3 — Parent epic spine

Run a first issue pass to create the parent epic spine. These are broad parent issues, not execution tickets.

For large product specs, expect 10–20 parents. For Entity Phase 2, the parent spine was 15 issues:

- Slice 0 / inventory;
- workspace hierarchy;
- ActivityEvent spine;
- receipts;
- docs/files/artifacts;
- review/human gates;
- Task Master routing;
- worktype overlays;
- permissions/search;
- inbox/notifications;
- agent management/runtime binding;
- ClickClack;
- Google Docs;
- migration/backfill;
- rollout/observability.

Mark these as parent epics. Do not call this “complete” if the goal is autonomous Cursor/local-agent execution.

Completion criterion: parent epics exist in Linear, project assignment is verified, and they are clearly described as parent epics.

## Phase 4 — Full child execution graph

Explode every parent epic into execution-ready child issues.

Each child issue must be **independently executable by an AFK agent** without asking “where is the code?” or inventing architecture. Two things make that work:

1. **Right-sized scope** (4–7 child issues per parent epic; split further if a child still needs schema + API + UI + migration + policy + tests at once).
2. **Self-contained context** (every child carries the repo paths, files to inspect, existing patterns to follow, commands to run, proof to attach, and dependencies).

#### Standard child issue body

For every child issue include these exact sections in this order:

```markdown
## Parent
<parent issue identifier + title>

## Read first (repo context)
- AGENTS.md
- .cursor/rules/<feature>.md
- docs/context/<feature>-build-context.md
- docs/specs/<canonical-prd>.md (canonical)
- docs/specs/<full-spec>.md (section N.M only — not the whole thing)
- docs/specs/<issue-map>.md (this issue + parent)
- existing file/path that contains the closest pattern to follow

## What to build
<one paragraph: the end-to-end behavior, not layer-by-layer>

## Boundaries / non-goals
- <do NOT touch these surfaces>
- <do NOT introduce these dependencies>
- <out of scope until later issue>

## Acceptance criteria
- [ ] criterion 1 (testable)
- [ ] criterion 2
- [ ] criterion 3

## Proof required
- install / typecheck / lint / test / build commands run
- proof artifacts produced (paths under `output/proof/<issue-id>/`)
- failure-mode test attached

## Local Cursor / local-agent commands
<exact install, typecheck, lint, test, build commands, with workdir>
<exact proof script: scripts/proof/<feature>-smoke.sh>

## Blocked by
<real Linear identifiers of blocker issues>

## Not done until
<output_artifact> URL, proof files, parent + child links, and the Linear comment
with proof summary are all present.
```

#### Enrichment: how a child issue discovers the right context

For each child issue, run this enrichment pass **before** pushing to Linear:

1. **Resolve the parent epic.** Open the parent issue body. Extract: capability area, PRD section, scope boundaries, design contracts.
2. **Open the build-context doc.** Read `docs/context/<feature>-build-context.md`. Extract: product boundaries, PRD links, architecture, proof rules. Cite the relevant subsection inside the child.
3. **Search the repo for the closest existing pattern.** For each child, find one existing file/path that already does something close. Use `git grep` / `rg` / `search_files`. The child should say “follow the pattern at `apps/entity/server/lib/receipts.ex`” or similar.
4. **Read the PRD section that owns the child.** Cite the PRD section number in the child. Do not paste the whole PRD; reference the file.
5. **Resolve proof commands.** Discover the actual `package.json` / `mix.exs` / `pyproject.toml` / `Cargo.toml` commands. Copy them verbatim into the child. Do not invent.
6. **Resolve dependencies.** Walk the parent epic dependency map. Cite real Linear identifiers (`THE-XX`). Do not write “Slice 1.”
7. **Tag the issue.** Apply the team’s standard labels (e.g., `Feature`, `bug`/none, `priority:medium` unless the parent has higher).

Rule of thumb: 4–7 child issues per parent epic. If a child still requires the agent to invent where to start, split it again or add repo context.

For Entity Phase 2, the full graph became:

- 15 parent epics;
- 75 child implementation issues;
- 90 total Linear issues;
- 60 sibling `blocks` relations;
- children attached to parents THE-6 through THE-20.

Completion criterion: every major spec section has child issues, no parent remains only a vague epic, every child has all sections above filled in with real paths/identifiers, and the child count is enough for one agent to pick up one ticket without asking “where is the code?”

## Phase 5 — Repo-native context pack for Cursor/local agents

Cloud Cursor and external agents may not have Hermes skills. Convert skill/process knowledge into repo-native files so a fresh agent can execute without the skill tree.

### Step 1 — Inventory the target repo

Before writing anything, find:

- repo root and default branch (`git remote show origin | head`);
- existing rules files (`AGENTS.md`, `CLAUDE.md`, `.cursorrules`, `.cursor/rules/*.md`, `.windsurfrules`, `AGENTS.md`);
- test runner, linter, formatter, build command (read `package.json`/`mix.exs`/`pyproject.toml`/`Cargo.toml`/`Makefile`);
- CI config (`.github/workflows/`, `.circleci/`, etc.) to know what gates a PR has to pass;
- existing `docs/context/`, `docs/specs/`, `docs/plans/` directories and their conventions;
- proof artifact convention if one exists;
- the runtime the user mentioned (local Cursor vs Cloud).

### Step 2 — Write the minimal context pack

Always-on, loaded by every agent session in the repo:

1. `AGENTS.md` at repo root. Project map, commands, conventions, boundaries, proof expectations, link to `.cursor/rules/`. Do not duplicate SOUL/MEMORY behavior.
2. `.cursor/rules/<feature>.md` (or `.mdc`) — Cursor-specific rules: how to read Linear, how to attach proof, what to leave alone.
3. `docs/context/<feature>-build-context.md` — product boundaries, PRD links, architecture summary, proof rules, named adjacent issues.
4. `docs/specs/<canonical-prd>.md` — canonical PRD (one file, dated).
5. `docs/specs/<full-spec>.md` — full spec (Oracle / Opus outputs).
6. `docs/specs/<issue-map>.md` — full parent + child issue map with identifiers and short titles.
7. `docs/specs/<load-receipt>.json` — JSON receipt of the Linear load (issue ids, relations, project id).
8. `docs/plans/<date>-<feature>-linear-load-plan.md` and `docs/plans/ACTIVE_PLAN.md` — what the linear load achieved and what is in progress.
9. `scripts/proof/<feature>-smoke.sh` — one command local Cursor runs before claiming done.
10. `scripts/linear/load_<feature>_child_issues.py` — the deterministic loader used to populate Linear, so changes can be re-applied.

### Step 3 — Per-child context enrichment (already done in Phase 4, but verify)

For every child issue, confirm before publishing:

- [ ] has real Linear parent identifier (not local “Slice N”);
- [ ] has real blocker identifiers (not “wait for spec”);
- [ ] has concrete repo file path(s) to inspect;
- [ ] has concrete existing pattern to follow (one file path);
- [ ] has install / typecheck / lint / test / build commands copied from the repo, not invented;
- [ ] has proof artifact expectations (paths, file types);
- [ ] has acceptance criteria written as testable checkboxes;
- [ ] has at least one “not done until …” line;
- [ ] has the Feature label and project assignment;
- [ ] has priority from the parent (do not auto-bump without reason).

### Step 4 — Wire Linear to Cursor (or whichever agent runner)

Two patterns depending on where the user runs agents:

- **Local Cursor:** the agent reads the same files a developer would. Confirm `.cursor/rules/` is present, `AGENTS.md` is at repo root, and the proof script is executable.
- **Cursor Cloud:** the cloud agent does not see Hermes skills. The context pack above is mandatory before the cloud can be trusted with anything non-trivial.

Optional but recommended: a `scripts/linear/sync_linear_issues_to_repo.sh` that pulls fresh issue titles/summaries into `docs/specs/linear-snapshot.md` so an offline agent can still see the current board.

### Step 5 — Test the pack with a fresh agent

Before handing the repo to a user/team:

1. Open a fresh local Cursor session (or Cloud session) **with no Hermes skill access**.
2. Pick a child issue at random.
3. Run the issue’s proof command.
4. Check that the agent can answer: where the code lives, what the existing pattern is, which command to run, what to attach back to Linear.

If the agent has to ask you a question that the context pack should have answered, the pack has a gap. Patch the gap, re-run.

### Step 6 — Local vs Cloud split

Local Cursor is preferred when work requires instrumentation:

- local app startup;
- database/schema inspection;
- browser/devtools proof;
- screenshots / DOM receipts;
- degraded-state testing;
- proof artifacts on disk.

Cursor Cloud is acceptable for isolated pure-code/doc/test tasks only after the context pack exists.

### Step 7 — Commit and verify the pack

Commit every prep file in one commit, verify with:

```bash
git status
git diff --stat
ls -la AGENTS.md .cursor/rules/ docs/context/ docs/specs/ scripts/proof/ scripts/linear/
```

Save a load receipt that lists every file with its SHA-256, line count, and intended reader (always-on, per-feature, per-child).

Completion criteria:

- [ ] `AGENTS.md` exists and is referenced from `.cursor/rules/`;
- [ ] `.cursor/rules/<feature>.md` exists with Cursor-specific rules;
- [ ] `docs/context/<feature>-build-context.md` exists;
- [ ] all PRD/spec/issue-map files exist and are committed;
- [ ] proof script exists and `bash -n` passes;
- [ ] linear loader script exists and re-runs idempotently;
- [ ] a fresh local agent can read the pack and execute a child issue without asking where the code is.

## Phase 6 — Linear loading and verification

Use the Linear skill/API, not browser UI. **Before writing the loader, also read `references/linear-api-gotchas.md` in the `linear` skill** — it documents the silent 400s that bit real loader runs: `issueSearch` is deprecated, `filter:` UUID variables are `ID!` while top-level `id:` arguments are `String!`, sub-issue parent is set via `issueUpdate(parentId)` (not `issueRelationCreate(type:"parent")`), `type:blocks` requires unquoted enum, and active issue count is telemetry unless the API returns `USAGE_LIMIT_EXCEEDED`. Bake these into the loader from day one.

Steps:

1. query teams/projects/states/labels;
2. verify target project id and project URL;
3. create/update parent epics if needed;
4. create/update children under the correct parents;
5. set project id, team id, state, labels, priority;
6. add parent links via `issueUpdate(input:{parentId})` (NOT a relation type);
7. add sibling `blocks` relations where order matters (`type:blocks` unquoted);
8. save JSON and markdown receipts;
9. query Linear after loading and verify:
   - total count;
   - parent count;
   - child count;
   - each child has parent;
   - project is the intended project;
   - sample relation exists.

Important Linear semantics: issues always belong to a **team** and may also belong to a **project**. If Henry says "Entity board," verify `project { name url }`, and if he means a milestone/view/cycle beyond project assignment, create/update that explicitly.

Completion criterion: final verification query proves project assignment, parent/child structure, and relation counts.

### Phase 6 closeout: push, CI gate, and receipt

A successful apply is not done until the post-load push and CI run for the **same SHA** are
confirmed. The ShowClaw 2026-06-22 run hit a `git push` rejection because the remote was 1
commit ahead (a CI workflow file someone else pushed) — the right closeout is `git pull
--no-rebase origin main` and re-push, then watch the CI run. The full closeout:

```bash
cd <repo>
git fetch origin --prune
git status --short --branch
git rev-list --left-right --count origin/main...HEAD     # shows 0\t1 if behind
git pull --no-rebase origin main
git push -u origin main
gh run list --repo OWNER/REPO --branch main --limit 3
gh run watch <run-id> --exit-status                       # confirm CI on pushed SHA
git rev-list --left-right --count origin/main...HEAD      # expect 0\t0
git ls-remote origin refs/heads/main                      # expect your new SHA
```

Always end a load run with a `load-receipt.json` (machine) and a `live-map.md` (human) and
include the pushed commit SHA + the CI run URL. If `rev-list` says you are ahead of
`origin/main` but the remote HEAD shows a different SHA, you have a split-brain state that
must be reconciled before reporting "load complete." See `references/linear-loader-recipe-2026-06-22.md`
for the full loader skeleton and per-action write classification.

## Phase 7 — Goal-mode discipline

If Henry says “goal mode,” either use `/goal` directly when available or emulate goal discipline in the active session:

- maintain a todo list;
- keep working through continuation until receipts are complete;
- do not stop after the first artifact;
- after each stage, verify with a real tool;
- when a blocker appears, route around it or state the blocker honestly;
- final response must include receipts, not promises.

Goal completion for this workflow means:

- source packet complete;
- spec generated;
- PRD generated and critiqued;
- canonical PRD/spec complete;
- parent epics loaded;
- full child graph loaded;
- repo-native context pack committed or written;
- Linear verified;
- receipts linked.

## References

- `linear/references/paid-workspace-loader-correction-2026-06-22.md` — ShowClaw correction: Henry's Linear workspace is paid/unlimited; active issue count is telemetry, not a guessed issue-count cap. Only actual `USAGE_LIMIT_EXCEEDED` API errors block.
- `references/helm-oracle-prd-retry-2026-06-21.md` — session-derived correction that SuperSpec defaults to Oracle GPT-5.5 Pro in Enterprise browser mode, plus verification pattern and fail-closed route rules.
- `references/hoshi-superspec-oracle-3x-i-blocker-2026-06-21.md` — Hoshi session: three Oracle GPT-5.5 Pro browser attempts with three different prompt shapes all returned the single-character `I` reply on the same `browser-tab current`. Compact-packet retry is not a universal fix; escalation to a fresh tab is the next step. Includes the `route-failure.json` receipt schema and `BLOCKER.md` template.
- `references/oracle-cdp-extract-fallback-2026-06-21.md` — Mycelium session: when Oracle `--live`/`--harvest` reports `Assistant turns: 0` or empty bytes but the response IS rendered in the DOM (verified via share-URL metadata + AX tree), the working fix is Python `websockets` + `Runtime.evaluate` on the active `/c/...` tab with `origin=None` (the only Origin Chrome's `--remote-allow-origins` accepts for same-host CDP). Includes diagnostic checks, full code recipe, slicing the response to the spec, and which receipts to keep.
- `references/non-oracle-route-failclosed-2026-06-21.md` — second-attempt playbook when Henry explicitly authorizes a non-Oracle lane (e.g. Citadel azure 5.4-pro xhigh): smoke the lane first, write the override receipt, bound the generation by what the proxy will actually return, avoid parallel calls against `available_concurrency: 1` lanes, and recognize the lane-level failure pattern after two distinct attempts. ShowClaw 2026-06-21 session.
- `references/reasoning-budget-burn-sibling-lane-recovery-2026-06-22.md` — second-attempt-within-the-override playbook for a specific failure shape: 200 OK, `usage.output_tokens == max_tokens`, `message.content == ""`. The model burned the entire output budget on internal reasoning and emitted nothing. Fix is a sibling lane (e.g. `azure-openai-responses/gpt-5.4` non-pro) at the same params, not a smaller budget. ShowClaw 2026-06-22 session.
- `scripts/source-packet-sanitize.py` — strips `## Recent channel messages` blocks, "Bubbling" transcript prefixes, and out-of-band markers from a source packet before submitting to a non-Oracle OpenAI lane. One-line pre-emptive fix for `prompt triggered upstream content filter`.
- `templates/oracle-route-failure-receipt.json` — JSON skeleton for the per-attempt failed-route receipt described in `references/hoshi-superspec-oracle-3x-i-blocker-2026-06-21.md`. Copy, fill, and save as `2026-06-21-attempt-<n>.route-failure.json` next to the bad artifact.
- `references/showclaw-grill-handoff-2026-06-21.md` — a ShowClaw dossier → grill mid-flight snapshot at the D5 disagreement, showing the artifact spine when a second-model brainstorm diverges. Complementary to the Helm v1 finished-grill reference; useful when the grill has not yet completed Q5/Q6/Q7/Q8.
- `references/showclaw-context-pack-no-write-2026-06-22.md` — ShowClaw no-write context-pack run: local 10-parent/56-child graph, repo-native Cursor pack, dry-run Linear loader, Linear cap preflight, and proof-script/staging pitfalls.
- `references/linear-loader-recipe-2026-06-22.md` — full working loader skeleton proven on ShowClaw: dry-run-first with explicit apply/cap-override flags, project create, title-keyed parent/child upsert, parent/child wiring, blocks-chain idempotency, post-load verification, and the push + CI closeout. Companion to `productivity/linear/references/linear-api-gotchas.md`.

## Pitfalls
## Pitfalls

- **Skipping Oracle after one bad Oracle PRD run.** If Henry requested Oracle/SuperSpec/PRD, a bad Oracle output (`I`, empty file, truncated markdown) is a retry trigger, not permission to substitute a local/deterministic PRD as authority. See `references/helm-oracle-prd-retry-2026-06-21.md`.
- **Framing defaults as "Open questions for Henry" in the final report.** When the post-Linear handoff (Phase 3+ final report, PRD §16, context pack) lists items that are *defaults you chose during the work* (e.g. "MLX Whisper unavailable → `degraded` if a CPU fallback works, else `unsupported`", "Fireflies default routing → `disabled_by_user` until token", "maxAttempts=3", "JSON-atomic persistence is acceptable for Slice A", "mobile/webhook pinned to `disabled_by_user`"), they are **builder defaults / non-blocking assumptions**, not questions for Henry. The Linear graph and the rest of the workflow are NOT blocked on them. Label them that way. If you want to give Henry a chance to override, the correct framing is "If you want to override any of these, name the item and I will patch the canonical PRD, the context pack, and the affected Linear issues in one pass" — not "do not proceed without your ack." Lesson from the Hoshi Slice A correction on 2026-06-21: the skill had framed 8 resolved-assumption items as blockers, which made the Linear graph look gated on Henry. Reframe in three places: (a) PRD §16, (b) context pack "Builder defaults" section, (c) README / final-report "open questions" block. Then post a Linear comment on the root-of-DAG issue (the first child) so a builder reading the board sees the reframe, and prepend a `**Builder default (resolved):**` banner to each affected child's description. Section-title pattern: `^## Open questions for Henry \(do not block` → `^## Builder defaults / non-blocking assumptions \(not questions for Henry\)`. Comment body pattern: "Correction (date, agent): the N items previously listed as 'Open questions for Henry' are now builder defaults / non-blocking assumptions. The Linear graph is not blocked on them. If Henry wants to override, name the item and I will patch in one pass."
- **Treating thin child issue bodies as acceptable because a companion file exists.** A companion file is useful, but Cursor/Linear execution depends on the live issue body being self-contained. If the live child body only says "full body is in companion file" or lacks source ID, mapping basis, acceptance criteria, proof commands, blockers, and not-done-until, the spec-to-issues output is broken for autonomous execution. Henry correction from Hoshi (2026-06-21): "if something is broken in the new spec to issues, rewrite them and reupload; do it properly; quality over speed." Do not merely generate an external execution pack to compensate. Rewrite/reupload the child Linear bodies (by UUID, after backing up current bodies), add audit comments, re-fetch live Linear, and run the drift audit before calling the graph Cursor-ready. Use `runner` and its reference `references/hoshi-full-linear-body-rewrite-2026-06-21.md` for the full pattern.
- **Treating the Henry-authorized non-Oracle override as permission to substitute a spec.** When the user writes "if it doesn't work, try citadel azure 5.4-pro xhigh", the override is a second-attempt route, not a substitute. Apply the playbook in `references/non-oracle-route-failclosed-2026-06-21.md`: smoke the lane first, write the override receipt, bound the generation by what the proxy will actually return (`max_tokens=8000–12000`, `reasoning_effort=medium`), avoid parallel calls (most lanes in this stack report `available_concurrency: 1/2`), and recognize the lane-level failure pattern (`upstream_timeout`, `upstream_4xx`, `prompt triggered upstream content filter`) after two distinct attempts. Do not invent a spec, do not promote the override output to canonical, and do not write Linear issues from preview lanes. Source-packet sanitization (drop `## Recent channel messages` blocks, "Bubbling" transcript prefixes, and out-of-band markers) is a one-line pre-emptive fix; see `scripts/source-packet-sanitize.py`.
- **Fan-out of section passes against a single lane.** Splitting a long super-spec into section passes (1–7, 8–12, 13–21) is a valid bound, but launching them in parallel against a lane with `available_concurrency: 1/2` is not. Run each pass sequentially; poll; only then start the next. The ShowClaw 2026-06-22 run lost two of three parallel passes to the concurrency gate and re-ran them sequentially at additional cost.
- **"Reasoning burns all tokens, emits nothing" on dense prompts.** `azure-openai-responses/gpt-5.4-pro` at `max_tokens=9000 reasoning_effort=medium` has been observed to return HTTP 200 with `usage.output_tokens=9000`, `output_tokens_details.reasoning_tokens=9000`, and `message.content=""`. The proxy returns success but the artifact is empty. The shape is unmistakable: 200, `usage` filled, `content` empty. Recovery is to switch lanes (e.g. to `azure-openai-responses/gpt-5.4` non-pro) at the same params; the lower-tier lane typically returns real content for the same prompt. Re-running the same model with smaller `max_tokens` and `reasoning_effort=low` instead produced `upstream_4xx` in the same session — the fix is lane, not budget.
- **Treating "compact retry" as the universal fix for the `I` reply.** The Helm recovery was a single compact-packet retry on the same browser tab and that worked. Hoshi (2026-06-21) proved compact retry is not always sufficient: three prompt shapes (full source packet, compact retry packet, 178-token terse directive) all produced the same single-character `I` reply on the same `browser-tab current`. When the second attempt also returns `I`, the failure is not a prompt-shape problem — it is a tab/session-side problem. **Escalation ladder** (do not skip steps; do not loop on the same step): (1) full packet via runner; (2) compact packet, `--force --browser-attachments never`; (3) 178-token terse directive on the same tab; (4) **open a fresh ChatGPT tab in the same Chrome session** (`chat.openai.com/?model=gpt-5.5-pro` on a new tab, then `--browser-tab <new-tab-id>`); (5) **CDP extract from the live `/c/...` conversation tab** when Oracle `--live`/`--harvest` reports `Assistant turns: 0` or empty bytes (the response is in the DOM; the harvest path is what is broken); (6) report blocker + ask Henry. Do **not** keep retrying with more elaborate prompt wrappers on the same broken tab — that is the failure mode the Hoshi BLOCKER exists to document. See `references/hoshi-superspec-oracle-3x-i-blocker-2026-06-21.md` and `references/oracle-cdp-extract-fallback-2026-06-21.md` for the working step 5 recipe.

- **Trusting `Assistant turns: 0` / `I` from Oracle `--live` as proof the model didn't respond.** Oracle's own wrapper harvest path can fail to capture a perfectly valid response. Symptom: tab title in Chrome DevTools is `Super Spec Markdown Request` (or similar), share URL returns HTTP 200 with the title metadata, but `oracle --live` says `Assistant turns: 0` and `--write-output` produces a 0–1 byte file. The model produced the response; only the capture is broken. Diagnostic: `curl -sL <share_url>` returns the Cloudflare login shell (body auth-gated) but title/metadata confirm the conversation exists. **Don't write a third prompt-shape retry at this point** — switch routes. The fix is logged-in CDP extraction from the active `/c/...` tab (Python `websockets` + `Runtime.evaluate({expression: 'document.body.innerText'})` with `origin=None`; Chrome's `--remote-allow-origins` accepts only `null` from a same-host socket — `devtools://`, `http://localhost:53992`, and unset origin all 403). Cross-check via `cua-driver get_window_state` (AX tree shows the `ChatGPT said:` heading, all section headings, and the "Copy message" button — proof the response is in the DOM). Full recipe in `references/oracle-cdp-extract-fallback-2026-06-21.md`.
- **Reading "X for product Y" as "implement X inside product Y" without checking the architecture.** Short, ambiguous user phrases that mention a product name in passing often describe a coordination task that involves a *separate* service/plugin, not a feature of the named product. Concrete failure mode (2026-06-21, Helm Spec thread): user said "Set Ada observer using Action Gate" and a build subagent was dispatched against the Helm product tree to implement Action Gate as a Helm-internal feature. Action Gate is in fact a separate multi-agent coordination/guardrail service/plugin (`<HOME>/Code/agent-action-gate`); Helm is supposed to **call** it over HTTP, not implement it. The correction cost a reframe pass over the SuperSpec, Oracle PRD, repo context pack, and 4 Linear issues. **Rule:** before any subagent build brief that says "set up X for product Y", verify whether X is a separate service/plugin already wired in the user's stack. If the phrase names two systems (a feature + a product), the action is almost always "wire the feature into the product," not "build the feature inside the product." A 30-second look at the existing plugin directory tree (`ls <HOME>/Code/<feature>`) is cheaper than a 1289-LOC revert. See `references/helm-action-gate-external-service-2026-06-21.md`.
- **Calling the parent epic spine complete.** 15 issues can be a useful skeleton, but not the full body for a large spec.
- **Publishing before second-model review.** Run critique before loading or be ready to patch/reload.
- **Trusting model output without receipts.** Save line counts, hashes, route evidence, and artifact paths.
- **Treating process exit 0 as artifact success.** A model/browser runner can exit cleanly with a useless output (observed: a 2-byte PRD draft containing only `I`). Reject outputs that are too small, missing required headings, or not structurally valid before advancing.
- **Letting preflight success stand in for generation success.** A Pro route can preflight OK but still time out or degrade during generation. Validate the actual markdown artifact before moving to PRD or Linear.
- **Forgetting latest corrections.** User corrections during the grill are authority and must be in source packet and prompts.
- **Letting Google Docs become canonical proof.** For Entity-style work, raw proof belongs in native immutable artifacts/receipts.
- **Assuming Cursor Cloud has Hermes skills.** It does not. Write repo-native context.
- **Text-only blockers.** Convert local “Slice 1” blockers into real Linear identifiers or relation links after creation.
- **Linear project confusion.** Team membership is not the same as project/board assignment. Verify both.
- **Non-idempotent Linear loading.** Bulk loads can partially create issues before a parsing/API failure. Use title-keyed create-or-update loaders so reruns update rather than duplicate.
- **Overloading one child issue.** If it needs schema + API + UI + migration + policy + tests all at once, split it.
- **Treating active issue count as a blocker without API evidence.** Active issue count is useful telemetry before a bulk Linear load, but Henry's Linear workspace is paid/unlimited. Do not stop just because the count is above a guessed cap. Proceed when approved, and only treat capacity as a blocker if Linear itself returns `USAGE_LIMIT_EXCEEDED` / `usageMetric: "activeIssueCount"`. If the API returns that real error, stop, write a receipt, and surface options; do not delete half-created parents mid-run.
- **Phase 3/4 default is held for Henry approval.** The user (or in crew mode, SuperAda) typically says "don't create Linear items until Henry approves the final structure." If you reach Phase 3 with a "load now" reflex, the structure is wrong. The deliverable for Phase 2 is the candidate parent/child graph + receipts, NOT `issueCreate` calls. If the user said "go all the way," load parents first (dependency order) and only then children; never load children first.
- **Phase 2 → Phase 3 hold pattern — gate-review deliverable shape.** When Phase 2 finishes and Henry has not yet approved Linear creation, write a single read-only note (`output/phase2/phase2-gate-review-readonly.md`) covering exactly four sections: (1) canonical SHA verified, (2) OQ split into "must answer before Linear creation" / "can remain ticket-level gate" / "safe assumption with explicit wording", (3) proposed children review (keep / merge / drop), (4) parent-level ship gate review (too tight vs acceptable, with softened wording). End with an explicit "no Linear writes performed" line and SHA-256. This is the **approval surface** Henry signs off on. Do not bypass it with a Slack/Discord one-liner; the SHA + file path are the durable contract.
- **"Strictly: none" framing correction (SuperAda, 2026-06-21).** When listing "must answer before Linear creation" in the gate-review note, never write "Strictly: none" — it buries the real tradeoff. Use the conditional phrasing: **"None if Henry approves publishing a graph with explicit decision-blocked tickets. If Henry wants every created ticket immediately executable, the following should be answered first:…"** This frames the choice honestly without pretending the gate is absent.
- **Treating the merge pass as a third-model call when the previous step's tab is dead (OpenCore, 2026-06-22).** A new fourth failure shape: the merge-pass Oracle call returns `I` and the captured `~/.oracle/sessions/<id>/artifacts/transcript.md` ends with `## Answer\n\nI` — the prompt echo is the only content, and the response did not arrive in the DOM either (distinct from Hoshi's `I`-but-DOM-has-it case). The right move is **not** a third model call, **not** CDP extraction (nothing to extract), and **not** waiting for the tab to recover. The mechanical-in-session merge fallback documented in `references/opencore-grill-to-linear-2026-06-22.md` is the new step-6 in the escalation ladder: (1) full packet, (2) compact packet, (3) 178-token terse directive, (4) fresh tab, (5) CDP extract from live `/c/...` tab, **(6) mechanical in-session merge with `merge-receipt.json` patch ledger when the input artifacts are on disk and parseable**. Step 6 must label the canonical PRD as `derived from mechanical merge, not third-model` in the body and the receipt, and the merge-receipt must include the source SHA chain and the per-patch ledger (Opus issue ID → section → status).
- **Phase 2 critique MUST-FIX vs SHOULD-FIX vs DEFER — also applies to the gate-review decision list.** When the gate-review note lists 18 OQs, classify each into exactly one of: (a) must-answer-before-Linear (HARD blocker on creation), (b) ticket-level gate (becomes a `Henry decision needed — blocked until answered` line in the relevant Linear issue body), (c) safe assumption with explicit wording (bake the default into the issue body). The first bucket must be empty unless Henry asks for it; otherwise the workflow is gate-on-the-whole-graph, which defeats the whole point of the gate.
- **Phase 2 → Phase 3 verification: SHA must be in the PRD receipt, the gate-review note, AND the eventual Linear load receipt.** Drift detection requires the SHA to travel with every handoff. If the canonical PRD is patched mid-flow, every downstream receipt must be updated and re-SHA'd before any Linear writes. Drift is detectable in <1 minute with `shasum -a 256`; do not skip it.
- **Bash heredoc `{var}` interpolation strips backticks.** When running multi-line Python via a bash heredoc that itself contains `{...}` substitutions, single backticks inside the Python source (e.g. `` `mycelium-mobile` ``) get eaten by the surrounding shell, leaving the literal token `mycelium-mobile` rendered without backticks. Fix: use a file-based Python script (`write_file` then `python3 /path/to/script.py`) or pass the backticked token via a heredoc with `<<'PY' … PY` (single-quoted terminator) to suppress substitution. Single-quoted heredocs are the safer default whenever the Python source contains backticks, `${…}`, or other shell-meaningful punctuation.
- **Original PRD draft vs canonical merged PRD.** Phase 2 produces both: an initial `prd-draft-derived-from-oracle-superspec.md` (often with paraphrased open questions and a few under-counted fields) and a `canonical-merged-prd-derived-from-oracle-superspec.md` after the critique MUST-FIX pass. The draft's receipt must be marked `superseded_by_canonical_merge: true` and point to the canonical SHA. The canonical artifact is what downstream phases consume; do not let an unwary subagent pick up the draft.

## References

- `references/helm-grill-linear-2026-06.md` — notes from the Helm v1 run: Oracle browser-route fallback pattern, single-letter model-output rejection, deterministic PRD merge, Citadel `opus48` critique, and idempotent Linear loader recovery.
- `references/opencore-grill-to-linear-2026-06-22.md` — OpenCore V1 worked example. Documents the working Oracle 5.5 Pro browser route after Henry re-authed, the 1-token `I` failure on the merge pass (a fourth failure shape distinct from the three in the pitfalls section), the mechanical in-session merge fallback with `merge-receipt.json` patch ledger, and the C/A/T/Q-style critique-merge taxonomy that `helm-parent-merge.py` does not yet handle natively.
- `references/opencore-full-run-completion-2026-06-22.md` — OpenCore full completion addendum: Oracle fixed retry after CDP port recovery, 11-parent/40-child Linear load, idempotent resume after Linear HTTP 502 mid-load, seed-thin repo context-pack pattern, push-rejection/CI closeout, and final receipt shape.
- `references/helm-action-gate-external-service-2026-06-21.md` — cross-system pre-flight protocol and reframe-pass recipe for the "user said X for product Y but X is a separate service" failure mode. Includes a 30-second disambiguation check to run before any subagent build brief that pairs a feature name with a product name.
- `references/linear-active-issue-preflight.md` — historical probe/error-receipt recipe for real `USAGE_LIMIT_EXCEEDED` API failures. For Henry's paid/unlimited workspace, record active issue count as telemetry and do not block on guessed caps.
- **Trusting a background process completion notification's `Output:` block.** The wrapper `bash` may exit 0 with empty `Output:` because the inner script wrote `EXIT 1` to a log file (e.g. `/tmp/super-spec-run.log`) you must inspect separately. Pair every wrapper completion with `tail -n 20 <log>` and a stat of the expected output file before declaring success.
- **Treating Linear HTTP 502 mid-load as a rollback condition.** If the loader is title/source-key idempotent, a 502 after partial issue creation is a resume condition. Re-fetch the project, count source-keyed issues, rerun the loader with retries/backoff, update existing issues, create missing issues, re-apply parent links and `blocks` relations, and verify live counts. Do not delete the project or manually clean up unless verification shows real duplicates.
- **Blocking a repo-native context pack because the repo is seed-thin.** Some grill-to-linear targets are intentionally seed repos with only `README.md` and evidence docs. Do not invent package commands, but also do not block the load. Make `OC-001`–`OC-003` establish repo baseline/package skeleton, write `AGENTS.md` with target commands clearly marked as post-skeleton, and ship a proof script that records a bootstrap receipt until `package.json` exists.
- **Picking a third-model merge over a deterministic parent-merge.** A third model that just summarized a draft plus a critique can quietly drop MUST-FIX bullets, paraphrase the trace, or invent alignment the draft does not have. The deterministic parent-merge is reproducible, auditable, and cannot lie. Reserve model-merges for cases where the user explicitly asks for one or where the inputs are not pre-structured.
- **Letting the PRD draft invent outside the source packet / spec.** The model-side draft will sometimes add a "D8" or "D9" decision the grill did not capture. Diff the draft's decisions against `helm/decisions.md`; anything not in the source packet or spec belongs in `Open Questions`, not in the draft body.

## Verification Checklist

- [ ] Source packet names authority order and latest corrections.
- [ ] Oracle/SuperSpec artifact exists with route receipt, line count, SHA-256.
- [ ] PRD draft exists.
- [ ] Second-model critique exists.
- [ ] Canonical PRD applies critique must-fixes explicitly.
- [ ] Model artifacts are substance-validated (non-trivial bytes/lines, expected template sections, issue counts) before use.
- [ ] Any failed-unusable model output has a receipt and is excluded from downstream inputs.
- [ ] Parent epics are loaded in Linear and assigned to intended project.
- [ ] Full child execution graph is loaded in Linear.
- [ ] Linear query verifies total, parent count, child count, project, state, labels.
- [ ] Parent links exist for every child.
- [ ] Dependency/block relations exist where intended.
- [ ] Repo-native Cursor/local-agent context pack exists.
- [ ] Proof script or proof checklist exists.
- [ ] Final report includes artifact paths, URLs, counts, and caveats.
