# BenchBoard app on SuperAda — 2026-09-23

## Goal
Serve the current BenchBoard app at `superada.ai/benchmarks` with working public-safe data, preserving legacy benchmark detail pages.

## Steps
- [x] Identify the live BenchBoard build and current SuperAda route.
- [ ] Determine public-safe API projection and deployment route.
- [ ] Update the SuperAda source and validate locally.
- [ ] Deploy and verify the canonical route, assets, and API.

## Progress
- `benchboard.e` serves `benchboard-388e70856a2f.js` and `/api/benchmarks` returns JSON.
- SuperAda source still serves `index-DzhntsOS.js` and frozen `/benchboard/api/*.json` snapshots.

## Files touched
- This plan.

## Resume
Check live API exposure, implement the route, build, deploy, and read back the canonical URL.
