# Weekly Claw Week 22 — evidence packet

- **Edition:** Week 22
- **Reporting window:** `2026-10-02T06:21:26Z` through `2026-10-09T06:21:26Z`
- **GitHub collection:** `2026-10-09T06:27:13Z`
- **Local validation completed:** `2026-10-09T06:48:41Z`
- **Canonical deck:** `public/weekly-claw/week22/deck.html`
- **Planned public route:** `https://weeklyclaw.ai/w22/changelog/`

## Sources

Primary read-only sources:

1. GitHub releases API: <https://api.github.com/repos/openclaw/openclaw/releases?per_page=100>
2. GitHub commits API, fully paged with `since=2026-10-02T06:21:26Z`, `until=2026-10-09T06:21:26Z`, and `per_page=100`.
3. Official OpenClaw release notes and changelogs:
   - <https://github.com/openclaw/openclaw/releases/tag/v2026.8.35>
   - <https://github.com/openclaw/openclaw/releases/tag/v2026.9.8>
   - <https://github.com/openclaw/openclaw/releases/tag/v2026.10.1-beta.1>
   - <https://github.com/openclaw/openclaw/releases/tag/v2026.10.1-beta.2>
   - <https://github.com/openclaw/openclaw/releases/tag/v2026.9.9>
   - <https://raw.githubusercontent.com/openclaw/openclaw/main/CHANGELOG/2026.9.8.md>
   - <https://raw.githubusercontent.com/openclaw/openclaw/main/CHANGELOG/2026.9.9.md>
4. Answer Overflow community identity: <https://www.answeroverflow.com/c/1456350064065904867>
5. WeeklyClaw Discord rotating route: <https://weeklyclaw.ai/discord>

## Verified release window

| Tag | Channel | Published UTC | Evidence |
|---|---|---:|---|
| `v2026.8.35` | stable, gateway-only extended stable | 2026-10-02 14:06 | GitHub release and official notes |
| `v2026.9.8` | stable | 2026-10-03 03:21 | GitHub release and official changelog |
| `v2026.10.1-beta.1` | beta | 2026-10-05 19:47 | GitHub release notes |
| `v2026.10.1-beta.2` | beta hotfix | 2026-10-08 00:41 | GitHub release notes |
| `v2026.9.9` | stable | 2026-10-08 10:23 | GitHub release and official changelog |

Count: **five releases, three stable and two beta**.

`v2026.9.9` source definitions differ and are not merged into one number: its official changelog says **112 PRs, 69 direct commits, 91 contributors**, while the GitHub release shell says **185 commits, 112 PRs, 92 contributors**.

## Commit and repository signal

The commits API returned 29 full pages of 100 and a final page of 35. The traversal ended naturally, so the count is not capped.

- **2,935 commits**
- **152 unique commit authors**
- Actual returned author-date span: `2026-10-02T06:27:49Z` through `2026-10-09T06:21:25Z`
- Conventional first-line commit types: `fix 1,424`, `refactor 458`, `test 423`, `perf 316`, `chore 117`, `feat 80`, `docs 44`
- Top author identities: `steipete 1,942`, `RomneyDa 139`, `vincentkoc 137`, `shakkernerd 106`, `roboclaw-bot 88`, `obviyus 72`, `openclaw-mantis[bot] 55`
- Repository snapshot: `391,505` stars, `82,300` forks, `9,351` open issues and PRs in GitHub's combined field, `1,715` subscribers

## Community collection

Community activity is **not collected**, not zero.

- Beeper's complete chat crawl returned 4,294 chats and 15 Discord chats. None could be verified as OpenClaw server channels, so no Discord message was counted or quoted.
- Answer Overflow confirmed the OpenClaw community identity, but the community page and `robots.txt` both returned HTTP `429`; browser access showed a Vercel Security Checkpoint. No current-window post count or topic claim is made.

## Editorial route

The required `writing-model-router`, `openclaw-discord-ops`, and `openclaw-slide-style` skills were unavailable in this runtime. Public copy was not drafted on the session's default model first.

- First direct Claude CLI route failed before producing copy because its OAuth session had expired.
- Successful non-default route: `zai/glm-5.3` through Citadel, one-shot, with the no-AI-slop contract embedded in the prompt.
- Copy artifact SHA-256: `01c6384cc9309d7a1c72148e75e4c9136e05c386044adf2b39e0b46e2b512a1f`
- Result: 12-slide structured copy, then fact-preserving HTML implementation and deterministic public-copy scan.

## Deck and export

- 12 `section.slide` elements
- 12 JPG exports, `slide-01.jpg` through `slide-12.jpg`
- Every JPG is `1920 × 1080`
- Slide 12 contains the WeeklyClaw Discord QR and links only to the rotating route `https://weeklyclaw.ai/discord`
- Canonical deck SHA-256: `492c0318433ff19eb6b2fa500a78abaf23e504cbc7cca40b34d869307f48fdc0`
- Slide 1 SHA-256: `fd7e27d4f6ca9c2e7c0fa22e0dbfc92074ba037bec32950e88b6462705f507bc`
- Slide 12 SHA-256: `b8b880fd1918ef6e2dc8aa6d350ed83a7095664f6ff34f6ae56ff233086f9a04`
- QR SHA-256: `657cad2ca0d4130cae27d07076f491b6e0f95ad681c7bdd54e89a80453732975`
- Canonical and mirror copies match for all 12 JPGs plus the QR asset.

## Local gates

| Gate | Result |
|---|---|
| SuperAda `npm run build` | pass; 341 pages built |
| WeeklyClaw.ai `npm run build` | pass; static validator passed |
| SuperAda voice validator | pass |
| SuperAda timeline validator | pass, 16 milestones |
| Slide/JPG count | pass, 12 = 12 in both repositories |
| Fonts | pass, Clash Display and Satoshi markers present |
| Required title and route markers | pass |
| Exactly three Developer Experience slides | pass, slides 9–11 |
| Forbidden public phrase and no-AI-slop word scan | pass, 34 phrases checked |
| Local path / `file://` exposure scan | pass |
| Visual contact-sheet review | pass; desktop slides showed no clipping, overlap, broken image, or missing QR |
| Post-deploy mobile visual review | found and fixed mascot/footer overlap by hiding the decorative mascot below 900 px; fresh 320/768 Chromium checks require `display:none` |
| `git diff --check` in both repositories | pass |

Responsive Chromium checks ran against every slide:

| Viewport | Required active-slide position | Horizontal overflow | Result |
|---|---|---:|---|
| 320 × 800 | relative | none | pass |
| 768 × 1024 | relative | none | pass |
| 1024 × 768 | absolute | none | pass |
| 1440 × 900 | absolute | none | pass |

At `1920 × 1080`, every slide had a maximum measured scroll height of 1080 pixels, so no desktop content was clipped by the fixed slide viewport.

## Discord route check

At validation time, `https://weeklyclaw.ai/discord` returned HTTP `307` without following redirects and pointed to the active invite. Discord API validation returned HTTP `200` for guild ID `1532061180569587975`, guild name `Weeklyclaw`. The deck and QR use the rotating route, not the expiring invite target.

## Limitations

- Repository popularity and open-count values are a point-in-time snapshot.
- Commit type counts classify conventional prefixes on commit subject lines; they are not a semantic audit of every change.
- Author counts include bot identities where GitHub attributed commits to bots.
- Discord and Answer Overflow current-window activity remains unknown because the configured read lanes could not verify it.
- No Google Slides artifact was created or claimed.
