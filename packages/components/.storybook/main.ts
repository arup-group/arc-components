import { StorybookConfig } from '@storybook/web-components-vite';

const STORYBOOK_CONFIGURATION: StorybookConfig = {
  features: {
    storyStoreV7: true,
  },
  stories: [
    '../stories/**/*.mdx',
    '../stories/**/*.ts',
    '../src/**/*.stories.ts',
    '../src/**/*.mdx',
  ],
  staticDirs: ['./assets', '../../playground/assets'],
  addons: [
    '@storybook/addon-links',
    {
      name: '@storybook/addon-essentials',
      options: {
        backgrounds: false,
        viewport: false,
        toolbars: false,
        actions: false,
      },
    },
  ],
  docs: { defaultName: 'Documentation', autodocs: true, docsMode: true },
  framework: '@storybook/web-components-vite',
  core: { disableTelemetry: true },
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
