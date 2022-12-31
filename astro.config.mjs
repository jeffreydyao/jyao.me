import { defineConfig } from "astro/config";
import blulocoTheme from "./src/bluloco-light.json";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import image from "@astrojs/image";

// Set default layout for blog posts
import astroLayouts from "astro-layouts";

const layoutOptions = {
  "pages/blog/*.md": "/src/layouts/BlogPost.astro",
};

// https://astro.build/config
export default defineConfig({
  site: "https://jyao.me/",
  markdown: {
    remarkPlugins: [[astroLayouts, layoutOptions]],
    shikiConfig: {
      theme: blulocoTheme,
    },
  },
  integrations: [
    tailwind({
      // https://docs.astro.build/en/guides/integrations-guide/tailwind/#configuring-the-integration
      // Import custom base.css
      config: { applyBaseStyles: false },
    }),
    image(
      // https://docs.astro.build/en/guides/integrations-guide/image/#installing-sharp-optional
      // Use sharp for faster builds
      {
        serviceEntryPoint: "@astrojs/image/sharp",
      }
    ),
  ],
});
