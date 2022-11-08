import { createComponent, EventName } from '@lit-labs/react';
import React from 'react';
import { ARC_EVENTS } from '../../internal/constants/eventConstants.js';
import ArcNavbarWC from './ArcNavbar.js';
import './arc-navbar.js';

export const ArcNavbar = createComponent({
  tagName: 'arc-navbar',
  elementClass: ArcNavbarWC,
  react: React,
  events: {
    onArcShowAccessibility: ARC_EVENTS.showAccessibility as EventName<CustomEvent<{}>>,
  },
});
