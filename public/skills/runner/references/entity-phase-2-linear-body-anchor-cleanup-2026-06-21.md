# Entity Phase 2 Linear body-anchor cleanup (2026-06-21)

Session lesson for `runner`: a generated pack can pass structural validation while still being unsafe for Cursor if live Linear issue bodies do not explicitly carry the source key that the mapping table uses.

## Failure shape

- Mapping was originally generated from a child-load receipt with fields like `source_id`, `linear_id`, `linear_uuid`, `title`, `url`, `parent_linear_id`.
- The skill validator expected an `issues` object keyed by Linear ID plus `mappingPolicy`; the generated file only had a `mappings[]` array.
- Live Linear titles were canonical (`Entity Phase 2 — THE-6.1: ...`) while the mapping retained short titles (`Inventory current schema...`).
- Live Linear issue bodies referenced parent/source context but did not include explicit child source keys like `THE-6.1`.
- Result: UUID/title/parent/url/proof-command checks could pass, but `body/source-key alignment` remained a real Cursor blocker.

## Correct recovery pattern

1. Patch mapping schema before claiming compliance:
   - Preserve any human-readable `mappings[]` for compatibility.
   - Add `schemaVersion`, `generatedAt`, `mappingPolicy`, and `issues` keyed by Linear ID.
   - Use exact live Linear canonical title in `title` and retain old short title as `short_title` / `shortTitle`.
   - Include mapping-basis booleans: `title_contains_source_id`, `title_exact_match`, `body_heading_match`, `body_contains_source_id`, `source_section_slug_match`, `linear_uuid_match`, `parent_link_match`.
2. Re-run `validate_execution_pack.py` after schema changes.
3. Re-fetch live Linear for the whole approved queue, not just a sample, before marking Cursor-ready.
4. If bodies lack source IDs, create a **dry-run cleanup write plan** first:
   - `linear-cleanup-write-plan-YYYYMMDD.md/.json`
   - `cleanup-drafts/<ISSUE>.current.md`
   - `cleanup-drafts/<ISSUE>.proposed.md`
   - `cleanup-drafts/<ISSUE>.diff`
5. The safe body-only patch is to insert after the existing `## Parent` section:
   - `## Source ID`
   - the child source key, e.g. `` `THE-6.1` ``
   - parent slice line
   - `## Mapping basis (validated YYYY-MM-DD)` with source_id, linear_id, linear_uuid, parent, and title/url/body basis.
6. Do not write Linear until Henry explicitly approves the body-only update plan.
7. When approved, apply with a run-state file, one `issueUpdate(description=...)` per child issue, and no title/comment/status/label/assignee changes.
8. Post-write, re-fetch live Linear and require:
   - live issues fetched: N/N
   - UUID match: N/N
   - parent match: N/N
   - title/source match: N/N
   - body contains source ID: N/N
   - Source ID anchor/heading match: N/N
   - proof commands present: N/N
9. Re-run the execution-pack validator.
10. Copy/review `.project-gate.example.json` to repo-root `.project-gate.json`, then run CLI Tester at least once against an initial issue as a smoke gate.
11. Update `plan.md` after blockers clear. Do not leave stale "do not use Cursor yet" cleanup prompts in the same plan that now says Cursor-ready.

## Important nuance

A `/docs/source/...` URL may render the Entity SPA shell for markdown files depending on the app route. For machine-readable handoff, prefer the raw API URL when verified:

```text
/api/file/raw?source=<sourceId>&path=<path/to/plan.md>
```

Do not assume the human docs URL is the content URL unless you fetch it and see markdown.
