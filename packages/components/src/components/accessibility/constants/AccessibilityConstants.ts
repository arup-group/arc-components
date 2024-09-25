import {
  CONTAINER_THEME_PREFERENCES,
  ContainerThemePreference,
} from '../../container/constants/ContainerConstants.js';
import {
  FONT_SIZES,
  FONT_SPACING,
  FontSize,
  FontSpacing,
} from '../../../internal/constants/styleConstants.js';

export declare type ColourPreference = 'theme';
export declare type ContentPreference =
  | 'fontSize'
  | 'lineHeight'
  | 'letterSpacing'
  | 'highLegibilityFonts'
  | 'highlightLinks'
  | 'plainText';
export declare type NotificationPreference = 'stickyNotifications';

export declare type AccessibilityKey =
  | 'colourAdjustments'
  | 'contentAdjustments'
  | 'notifications';
export declare type AccessibilityOption = {
  name: AccessibilityKey;
  options:
    | { [key in ColourPreference]: ContainerThemePreference[] }
    | { [key in ContentPreference]: FontSize[] | FontSpacing[] | null }
    | { [key in NotificationPreference]: boolean };
};

export const ACCESSIBILITY_OPTIONS: AccessibilityOption[] = [
  {
    name: 'colourAdjustments',
    options: {
      theme: Object.values(CONTAINER_THEME_PREFERENCES),
    },
  },
  {
    name: 'contentAdjustments',
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
  {
    name: 'notifications',
    options: {
      stickyNotifications: false,
    },
  },
];
