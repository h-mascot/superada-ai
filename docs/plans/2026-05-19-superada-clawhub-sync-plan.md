# SuperAda to ClawHub Sync Plan

## Goal
Connect skills and installable workflow resources published on SuperAda.ai to ClawHub publishing, using SuperAda as the editorial source of truth.

## Checklist
- [x] Inspect current SuperAda resource sources
- [x] Confirm ClawHub CLI publish/sync shape
- [x] Add a sync script that discovers published skills and installable workflows
- [x] Generate ClawHub-ready workflow packages from workflow pages
- [x] Add npm commands and operator docs
- [x] Add GitHub Actions auto-sync hook
- [x] Run dry-run verification
- [x] Run site build verification
- [ ] Publish to ClawHub if auth is valid
- [ ] Record MC evidence

## Progress Log
- 2026-05-19 07:10 UTC: Started from Telegram request. `clawdhub whoami` reports the current token is invalid/revoked, so live external publishing is gated on a fresh ClawHub login.
- 2026-05-19 07:14 UTC: Added `scripts/sync-superada-to-clawhub.mjs`, `npm run clawhub:plan`, `npm run clawhub:publish`, and `docs/clawhub-sync.md`. Initial dry run found 12 installable skills and 2 installable workflows.
- 2026-05-19 08:15 UTC: `npm run build` passed. `npm run clawhub:publish` assembled the same 14-item upload set, then stopped at ClawHub auth because the stored CLI token and `secrets/clawdhub.key` are both invalid/revoked.
- 2026-05-19 08:19 UTC: After rebasing on latest `origin/main`, dry run found 13 installable skills and 2 installable workflows. Build passed again.
- 2026-05-19 08:23 UTC: Added `.github/workflows/superada-clawhub-sync.yml` so pushes touching SuperAda skill/workflow resources automatically run the ClawHub plan and publish path once `CLAWDHUB_TOKEN` is set.

## Files Touched
- `docs/plans/2026-05-19-superada-clawhub-sync-plan.md`
- `docs/plans/ACTIVE_PLAN.md`
- `.gitignore`
- `docs/clawhub-sync.md`
- `.github/workflows/superada-clawhub-sync.yml`
- `package.json`
- `scripts/sync-superada-to-clawhub.mjs`

## Resume Instructions
If context compacts, re-read this plan, inspect `git status`, run `npm run clawhub:plan`, and continue from the first unchecked item.
