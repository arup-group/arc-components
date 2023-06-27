import {
  CONTAINER_THEMES,
  ContainerTheme,
} from '../../container/constants/ContainerConstants.js';
import {
  FONT_SIZES,
  FONT_SPACING,
  FontSize,
  FontSpacing,
} from '../../../internal/constants/styleConstants.js';
import { IconType } from '../../icon/constants/IconConstants.js';

export declare type ColourPreference = 'theme';
export declare type ContentPreference =
  | 'fontSize'
  | 'lineHeight'
  | 'letterSpacing'
  | 'highLegibilityFonts'
  | 'highlightLinks'
  | 'plainText';

export declare type AccessibilityKey =
  | 'colourAdjustments'
  | 'contentAdjustments';
export declare type AccessibilityOption = {
  name: AccessibilityKey;
  icon: IconType;
  options:
    | { [key in ColourPreference]: ContainerTheme[] }
    | { [key in ContentPreference]: FontSize[] | FontSpacing[] | null };
};

export const ACCESSIBILITY_OPTIONS: AccessibilityOption[] = [
  {
    name: 'colourAdjustments',
    icon: 'bulb',
    options: {
      theme: Object.values(CONTAINER_THEMES),
    },
  },
  {
    name: 'contentAdjustments',
    icon: 'book-open',
    options: {
      fontSize: [FONT_SIZES.medium, FONT_SIZES.large, FONT_SIZES['x-large']],
      lineHeight: [FONT_SPACING.dense, FONT_SPACING.normal, FONT_SPACING.loose],
      letterSpacing: [
        FONT_SPACING.dense,
        FONT_SPACING.normal,
        FONT_SPACING.loose,
      ],
      highLegibilityFonts: null,
      highlightLinks: null,
      plainText: null,
    },
  },
];
