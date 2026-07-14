# Cursor Single-Issue Prompt

You are working in `{{REPO_ROOT}}` on project `{{PROJECT_NAME}}`.

## Hard boundaries

- Work only on issue `{{ISSUE_ID}}`.
- Do not select another issue.
- Do not weaken tests, gates, repo rules, or prompts.
- Do not commit runtime state or receipts unless the repo explicitly expects proof artifacts.
- Stop on stale/mismapped issue body, banned terms, missing source, invalid proof commands, or failed receipts.

## Read first every time

Before coding, read:

1. `{{PLAN_PATH}}`
2. live Linear issue `{{ISSUE_ID}}`
3. `{{REPO_ROOT}}/AGENTS.md`
4. `{{REPO_ROOT}}/.cursor/rules/` when present
5. `{{REPO_ROOT}}/.project-gate.json`
6. `{{REPO_ROOT}}/.cursor/{{PROJECT_SLUG}}-autonomous-run-state.json`
7. `{{MAPPING_PATH}}`

After compaction/restart, reread the same files before continuing.

## Preflight

You may start only if:

- `{{ISSUE_ID}}` appears in the approved queue.
- `{{ISSUE_ID}}` is mapped in `linear_id_to_source_id.json`.
- Linear title/body/scope match the mapping.
- Proof commands listed in the issue exist in repo scripts/docs.
- Gate config exists and is readable.
- Required repo rules/context files exist on this branch.

If any check fails, update state to `BLOCKED`, write a receipt, and stop.

## Work loop

1. Create/confirm an issue branch.
2. Implement the smallest change that satisfies `{{ISSUE_ID}}` only.
3. Run issue proof commands.
4. Run CLI Tester:

```bash
<HOME>/Code/cli-tester/bin/project-test-gate \
  --root {{REPO_ROOT}} \
  --config {{REPO_ROOT}}/.project-gate.json \
  run {{ISSUE_ID}}
```

5. Run CLI Tester Book review when configured/required:

```bash
<HOME>/Code/cli-tester/bin/project-test-gate \
  --root {{REPO_ROOT}} \
  --config {{REPO_ROOT}}/.project-gate.json \
  book-review {{ISSUE_ID}}
```

6. Run CLI Tester verify:

```bash
<HOME>/Code/cli-tester/bin/project-test-gate \
  --root {{REPO_ROOT}} \
  --config {{REPO_ROOT}}/.project-gate.json \
  verify {{ISSUE_ID}}
```

7. Run Codex autoreview if the diff is non-trivial.
8. Run GitNexus/AGENTS gate if configured and fresh.
9. Run thermo-nuclear review only if issue is high-risk.
10. For UI-facing work, attach browser/DOM/screenshot proof at minimum; use explicit local recording or Cursor Cloud when video is required.
11. Confirm receipts/proof are unique to this issue ID, branch/PR, commit SHA, changed files, and commands.
12. Write/update state with branch, files changed, command outputs, receipt paths, and PASS/FAIL.
13. Stop after this issue. Do not proceed to another issue.

## Done means

- Tests/build/gates pass.
- CLI Tester `run` wrote a PASS receipt.
- CLI Tester `book-review` / `verify` passed when Book review is configured or required.
- Required Codex/GitNexus/thermo review receipts exist.
- UI proof exists for UI-facing work; video exists only when explicitly required.
- Receipts/proof are unique to this issue ID, branch/PR, commit SHA, changed files, and commands.
- State file records completion.
- Linear-ready proof summary exists.

If done is not true, say blocked and name the failing gate.
