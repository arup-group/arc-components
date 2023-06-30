import { createComponent, EventName } from '@lit-labs/react';
import React from 'react';
import { ARC_EVENTS } from '@arc-web/components/src/internal/constants/eventConstants.js';
import ArcAccessibilityWC, { UserPreferences } from '@arc-web/components/src/components/accessibility/ArcAccessibility.js';
import '@arc-web/components/src/components/accessibility/arc-accessibility.js';

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
