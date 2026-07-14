# Cursor Project Execution Pack — Reference Index

Last updated: 2026-06-24.

## Recurring patterns (read first)

- `references/parent-baseline-commit-and-child-worktree-reset-2026-06-24.md` — **NEW.** Parent-proof must be committed, not just dirty/untracked, before a clean sibling child worktree can branch from it. Covers `git reset --hard` of the clean child, scoped proof re-run, GitNexus scaffolding cleanup, and the Option A waiver cascade pattern.
- `references/henry-approval-gate-clearance-and-stale-prompt-relaunch-2026-06-23.md` — Terse "Approved" / "Do A" replies are actionable gate clearances.
- `references/terse-option-approval-linear-waiver-relaunch-2026-06-24.md` — Terse option-letter replies when context names the options.
- `references/linear-waiver-closeout-and-relaunch-2026-06-24.md` — Posting the queued proof comment, advancing state, and relaunching the next unblocked child without another permission round.
- `references/run-state-pointer-and-generated-artifact-cleanup-2026-06-23.md` — Trust run-state as the relaunch pointer; clean `.claude/`, `CLAUDE.md`, AGENTS.md GitNexus block before product commits.
- `references/queue-drained-auto-stop-for-cursor-driver-cron-2026-06-24.md` — Queue-drained auto-stop is mandatory for every driver cron.
- `references/low-ri<REDACTED_API_KEY>.md` — When local auto-approve is the right default.
- `references/live-cron-prompt-edit-technique-2026-06-24.md` — Editing `jobs.json` without breaking the scheduler.

## Class-level lessons

- `references/linear-access-fallback-for-cursor-prompts-2026-06-22.md` — Snapshot + helper + write-path queue for any live external API.
- `references/linear-api-quirks-2026-06-22.md` — Linear GraphQL gotchas and the `commentCreate` / `issueUpdate` / `stateId` pattern.
- `references/safe-skip-ahead-on-dependency-reorder-blockers-2026-06-23.md` — When to defer the immediate next issue for a later unblocked one.
- `references/packet-mode-book-review-local-approval-2026-06-22.md` — Converting `REQUESTED / safeToContinue: false` to `APPROVED / safeToContinue: true`.
- `references/proof-matrix-per-issue-ownership-2026-06-22.md` — Per-issue ownership for matrix-shaped hard gates.
- `references/cli-tester-scan-exclude-normalization-2026-06-22.md` — Exact-string prefix, mirror bannedTerms at root, always exclude `.cursor/linear-live.json`.
- `references/autonomous-safe-commit-and-signoff-deferral-2026-06-23.md` — Green/low-risk local save-point commits without Henry approval.
- `references/autonomous-review-non-stall-policy-2026-06-23.md` — Book review must not become a redundant stall.
- `references/cursor-cli-worker-completion-autocontinue-savepoint-2026-06-23.md` — Clean worker exits auto-continue to the next issue.
- `references/cursor-cli-goal-mode-supervision-2026-06-23.md` — Launching the full-queue goal-mode prompt and supervising it.
- `references/cursor-driver-report-contract-and-screenshots-2026-06-22.md` — Henry-corrected report shape.
- `references/cron-reporting-discipline-2026-06-22.md` — Sparse heartbeats, transition reports only.
- `references/cursor-driver-headless-autonomy-2026-06-22.md` — Headless executor is the primary control plane; GUI is fallback.
- `references/authorized-merge-test-screenshot-handoff-2026-06-24.md` — Finalization authorization pattern.

## Worked receipts

- `references/end-to-end-cursor-cli-cron-bootstrap-2026-06-23.md` — Current default for "run this skill" wording.
- `references/hoshi-end-to-end-cron-bootstrap-2026-06-23.md` — Hoshi activation slice.
- `references/hoshi-rerun-entity-links-and-gate-normalization-2026-06-22.md` — Hoshi rerun and gate fix.
- `references/hoshi-full-linear-body-rewrite-2026-06-21.md` — "Quality over speed" body rewrite.
- `references/missed-check-in-worker-exit-recovery-2026-06-23.md` — Check-in recovery.
- `references/approval-target-clarification-2026-06-23.md` — "What do you want me to approve?" mode.
- `references/cursor-cli-live-requeue-and-cron-patch-2026-06-23.md` — Requeueing GUI-stalled project to CLI.
- `references/showclaw-queue-cron-activation-2026-06-23.md` — ShowClaw activation.
- `references/showclaw-pack-validation-and-gate-normalization-2026-06-22.md` — ShowClaw gate normalization.
- `references/mycelium-v1-live-pack-2026-06-22-gotchas.md` — Mycelium V1 live pack gotchas.
- `references/mycelium-v1-body-anchor-preflight-2026-06-22.md` — Mycelium body-anchor preflight.
- `references/mycelium-full-queue-and-book-review-api-2026-06-22.md` — Hermes API Book review wiring.
- `references/cursor-driver-job-activity-and-cli-autoapprove-2026-06-22.md` — Job-activity driver cron.
- `references/cursor-driver-active-unblock-and-book-review-2026-06-22.md` — Active unblock pattern.
- `references/cursor-cli-supervision-and-login-2026-06-22.md` — Camofox OAuth flow.
- `references/cursor-driver-active-supervision-2026-06-22.md` — Active supervision.
- `references/cursor-agent-progress-check-2026-06-22.md` — Status audit.
- `references/contradictory-body-resolution-and-live-progress-check-2026-06-22.md` — Contradictory body resolution.
- `references/inline-prompt-in-chat-2026-06-22.md` — Paste the active Cursor prompt inline.
- `references/cursor-cli-requeue-cron-supervision-2026-06-22.md` — CLI requeue.
- `references/autonomous-book-review-auto-approve-anti-stall-2026-06-22.md` — Anti-stall auto-approve.
- `references/clean-worker-completion-and-noop-savepoint-2026-06-23.md` — No-op save-point.
- `references/entity-phase-2-linear-body-anchor-cleanup-2026-06-21.md` — Body-anchor cleanup.
- `references/entity-phase-2-live-preflight-lessons.md` — Live preflight lessons.
- `references/entity-helm-plan-comparison-and-proof-gates-2026-06-21.md` — Helm vs Entity plan shape.
- `references/entity-output-contract-and-cursor-repository-registration.md` — Entity FS contract.
- `references/plan-vs-skill-audit-and-project-prompt-normalization-2026-06-22.md` — Plan vs skill audit.
- `references/cursor-driver-cron-and-linear-env-2026-06-22.md` — Cron template + Linear env.
- `references/global-linear-env-for-cursor.md` — Global `LINEAR_API_KEY` plumbing.
- `references/book-review-gate-cli-tester-2026-06.md` — Book review gate shape.
- `references/helm-style-prompt-taxonomy.md` — Single/bounded/goal prompt taxonomy.
- `references/helm-incident-lessons.md` — Original Helm incident lessons.
- `references/vision-validation-fallback-2026-06-22.md` — Vision fallback for screenshot validation.

## Index maintenance

When adding a new reference, append a one-line entry here in the appropriate section. The `references/INDEX.md` file is loaded by Hermes skill discovery; a missing entry means future sessions will not know the reference exists.
