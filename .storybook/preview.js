import '../themes/index.css';
import '../themes/light.css';
import '../themes/dark.css';
import '../assets/arc-red.svg'
import '../assets/icons.svg'

if (process.env.NODE_ENV === 'development') {
  import('../out-tsc/arc.js');
} else {
  import('../dist/arc.js');
}

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      date: /Date$/,
    },
  },
}
