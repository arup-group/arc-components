import { storybookPlugin } from '@web/dev-server-storybook';
import baseConfig from '../web-dev-server.config.mjs';
import copy from 'rollup-plugin-copy';

export default /** @type {import('@web/dev-server').DevServerConfig} */ ({
  ...baseConfig,
  open: '/',
  plugins: [
    storybookPlugin({ type: 'web-components' }),
    /** Copy the styles */
    copy({
      targets: [{ src: '../src/css/**/*', dest: './dist' }],
      // set flatten to false to preserve folder structure
      flatten: false,
    }),
    ...baseConfig.plugins
  ],
});
