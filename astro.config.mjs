// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: 'https://applications-web-personal.github.io',
  base: '/menu-solo-perros',
  vite: {
    plugins: [
      tailwindcss(),
      {
        name: 'manual-asset-rewriting',
        transform(code, id) {
          if (id.includes('src/content/')) {
            // Fix images in content
            return code.replace('src="/images/', 'src="/menu-solo-perros/images/');
          }
        }
      }
    ]
  },
});
