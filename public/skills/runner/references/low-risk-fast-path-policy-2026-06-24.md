# Low-risk fast-path policy (2026-06-24)

## Trigger

Henry approved a five-rule policy for autonomous Cursor queues on 2026-06-23 in the `#products-backlog` Discord channel. Goal: stop treating Book review as a ceremony. Keep the guard, drop the toll booth. Make the system keep moving when the deterministic gates already prove safety, and only stop when judgment is actually needed.

> “If autoreview and thermo-nuclear review worked and all is good, and Book review is only wasting time, skip it and go to the next task. Never stall or stop unless there is a real blocker.”

## The five rules (canonical text)

1. **Fast-path scope.** Local auto-approve covers `docs/`, `output/proof/`, `.cursor/rules`, `.project-gate.json`, `.gitignore`, `AGENTS.md`, `scripts/proof/`, `scripts/linear/`, and pure test-only changes. Anything under `app/`, `lib/`, `prisma/`, `next.config.*`, `package.json`, `package-lock.json`, importers, auth, sessions, audit, search, or schema stays on real review.
2. **Fallback when Book API fails.** For low-risk issues, continue when every deterministic check passes. For risky issues, fail closed and stop. No silent stalling.
3. **Dirty-repo policy.** Cursor must isolate each issue in a clean branch/commit before Book review runs. Broad dirty trees are not acceptable proof.
4. **Review strictness.** A messy receipt blocks risky work. For low-risk docs/proof tasks, a messy receipt is a warning, not a hard block.
5. **Autonomy level.** After a verified approval, Cursor auto-moves to the next dependency-safe approved child issue. Stop only on a real risky blocker. Bounded queue: max N issues per run, with N decided per project, default `5`.

## Where the rules land

The rules must be visible to every actuator that can stall a queue:

- This reference doc — `references/low-ri<REDACTED_API_KEY>.md`.
- The umbrella skill `SKILL.md` — hard-rule 8 (Book review is distinct but must not become a stall) cites this file as the operational definition of “low-risk fast-path.”
- The driver cron template — `templates/cursor-driver-cron-prompt.md` includes a named `Low-risk fast-path` block.
- Every active Cursor-driver cron prompt — Mycelium V1 and Entity Phase 2 (and any future driver) gets the same block.
- Every project `.project-gate.json` — keeps the `autoApprove` block but its `blockIfChangedFileMatches` is the inverse of rule 1 (so the allowlist and the blocklist stay consistent).

## Implementation in the CLI Tester gate config

`.project-gate.json` already ships an `autoApprove` block in the Mycelium and v1-execution-pack examples. The fast-path policy tightens it to:

```jsonc
"bookReview": {
  "required": true,
  "mode": "hermes-api",
  "apiBaseEnv": "BOOK_API_BASE",
  "apiKeyEnv": "API_SERVER_KEY",
  "timeoutMs": 120000,
  "retryAttempts": 2,
  "retryDelayMs": 1000,
  "autoApprove": {
    "enabled": true,
    "allowBroadChanges": false,
    "allowUnmatchedChanges": false,
    "requireCommands": true,
    "blockIfChangedFileMatches": [
      // Inverse of the fast-path allowlist — anything here is risky.
      "app/**",
      "lib/**",
      "prisma/**",
      "package.json",
      "package-lock.json",
      "next.config.*"
    ],
    "allowedPathPatterns": [
      ".cursor/rules/**",
      ".gitignore",
      ".project-gate.json",
      "AGENTS.md",
      "docs/**",
      "output/proof/**",
      "output/<project>/test-gate/**",
      "output/<project>/book-review/**",
      "scripts/proof/**",
      "scripts/linear/**"
    ]
  }
}
```

If the gate runner sees a changed file that matches `blockIfChangedFileMatches`, it routes to real Book review (Hermes API or packet+dry-run). Otherwise it auto-approves locally when:

- `run` is PASS with all command exit codes `0`;
- `bannedTermScan.hitCount: 0`;
- `privateDefaultScan.hitCount: 0`;
- changed paths are enumerated and `allowedPathPatterns`-safe;
- proof artifacts exist under `output/proof/<ISSUE_ID>/`.

If the runner sees `bookReview.mode: "hermes-api"` and the API is unreachable, write a resumable `BLOCKED` receipt for risky issues and continue locally for low-risk ones.

## Cron behavior

The driver cron:

- Applies the fast-path rules before it asks for human input.
- Records the decision in driver state with `fastPathApplied: true|false` and `fastPathReason`.
- Skips Book review request when fast-path applied and writes a `bookReviewSkipped` waiver receipt (see `references/autonomous-review-non-stall-policy-2026-06-23.md`).
- Continues to the next approved child issue in dependency-safe order, applying the safe skip-ahead rule from `references/safe-skip-ahead-on-dependency-reorder-blockers-2026-06-23.md`.
- Stops only on real risky blockers: failed proof, secrets/security, dirty/unrelated scope, push/merge/release, ambiguous product/architecture decision, missing source authority.

## Stop conditions (these stay real)

These are not waived by fast-path. Treat each as a hard stop and report:

- `run` is FAIL or any proof command exits non-zero.
- `bannedTermScan.hitCount` or `privateDefaultScan.hitCount` is non-zero.
- A staged file matches `blockIfChangedFileMatches`.
- A changed path falls outside `allowedPathPatterns` and is not covered by an explicit per-issue waiver.
- A required proof artifact is missing under `output/proof/<ISSUE_ID>/`.
- The current issue depends on a later approved issue and no later approved issue is independently unblocked.
- A destructive action, push, merge, deploy, or external side effect is requested.
- Secrets, credentials, OAuth, or payment prompts appear.
- A product/architecture decision with no later owning follow-up is in the diff.

## Worked pattern reference

The Mycelium V1 driver prompt already encodes most of these as inline rules after the 2026-06-23 safe-commit update. This reference is the canonical home so future projects (Hoshi, ShowClaw, Helm, OpenCore, Entity, Hoshi-Mycelium convoys) share the same wording instead of forking.

## Updating other projects

When wiring the fast-path into a new project:

1. Copy `templates/cursor-driver-cron-prompt.md` and embed the `Low-risk fast-path` block under `Hard rules`.
2. Mirror the `autoApprove` block in the project `.project-gate.example.json`.
3. Update the project's `plan.md` to cite this reference by name.
4. Re-run the pack validator; do not bypass it.
5. Relaunch the worker with the new prompt; record the prompt hash in driver state.

## Receipts

Whenever the cron applies fast-path, it writes:

```text
output/<project>/book-review/<ISSUE_ID>.fast-path.json
{
  "issue": "<ISSUE_ID>",
  "decision": "APPROVED_TO_CONTINUE",
  "safeToContinue": true,
  "bookReviewSkipped": true,
  "fastPathApplied": true,
  "fastPathReason": "low-risk: docs/proof/config/test-only changes, run PASS, scans 0, paths allowlisted",
  "appliedAt": "<ISO8601>",
  "appliedBy": "Book cron <job_id>"
}
```

This is the audit trail Henry can read to confirm the rules were followed. If the file is missing and the issue was auto-advanced, treat it as a violation and stop the cron.
