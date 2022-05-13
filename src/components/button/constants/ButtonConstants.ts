export declare type ButtonTarget = '_blank' | '_parent' | '_self' | '_top';
export declare type ButtonType = 'contained' | 'tile' | 'outlined' | 'pill' | 'tab';

export const BUTTON_TYPES: { [key in ButtonType]: ButtonType } = {
  contained: 'contained',
  tile: 'tile',
  outlined: 'outlined',
  pill: 'pill',
  tab: 'tab',
};
