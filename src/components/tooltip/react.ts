import { createComponent, EventName } from '@lit-labs/react';
import React from 'react';
import { ARC_EVENTS } from '../../internal/constants/eventConstants.js';
import ArcTooltipWC from './ArcTooltip.js';
import './arc-tooltip.js';

export const ArcTooltip = createComponent(React, 'arc-tooltip', ArcTooltipWC, {
  onArcShow: ARC_EVENTS.show as EventName<CustomEvent<never>>,
  onArcAfterShow: ARC_EVENTS.afterShow as EventName<CustomEvent<never>>,
  onArcHide: ARC_EVENTS.hide as EventName<CustomEvent<never>>,
  onArcAfterHide: ARC_EVENTS.afterHide as EventName<CustomEvent<never>>,
});
