// @ts-nocheck

const VAR = (name: string) => `var(${name})`;
const RGB = (v: string) => `rgb(${v})`;
const ARCCOLORRGBSCALE = (color: string): Record<string, string> => {
  const SCALE = {};
  for (let i = 0; i <= 10; i++) {
    const value = (i * (100 / 10)).toString().padStart(3, '0');
    SCALE[value] = RGB(VAR(`--arc-${color}-${value}`));
  }
  return SCALE;
};
export const Theme = {
  colors: {
    white: RGB(VAR('--arc-white-000')),
    black: RGB(VAR('--arc-black-100')),
    blue: ARCCOLORRGBSCALE('blue'),
    green: ARCCOLORRGBSCALE('green'),
    grey: ARCCOLORRGBSCALE('grey'),
    orange: ARCCOLORRGBSCALE('orange'),
    pink: ARCCOLORRGBSCALE('pink'),
    purple: ARCCOLORRGBSCALE('purple'),
    red: ARCCOLORRGBSCALE('red'),
    teal: ARCCOLORRGBSCALE('teal'),
    yellow: ARCCOLORRGBSCALE('yellow'),
    brand: RGB(VAR('--arc-brand-color')),
    font: RGB(VAR('--arc-font-color')),
    fontInverse: RGB(VAR('--arc-font-inverse-color')),
    background: RGB(VAR('--arc-background-color')),
    container: RGB(VAR('--arc-container-color')),
    default: RGB(VAR('--arc-color-default')),
    primary: RGB(VAR('--arc-color-primary')),
    secondary: RGB(VAR('--arc-color-secondary')),
    error: RGB(VAR('--arc-color-error')),
    backgroundError: RGB(VAR('--arc-background-color-error')),
    warning: RGB(VAR('--arc-color-warning')),
    backgroundWarning: RGB(VAR('--arc-background-color-warning')),
    info: RGB(VAR('--arc-color-info')),
    backgroundInfo: RGB(VAR('--arc-background-color-info')),
    success: RGB(VAR('--arc-color-success')),
    backgroundSuccess: RGB(VAR('--arc-background-color-success')),
  },
  font: {
    headline: VAR('--arc-font-headline'),
    body: VAR('--arc-font-body'),
  },
  fontSize: {
    xxSmall: VAR('--arc-font-size-xx-small'),
    xSmall: VAR('--arc-font-size-x-small'),
    small: VAR('--arc-font-size-small'),
    medium: VAR('--arc-font-size-medium'),
    large: VAR('--arc-font-size-large'),
    xLarge: VAR('--arc-font-size-x-large'),
    xxLarge: VAR('--arc-font-size-xx-large'),
    xxxLarge: VAR('--arc-font-size-xxx-large'),
    xxxxLarge: VAR('--arc-font-size-xxxx-large'),
  },
  fontWeight: {
    light: VAR('--arc-font-weight-light'),
    regular: VAR('--arc-font-weight-regular'),
    medium: VAR('--arc-font-weight-medium'),
    bold: VAR('--arc-font-weight-bold'),
  },
  lineHeight: {
    dence: VAR('--arc-line-height-dense'),
    normal: VAR('--arc-line-height-normal'),
    loose: VAR('--arc-line-height-loose'),
  },
  letterSpacing: {
    dence: VAR('--arc-letter-spacing-dense'),
    normal: VAR('--arc-letter-spacing-normal'),
    loose: VAR('--arc-letter-spacing-loose'),
  },
  pannelWidth: VAR('--arc-pannel-width'),
  pannelHeigh: VAR('--arc-pannel-height'),
  toggleSize: VAR('--arc-toggle-size'),
  spacing: {
    xs: VAR('--arc-spacing-xs'),
    sm: VAR('--arc-spacing-sm'),
    md: VAR('--arc-spacing-md'),
    lg: VAR('--arc-spacing-lg'),
    xl: VAR('--arc-spacing-xl'),
  },
  border: {
    width: VAR('--arc-border-width'),
    style: VAR('--arc-border-style'),
    radiusSmall: VAR('--arc-border-radius-small'),
    radiusMedium: VAR('--arc-border-radius-medium'),
    radiusLarge: VAR('--arc-border-radius-large'),
    radiusXLarge: VAR('--arc-border-radius-x-large'),
  },
};
