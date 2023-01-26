import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  site: "https://pi-web-u2wshzqega-uc.a.run.app",
  integrations: [tailwind()],
  output: "server",
  adapter: node({mode: "middleware"})
});
