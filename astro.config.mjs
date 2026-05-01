// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: 'https://applications-web-personal.github.io',
  base: '/menu-solo-perros',
  vite: {
    plugins: [tailwindcss()],
  },
});
