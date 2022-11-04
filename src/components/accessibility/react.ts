import { createComponent, EventName } from '@lit-labs/react';
import React from 'react';
import { ARC_EVENTS } from '../../internal/constants/eventConstants.js';
import ArcAccessibilityWC, { UserPreferences } from './ArcAccessibility.js';
import './arc-accessibility.js';

export { UserPreferences } from './ArcAccessibility.js';

export const ArcAccessibility = createComponent({
  tagName: 'arc-accessibility',
  elementClass: ArcAccessibilityWC,
  react: React,
  events: {
    onArcAccessibilityChange: ARC_EVENTS.accessibilityChange as EventName<
      CustomEvent<{ preferences: UserPreferences }>
    >,
  },
});
