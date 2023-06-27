import { defineConfig } from 'vite';
import viteTsConfigPaths from 'vite-tsconfig-paths';
import DynamicPublicDirectory from 'vite-multiple-assets';

export default defineConfig({
  cacheDir: '../../node_modules/.vite/playground',
  clearScreen: false,
  server: {
    port: 4200,
    host: 'localhost',
  },
  plugins: [
    viteTsConfigPaths({
      root: '../../',
    }),
    DynamicPublicDirectory([
      'packages/playground/assets',
      'packages/components',
    ]),
  ],
});
