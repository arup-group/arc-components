import { create } from '@storybook/theming';
import arcLogo from '../assets/arc-storybook.svg';

export default create({
  base: 'light',

  // Typography
  fontBase: '"Arial", sans-serif',

  // Text colors
  textColor: 'rgb(28, 28, 28)',

  // Toolbar default and active colors
  barTextColor: 'rgb(239, 79, 79)',
  barSelectedColor: 'rgb(239, 79, 79)',
  barBg: 'rgb(255, 255, 255)',

  // Logo
  brandTitle: 'ARC',
  brandImage: arcLogo,
});
