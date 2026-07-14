# {{PROJECT_NAME}} Cursor Operating Handoff Plan

Generated: {{GENERATED_AT}}
Project slug: `{{PROJECT_SLUG}}`
Repo root: `{{REPO_ROOT}}`
Linear project/team: `{{LINEAR_SCOPE}}`
Artifact directory: `{{PACK_DIR}}`

**Human handoff link:** `{{HUMAN_HANDOFF_LINK}}`
**Raw machine link:** `{{RAW_MACHINE_LINK}}`

## Current state

- Repo branch/worktree: {{BRANCH_STATE}}
- Dirty/untracked state: {{DIRTY_STATE}}
- Linear scan: {{LINEAR_SCAN_STATUS}}
- Mapping table: `{{MAPPING_PATH}}` — {{MAPPING_STATUS}}
- Approved queue: {{APPROVED_QUEUE_STATUS}}
- Gate config: `{{GATE_CONFIG_PATH}}` — {{GATE_CONFIG_STATUS}}
- Cursor-ready: {{CURSOR_READY_STATUS}}

If `Cursor-ready` is `no`, do **not** run Cursor yet. Fix the blockers below first.

## Copy/paste prompt to run now — preflight cleanup

Use this with Book/local agent now when `Cursor-ready` is `no`. **Do not paste this into Cursor as an implementation prompt.**

```text
Use the {{PROJECT_NAME}} handoff plan:
{{HUMAN_HANDOFF_LINK}}

Do not start Cursor implementation yet.

First clear the preflight blockers listed in the plan.
Then rerun live source/Linear checks, validate the pack, and update the plan verdict.
Only if preflight passes, prepare the approved Cursor queue.

Report:
- Human handoff link
- Raw machine link
- Cursor-ready: yes/no + blockers
- whether any Linear writes were made
- whether the reviewed gate config is present at repo root
```

## Copy/paste Cursor prompt — use only after preflight passes

**Do not use this while `Cursor-ready` is `no`.** Use this only after preflight passes and the plan says `Cursor-ready: YES`.

```text
You are Cursor executing the approved {{PROJECT_NAME}} child-issue queue.

Repo: {{REPO_ROOT}}
Plan: {{HUMAN_HANDOFF_LINK}}
Raw plan fallback: {{RAW_MACHINE_LINK}}

Before doing anything, read:
- the full handoff plan linked above
- AGENTS.md
- project Cursor rules / context docs
- linear_id_to_source_id.json
- .project-gate.json
- the run-state file if present
- the full live Linear issue body for the assigned issue

Hard rules:
- Work only the approved queue in the handoff plan.
- Do not discover, add, reorder, skip, or substitute issues.
- Do not work parent epics as build tasks.
- Before each issue, reread the plan, repo rules, mapping table, run-state file, gate config, and live Linear issue body.
- If an issue body lacks its explicit source ID, stop.
- If the issue body appears mismapped or stale, stop.
- Do not introduce private defaults, secrets, local host assumptions, or unrelated changes.
- Do not continue to the next issue unless the current issue’s gate receipt is PASS.

For each issue:
1. Create/update a branch named from the issue ID.
2. Implement only that issue.
3. Run the configured project proof commands from the plan.
4. Run the shared CLI Tester gate:
   <HOME>/Code/cli-tester/bin/project-test-gate --root {{REPO_ROOT}} --config {{GATE_CONFIG_PATH}} run <ISSUE_ID>
5. Read the receipt under {{REPO_ROOT}}/output/{{PROJECT_SLUG}}/test-gate/<ISSUE_ID>.json.
6. If FAIL or missing, stop and report the blocker.
7. If PASS, run the required review gates from the plan.
8. Open/update a PR with issue ID, changed files, proof commands, receipt path, and blockers.
9. Update {{RUN_STATE_PATH}}.
10. Continue only if the approved queue says to continue and all gates are PASS.

Do not merge without Book/SuperAda verification unless Henry has explicitly authorized Cursor to merge.
```

## Blockers / required cleanup

{{BLOCKERS}}

## Source-of-truth inventory

| Source | Path/URL | Status | Cursor-readable? | Notes |
|---|---|---:|---:|---|
| Repo rules | `{{REPO_ROOT}}/AGENTS.md` | {{AGENTS_STATUS}} | yes | Required |
| Cursor rules | `{{CURSOR_RULES_PATH}}` | {{CURSOR_RULES_STATUS}} | yes | Required for local Cursor |
| Build context | `{{BUILD_CONTEXT_PATH}}` | {{BUILD_CONTEXT_STATUS}} | yes | Required |
| Spec/PRD | `{{SPEC_PATH}}` | {{SPEC_STATUS}} | yes | Must be source-mapped |
| Linear | `{{LINEAR_SCOPE}}` | {{LINEAR_STATUS}} | yes | Live issue bodies must be re-fetched |
| Gate config | `{{GATE_CONFIG_PATH}}` | {{GATE_CONFIG_STATUS}} | yes | Generated from repo-real commands |

## Hard rules

- Cursor may execute only the approved queue after preflight passes.
- Parent epics sequence work; child issues carry implementation contracts.
- No ordinal mapping. Use `linear_id_to_source_id.json` only.
- No Cursor self-discovery, scheduling, or issue reordering unless Henry explicitly approves a new queue.
- Runtime state is local-only and must never be committed.
- CLI Tester gate is the default issue proof gate.
- Codex autoreview is the default review for non-trivial diffs.
- GitNexus/AGENTS gate is required when configured and fresh.
- Thermo-nuclear review is escalation only for high-risk or disputed changes.
- Cron/check-in automation is opt-in only and must not be registered from this document.

## Approved queue

Cursor must process this list in order and no other issue:

```text
{{APPROVED_QUEUE}}
```

If the queue is empty or contains any unmapped/stale issue, Cursor must stop.

## State file

Runtime state file:

```text
{{RUN_STATE_PATH}}
```

Rules:

- create/update during execution
- include approved queue, current issue, status, receipts, blockers
- add to `.gitignore`
- never commit
- reread after compaction/restart before continuing

## Per-issue flow

For each issue:

1. Re-read this plan, the live Linear issue body, repo `AGENTS.md`, Cursor rules, build context, mapping table, gate config, and state file.
2. Confirm issue is in approved queue and not completed/blocked.
3. Verify title/body/source mapping against `linear_id_to_source_id.json`.
4. Stop if issue is stale, mismapped, missing source, has banned terms, or has invalid proof commands.
5. Create or use a branch scoped to the issue.
6. Implement only the issue scope.
7. Run repo proof commands.
8. Run shared CLI Tester when gate config is present/reviewed.
9. Run Codex autoreview for non-trivial diffs.
10. Run GitNexus/AGENTS gate when configured and fresh.
11. Run thermo-nuclear review only for high-risk issues.
12. Attach receipts or write receipt paths into state.
13. Stop after failure; do not start next issue until the gate is fixed or waived by Henry.

## Shared CLI Tester gate

Default command:

```bash
<HOME>/Code/cli-tester/bin/project-test-gate \
  --root {{REPO_ROOT}} \
  --config {{GATE_CONFIG_PATH}} \
  run <ISSUE_ID>
```

Receipt target:

```text
{{REPO_ROOT}}/output/{{PROJECT_SLUG}}/test-gate/<ISSUE_ID>.json
{{REPO_ROOT}}/output/{{PROJECT_SLUG}}/test-gate/<ISSUE_ID>.md
```

Do not copy generic gate-runner code into the project repo when shared CLI Tester exists.

## UI proof / video evidence policy

- Cursor Cloud can provide video evidence more easily. Prefer Cloud video for broad UI flows when available.
- Local Cursor should still provide browser/DOM/screenshot evidence for UI-facing work.
- If local video is required, use macOS/Playwright/browser recording explicitly as a separate proof step; do not assume local Cursor records video by default.
- For non-UI/backend/docs issues, video is not required; CLI/test receipts are enough unless the issue says otherwise.
- A screenshot or video must be tied to the issue ID, branch/commit, and proof receipt; do not reuse one visual receipt across multiple child issues.

## Proof commands

Repo-real proof commands for this project:

```bash
{{PROOF_COMMANDS}}
```

For UI-facing work, also provide browser/DOM/screenshot proof. Do not claim done from tests alone if UI, route rendering, docs rendering, task workflows, search UI, review/gate UI, notifications UI, or integration/degraded-state display changed.

## Commit / PR review gates

Before merge or merge-ready claim:

- CLI Tester receipt = PASS.
- Linear issue is linked.
- Diff scope matches assigned issue.
- Repo `AGENTS.md` / Cursor rules were followed.
- Codex autoreview passed or findings were explicitly resolved/rejected with reasons.
- GitNexus detect-changes / impact check passed when configured and fresh.
- Proof artifacts are attached or linked.
- No unrelated files, secrets, private defaults, banned terms, or receipt gaps.

## Code review ladder

- Codex autoreview is required for non-trivial PRs before merge.
- Thermo-nuclear review is required only for high-risk PRs:
  - runtime/provider contracts
  - authority/receipt logic
  - secret/private-default handling
  - live delivery or dangerous-action paths
  - source→gate→service promotion or drift detection
  - release/proof gates
  - broad diffs spanning multiple parent areas
  - any PR where Codex autoreview flags meaningful concerns
- Routine low-risk leaf changes do not require thermo-nuclear review unless requested.

## Active Cursor single-issue prompt

Use this when assigning exactly one issue:

```text
{{SINGLE_ISSUE_PROMPT}}
```

## Active Cursor bounded-queue / autonomous prompt

Use this only for the approved queue above:

```text
{{BOUNDED_QUEUE_PROMPT}}
```

## Preflight checklist

```text
{{PREFLIGHT_CHECKLIST}}
```

## End-to-end goal-mode prompt (Helm-style default) — use only after preflight passes

**Do not use this while `Cursor-ready` is `no`.** This is the whole-goal prompt for approved queues. It mirrors the Helm v1 goal-mode shape and supersedes the bounded-queue prompt for autonomous runs. Use only after all preflight gates pass.

It MUST include:

- `/goal` invocation at the top
- Repository, plan link, raw-fallback link, Linear project, and API key handling
- Linear API access note: use global `LINEAR_API_KEY`; if absent in Cursor, do **not** OAuth — open a new terminal or source `<HOME>/.hermes/.env` non-verbosely
- Authority order ending with the plan file
- "Before coding" reread list aligned with the bounded-queue prompt
- Project-specific known policy block
- Hard zero-policy block naming any project-banned external coordination/plugin/service terminology
- All four CLI Tester steps: `request`, `run`, `book-review`, `verify`
- UI proof / video evidence policy consistent with the plan
- Receipts/state/Book-review sections
- Standardized no-merge sentence:
  ```text
  Do not merge without Book/SuperAda verification unless Henry has explicitly authorized Cursor to merge.
  ```

```text
{{GOAL_MODE_PROMPT}}
```

## Optional cron/check-in prompt for another session — do not run for now

**DO NOT EXECUTE THIS PROMPT FROM THIS DOC.** This is a handoff template for a separate Book session only when Henry explicitly asks. It is intentionally not registered as a Hermes cron and not part of the current build loop.

Why it is here: if a long autonomous run is already approved, another Book session can use this as a read-only watchdog over receipts/state. The CLI Tester and review gates remain the source of truth.

```text
You are a separate Book session. Henry explicitly asked you to check this project run.

Read:
- {{HUMAN_HANDOFF_LINK}}
- {{RUN_STATE_PATH}}
- latest CLI Tester receipts under {{REPO_ROOT}}/output/{{PROJECT_SLUG}}/test-gate/

Report only:
- current issue/status
- PASS/FAIL receipts
- blockers
- whether Henry approval is needed

Do not mutate Linear.
Do not patch prompts.
Do not start Cursor work.
Do not register a cron for yourself. If you think one is needed, propose it and wait.
```
