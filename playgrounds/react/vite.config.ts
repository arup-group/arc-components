import { defineConfig } from 'vite';

import viteTsConfigPaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  cacheDir: '../../node_modules/.vite/playgrounds/react',

  server: {
    port: 4200,
    host: 'localhost',
  },

  plugins: [
    viteTsConfigPaths({
      root: '../../',
    }),

    react(),

    viteStaticCopy({
      targets: [
        {
          src: '../../assets',
          dest: '',
        },
        {
          src: '../../dist/packages/components/assets',
          dest: '',
        },
      ],
    }),
  ],
});
