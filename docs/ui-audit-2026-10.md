# SuperAda UI audit — October 2026

Scope: every URL in the live sitemap (303 pages) loaded in Chrome at **1440×900 desktop** and **390×844 mobile** (iPhone UA, touch, 2× DPR). Each load recorded HTTP status, console errors, failed requests, horizontal overflow, header/footer presence, `h1` count, broken images, text under 11px and (mobile) tap targets under 32px. Representative pages from every template were also captured full-length and reviewed by eye.

The audit scripts live outside the repo; the numbers below are from the live site before this change and from a local build after it.

## Findings

| Area | Before (live) | After (this branch) |
| --- | --- | --- |
| Mobile pages with horizontal scroll | 32 | 0 (desktop: 0 before and after) |
| Mobile nav text size | 9px, 6 links in a 5-col grid ("Timeline" wrapped to its own row) | Floating tab bar + More sheet, 11px labels, 64px targets |
| Mobile tap targets under 32px (all pages) | 5,040 | 473, mostly short inline text links in prose |
| Mobile text runs under 11px (all pages) | 2,247 | 597, mostly decorative `aria-hidden` scene labels |
| Weekly Claw editions rendering their deck | 0 of 23 (blank grey frame) | All, after the CSP change deploys |
| Pages with duplicate `h1` | 10 | 0 |
| Weekly Claw index | Title off-screen, no site chrome, `week18g`/`week18o` missing | Site chrome, cover-image cards, all editions |
| Page-to-page navigation | Hard cut | View transitions (desktop fade/lift; mobile push/pop/tab) |
| Motion on inner pages | Card hover only | Scroll reveals, spotlight, ambient light, nav indicator, condensing header, reading progress |
| Search | Ship Log title filter only | Site-wide palette (⌘K / Ctrl+K / `/`) |
| Install as app | No manifest, no `theme-color` | Manifest, per-theme `theme-color`, safe-area insets |

### Bugs

1. **Weekly Claw decks blocked by our own CSP.** `vercel.json` sent `frame-ancestors 'none'` and `X-Frame-Options: DENY` on every route, so `/weekly-claw/<week>/` could not iframe its own `deck.html`. Changed to `'self'` / `SAMEORIGIN` (still blocks other origins).
2. **Mobile header layout.** Six links were forced into `repeat(5, 1fr)` at ≤760px, so the sixth wrapped under the bar. Header took ~100px of a 844px screen.
3. **Horizontal overflow on phones**, by cause:
   - Inline `grid-template-columns: repeat(3, 1fr)` / `1fr 1fr` on benchmark model pages (13 pages).
   - Markdown tables and the `w-[120%]` table wrapper in posts (5 posts).
   - Long unbroken URLs and inline code in posts and skills (6 pages).
   - `/developers`: implicit grid whose `<article>`s couldn't shrink below their `<pre>` blocks (page was 953px wide).
4. **Weekly Claw index**: `display:flex; align-items:center; height:100%` on `body` with more content than fits pushed the title above the viewport, and `/week\d+/` skipped lettered editions.
5. **Duplicate titles**: 10 MDX posts started with `# {title}`, which the layout already renders.

### UX and visual gaps

- Inner pages (Ship Log, Timeline, Resources, Docs) were static and visually flat next to the cinematic home and crew pages.
- Resource atlas on phones put a 14-item vertical sidebar above the content; users had to scroll a full screen before seeing anything.
- Tap targets: theme switcher segments were 32×28, filter pills ~30px tall, audio speed buttons ~24px.
- The theme switcher took header space on phones.

## What shipped in this branch

Shared pieces every page already uses (`BaseHead`, `Header`, `Footer`, `global.css`) carry the upgrade, so no per-page rewrites were needed:

- `src/styles/experience.css` — transitions, motion, mobile chrome, search palette, overflow guards.
- `src/scripts/experience.ts` — header state, nav indicator, reveals, spotlight, ambient light, sheet, search.
- `src/data/siteNav.ts` — single source for desktop nav, mobile tabs, More sheet and search pages.
- `src/pages/search-index.json.ts` — static search index (pages, crew, posts, skills, plugins, workflows).
- `public/manifest.webmanifest`.

Everything respects `prefers-reduced-motion`; reveals only hide content below the fold and only once JS is running.

### View transition reliability

In a headed Chrome, only about half of navigations animated at first. Two things caused Chrome to skip the incoming transition:

- Loading the experience code as a deferred module script (even an empty module reproduced it).
- Pages whose first frame was painted mid-parse, for example at an inline `<script>` in the page body, before the footer and experience script ran.

The script is now inlined synchronously at the end of `<body>` (`Footer.astro`), and `BaseHead` holds first render with `<link rel="expect" href="#xp-ready" blocking="render">` until it has run. Across four page pairs, 30 navigations each, success went from roughly 50% to 120 of 121. The 20 MB changelog page opts out so it still paints progressively.

## Recommended next steps (not in this branch)

1. **`/openclaw-changelog` is a 20.7 MB HTML document with ~192k elements** (1.5 MB compressed). It is by far the heaviest page and will be slow to parse on phones. Paginate by release or load release sections from JSON on demand.
2. **`/resources/agent-workflow-atlas`** is ~103,000px tall on mobile. Collapse cards into an expandable list or paginate.
3. **Mobile downloads both video variants' metadata** on scroll-world pages (`arrival-desktop.mp4` and `arrival-portrait.mp4`). Use `<source media>` or inject only the matching `<video>`.
4. **`/benchmarks/` (Model Benchy)** is a standalone app with its own design system and no site chrome. Consider wrapping it in the shared header/tab bar, or at least matching its type and colour tokens.
5. **Weekly Claw deck pages** are intentionally full-screen, but on phones the deck is a 16:9 frame in a portrait viewport. A vertical "story" mode (one slide per screen, swipe) would feel native.
6. Decorative scene labels on the home and scroll-world stages are 7–8px. They are `aria-hidden`, but bumping to 9–10px would help legibility on small phones.
