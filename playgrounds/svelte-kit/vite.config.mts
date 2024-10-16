import { defineConfig } from 'vite';
import viteTsConfigPaths from 'vite-tsconfig-paths';
import { sveltekit } from '@sveltejs/kit/vite';

export default defineConfig({
  root: 'src',
  cacheDir: '../../node_modules/.vite/playgrounds/svelte',
  server: {
    port: 4200,
    host: 'localhost',
  },
  ssr: { noExternal: ['@sveltejs/site-kit', '@sveltejs/kit', 'svelte'] },
  plugins: [
    viteTsConfigPaths({ root: '../../' }),
    sveltekit(),
  ],
});
