import { CONTAINER_THEMES, ContainerTheme } from '../../container/constants/ContainerConstants.js';
import { FONT_SIZES, FontSize } from '../../../internal/constants/fontConstants.js';
import { IconType } from '../../icon/constants/IconConstants.js';

export declare type AccessibilityKey = 'colourMode' | 'textSize' | 'textDisplay';
export declare type TextDisplay = 'highLegibilityFonts' | 'highlightLinks' | 'plainText';

export declare type UserPreference = ContainerTheme | FontSize | { [keys in TextDisplay]: boolean };

export declare type AccessibilityOption = {
  icon: IconType,
  values: string[] | { [keys in TextDisplay]: boolean }
};

export const ACCESSIBILITY_OPTIONS: { [accessKeys in AccessibilityKey]: AccessibilityOption } = {
  colourMode: {
    icon: 'bulb',
    values: Object.keys(CONTAINER_THEMES)
  },
  textSize: {
    icon: 'book-open',
    values: Object.keys(FONT_SIZES)
  },
  textDisplay: {
    icon: 'eye',
    values: {
      highLegibilityFonts: false,
      highlightLinks: false,
      plainText: false,
    }
  }
};

export const USER_PREFERENCES: { [accessKeys in AccessibilityKey]: UserPreference } = {
  colourMode: CONTAINER_THEMES.auto,
  textSize: FONT_SIZES.medium,
  textDisplay: {
    highLegibilityFonts: false,
    highlightLinks: false,
    plainText: false,
  }
};
