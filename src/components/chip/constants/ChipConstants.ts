export declare type ChipSize = 'small' | 'medium' | 'large';
export declare type ChipType = 'filled' | 'outlined';

export const CHIP_SIZES: { [key in ChipSize]: ChipSize } = {
  small: 'small',
  medium: 'medium',
  large: 'large',
};

export const CHIP_TYPES: { [key in ChipType]: ChipType } = {
  filled: 'filled',
  outlined: 'outlined',
};
