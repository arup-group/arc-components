import { addons } from '@storybook/addons';
import { create } from '@storybook/theming';
import arcLogo from './assets/arc-storybook.svg';

const THEME = create({
  base: 'light',
  fontBase: '"Arial", sans-serif',
  textColor: 'rgb(28, 28, 28)',
  barTextColor: 'rgb(239, 79, 79)',
  barSelectedColor: 'rgb(239, 79, 79)',
  barBg: 'rgb(239, 239, 239)',
  appBg: 'rgb(239, 239, 239)',
  brandTitle: 'ARC Design System',
  brandImage: arcLogo,
  brandUrl: 'https://arc.arup.com',
});

addons.setConfig({
  theme: THEME,
  showPanel: false,
});
