export declare type FontSize =
  | 'xx-small'
  | 'x-small'
  | 'small'
  | 'medium'
  | 'large'
  | 'x-large'
  | 'xx-large'
  | 'xxx-large'
  | 'xxxx-large';

export const FONT_SIZES: { [key in FontSize]: FontSize } = {
  'xx-small': 'xx-small',
  'x-small': 'x-small',
  small: 'small',
  medium: 'medium',
  large: 'large',
  'x-large': 'x-large',
  'xx-large': 'xx-large',
  'xxx-large': 'xxx-large',
  'xxxx-large': 'xxxx-large',
};

export const DEFAULT_FONTSIZE: FontSize = FONT_SIZES.medium;
