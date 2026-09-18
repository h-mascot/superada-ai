# Weekly Claw Week 21 — verified facts packet (2026-09-11 → 2026-09-18, refreshed 2026-09-18)

Collected 2026-09-18T06:0x–06:5xZ. Sources: GitHub REST API (direct, unauthenticated), docs.openclaw.ai release pages, prior packet files in `week21-sources-current/`. Discord + AnswerOverflow lanes BLOCKED this cycle (see Blockers). Nothing invented; interpretation is labeled.

## Release window (Sep 11 → Sep 18 UTC)
Two stable releases in window — both verified via direct GitHub API `releases?per_page=10` pull 2026-09-18T06:4xZ (prerelease=false both):

- **OpenClaw v2026.9.4** — published 2026-09-11T03:46:22Z. Scale: 1,558 pull requests, 20 direct commits, 294 contributors (official release notes). Themes (from docs.openclaw.ai/releases/2026.9.4): plugin and skill discovery; visible skill learning (turn past conversations into reusable skills through a steerable chat); cloud-worker controls (cloud OS + snapshot controls); GPT Image 2.5 support; native Codex subagent transcripts; terminal questions; Node-recovery installation path (private Node.js copy, Gateway service Node repair via `openclaw gateway install`); Docker/Homebrew install fixes; update-repair improvements (`openclaw update repair` clears stuck updates, abandoned-run recovery).
- **OpenClaw v2026.7.33** — published 2026-09-18T05:33:23Z. The July 2026 Extended Stable release covering Gateway, official npm plugins, and matching Docker images. Highlights from official body: security/credential-safety hardening (command parsing, browser origin checks, plugin Git installs, service credentials, webhook logging); message/session integrity across retries, hooks, recovery, channel transitions; Gateway reliability (close failed HTTP/Responses streams, bound expensive reads); channel delivery fixes across Discord/Matrix/Telegram/Slack/WhatsApp/LINE/Feishu/Zalo/meetings; provider/media robustness; 126 merged PRs in the audited v2026.7.1-2..4262532 record.

Out-of-window stables (context only): v2026.6.35 (Sep 10), v2026.9.3 (Sep 8), v2026.9.2 (Sep 5), v2026.9.1 (Sep 3).

## Repo throughput (commits collected Sep 12–18; search totals full window)
- Commits returned: 3,000 (collection-capped at 30 pages × 100 — GitHub API page cap; label "capped"). Unique commit authors in cap: 120. Actual commit span in collection: 2026-09-12T21:53:31Z → 2026-09-18T06:08:45Z.
- Merged PRs (search total, Sep 11–19 window): 4,176. Issues created: 1,658. Stars: 390,026. Forks: 81,998. Open issues: 7,712.
- Top commit authors (capped collection): steipete 1,768; vincentkoc 357; RomneyDa 207; roboclaw-bot 98; obviyus 92; shakkernerd 71; vyctorbrzezowski 46; openclaw-mantis[bot] 38; Patrick-Erichsen 33; fuller-stack-dev 29; VACInc 18; jalehman 16; Alix-007 15; SunnyShu0925 14; zhangguiping-xydt 12.
- Top commit scopes: fix 376; fix(ui) 226; improve 112; refactor 91; test 78; fix(test) 71; fix(gateway) 63; fix(update) 63; fix(ci) 55; fix(agents) 54.

## Signal map thesis (BRK245 carry-forward framing)
Week's shape: **the release machinery itself shipped**. v2026.9.4's headline is plugins/skills discovery + visible skill learning; v2026.7.33's existence is a proof artifact — an audited 126-PR Extended Stable backport with its own release tooling (Docker channel classifier, promoter, verification policy) so `extended-stable*` aliases move only under verified policy. Both releases lean into "build the thing that builds the thing": discovery makes agent-built skills findable; visible learning turns conversation history into reusable, steerable skill material; extended-stable tooling makes agent-heavy merge volume (4,176 merged PRs/week) shippable as a stable line. Interpretation, grounded in the two release bodies.

## Blockers (unchanged, documented)
- Discord public reads: only available token (`clawd-legacy/discord.token`, bot SuperAda) lacks channel-read scopes — HTTP 403 Missing Access on general, clawtributors, users-helping-users, browser-automation, security. The documented `discord-maintainer-reader-token.txt` does not exist on this host.
- Answer Overflow: HTTP 429 / Vercel Security Checkpoint on every attempt this cycle.
- Therefore no Discord/AO community-signal facts this edition. Deck community slide must say "not collected" rather than invent.

## House style
12 slides, Week 20 chrome: s1 title; s2 release window; s3 raw signal; s4–s8 five themes; s9 DX review; s10 community signal; s11 signal map; s12 close. Clash Display + Satoshi, dark navy, coral+cyan, lobster SVG, existing CSS classes only. Facts first, dry opinion second. Presenter close on s12 readable verbatim. Public-facing copy only.
