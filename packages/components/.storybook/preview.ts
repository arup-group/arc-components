import { setCustomElementsManifest, Preview } from '@storybook/web-components';
import '../themes/index.css';
import '../themes/light.css';
import '../themes/dark.css';
import '../src/index';

import CUSTOM_ELEMENTS from '../../../dist/packages/components/custom-elements.json';

setCustomElementsManifest(CUSTOM_ELEMENTS);

const PREVIEW: Preview = {
  parameters: {
    layout: 'fullscreen',
    controls: {
      matchers: {
        color: /(colorPrimary|colorSecondary|btnColor|btnBackground|iconColor|strokeColor)$/i,
        date: /Date$/,
      },
    },
  }
};

export default PREVIEW;
