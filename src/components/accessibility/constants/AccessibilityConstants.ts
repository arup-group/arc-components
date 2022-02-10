import { CONTAINER_THEMES, ContainerTheme } from '../../container/constants/ContainerConstants.js';
import { FONT_SIZES, FontSize } from '../../../internal/constants/styleConstants.js';
import { IconType } from '../../icon/constants/IconConstants.js';

export declare type TextDisplay = 'highLegibilityFonts' | 'highlightLinks' | 'plainText';
export declare type AccessibilityKey = 'colourMode' | 'textSize' | 'textDisplay';
export declare type UserPreference = ContainerTheme | FontSize | { [keys in TextDisplay]: boolean };
export declare type UserPreferences = { [accessKeys in AccessibilityKey]: UserPreference }
export declare type AccessibilityOption = {
  name: AccessibilityKey,
  icon: IconType;
  values: ContainerTheme[] | FontSize[] | { [keys in TextDisplay]: boolean };
};
export declare type AccessibilityOptions = { [accessKeys in AccessibilityKey]: AccessibilityOption }

export const ACCESSIBILITY_OPTIONS: AccessibilityOptions = {
  colourMode: {
    name: 'colourMode',
    icon: 'bulb',
    values: Object.values(CONTAINER_THEMES),
  },
  textSize: {
    name: 'textSize',
    icon: 'book-open',
    values: [FONT_SIZES.medium, FONT_SIZES.large, FONT_SIZES["x-large"]],
  },
  textDisplay: {
    name: 'textDisplay',
    icon: 'eye',
    values: {
      highLegibilityFonts: false,
      highlightLinks: false,
      plainText: false,
    },
  },
};
