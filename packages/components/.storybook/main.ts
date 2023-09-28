import { StorybookConfig } from '@storybook/web-components-vite';

const STORYBOOK_CONFIGURATION: StorybookConfig = {
  features: { storyStoreV7: true },
  framework: '@storybook/web-components-vite',
  stories: [
    '../stories/**/*.mdx',
    '../src/**/*.stories.ts',
    '../src/**/*.mdx',
  ],
  staticDirs: ['./assets', '../../../playgrounds/assets'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-storysource',
    '@storybook/addon-interactions',
  ],
  previewHead: (head) => `
    ${head}
    <style>
        #root-inner arc-container {
          height: 100vh;
          display: block;
        }
        .docs-story #root-inner arc-container {
          min-height: 250px;
          max-height: 500px;
          height: 100vh;
          display: block;
        }
    </style>
  `,
  viteFinal: (config) => {
    config.cacheDir = '../../../node_modules/.vite/storybook';
    return config;
  },
};

export default STORYBOOK_CONFIGURATION;
