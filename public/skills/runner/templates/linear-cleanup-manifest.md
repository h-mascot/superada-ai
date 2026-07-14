# Linear Cleanup Manifest — {{PROJECT_NAME}}

Generated: {{GENERATED_AT}}
Project: `{{PROJECT_SLUG}}`

## Freeze status

Cursor fan-out is frozen until live Linear passes post-write verification.

## Banned/stale concepts

| Pattern | Policy | Exception |
|---|---|---|
| `{{BANNED_TERM_EXAMPLE}}` | zero occurrences | Henry-approved named exception only |
| impossible proof commands | zero occurrences | none |
| title/body mismatch | blocks issue | none |

## Issues requiring cleanup

| Issue | Current problem | Proposed action | Approval status | Applied? | Post-fetch PASS? |
|---|---|---|---|---:|---:|
| `{{ISSUE_ID}}` | TODO | rewrite body/title | pending | no | no |

## Write order

1. Lowest-level source/provenance blockers.
2. Inventory/context issues.
3. High-risk proof/gate issues.
4. Release/final aggregation issues.

## Required dry-run artifacts per issue

- `<ISSUE>.current.md`
- `<ISSUE>.proposed.md`
- `<ISSUE>.diff`
- `<ISSUE>.validation.json`

## Post-write verification

After any Linear write:

- re-fetch live issue
- scan title + body for banned/stale terms
- verify proof commands are repo-real
- verify dependencies are real and not contradictory
- verify heading/scope match mapping table
- write `<ISSUE>.post.json` and `<ISSUE>.verification.md`

Do not tell Henry Cursor can run until the live post-fetch scan passes.
