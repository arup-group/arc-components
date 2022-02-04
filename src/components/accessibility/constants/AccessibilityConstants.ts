import { CONTAINER_THEMES, ContainerTheme } from '../../container/constants/ContainerConstants.js';
import { FONT_SIZES, FontSize } from '../../../internal/constants/fontConstants.js';

export declare type UserPreferences = {
  colourMode: ContainerTheme,
  highLegibilityFonts: boolean,
  highlightLinks: boolean,
  plainText: boolean,
  textSize: FontSize,
}

export const USER_PREFERENCES: UserPreferences = {
  colourMode: CONTAINER_THEMES.auto,
  highLegibilityFonts: false,
  highlightLinks: false,
  plainText: false,
  textSize: FONT_SIZES.medium
}
