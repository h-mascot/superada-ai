# SuperAda.ai 5/5 Hardening Spec

Date: 2026-07-03
Owner: SuperAda site (Astro SSG, deployed on Vercel)
Goal: Every page, link, button, and feature works; eval scores 5/5 on Design, Performance, Security, Quality.

Local run: `npm run dev` (port 4321). Production check: `npm run build && npx astro preview --port 4322`.
Eval: `node scripts/eval/crawl.mjs http://localhost:4322` must exit 0 (plus the full eval runner, see Mission E).

## Ground rules for all missions

- Do not change the site's voice, content meaning, or visual identity (dark warm theme, Georgia serif headings).
- `npm run build` must pass (it runs the voice + timeline validators).
- Never introduce merge-conflict markers; never commit `.bak*` files.
- After a change, re-run the crawler against the **preview** server (4322), not just dev.

## Mission A — Broken links & assets (Quality)

Verified defects from crawling 255 pages / 341 assets of the production build:

1. **Hero images broken on ~14 blog posts (production!).** `src/layouts/BlogPost.astro` (or the hero rendering path) emits `<img src="/_astro/<name>.<hash>.png">` but the build only outputs `.webp` variants. Example: `/blog/agent-vs-agent-bug/` references `/_astro/agent-vs-agent-bug.D3VS2QHk.png` → 404. Fix by rendering the hero through `astro:assets` `<Image>` / `getImage()` so the emitted URL matches a real file. Affected posts (all 404 the same way): agent-vs-agent-bug, ctrl-testing-pyramid, managing-68-autonomous-crons, the-recursive-agent-problem, your-ai-stack-is-probably-healthy-on-paper, reliability-beats-autonomy-theater, http-200-is-not-operational-truth, agents-need-memory-outside-the-model, your-repo-is-fine-your-deployment-is-lying, your-browser-stack-is-a-production-decision, browser-verification-missing-layer-agent-demos-to-operations, your-agent-stack-doesnt-need-more-autonomy-it-needs-fewer-ghost-bugs, and any other post whose crawl shows a `.png` `_astro` 404.
2. **Missing audio files (5 posts).** Frontmatter `audio:` points at nonexistent files: `/audio/release-manager-turning-commits-into-releases.mp3`, `/audio/2026-03-29-audit-trail-first.mp3`, `/audio/the-night-my-agent-deleted-production.mp3`, `/audio/building-the-world-model.mp3`, `/audio/when-your-agent-crashes-at-3am.mp3`. Fix: remove the `audio:` frontmatter from those 5 posts so the AudioPlayer falls back to browser TTS (do NOT fabricate mp3s).
3. **`/workflows/_workflow-bundle-template` linked from every workflow detail page.** The related/prev-next navigation in `src/pages/workflows/[slug].astro` includes the template entry even though the index filters `isTemplate`. Exclude template entries from all navigation.
4. **Benchmark artifact links 404.** `src/data/benchmark-registry.json` contains relative artifact paths (`memory/model-benchmark-reference.md`, `output/benchmarks/2026-04-12-gemma-enterprise-benchmark/*`, `output/benchmarks/2026-04-25-qwen36-27b-api/*`, and one absolute local path `/home/henrymascot/clawd/output/benchmarks/...`). The model pages render these as links relative to `/benchmarks/models/`, producing 404s. Fix: for artifacts that exist under `public/benchmarks/`, link to the real public path; for artifacts that are private/local-only, render them as non-link text labeled "internal artifact" instead of dead anchors.
5. **`/decks/source.md` 404.** `public/decks/spacex-s1/index.html` links `source.md` relative — the crawler resolves it to `/decks/source.md`. Make the link `/decks/spacex-s1/source.md` (file exists).
6. **Dev-only trailing-slash 404s.** `/decks/*` and `/benchmarks/reports/*` static dirs 404 without `index.html` on the dev server but work in preview. No fix needed, but ensure all internal links to these use the trailing-slash form.

Acceptance: `node scripts/eval/crawl.mjs http://localhost:4322` exits 0 (no broken pages, no broken assets).

## Mission B — Interactive features (Quality + Design)

1. **Subscribe form** (`src/pages/subscribe.astro` + `api/subscribe.js`): must show a clear inline error when `/api/subscribe` is unreachable (dev) and success/failure messages otherwise. Verify empty-submit validation, human/agent toggle, topic checkboxes. Keep the honeypot.
2. **Theme switcher** (BaseHead + Header): light/current/neon must apply on click, persist via localStorage across reloads, and not flash-of-wrong-theme on load.
3. **Workflows filter chips** (`src/pages/workflows/index.astro`): each category chip filters cards correctly; "All" restores.
4. **AudioPlayer** (`src/components/AudioPlayer.astro`): mp3 mode plays/pauses/speeds; TTS fallback works when no audio file; no console errors either way.
5. **Copy-to-clipboard buttons** on skills/plugins detail pages must give visual feedback and not throw.
6. Any defects reported by the interactive browser test pass (appended below when available) must be fixed.

Acceptance: manual browser verification of each; zero console errors on home, blog post, workflows, skills detail, subscribe.

## Mission C — Performance 10x

1. All content images served as optimized webp/avif with explicit width/height (no CLS), `loading="lazy"` below the fold, `fetchpriority="high"` on hero.
2. No render-blocking third-party scripts; umami script stays `defer`.
3. Add `preconnect` hints for analytics origin.
4. Blog listing pages should not ship unnecessary JS.
5. Target: Lighthouse Performance ≥ 95 on home, blog index, one blog post, one skill page (measure via `npx lighthouse` CLI against the preview server, headless).

Acceptance: Lighthouse perf ≥ 95 on the 4 sampled pages.

## Mission D — Security 10x

1. Add security headers via `vercel.json` (create it): `Content-Security-Policy` (allow self + analytics.henrymascot.com script + data: images; no unsafe-eval), `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy` minimal, `X-Frame-Options: DENY` (or CSP frame-ancestors), `Strict-Transport-Security`. Be careful: the site uses inline scripts/styles heavily — use CSP that doesn't break them (script hashes or 'unsafe-inline' documented as accepted risk; do not break the theme switcher).
2. `api/subscribe.js`: add basic rate limiting guard (per-IP in-memory best effort acceptable on Vercel) and cap body size; keep CORS locked to https://superada.ai.
3. `middleware.ts` mods basic-auth: keep as is (hash compare is fine).
4. All external links with `target="_blank"` must have `rel="noopener noreferrer"`.
5. No secrets in repo (verify with a grep for token/key patterns).

Acceptance: headers present in `vercel.json`; grep for `target="_blank"` without noopener returns nothing; secrets scan clean.

**CSP accepted risk (2026-07-03):** `script-src` and `style-src` include `'unsafe-inline'` because the site relies on inline theme-switcher scripts and pervasive inline/component styles. Analytics is limited to `https://analytics.henrymascot.com`. `'unsafe-eval'` is intentionally omitted.

## Mission E — Eval harness (5/5 scoring)

Create `scripts/eval/run-eval.mjs` that outputs a scorecard (0–5 per category) and exits non-zero unless all are 5:

- **Quality (5/5):** crawler exits 0; `npm run build` passes; no `.bak` files in `src/pages`; no conflict markers anywhere.
- **Design (5/5):** every HTML page in `dist` has: title, meta description, canonical, og:image that resolves 200, exactly one h1, viewport meta; all img tags have alt attributes (empty alt allowed for decorative).
- **Performance (5/5):** Lighthouse perf ≥ 95 on the 4 sample pages (allow env override to skip in CI-less runs but default on); total HTML size of homepage < 100KB.
- **Security (5/5):** vercel.json headers present (CSP, HSTS, nosniff, referrer-policy, frame protection); no `target="_blank"` without noopener in dist; no obvious secrets (regex scan of repo excluding node_modules/dist).

Also clean up: delete `src/pages/blog/index.astro.bak2` through `.bak6`.

Acceptance: `node scripts/eval/run-eval.mjs` prints 5/5 for all four categories and exits 0.
