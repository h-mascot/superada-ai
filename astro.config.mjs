// @ts-check

import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://superada.ai",
  integrations: [mdx(), tailwind(), sitemap({
    filter: (page) => !page.includes('/workshop-feedback'),
  })],
  redirects: {
    "/week18/changelog/": "/weekly-claw/week18/changelog/",
    "/week18g/changelog/": "/weekly-claw/week18g/changelog/",
    "/week18o/changelog/": "/weekly-claw/week18o/changelog/",
    "/blog/managing-98-autonomous-crons/": "/blog/managing-68-autonomous-crons/",
    "/workflows/geordi/": "/skills/geordi/",
    "/skills/geordi-build-pipeline/": "/skills/geordi/",
    "/skills/geordi-setup/": "/skills/geordi/",
  },
});
