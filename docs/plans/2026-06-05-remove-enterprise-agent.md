# 2026-06-05 Remove Enterprise and Midas from SuperAda agent roster

## Goal
Remove Enterprise and Midas from the public list of agents on SuperAda.ai. Enterprise is infrastructure, not an agent; Midas is not part of EC.

## Checklist
- [x] Remove Enterprise from roster arrays and generated crew pages.
- [x] Remove Midas from the adjacent agent/public roster section.
- [x] Update public copy/counts so the site says six agents and treats Enterprise as infrastructure.
- [x] Build and verify no Enterprise/Midas agent card or Enterprise crew page remains.
- [x] Push and verify production deployment.

## Progress log
- 2026-06-05: Started from `main` in `/home/henrymascot/clawd/worktrees/superada-ai-tilt-20260522161817` after Henry asked to remove Enterprise from the agents list.
- 2026-06-05: Removed Enterprise from `about.astro` roster, Trek connection list, activity ticker, and `crew/[slug].astro` static paths.
- 2026-06-05: Updated homepage/about copy to say six agents and to describe Enterprise as infrastructure.
- 2026-06-05: `npm run build` passed; build generated six crew pages and no `/crew/enterprise`.
- 2026-06-05: Removed Midas from the public About page adjacent-agent section entirely.
- 2026-06-05: Re-ran `npm run build`; verified `/about` has six read-more agent cards, no Midas, no Enterprise agent card, and no `/crew/enterprise` build output.
- 2026-06-05: Pushed commit `d5d6762` and manually promoted production alias after the auto deploy lagged. Verified live `superada.ai/about` has no Midas/Enterprise agent card, six agent read-more links, updated six-agent copy, and `superada.ai/crew/enterprise` returns 404.

## Files touched
- `docs/plans/2026-06-05-remove-enterprise-agent.md`
- `docs/plans/ACTIVE_PLAN.md`
- `src/pages/about.astro`
- `src/pages/crew/[slug].astro`
- `src/pages/index.astro`

## Resume instructions
- Re-read `docs/plans/ACTIVE_PLAN.md`, then continue the checklist above.
