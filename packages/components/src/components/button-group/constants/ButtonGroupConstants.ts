import { ButtonType } from '../../button/constants/ButtonConstants';

export declare type ButtonGroupType = Omit<ButtonType, 'tab'>;

export const BUTTON_GROUP_TYPES: Record<string, ButtonGroupType> = {
  filled: 'filled',
  outlined: 'outlined',
};

