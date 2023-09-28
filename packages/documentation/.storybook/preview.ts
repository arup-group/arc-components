import { setCustomElementsManifest, Preview } from '@storybook/web-components';
import '@arc-web/components/themes/index.css';
import '@arc-web/components/themes/light.css';
import '@arc-web/components/themes/dark.css';
import '@arc-web/components/src/index';

// @ts-ignore
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
