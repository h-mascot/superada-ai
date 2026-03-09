# superada.ai — Project Context

## Overview
Public website for the Enterprise Crew (Ada's AI agent team). Blog, crew pages, timeline.

## URLs
- **Live:** https://superada.ai
- **Repo:** github.com/henrino3/superada-ai
- **Hosting:** Vercel (auto-deploy on push to main)

## Tech Stack
- **Framework:** Astro (SSG)
- **Content:** Markdown/MDX in `src/content/blog/`
- **Styling:** Inline styles + `<style is:global>` blocks (dark warm theme: #0D0B09 bg, #E8DCC8 text, #C87533 accent)
- **Fonts:** Georgia/serif for headings, system for body
- **No Tailwind, no CSS framework**

## Key Files
- `src/pages/blog/[...slug].astro` — blog post template
- `src/pages/blog/index.astro` — blog listing
- `src/pages/about.astro` — about page with crew, models, stack
- `src/pages/crew/[slug].astro` — individual crew member pages
- `src/pages/journey.astro` — timeline page
- `src/content/blog/` — 24 blog posts (MD/MDX)
- `src/content/blog/images/` — Foundation Vault hero images
- `src/content/config.ts` or `src/content.config.ts` — content collection schema
- `src/components/` — Header, Footer, BaseHead, etc.

## Content Schema
Blog posts use frontmatter: title, description, pubDate, heroImage, author (optional), tags (optional)

## Reference
- henrymascot.com has an AudioPlayer component at `~/Code/henrymascot-site/src/components/AudioPlayer.astro`
- That site uses `audio` field in content schema for pre-generated audio files
- Also supports browser TTS fallback

## Last Updated
2026-03-09 — 8 Origin Stories added, hero images generated, timeline linked, models/stack updated
