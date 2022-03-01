import '../themes/index.css';
import '../themes/light.css';
import '../themes/dark.css';

if (process.env.NODE_ENV === 'development') {
  import ('../out-tsc/arc');
} else {
  import ('../dist/arc');
}

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
