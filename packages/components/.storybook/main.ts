import { StorybookConfig } from '@storybook/web-components-vite';

const STORYBOOK_CONFIGURATION: StorybookConfig = {
  core: { disableTelemetry: true },
  features: { storyStoreV7: true },
  framework: '@storybook/web-components-vite',
  stories: [
    '../src/**/*.stories.ts',
    '../src/**/*.stories.tsx',
    '../stories/*.mdx',
  ],
  staticDirs: [
    {
      from: '../../../assets',
      to: 'assets',
    },
  ],
  addons: ['@storybook/addon-essentials'],
  docs: {
    autodocs: true,
    defaultName: 'Documentation',
  },
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
