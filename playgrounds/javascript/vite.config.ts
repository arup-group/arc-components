import { defineConfig } from 'vite';

import viteTsConfigPaths from 'vite-tsconfig-paths';
import DynamicPublicDirectory from 'vite-multiple-assets';

export default defineConfig({
  cacheDir: '../../node_modules/.vite/plagrounds/javascript',

  server: {
    port: 4200,
    host: 'localhost',
  },

  preview: {
    port: 4300,
    host: 'localhost',
  },

  plugins: [
    viteTsConfigPaths({
      root: '../../',
    }),

    DynamicPublicDirectory([
      'playgrounds/assets',

      // ARC component assets are required for components
      // to load any static assets required such as icons.
      //
      // The application build system will need to copy the
      // assets from the node_modules directory to the
      // applications public directory. Note that this
      // playground is referencing the local ARC components
      // source code and not the built package located in
      // the node_modules directory.
      'packages/components',
    ]),
  ],
});
