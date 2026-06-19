# Weekly Claw Week 18 Evidence — 2026-06-19

## Result
- Live route: `https://superada.ai/weekly-claw/week18/`
- Live deck: `https://superada.ai/weekly-claw/week18/deck.html`
- Final slide asset: `https://superada.ai/weekly-claw/week18/slide-14.jpg`
- Artifact path: `/home/henrymascot/clawd/worktrees/superada-ai-tilt-20260522161817/public/weekly-claw/week18`.
- Commit: `PENDING` until committed/pushed.

## Source/reference reads
- `output/weekly-claw/context.md`
- `skills/writing-model-router/SKILL.md`
- `skills/openclaw-discord-ops/SKILL.md`
- `skills/openclaw-slide-style/SKILL.md`
- Prior deck reference: `public/weekly-claw/week17/deck.html`
- GitHub releases/commits/issues API for OpenClaw in the 2026-06-12 → 2026-06-19 window.
- GLM5.2 companion subagent briefing: `output/weekly-claw/subagents/20260619T175902Z-glm52.json`.

## Source signal sampled
- Repository: `openclaw/openclaw`.
- Stable releases captured:
  - `v2026.6.8` — published `2026-06-16T16:32:26Z`; `openclaw 2026.6.8`; source `https://github.com/openclaw/openclaw/releases/tag/v2026.6.8`.
  - `v2026.6.6` — published `2026-06-12T11:04:42Z`; `openclaw 2026.6.6`; source `https://github.com/openclaw/openclaw/releases/tag/v2026.6.6`.
- Beta signal sampled: `v2026.6.9-beta.1` for next-line Telegram/recovery/Codex/provider/client work.
- Source JSON: `/home/henrymascot/clawd/output/weekly-claw/week18-sources-current/summary.json`.
- Raw captures:
  - `/home/henrymascot/clawd/output/weekly-claw/week18-sources-current/releases.json`
  - `/home/henrymascot/clawd/output/weekly-claw/week18-sources-current/commits.json`
  - `/home/henrymascot/clawd/output/weekly-claw/week18-sources-current/issues_since.json`

## Metrics in deck
- Commits sampled: `1000`.
- Authors sampled: `69`.
- Top authors: Vincent Koc `818`, github-actions[bot] `18`, Josh Lehman `17`, Shakker `17`, joshavant `13`, Dallin Romney `9`, Peter Steinberger `7`, Alex Knight `7`, Alix-007 `6`, Peter Lee `5`.
- Commit mix: fix `459`, refactor `367`, test `81`, chore `29`, other `25`, feat `24`, docs `10`, ci `5`.
- Changed issues/PRs sampled: `500` (`395` PRs, `105` issues).

## Writing/model route
- Cron primary model updated to `citadel-all/citadel/opus48` after `citadel-all/pioneer/claude-opus-4-8` produced short/blocked tool runs.
- Public writing route source: `skills/writing-model-router/SKILL.md`; intended route remains Pioneer Opus 4.8 first.
- GLM5.2 companion/subagent route succeeded: `citadel-daily/zai/glm-5.2`.
- Manual assembly by Book was required because OpenClaw cron/agent runs repeatedly stopped after narration instead of executing tools.

## Deck checks
- Slide count: `14` `section` nodes.
- JPG count: `14` files, `slide-01.jpg` through `slide-14.jpg`.
- Browser export: Chromium screenshots at `1920x1080` 16:9.
- Fonts/style markers present: `Clash Display`, `Satoshi`, dark SuperAda deck styling, lobster motif inherited from Week 17.
- Slide 1 starts with `OpenClaw Change log & Dev Experience`.
- Dev Experience slides are exactly three labels: `DX review`, `Community signal`, `Signal map`.
- Final slide is a general weekly summary/close.
- Forbidden Google/internal markers asserted absent: `docs.google.com/presentation`, `presentationId`, `Google Slides URL`, `This deck captures`, `for Henry`, `as requested`, `Week 14 pattern`, `operator deck`, `talking to me`, `internal`.
- No Google Slides artifact was produced.

## Build / production verification
- Local `npm run build`: passed. Log: `/home/henrymascot/clawd/output/weekly-claw/week18-build.log`.
- Build emitted `/weekly-claw/week18/index.html`.
- Production verification: pending until commit/push deploys.

## Cron run receipt / limitation
- Cron job: `weekly-claw-html-deck-generator` / `e4729483-00a1-41e5-8fb0-f714627bc242`.
- Schedule remains Fridays `06:20 UTC` (`20 6 * * 5`).
- Manual cron run on 2026-06-19 used `citadel-all/citadel/opus48` and delivered to Discord, but stopped after a narrated pre-tool message; no deck artifact was created by the cron itself.
- This evidence file records the manual route-around artifact generation.
