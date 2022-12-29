import { defineConfig } from 'astro/config';

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), image(
    // https://docs.astro.build/en/guides/integrations-guide/image/#installing-sharp-optional
    {
      serviceEntryPoint: '@astrojs/image/sharp'
    }
  )]
});