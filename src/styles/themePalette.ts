export declare type PaletteColor = 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success' | 'background';
export declare type MUIPalette = { main: String };
export declare type MUIBackground = { default: String; paper: String };

export const themePalette: { [key in PaletteColor]: MUIPalette | MUIBackground } = {
  primary: {
    main: 'rgb(var(--arc-color-primary))',
  },
  secondary: {
    main: 'rgb(var(--arc-color-secondary))',
  },
  error: {
    main: 'rgb(var(--arc-color-error))',
  },
  warning: {
    main: 'rgb(var(--arc-color-warning))',
  },
  info: {
    main: 'rgb(var(--arc-color-info))',
  },
  success: {
    main: 'rgb(var(--arc-color-success))',
  },
  background: {
    default: 'rgb(var(--arc-background-color))',
    paper: 'rgb(var(--arc-container-color))',
  },
};
