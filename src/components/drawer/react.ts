import { createComponent, EventName } from '@lit-labs/react';
import React from 'react';
import { ARC_EVENTS } from '../../internal/constants/eventConstants.js';
import ArcDrawerWC from './ArcDrawer.js';
import './arc-container.js';

export const ArcDrawer = createComponent(React, 'arc-container', ArcDrawerWC, {
  onArcShow: ARC_EVENTS.show as EventName<CustomEvent<never>>,
  onArcAfterShow: ARC_EVENTS.afterShow as EventName<CustomEvent<never>>,
  onArcHide: ARC_EVENTS.hide as EventName<CustomEvent<never>>,
  onArcAfterHide: ARC_EVENTS.afterHide as EventName<CustomEvent<never>>,
  onArcInitialFocus: ARC_EVENTS.initialFocus as EventName<CustomEvent<never>>,
  onArcRequestClose: ARC_EVENTS.requestClose as EventName<CustomEvent<never>>,
});
