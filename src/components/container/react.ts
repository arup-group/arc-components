import { createComponent, EventName } from '@lit-labs/react';
import React from 'react';
import { ARC_EVENTS } from '../../internal/constants/eventConstants.js';
import { UserPreferences } from '../accessibility/ArcAccessibility.js';
import ArcContainerWC from './ArcContainer.js';
import './arc-container.js';

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
