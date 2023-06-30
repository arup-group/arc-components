import { createComponent, EventName } from '@lit-labs/react';
import React from 'react';
import { ARC_EVENTS } from '@arc-web/components/src/internal/constants/eventConstants.js';
import ArcSidebarWC from '@arc-web/components/src/components/sidebar/ArcSidebar.js';
import '@arc-web/components/src/components/sidebar/arc-sidebar.js';

export const ArcSidebar = createComponent({
  tagName: 'arc-sidebar',
  elementClass: ArcSidebarWC,
  react: React,
  events: {
    onArcShow: ARC_EVENTS.show as EventName<CustomEvent<{}>>,
    onArcAfterShow: ARC_EVENTS.afterShow as EventName<CustomEvent<{}>>,
    onArcHide: ARC_EVENTS.hide as EventName<CustomEvent<{}>>,
    onArcAfterHide: ARC_EVENTS.afterHide as EventName<CustomEvent<{}>>,
  },
});
