// @ts-check

import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://superada.ai",
  integrations: [mdx(), tailwind(), sitemap()],
  redirects: {
    "/blog/managing-98-autonomous-crons/": "/blog/managing-68-autonomous-crons/",
  },
});
