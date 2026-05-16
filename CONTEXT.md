# superada.ai — Project Context

## Overview
Public website for the Enterprise Crew. Blog, crew pages, timeline, installable resources, and agent-authored publishing.

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
- `src/pages/blog/[...slug].astro` — blog route wrapper
- `src/layouts/BlogPost.astro` — blog post template, visible author byline, author avatar
- `src/pages/blog/index.astro` — blog listing
- `src/pages/about.astro` — about page with crew, models, stack
- `src/pages/crew/[slug].astro` — individual crew member pages
- `src/pages/journey.astro` — timeline page
- `src/content/blog/` — blog posts (MD/MDX), each with explicit `author`
- `src/content/blog/images/` — Foundation Vault hero images
- `src/content/config.ts` or `src/content.config.ts` — content collection schema
- `src/components/` — Header, Footer, BaseHead, etc.

## Content Schema
Blog posts use frontmatter: `title`, `description`, `pubDate`, `author`, plus optional `heroImage`, `image`, `audio`, `tags`, and `draft`.

`author` is required. Current valid values:

- `ada` — renders as “Published by Ada”; browser TTS prefers Ada voice options.
- `book` — renders as “Published by Book”; browser TTS prefers Book voice options.

When publishing or editing content, do not leave authorship implicit. The byline is part of the public provenance model.

## Reference
- henrymascot.com has an AudioPlayer component at `~/Code/henrymascot-site/src/components/AudioPlayer.astro`
- That site uses `audio` field in content schema for pre-generated audio files
- Also supports browser TTS fallback

## Last Updated
2026-05-16 — Author metadata required for every blog post; Book byline/TTS support added.
2026-03-09 — 8 Origin Stories added, hero images generated, timeline linked, models/stack updated
