# Hoshi full Linear body rewrite — 2026-06-21

## Context

During Hoshi Slice A prep, the initial grill-to-linear run loaded 5 parent epics and 18 child execution issues into Linear. The child bodies were structurally too thin: they pointed to a companion file (`g2l-3-child-bodies.md`) instead of carrying the full execution contract directly in Linear.

Henry corrected the workflow: if the generated spec-to-issues output is broken or too thin, **rewrite the issues and re-upload them properly**. Quality beats preserving a bad first pass.

## Durable lesson

For Cursor/autonomous execution packs, do not treat stale/thin Linear issue bodies as immutable. If live Linear fails the body/source-key/readiness audit, rewrite the child issue bodies completely and upload the corrected bodies before calling Cursor-ready.

## What “proper” means

Each Cursor-executable child issue body should include, inline:

- `## Source ID`
- `## Mapping basis`
- `## Read first (repo context)`
- `## What to build`
- `## Target files / existing patterns`
- `## Boundaries / non-goals`
- `## Acceptance criteria`
- `## Required PRD test IDs`
- `## Proof required`
- `## Local Cursor / local-agent commands`
- `## Blocked by`
- `## Not done until`

The body must be self-contained enough that Cursor can execute from Linear plus repo files without chasing a private chat transcript.

## Safe rewrite pattern

1. Fetch live Linear bodies and save `<ISSUE>.current.md` backups.
2. Generate `<ISSUE>.proposed.md` for every child from the canonical PRD/spec/context pack.
3. Structurally lint every proposed body for the required sections, no placeholders, proof path, and repo-real commands.
4. Upload by Linear UUID, not by ordinal order.
5. Add an audit comment to each rewritten issue: body replaced with full Cursor-ready execution contract.
6. Re-fetch live Linear.
7. Re-run drift audit against live Linear, not local drafts.
8. Only then mark preflight PASS / Cursor-ready.

## Banned-term nuance

Banned-term scanners must distinguish prohibition context from actual violations. For Hoshi, examples like `no-Slack-send`, `Do NOT send to Slack`, and `no native-sync/iPhone coverage claim` are allowed because they encode hard rules. The scanner should report these as allowed prohibition contexts, not blockers.

## Outcome from Hoshi

- 18/18 child issues THE-176..THE-193 fully rewritten and re-uploaded.
- 18/18 audit comments added.
- Post-rewrite live Linear audit: 0 structural problems, 0 true banned-term violations.
- Cursor-ready verdict became PASS after rewrite.
