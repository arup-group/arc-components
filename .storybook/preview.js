import '../themes/index.css';
import '../themes/light.css';
import '../themes/dark.css';
import '../out-tsc/arc.js';

import '../assets/arc-red.svg'
import '../assets/icons.svg'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
