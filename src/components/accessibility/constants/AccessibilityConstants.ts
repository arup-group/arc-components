import { CONTAINER_THEMES, ContainerTheme } from '../../container/constants/ContainerConstants.js';
import { FontSize } from '../../../internal/constants/styleConstants.js';
import { IconType } from '../../icon/constants/IconConstants.js';

export declare type AccessibilityKey = 'colourMode' | 'textSize' | 'textDisplay';
export declare type TextDisplay = 'highLegibilityFonts' | 'highlightLinks' | 'plainText';
export declare type UserPreference = ContainerTheme | FontSize | { [keys in TextDisplay]: boolean };
export declare type AccessibilityOption = {
  icon: IconType;
  values: ContainerTheme[] | FontSize[] | { [keys in TextDisplay]: boolean };
};

export const ACCESSIBILITY_OPTIONS: { [accessKeys in AccessibilityKey]: AccessibilityOption } = {
  colourMode: {
    icon: 'bulb',
    values: Object.values(CONTAINER_THEMES),
  },
  textSize: {
    icon: 'book-open',
    values: ['medium', 'large', 'x-large'],
  },
  textDisplay: {
    icon: 'eye',
    values: {
      highLegibilityFonts: false,
      highlightLinks: false,
      plainText: false,
    },
  },
};
