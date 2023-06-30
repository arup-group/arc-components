import { setCustomElementsManifest, Preview } from '@storybook/web-components';
import { html } from 'lit';
import { setBasePath } from '../src/utilities/base-path';
import '../themes/index.css';
import '../themes/light.css';
import '../themes/dark.css';
import '../src/index';

// @ts-ignore
import CUSTOM_ELEMENTS from '../../../dist/packages/components/custom-elements.json';

setCustomElementsManifest(CUSTOM_ELEMENTS);
setBasePath('/');

const PREVIEW: Preview = {
  parameters: {
    layout: 'centered',
    viewMode: 'docs',
    controls: {
      hideNoControlsWarning: true,
    },
    options: {
      storySort: {
        order: [
          'Forms',
          'Introduction',
          'Getting Started',
          ['Vanilla', 'Angular', 'React', 'Vue'],
          'Migration',
          'Components',
          [
            'Application Shell',
            [
              'ArcContainer',
              'ArcNavbar',
              'ArcBottombar',
              'ArcSidebar',
              'ArcDrawer',
            ],
            'User Interface',
            'Controls',
            'Utilities',
          ],
          'Utilities',
        ],
      },
    },
  },
};

export default PREVIEW;
