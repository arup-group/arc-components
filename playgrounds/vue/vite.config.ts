import { defineConfig } from 'vite';

import viteTsConfigPaths from 'vite-tsconfig-paths';
import vue from '@vitejs/plugin-vue';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  cacheDir: '../../node_modules/.vite/playgrounds/vue',

  server: {
    port: 4200,
    host: 'localhost',
  },

  plugins: [
    viteTsConfigPaths({
      root: '../../',
    }),

    vue(),

    viteStaticCopy({
      targets: [
        {
          src: '../../assets',
          dest: ''
        },
        {
          src: '../../dist/packages/components/assets',
          dest: ''
        }
      ]
    }),
  ],
});
