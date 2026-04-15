# Workflow Bundle Honesty Cleanup Plan

## Goal
Clean up the workflow bundle system so listings reflect reality, support agent-installable workflows honestly, and stop overstating local artifacts or bundle completeness.

## Scope
- Add schema support for truthful bundle classification and install source metadata
- Downgrade or correct entries that currently imply local bundle files that do not exist
- Keep the model orchestrator listing, but mark it as conceptual/example-only instead of local
- Update browse and detail UI wording so it matches real availability
- Verify with `npm run build`
- Commit and push to `main`

## Checklist
- [x] Create dated plan file and sync ACTIVE_PLAN
- [ ] Extend workflow content schema for honest bundle/install metadata
- [ ] Rewrite current workflow entries to match verified reality
- [ ] Update workflow browse/detail UI wording and labels
- [ ] Run `npm run build`
- [ ] Commit changes
- [ ] Push to `main`

## Resume
If context compacts, re-read this file and continue from the first unchecked item.
