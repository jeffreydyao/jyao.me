import { defineConfig } from 'astro/config';
import sitemap from "@astrojs/sitemap";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [sitemap(), tailwind({
    // Use custom base.css to apply windy-radix-palette directive
    config: {applyBaseStyles: false}
  })]
});