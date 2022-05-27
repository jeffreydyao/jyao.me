import { defineConfig } from "astro/config"
import sitemap from "@astrojs/sitemap"
import tailwind from "@astrojs/tailwind"
import solid from "@astrojs/solid-js"
import { astroImageTools } from "astro-imagetools"

// https://astro.build/config
export default defineConfig({
  site: "https://jyao.me",
  integrations: [
    sitemap(),
    tailwind({
      // Use custom base.css to apply windy-radix-palette directive
      config: {
        applyBaseStyles: false
      }
    }),
    solid(),
    astroImageTools()
  ]
})
