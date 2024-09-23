import { defineConfig } from 'vite';
import viteTsConfigPaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react';

export default defineConfig({
  cacheDir: '../../node_modules/.vite/playgrounds/react',
  server: {
    port: 4200,
    host: 'localhost',
  },
  plugins: [
    react(),
    viteTsConfigPaths({
      root: '../../',
    }),
  ],
});
