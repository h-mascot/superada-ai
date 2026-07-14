# Helm PRD Phase 2 recovery — unusable PRD model output

Session: 2026-06-21 Helm Grill → SuperSpec → PRD → Linear.

## What happened

- SuperSpec generation succeeded via Oracle GPT-5.5 Pro browser route on Enterprise.
- First PRD draft attempt via Oracle GPT-5.5 Pro browser route exited `0`, but the output file was only two bytes / one line: `I`.
- The route receipt looked superficially successful (`status: ok`, bytes=2, lines=1), so the important lesson is: **exit code and route success are not enough**. Check artifact substance before feeding it forward.
- The model log showed:
  - `8m23s · gpt-5.5-pro[browser] · ↑31.16k ↓1`
  - `Saved assistant output ... prd-draft.md`
- That is a failed-unusable artifact, not a PRD.

## Recovery pattern

1. Mark the model output as failed-unusable in a receipt:
   - route
   - output path
   - bytes / lines / sha256
   - reason: single-character or otherwise invalid output
2. Do **not** use it as a draft.
3. Retry only if a better route/prompt shape is available; otherwise proceed deterministically from the strongest successful artifact chain:
   - canonical SuperSpec;
   - source packet / decisions;
   - user corrections;
   - critique must-fixes once available.
4. If running Opus critique, give it the canonical PRD or SuperSpec body, not just a checksum. If the critique says it could not read the source, treat that as a limitation; still extract actionable internal-consistency must-fixes if useful.
5. Apply critique with a deterministic parent-merge script or explicit traceability block:
   - applied must-fixes;
   - deferred must-fixes and why;
   - updated issue counts;
   - sha256 and path receipts.

## Concrete must-fixes caught by Opus critique

These are reusable issue-graph quality checks:

- Boilerplate acceptance criteria on every child issue are not acceptable; make them concrete/falsifiable.
- Boilerplate boundaries/non-goals on every child issue are weak; make them issue-specific.
- If early decision recovery/waiver gates downstream work, wire that blocker into dependencies.
- Verify command surface before promising commands (`npm ci`, `typecheck`, `lint`, `test`, `build`, `ctrl:gate`).
- Add explicit rollback drill, not only a rollback pointer.
- Add observability/audit-log emission issue when the PRD claims telemetry/audit.
- Add adapter-interface/migration issue when generalizing a legacy domain (e.g. Cron → Schedule Manager).

## Receipt standard

A canonical PRD after recovery should report:

- original failed route receipt;
- recovery source artifacts and checksums;
- critique model route (`citadel/opus48` for Opus 4.8 in Henry's environment);
- applied/deferred must-fixes;
- parent and child issue counts;
- canonical PRD path and sha256.
