import { defineConfig } from 'vite';

import viteTsConfigPaths from 'vite-tsconfig-paths';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  cacheDir: '../../node_modules/.vite/playgrounds/vanilla',

  server: {
    port: 4200,
    host: 'localhost',
  },

  plugins: [
    viteTsConfigPaths({
      root: '../../',
    }),

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
