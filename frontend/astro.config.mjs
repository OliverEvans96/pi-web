import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import node from "@astrojs/node";
import * as dotenv from 'dotenv';
dotenv.config()

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL,
  integrations: [tailwind()],
  output: "server",
  adapter: node({mode: "middleware"})
});
