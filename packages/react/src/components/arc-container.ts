import { createComponent, EventName } from '@lit-labs/react';
import React from 'react';
import { ARC_EVENTS } from '@arc-web/components/src/internal/constants/eventConstants.js';
import { UserPreferences } from '@arc-web/components/src/components/accessibility/ArcAccessibility.js';
import ArcContainerWC from '@arc-web/components/src/components/container/ArcContainer.js';
import '@arc-web/components/src/components/container/arc-container.js';

export const ArcContainer = createComponent({
  tagName: 'arc-container',
  elementClass: ArcContainerWC,
  react: React,
  events: {
    onArcAccessibilityChange: ARC_EVENTS.accessibilityChange as EventName<
      CustomEvent<{ preferences: UserPreferences }>
    >,
  },
});
