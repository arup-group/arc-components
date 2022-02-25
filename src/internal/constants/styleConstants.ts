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

export declare type FontSpacing = 'dense' | 'normal' | 'loose';

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

export const FONT_SPACING: { [key in FontSpacing]: FontSpacing } = {
  dense: 'dense',
  normal: 'normal',
  loose: 'loose',
};
