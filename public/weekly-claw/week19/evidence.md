# Weekly Claw Week 19 Evidence — 2026-06-26

## Result
- Live route: `https://superada.ai/weekly-claw/week19/`
- Live deck: `https://superada.ai/weekly-claw/week19/deck.html`
- Final slide asset: `https://superada.ai/weekly-claw/week19/slide-14.jpg`
- Artifact path: `/home/henrymascot/clawd/worktrees/superada-ai-tilt-20260522161817/public/weekly-claw/week19`.
- Commit: pending at evidence-write time; see final operator report after push.

## Source/reference reads
- `output/weekly-claw/context.md`
- `skills/writing-model-router/SKILL.md`
- `skills/openclaw-slide-style/SKILL.md`
- Prior deck reference: `public/weekly-claw/week18/deck.html`
- GitHub releases/commits/issues API for OpenClaw in the 2026-06-19 → 2026-06-26 window.

## Source signal sampled
- Repository: `openclaw/openclaw`.
- Stable releases captured:
  - `v2026.6.10` — published `2026-06-24T03:06:38Z`; `openclaw 2026.6.10`; source `https://github.com/openclaw/openclaw/releases/tag/v2026.6.10`.
  - `v2026.6.9` — published `2026-06-21T01:44:28Z`; `openclaw 2026.6.9`; source `https://github.com/openclaw/openclaw/releases/tag/v2026.6.9`.
- Beta signal sampled: `v2026.6.11-beta.1, v2026.6.10-beta.2, v2026.6.10-beta.1, v2026.6.9-beta.1`.
- Source JSON: `/home/henrymascot/clawd/output/weekly-claw/week19-sources-current/summary.json`.
- Raw captures:
  - `/home/henrymascot/clawd/output/weekly-claw/week19-sources-current/releases.json`
  - `/home/henrymascot/clawd/output/weekly-claw/week19-sources-current/commits.json`
  - `/home/henrymascot/clawd/output/weekly-claw/week19-sources-current/issues_since.json`

## Metrics in deck
- Commits sampled: `1000`.
- Authors sampled: `159`.
- Top authors: Vincent Koc 470, Shakker 67, joshavant 35, Dallin Romney 30, Josh Lehman 30, Alix-007 22, Peter Steinberger 19, ly-wang19 19, github-actions[bot] 18, Ayaan Zaidi 16.
- Commit mix: fix 612, refactor 146, test 111, chore 47, other 27, feat 22, docs 21, ci 14.
- Changed issues/PRs sampled: `500` (`373` PRs, `127` issues).

## Writing/model route
- Public writing route source: `skills/writing-model-router/SKILL.md`.
- Writing model route used: `citadel-all/pioneer/claude-opus-4-8` via `openclaw infer model run` with `thinking off` because this runtime reports only `off` is supported for that route.
- Writing output receipt: `/home/henrymascot/clawd/output/weekly-claw/week19-writing-opus48.json`.
- Manual assembly by Book was required because the scheduled OpenClaw cron delivered narration without executing tools.

## Deck checks
- Slide count: `14` `section.slide` nodes.
- JPG count: `14` files, `slide-01.jpg` through `slide-14.jpg`.
- Browser export: Playwright Chromium screenshots at `1920x1080` 16:9.
- Fonts/style markers present: `Clash Display`, `Satoshi`, dark SuperAda deck styling.
- Slide 1 starts with `OpenClaw Change log & Dev Experience`.
- Dev Experience slides are exactly three labels: `DX review`, `Community signal`, `Signal map`.
- Final slide is a general weekly summary/close.
- Forbidden Google/internal markers asserted absent: `docs.google.com/presentation`, `presentationId`, `Google Slides`, `This deck captures`, `for Henry`, `as requested`, `Week 14 pattern`, `operator deck`, `talking to me`, `internal`.
- No Google Slides artifact was produced.

## Build / production verification
- Local `npm run build`: passed. Log: `/home/henrymascot/clawd/output/weekly-claw/week19-build.log`.
- Build emitted `/weekly-claw/week19/index.html` and `/weekly-claw/week19/changelog/index.html`.
- Production verification: pending at evidence-write time; see live HTTP checks in final operator report after deploy propagation.

## Cron run receipt / limitation
- Cron job: `weekly-claw-html-deck-generator` / `e4729483-00a1-41e5-8fb0-f714627bc242`.
- Scheduled run on 2026-06-26 failed preflight because `citadel-frontier/pioneer/claude-opus-4-8` was not allowlisted.
- Manual rerun after changing the cron model to `citadel-frontier/citadel/opus48` returned `status: ok` but delivered only pre-tool narration and produced no artifact.
- This evidence file records the manual route-around artifact generation.
