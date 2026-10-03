# Humanity 3026

Interactive story (Vite + TypeScript, no framework). `STORY.md` is the content; it is read at build time.

Served at https://superada.ai/resources/humanity-3026/ (shortlink: https://superada.ai/3026, see `vercel.json`).

The built output is committed to `public/resources/humanity-3026/` (same convention as the other static pages under `public/resources/`), so the Astro/Vercel build needs no extra step. After changing anything here, rebuild and commit the output:

```sh
cd apps/humanity-3026
npm ci
npm run build:site   # tsc --noEmit && vite build --base=/resources/humanity-3026/ --outDir ../../public/resources/humanity-3026
```
