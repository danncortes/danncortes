// @ts-check

import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import fs from 'fs';
import path from 'path';

// https://astro.build/config
export default defineConfig({
  base: '/',
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [
    {
      name: 'remove-print-pages',
      hooks: {
        'astro:build:done': async ({ dir }) => {
          // Remove /print pages from production build
          const printPaths = [
            path.join(dir.pathname, 'en', 'print'),
            path.join(dir.pathname, 'de', 'print')
          ];

          for (const printPath of printPaths) {
            if (fs.existsSync(printPath)) {
              fs.rmSync(printPath, { recursive: true, force: true });
              console.log(`Removed print page: ${printPath}`);
            }
          }
        }
      }
    }
  ]
});
