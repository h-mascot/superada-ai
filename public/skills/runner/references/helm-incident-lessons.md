# Lessons from the Helm Cursor incident

This reference explains why the Cursor Project Execution Pack is strict.

## Incident pattern

Cursor blocked even though the plan and prompt looked good because the live inputs were not all clean:

- Cursor was running from the wrong branch/context and could not see repo guardrail files.
- Live Linear bodies still carried stale source framing.
- Some generated issue bodies described different work than their titles.
- Proof commands included boilerplate commands that did not exist in the repo.
- The approved queue was not seeded in persistent state.

The prompt was not the core bug. The source-of-truth packet was incomplete.

## Durable rules extracted

1. Validate live Linear before saying Cursor can run.
2. Re-fetch after every Linear cleanup write.
3. Never trust generated issue bodies without mapping to source IDs.
4. Never use ordinal issue-to-spec mapping.
5. Parent epics are sequencing containers, not implementation contracts.
6. Cursor must use an approved queue only.
7. Persistent state is required so compaction/restart does not lose the queue.
8. Per-issue reread is mandatory after compaction.
9. CLI Tester owns generic build/test gate receipts; project repos only carry config.
10. Fail-stop is a feature, not a nuisance.
11. Codex autoreview is the default review layer; thermo-nuclear review is reserved for high-risk changes.
12. GitNexus/AGENTS gates are useful when configured and fresh, but stale graph data must not block basic source inspection.
13. Entity FS plan links are docs links; do not create Mission Control tasks just to publish a plan URL.
14. Cron/check-in templates are opt-in only. Do not register cron unless Henry explicitly asks.

## Common stale-source signs

- Body says old decision/status while title says new decision/status.
- Proof commands are copied from a generic template.
- Body says “blocked by none” and also lists blocking dependencies.
- A child issue body names a different local/source ID than the title.
- The issue references local-only files that Cursor Cloud cannot read.
- The branch Cursor uses lacks `AGENTS.md`, `.cursor/rules`, or context docs named by the plan.

## Correct recovery loop

1. Inspect receipt/state first.
2. Identify the failing gate.
3. Patch the source of truth, not the prompt, if the prompt correctly blocked.
4. Re-fetch live state.
5. Re-run validation.
6. Only then tell Henry Cursor can continue.

Do not patch blind. Do not loosen the prompt to route around stale inputs.
