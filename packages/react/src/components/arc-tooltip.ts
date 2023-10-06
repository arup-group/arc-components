import { createComponent, EventName } from '@lit-labs/react';
import React from 'react';
import { ARC_EVENTS } from '@arc-web/components/src/internal/constants/eventConstants.js';
import ArcTooltipWC from '@arc-web/components/src/components/tooltip/ArcTooltip.js';
import '@arc-web/components/src/components/tooltip/arc-tooltip.js';

export const ArcTooltip = createComponent({
  tagName: 'arc-tooltip',
  elementClass: ArcTooltipWC,
  react: React,
  events: {
    onArcShow: ARC_EVENTS.show as EventName<CustomEvent<{}>>,
    onArcAfterShow: ARC_EVENTS.afterShow as EventName<CustomEvent<{}>>,
    onArcHide: ARC_EVENTS.hide as EventName<CustomEvent<{}>>,
    onArcAfterHide: ARC_EVENTS.afterHide as EventName<CustomEvent<{}>>,
  },
});
