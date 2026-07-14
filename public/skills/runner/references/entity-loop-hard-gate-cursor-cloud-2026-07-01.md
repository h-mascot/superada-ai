# Entity Cursor Cloud loop hard-gate pattern — 2026-07-01

Use when preparing Cursor Cloud to work on Entity or another drift-prone Enterprise runtime where cloud agents can propose PRs but local runtime verification is authoritative.

## Lesson

A Cursor Cloud setup plan is not passable from narrative alone. The first task must be a **hard gate** with receipts, and downstream loop tasks must stay blocked until the gate passes.

## Required hard-gate receipts

Before any Cursor Cloud loop runs, record exact evidence for:

- Enterprise repo path, remote, branch, HEAD SHA, upstream, and `git status --short --branch`.
- Target base SHA, usually `origin/main`.
- Sandbox `/api/version`, `/api/health`, current symlink, listener PID cwd.
- Prod `/api/version`, `/api/health`, current symlink, listener PID cwd.
- Dirty file list classified as `intended`, `generated`, `unrelated`, or `unknown`.
- Cursor authentication/model/worker availability when Cursor is the executor.
- Cursor PR target/remote → Enterprise replay path.
- Explicit halt conditions and downstream task blocker reasons.
- Execution pack artifact links and machine-readable receipts.

## Pass/fail rule

- If the Enterprise replay checkout is dirty with unrelated or unknown files, the hard gate fails.
- If sandbox/prod/source SHA or cwd do not match the target being verified, the hard gate fails or must explicitly scope that mismatch as non-authoritative.
- If Cursor PR target cannot replay cleanly onto Enterprise source, the hard gate fails.
- If any required receipt is missing, keep the gate task open and all downstream tasks blocked.

## Authority boundary

Cursor Cloud may propose a branch/PR and supply evidence from its environment. It may not claim Entity runtime verification, deploy, mutate runtime services, touch production data, process production logs unless an Enterprise-local sanitizer is proven, or unblock downstream work.

Enterprise replay is the verification authority: fetch the PR branch into a clean Enterprise worktree, verify diff scope, run local gates such as `npm run ctrl:gate` or narrower approved checks, and only then perform sandbox verification from Enterprise.

## Task queue pattern

- Task 1: hard gate / execution pack. Unblocked.
- Task 2: first PR-only docs sweep. Blocked until Task 1 passes.
- Task 3: first code pilot. Blocked until Task 1 + docs pilot pass and Henry/product approves the exact slice.
- Task 4: Loop Harness. Blocked until the manual docs/code pilots prove the Cursor → Enterprise → sandbox path.
- Task 5: Quality Streak. Blocked until hard gate passes and Henry/product approves exact scenarios.

Do not create duplicate loop tasks when another agent has queued the same plan. Patch existing queued task descriptions/blockers with new adversarial-review findings instead.

## Minimal artifact set

Place artifacts outside the dirty repo when the repo is part of the thing being gated, e.g. under `~/.hermes/output/<slug>/`:

- `plan.md`
- `cursor-cloud-pilot-prompt.md`
- `enterprise-verification-checklist.md`
- `reviewer-prompt.md`
- `run-state.example.json`
- `handoff-template.md`
- `receipts.json`

For Entity FS links, create extensionless markdown copies when necessary and verify both `/docs/source/...` user-facing links and `/api/docs/source/...` machine links.
