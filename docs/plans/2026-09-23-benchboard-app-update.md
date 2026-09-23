# BenchBoard app on SuperAda — 2026-09-23

## Goal
Serve the current BenchBoard app at `superada.ai/benchmarks` with working public-safe data, preserving legacy benchmark detail pages.

## Steps
- [x] Identify the live BenchBoard build and current SuperAda route.
- [x] Determine public-safe API projection and deployment route.
- [x] Update the SuperAda source and validate locally.
- [x] Deploy and verify the canonical route, assets, and API.

## Progress
- `benchboard.e` serves `benchboard-388e70856a2f.js` and `/api/benchmarks` returns JSON.
- SuperAda source still serves `index-DzhntsOS.js` and frozen `/benchboard/api/*.json` snapshots.
- Rebuilt BenchBoard from `~/Code/benchboard` at commit `a3042c2` → `index-b_LarIi9.js` (239,608 B) + `index-DeTOMBl0.css` (50,280 B).
- Refreshed read-only API snapshots from live `127.0.0.1:3005`: 45 runs, newest `2026-09-22-v4.1-n5-mimo-v2.6-flash`; added `memory-benchmarks.json` (13 MB).
- `vercel.json`: added root `/api/*` → snapshot rewrites for the 13 endpoints the bundle calls, plus SPA fallback rewrites for tab paths (`/dashboard`, `/providers`, …) → `/benchmarks`.
- Write endpoints (`POST /api/briefs`, `POST /api/run-requests`) are not exposed; only static GET snapshots ship.
- Astro build passed (298 pages). Commit `015c9c7` pushed; Vercel auto-deploy `superada-qvcgtfdlx` Ready.

## Verification
- `https://superada.ai/benchmarks/` → 200, serves new `index-b_LarIi9.js` shell.
- `/api/benchmarks` → 200 (1,123,012 B) containing `2026-09-22-v4.1-n5-mimo-v2.6-flash`.
- `/api/memory-benchmarks`, `/api/tts-benchmarks` → 200 valid JSON.
- `/dashboard`, `/providers` → 200 (SPA fallback works).
- Headless Chrome screenshot: full dashboard rendered — 45 models, leader `gpt-5.6-sol codex-oauth` 0.86875, "API live", updated 23 Sept.

## Files touched
- `vercel.json`, `src/pages/benchmarks/index.html`
- `public/benchboard/assets/index-b_LarIi9.js`, `index-DeTOMBl0.css` (new)
- `public/benchboard/api/{benchmarks,audio-catalog,computer-use-tools,image-models,tts-benchmarks}.json` (refreshed), `memory-benchmarks.json` (new)
- This plan + `ACTIVE_PLAN.md`.

## Resume
Complete 2026-09-23. Live: https://superada.ai/benchmarks/
