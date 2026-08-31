# Weekly Claw Week 21 source packet

## Edition
- Edition: Week 21
- Reporting window: 2026-08-14 00:00 UTC through 2026-08-21 23:59 UTC
- Public deck target: 10–14 slides, preferably 12
- Current stable npm line during the window: `openclaw@2026.7.1-2` (published 2026-08-04, outside this week)
- Current extended-stable line during the window: `v2026.6.34` (published 2026-08-08, outside this week)
- Release published inside the window: `v2026.8.1-beta.2` on 2026-08-15
- Stable releases published inside the window: none

## GitHub pulse
- Source: GitHub REST API, `openclaw/openclaw`, commits from 2026-08-14 through 2026-08-21
- Commits: 2,193
- Distinct authors: 89
- Top authors: steipete (1,679), vyctorbrzezowski (64), RomneyDa (46), clawsweeper (45), obviyus (41), joshavant (32), fuller-stack-dev (32), jalehman (23), vincentkoc (23), Patrick-Erichsen (21)

## v2026.8.1-beta.2, primary release evidence
Published 2026-08-15. GitHub release: https://github.com/openclaw/openclaw/releases/tag/v2026.8.1-beta.2

Verified highlights from the release body:
- Secret egress host binding ties shared-store secrets to exact HTTPS destination hosts and fails closed before plaintext egress.
- GPT-5.6 Ultra support adds Sol, Terra, and Luna across OpenClaw and Codex engines, with atomic runtime/model/thinking switching through `/model` and fallback.
- Shared channel-plugin ingress monitors add durable admission, polling, pruning, claim identity validation, adoption handoff, and shutdown lifecycle.
- SQLite snapshot commands: `openclaw backup sqlite create|list|verify|restore`, with verified global and per-agent artifacts and fresh-target-only restore.
- Named macOS app profiles isolate state, preferences, Keychain, Gateway services, and duplicate-instance ownership.
- Arbitrary executable plugin sources require explicit `--force`; trusted ClawHub/bundled/official/tracked update flows remain low-friction.
- Control UI update recovery waits through gateway restart and reloads when the gateway responds.
- Browser extension relay answers `Target.getBrowserContexts`, serves DevTools-style `/json/list`, and adds `openclaw browser extension cdp` for external clients.
- Local-model setup surfaces Ollama, llama.cpp, and LM Studio, retries unavailable LM Studio services, and verifies the exact prepared model.
- First-run setup continues verified model setup into Custodian and makes channels optional.
- Dashboard MCP Apps can be pinned as living widgets with lease renewal and revision-bound grants.
- External supervision adds `OPENCLAW_SUPERVISOR_MODE=external` and blocks native service mutation/self-update under external lifecycle ownership.
- Release verification note: packaged Telegram, Docker assets, clean install/update, plugin runtime checks, targeted Docker lanes, and an isolated live model turn passed. Full Release Validation still failed because an unbound context-engine session could fall back to the default agent and release tooling/test fixtures also failed. The release says not to promote this beta to stable without a fixed successor and green full validation.

## Developer-experience signal
Answer Overflow is public historical Discord search, not live truth.
- Thread 1536851864107225228: after updating to `2026.8.1-beta.1`, four official plugins remained on `2026.7.2-beta.7`; gateway startup failed until plugins and service state were repaired.
- Thread 1536505969872339098: a gateway service installed by `2026.7.2-beta.7` remained while the CLI moved to `2026.8.1-beta.1`, producing a service/config mismatch.
- Thread 1525568346765000804: an exact beta plugin install returned npm `ETARGET` because `@openclaw/codex@2026.8.1-beta.1` was not published.
- Thread 1538455240578310214: a user reported cron blocking on `2026.8.1-beta.2`; only the version marker was available in the indexed excerpt, so do not infer a root cause.
- Thread 1539736051453796432: community support confirmed stable remained `2026.7.1-2` while beta was `2026.8.1-beta.2` on 2026-08-19.
- One-line DX summary: beta operators gained stronger backups, setup, and delivery primitives, but upgrade recovery still concentrates around core/plugin/service version alignment and a beta whose own full validation was not green.

## Access limitation
The installed `openclaw-discord-ops` package exposes no runnable `scripts/openclaw-discord-readonly.mjs` in this environment, so live read-only Discord collection was unavailable. Answer Overflow supplied public-history signal. Do not imply live Discord coverage.

## Copy rules
- Slide 1 starts exactly: `OpenClaw Change log & Dev Experience`.
- Public-facing copy only.
- Themes, not one slide per release.
- Exactly three DX slides titled `DX review`, `Community signal`, `Signal map`.
- Final slide is a general weekly close.
- Use precise facts, plain builder language, and no hype.
- No em dashes.
- Forbidden phrases: `This deck captures`, `for Henry`, `as requested`, `Week 14 pattern`, `operator deck`, `talking to me`, `internal`, `Google Slides`.
- Do not claim a stable release shipped inside the window. Clearly label beta versus stable.
- No fabricated stats, claims, links, community quotes, or release facts.
- Do not publish, send, or mutate external surfaces.
