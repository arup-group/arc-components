import { defineConfig } from 'vite';
import viteTsConfigPaths from 'vite-tsconfig-paths';

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
  ],
});
