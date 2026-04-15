# Superada.ai Workflow Marketplace Build Plan

## Goal
Add a first implementation of the workflow marketplace to superada.ai based on the approved lean spec.

## Scope for first ship
- Add a browse page for workflow bundles
- Add a workflow detail page
- Add a local content/data model for workflow bundles
- Seed with a few example bundles, including the newly installed gstack skills where useful
- Keep install flow manual, with copyable install instructions
- Preserve current Astro site style and content conventions

## Constraints
- Source of truth repo: https://github.com/henrino3/superada-ai
- Build via Geordi pipeline rules
- Verify with project build before reporting complete
- Keep v1 narrow, OpenClaw-first, and GitHub-backed in content shape

## Execution checklist
- [x] Inspect current Astro routes/components/content structure
- [x] Design workflow bundle schema for Astro content or data files
- [x] Implement marketplace browse page
- [x] Implement workflow detail page
- [x] Seed initial workflow entries
- [x] Add install instructions UX
- [x] Run full build verification
- [x] Summarize files changed and next steps

## Resume instructions
If context compacts, re-read this file, inspect repo state, and continue from the first unchecked item.
