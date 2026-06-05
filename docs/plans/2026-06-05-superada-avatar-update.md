# 2026-06-05 SuperAda avatar update

## Goal
Update every SuperAda.ai avatar image surface to use the new avatar asset, then build and verify the site output.

## Checklist
- [x] Locate current avatar assets and all references in source/public output.
- [x] Identify the newest intended avatar image from available assets/context.
- [x] Replace stale avatar files/references with the new avatar consistently.
- [x] Replace Zora site avatar with Henry-provided uncropped source and update references to `/avatars/zora.png`.
- [x] Run validation/build gate.
- [x] Verify built output contains the updated avatar and summarize receipts.

## Progress log
- 2026-06-05: Started from `/home/henrymascot/clawd/worktrees/superada-ai-tilt-20260522161817`; fast-forwarded main before changes.
- 2026-06-05: Replaced stale public avatars for Ada, Spock, Scotty, Book, and Zora from canonical `memory/assets/avatars/*` current/new sources.
- 2026-06-05: `npm run build` passed: voice validation, timeline validation, Astro static build.
- 2026-06-05: Verified `dist/avatars/*` SHA-256 hashes match `public/avatars/*` for the five updated avatar files.
- 2026-06-05: Henry flagged Zora as cropped on the site; replaced Zora with the uncropped Discord attachment source and kept `/avatars/zora.jpg` as a backward-compatible copy.

## Files touched
- `docs/plans/2026-06-05-superada-avatar-update.md`
- `ACTIVE_PLAN`
- `public/avatars/ada.jpg`
- `public/avatars/spock.jpg`
- `public/avatars/scotty.jpg`
- `public/avatars/book.png`
- `public/avatars/zora.jpg`
- `public/avatars/zora.png`
- `src/pages/about.astro`
- `src/pages/crew/[slug].astro`

## Resume instructions
- Re-read `ACTIVE_PLAN`, then continue from the checklist above.
