import { createComponent, EventName } from '@lit-labs/react';
import React from 'react';
import { ARC_EVENTS } from '@arc-web/components/src/internal/constants/eventConstants.js';
import ArcNavbarWC from '@arc-web/components/src/components/navbar/ArcNavbar.js';
import '@arc-web/components/src/components/navbar/arc-navbar.js';

export const ArcNavbar = createComponent({
  tagName: 'arc-navbar',
  elementClass: ArcNavbarWC,
  react: React,
  events: {
    onArcShowAccessibility: ARC_EVENTS.showAccessibility as EventName<
      CustomEvent<{}>
    >,
  },
});
