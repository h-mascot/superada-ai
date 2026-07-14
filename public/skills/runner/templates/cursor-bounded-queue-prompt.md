# Cursor Bounded-Queue Prompt

You are working in `{{REPO_ROOT}}` on project `{{PROJECT_NAME}}`.

## Mission

Process the approved queue only:

```text
{{APPROVED_QUEUE}}
```

No self-discovery. No picking replacement issues. No parent-epic implementation unless the issue is explicitly in the approved queue and marked parent-approved.

## Required reread before each issue

Before each issue and after any compaction/restart, read:

1. `{{PLAN_PATH}}`
2. the live Linear issue body for the next issue
3. `{{REPO_ROOT}}/AGENTS.md`
4. `{{REPO_ROOT}}/.cursor/rules/` when present
5. `{{REPO_ROOT}}/.project-gate.json`
6. `{{REPO_ROOT}}/.cursor/{{PROJECT_SLUG}}-autonomous-run-state.json`
7. `{{MAPPING_PATH}}`

## Run-state protocol

State file:

```text
{{REPO_ROOT}}/.cursor/{{PROJECT_SLUG}}-autonomous-run-state.json
```

Allowed statuses: `IDLE`, `IN_PROGRESS`, `AWAITING_BOOK_GATE`, `COMPLETED`, `BLOCKED`, `FAILED`.

For each issue, record:

- issue ID
- branch
- source mapping ID
- files changed
- commands and exit codes
- CLI Tester receipt paths
- review receipt paths
- blocker reason, if any

The state file is runtime state and must not be committed.

## Issue loop

For each approved issue in order:

1. Verify the issue is still live, clean, mapped, and dependency-safe.
2. Stop if any stale/mismapped/banned/proof-command problem appears.
3. Implement only that issue.
4. Run proof commands.
5. Run CLI Tester:

```bash
<HOME>/Code/cli-tester/bin/project-test-gate \
  --root {{REPO_ROOT}} \
  --config {{REPO_ROOT}}/.project-gate.json \
  run <ISSUE_ID>
```

6. Run CLI Tester Book review when configured/required:

```bash
<HOME>/Code/cli-tester/bin/project-test-gate \
  --root {{REPO_ROOT}} \
  --config {{REPO_ROOT}}/.project-gate.json \
  book-review <ISSUE_ID>
```

7. Run CLI Tester verify:

```bash
<HOME>/Code/cli-tester/bin/project-test-gate \
  --root {{REPO_ROOT}} \
  --config {{REPO_ROOT}}/.project-gate.json \
  verify <ISSUE_ID>
```

8. Run Codex autoreview by default for non-trivial diffs.
9. Run GitNexus/AGENTS gate when configured/fresh.
10. Run thermo-nuclear review only for high-risk issues.
11. For UI-facing work, attach browser/DOM/screenshot proof at minimum; use explicit local recording or Cursor Cloud when video is required.
12. Confirm receipts/proof are unique to this issue ID, branch/PR, commit SHA, changed files, and commands.
13. If all gates pass, mark the issue complete in state and move to the next issue.
14. If any gate fails, mark `BLOCKED` or `FAILED`, write receipt, and stop. Do not continue.

## Fail-stop gates

Stop immediately on:

- issue absent from approved queue
- issue body stale or mismapped
- banned terms
- invalid proof command
- missing source mapping
- missing repo rules/context
- dirty unrelated files
- failed test/build/gate
- missing CLI Tester `run` receipt
- missing CLI Tester `book-review` approval when required
- missing or failed CLI Tester `verify`
- missing required Codex/GitNexus/thermo review receipt
- missing required UI proof
- reused receipt/screenshot/video from another issue
- missing or unwritable state file

## Output when blocked

Report only:

- issue ID
- failing gate
- evidence path/receipt
- proposed fix
- whether Linear, repo docs, queue, or code must change

Do not patch blindly.

## Required cursor goal-mode prompt artifact (Helm-style default)

Every generated pack MUST also include a goal-mode prompt with the same shape as Helm v1:

```text
{{GOAL_MODE_PROMPT}}
```

It must include:

- `/goal` invocation at the top
- Repository, plan, raw-fallback, and Linear project block
- Authority order ending with the plan file as operating guidance
- "Before coding" reread list aligned with the bounded-queue prompt
- Hard zero-policy block naming any project-banned external coordination/plugin/service terminology
- All four CLI Tester steps (`request`, `run`, `book-review`, `verify`)
- UI proof / video evidence policy consistent with the plan
- Receipts/state/Book-review sections
- Standardized no-merge sentence:
  ```text
  Do not merge without Book/SuperAda verification unless Henry has explicitly authorized Cursor to merge.
  ```

The goal-mode prompt supersedes the bounded-queue prompt for whole-queue autonomous runs. Do not ship a pack without it.
