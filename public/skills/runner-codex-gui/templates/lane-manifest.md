# GUI Lane Manifest

```yaml
schema_version: 1
project: <project>
issue: <THE-123>
role: <worker|reviewer|integrated-auditor>
task_title: <visible top-level title>
manager_task_id: <id>
ownership_generation: <integer>
worktree: <absolute path>
branch: <branch>
base_head: <full sha>
expected_head_or_range: <sha or range>
source_authority:
  - <path/url>
read_first:
  - <repo/AGENTS.md>
  - <runner-codex-gui/SKILL.md>
  - <issue/live helper>
owned_paths:
  - <path prefix>
forbidden_actions:
  - mutate canonical main
  - mutate shared run/manager state
  - update Linear
  - merge or push
  - self-review
  - switch issues
proof_commands:
  - <command>
receipt_path: <absolute or repo-relative path>
completion_contract:
  - <checkable condition>
```

## Worker completion

- scoped implementation is committed once;
- worktree status and generated noise are accounted for;
- focused/full proof and scans are recorded;
- candidate receipt binds issue, base, candidate HEAD, diff, commands, and evidence;
- worker stops and waits for independent review.

## Reviewer completion

- reviewer is a fresh visible top-level task;
- exact HEAD/range exists and matches the manifest;
- source/acceptance and proof are reread independently;
- receipt records PASS or actionable FAIL findings against exact HEAD;
- reviewer performs no write, merge, tracker, or state mutation.

## Integrated auditor completion

- integrated commit is ancestral to canonical main;
- candidate patch identity is proven present;
- integrated-tree gates pass on current main;
- receipt/state/Linear binding is correct;
- no dependent lane unlocks before these checks pass.
