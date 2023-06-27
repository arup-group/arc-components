import { setCustomElementsManifest, Preview } from '@storybook/web-components';
import { setBasePath } from '../src/utilities/base-path';
import '../themes/index.css';
import '../themes/light.css';
import '../themes/dark.css';
// @ts-ignore
import CUSTOM_ELEMENTS from '../../../dist/packages/components/custom-elements.json';

setCustomElementsManifest(CUSTOM_ELEMENTS);
setBasePath('/');

const PREVIEW: Preview = {
  parameters: {
    docs: {
      transformSource: (source) =>
        source
          .replace(/<!--\?lit\$[0-9]+\$-->|<!--\??-->/g, '')
          .replace(/=\"\"/g, ''),
    },
    viewMode: 'docs',
    layout: 'centered',
    options: {
      storySort: {
        order: [
          'Introduction',
          'Guides',
          ['Getting Started', 'Basic Container App'],
          'Theme',
          ['Typography', 'Colour', 'Iconography'],
          'Components',
        ],
      },
    },
  },
};

export default PREVIEW;
