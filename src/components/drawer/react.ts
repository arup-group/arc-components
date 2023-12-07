import { createComponent, EventName } from '@lit-labs/react';
import React from 'react';
import { ARC_EVENTS } from '../../internal/constants/eventConstants.js';
import ArcDrawerWC from './ArcDrawer.js';
import './arc-drawer.js';

export const ArcDrawer = createComponent({
  tagName: 'arc-drawer',
  elementClass: ArcDrawerWC,
  react: React,
  events: {
    onArcShow: ARC_EVENTS.show as EventName<CustomEvent<{}>>,
    onArcAfterShow: ARC_EVENTS.afterShow as EventName<CustomEvent<{}>>,
    onArcHide: ARC_EVENTS.hide as EventName<CustomEvent<{}>>,
    onArcAfterHide: ARC_EVENTS.afterHide as EventName<CustomEvent<{}>>,
    onArcInitialFocus: ARC_EVENTS.initialFocus as EventName<CustomEvent<{}>>,
    onArcRequestClose: ARC_EVENTS.requestClose as EventName<CustomEvent<{}>>,
  },
});
