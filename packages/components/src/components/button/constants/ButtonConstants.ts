export declare type ButtonTarget = '_blank' | '_parent' | '_self' | '_top';
export declare type ButtonType =
  | 'filled'
  | 'outlined'
  | 'tab'
  | 'group-filled'
  | 'group-outlined'
  | 'group-filled-menu'
  | 'group-outlined-menu';

export const BUTTON_TYPES: { [key in ButtonType]: ButtonType } = {
  filled: 'filled',
  outlined: 'outlined',
  tab: 'tab',
  'group-filled': 'group-filled',
  'group-outlined': 'group-outlined',
  'group-filled-menu': 'group-filled-menu',
  'group-outlined-menu': 'group-outlined-menu',
} as const;
