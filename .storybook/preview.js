import { setCustomElementsManifest } from '@storybook/web-components';
import customElementsManifest from '../custom-elements.json';
import Theme from './ArcTheme';
import '../themes/index.css';
import '../themes/light.css';
import '../themes/dark.css';
import '../assets/arc-red.svg'
import '../assets/icons.svg'

setCustomElementsManifest(customElementsManifest);

export const parameters = {
  controls: {
    matchers: {
      color: /(colorPrimary|colorSecondary|btnColor|btnBackground|iconColor|strokeColor)$/i,
      date: /Date$/,
    },
  },
 docs: {
    theme: Theme,
  },
}
