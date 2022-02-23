export declare type ButtonColor = 'default' | 'primary' | 'error' | 'warning' | 'info' | 'success';
export declare type ButtonSize = 'small' | 'medium' | 'large';
export declare type ButtonTarget = '_blank' | '_parent' | '_self' | '_top';
export declare type ButtonType = 'contained' | 'tile' | 'outlined' | 'pill' | 'tab';

export const BUTTON_COLORS: { [key in ButtonColor]: ButtonColor } = {
  default: 'default',
  primary: 'primary',
  error: 'error',
  warning: 'warning',
  info: 'info',
  success: 'success',
};

export const BUTTON_SIZES: { [key in ButtonSize]: ButtonSize } = {
  small: 'small',
  medium: 'medium',
  large: 'large',
};

export const BUTTON_TYPES: { [key in ButtonType]: ButtonType } = {
  contained: 'contained',
  tile: 'tile',
  outlined: 'outlined',
  pill: 'pill',
  tab: 'tab',
};
