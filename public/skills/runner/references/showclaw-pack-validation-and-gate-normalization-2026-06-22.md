# ShowClaw execution-pack validation and gate-normalization lessons — 2026-06-22

Use this as a class-level pattern for Cursor execution packs when the project has intentional prohibition language, Linear fallback snapshots, and packet-mode Book review gates.

## What happened

A ShowClaw pack was generated for 56 child Linear issues (`THE-291` through `THE-346`) with:

- Entity FS handoff plan under Crew Home.
- Repo copy under `docs/cursor-execution-pack/showclaw-v0/`.
- `.cursor/linear-live.json` fallback snapshot kept local and gitignored.
- `scripts/linear/get_linear_issue.py` committed as the snapshot-first helper.
- `.project-gate.json` kept local/gitignored; `project-gate.example.json` committed.

The pack validator passed, but the first CLI Tester dry-run initially failed because the scanner saw the project’s intentional “do not say X” guardrail text as banned-term leaks.

## Durable lessons

### 1. Packet-mode Book review BLOCKED is expected before approval

For `bookReview.mode: "packet"`, `project-test-gate book-review` creates/request a review packet and returns `REQUESTED` / `BLOCKED` / `safeToContinue: false` until a Book approval receipt exists. That is not an implementation failure and not a pack failure.

Report it as: machine gate PASS; Book approval is intentionally blocking next-child continuation.

### 2. Gate scans must exclude intentional policy/prohibition contexts

When a project’s own instructions list forbidden public claims, a naive banned-term scan will flag the policy text. Normalize `scanExcludePaths` so the gate scans implementation/output surfaces, not guardrail documents.

Typical excludes:

```json
[
  "AGENTS.md",
  ".cursor/rules",
  ".cursor/linear-live.json",
  "docs/context",
  "docs/specs",
  "docs/cursor-execution-pack",
  "scripts/proof/<project-smoke>.sh",
  "scripts/linear/get_linear_issue.py",
  "output",
  "node_modules",
  "dist",
  ".git"
]
```

Keep exact forbidden phrases in `.project-gate.example.json` / `.project-gate.json`; avoid duplicating them in the plan/prompt prose if the pack validator treats prompt prose as leak-prone.

### 3. Secret/private scans need the same distinction

A helper script that reads `LINEAR_API_KEY` may trip generic `api[_-]?key` scans. Exclude the helper path, or the gate will treat its intended env-var access as a secret leak. Do not weaken the helper; narrow the scan surface.

### 4. Entity FS link verification shape

The `/docs/source/.../plan.md` route can return the SPA shell with HTTP 200. Verify reader-inspectable content through one of:

- `/api/file/raw?source=crew-home&path=.../plan.md`
- `/api/docs/source/crew-home/.../plan.md`

Final reply should still make the `/docs/source/.../plan.md` human handoff link primary and raw link secondary.

### 5. Commit policy for fallback artifacts

- Commit: prompt files, plan, mapping, preflight checklist, gate example, run-state example, helper script.
- Do not commit: `.cursor/linear-live.json`, `.project-gate.json`, runtime state, receipts, `output/`, `dist/`, `node_modules/`.

The committed helper plus gitignored snapshot lets Cursor read Linear issue bodies without secrets while avoiding a large/stale live dump in git.
