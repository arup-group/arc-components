import { setCustomElementsManifest } from '@storybook/web-components';
import customElementsManifest from '../custom-elements.json';
import '../themes/index.css';
import '../themes/light.css';
import '../themes/dark.css';
import '../assets/arc-red.svg'
import '../assets/icons.svg'

setCustomElementsManifest(customElementsManifest);

if (process.env.NODE_ENV === 'development') {
  import('../out-tsc/arc.js');
} else {
  import('../dist/arc.js');
}

export const parameters = {
  controls: {
    matchers: {
      color: /(colorPrimary|colorSecondary|btnColor|btnBackground|iconColor|strokeColor)$/i,
      date: /Date$/,
    },
  },
}
