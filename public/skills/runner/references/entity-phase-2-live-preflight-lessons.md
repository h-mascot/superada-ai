# Entity Phase 2 live-preflight lessons — 2026-06-21

Session pattern: an execution pack was generated from a Linear child-load receipt, but the pack was not safe to call Cursor-ready until schema compatibility and live Linear preflight were repaired.

## Durable lessons

- **Validator schema matters.** If a generated map has `mappings[]` but the skill validator/template expects an `issues` object, patch the map to include both:
  - preserve `mappings[]` for human/back-compat readers;
  - add `issues` keyed by Linear ID (`THE-21`) for validator/agent consumers;
  - add `mappingPolicy` with `ordinalMappingAllowed: false` and `liveLinearPreflightRequiredBeforeCursor: true`.
- **Use canonical live Linear titles.** Do not leave shortened “what to build” titles in the mapping as the primary `title`. After live re-fetch, patch `title` to the exact Linear title and keep the old value as `short_title` / `shortTitle`.
- **Recommended per-issue mapping basis fields:**
  - `title_contains_source_id`
  - `title_exact_match`
  - `body_heading_match`
  - `body_contains_source_id`
  - `source_section_slug_match`
  - `linear_uuid_match`
  - `parent_link_match`
  - `proof_commands_present_in_body`
  - `banned_term_suspicious_hits`
- **Do not confuse URL/title source-key proof with body proof.** In the Entity case, all 75 issues had UUID/title/parent/source slug/proof-command checks pass, but 0/75 issue bodies/headings contained the child source key (`THE-6.1` etc.). Per Henry/SuperAda’s stricter standard, that still blocks Cursor execution until body/source-key alignment is repaired or explicitly waived.
- **Fetch all issues when feasible.** GraphQL aliases can fetch `THE-21`…`THE-95` in one request. Store a concise receipt in the pack and raw live data in an ignored `output/` path.
- **Banned-term scans need context.** Distinguish suspicious banned usage from allowed guardrail text like “Paperclip is external competitor/reference only” or “Curacel is design-customer context only.” Report both raw and suspicious hits.
- **Entity FS docs links can route oddly.** If `/docs/source/<source>/...md` returns the SPA shell, verify reader-inspectable content via `/api/file/raw?source=<source>&path=<path>` and record that URL in the pack.

## Minimal live-preflight receipt shape

```json
{
  "counts": {
    "liveIssuesFetched": 75,
    "uuidMatch": 75,
    "titleExactMatchAfterPatch": 75,
    "titleContainsSourceId": 75,
    "parentLinkMatch": 75,
    "bodyHeadingMatch": 0,
    "bodyContainsSourceId": 0,
    "sourceSectionSlugMatch": 75,
    "proofCommandsPresentInBody": 75,
    "suspiciousBannedHitIssues": 0
  },
  "blockers": ["body_source_key_alignment_not_all_confirmed"],
  "cursorReady": false
}
```

## Reporting discipline

If any strict preflight gate fails, say: **generated pack, not approved execution pack**. Do not say Cursor can run just because the validator passes.
