export declare type ButtonTarget = '_blank' | '_parent' | '_self' | '_top';
export declare type ButtonType = 'filled' | 'outlined' | 'tab';

export const BUTTON_TYPES: { [key in ButtonType]: ButtonType } = {
  filled: 'filled',
  outlined: 'outlined',
  tab: 'tab',
};
