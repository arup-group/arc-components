import { createComponent, EventName } from '@lit-labs/react';
import React from 'react';
import { ARC_EVENTS } from '../../internal/constants/eventConstants.js';
import ArcSidebarWC from './ArcSidebar.js';
import './arc-sidebar.js';

export const ArcSidebar = createComponent({
  tagName: 'arc-sidebar',
  elementClass: ArcSidebarWC,
  react: React,
  events: {
    onArcShow: ARC_EVENTS.show as EventName<CustomEvent<never>>,
    onArcAfterShow: ARC_EVENTS.afterShow as EventName<CustomEvent<never>>,
    onArcHide: ARC_EVENTS.hide as EventName<CustomEvent<never>>,
    onArcAfterHide: ARC_EVENTS.afterHide as EventName<CustomEvent<never>>,
  },
});
