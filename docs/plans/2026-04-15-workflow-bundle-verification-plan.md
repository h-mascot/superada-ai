# Workflow Bundle Verification Plan

## Goal
Verify whether each workflow bundle entry in `src/content/workflows/` corresponds to real artifacts, real bundle structure, and truthful setup/install claims, rather than purely descriptive marketing copy.

## Scope
- Check every workflow content file except templates
- Verify local repo paths in `repoPath`, `bundle.bundleRoot`, `artifacts`, and `structure`
- Check install/setup/verification claims against real local evidence and available linked source evidence
- Produce a concise report of accurate items, missing/inaccurate items, and recommended fixes

## Checklist
- [x] Inventory workflow content files
- [x] Verify local artifact paths and structure entries against repo state
- [x] Check linked/source evidence for externally referenced bundles where possible
- [ ] Write concise findings report
- [ ] Update ACTIVE_PLAN to this verification task

## Resume
If context compacts, re-read this file and continue from the first unchecked item.
