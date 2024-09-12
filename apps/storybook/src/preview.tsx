import { setCustomElementsManifest, Preview } from '@storybook/web-components';

import '../../../packages/components/themes/index.css';
import '../../../packages/components/src/index';

// @ts-ignore
import CUSTOM_ELEMENTS from '../../../dist/packages/components/custom-elements.json';

setCustomElementsManifest(CUSTOM_ELEMENTS);

const PREVIEW: Preview = {
  parameters: {
    layout: 'fullscreen',
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color:
          /(colorPrimary|colorSecondary|btnColor|btnBackground|iconColor|strokeColor)$/i,
        date: /Date$/,
      },
    },
    options: {
      storySort: {
        order: ['Welcome', 'Components'],
      },
    },
  },
};

export default PREVIEW;
