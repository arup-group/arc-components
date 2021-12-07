export declare type ButtonType = "contained" | "tile" | "outlined" | "pill" | "tab";
export declare type ButtonColor = "default" | "primary" | "secondary" | "error" | "warning" | "info" | "success";
export declare type ButtonSize = "small" | "medium" | "large";
export declare type ButtonTarget = "_blank" | "_parent" | "_self" | "_top";

export const BUTTON_TYPES: { [key: string]: ButtonType } = {
  contained: 'contained',
  tile: 'tile',
  outlined: 'outlined',
  pill: 'pill',
  tab: 'tab',
};

export const BUTTON_COLORS: { [key: string]: ButtonColor } = {
  default: 'default',
  primary: 'primary',
  secondary: 'secondary',
  error: 'error',
  warning: 'warning',
  info: 'info',
  success: 'success',
};

export const BUTTON_SIZES: { [key: string]: ButtonSize } = {
  small: 'small',
  medium: 'medium',
  large: 'large',
};
