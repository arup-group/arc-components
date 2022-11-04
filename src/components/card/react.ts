import { createComponent, EventName } from '@lit-labs/react';
import React from 'react';
import { ARC_EVENTS } from '../../internal/constants/eventConstants.js';
import ArcCardWC from './ArcCard.js';
import './arc-card.js';

export const ArcCard = createComponent({
  tagName: 'arc-card',
  elementClass: ArcCardWC,
  react: React,
  events: {
    onArcShow: ARC_EVENTS.show as EventName<CustomEvent<never>>,
    onArcAfterShow: ARC_EVENTS.afterShow as EventName<CustomEvent<never>>,
    onArcHide: ARC_EVENTS.hide as EventName<CustomEvent<never>>,
    onArcAfterHide: ARC_EVENTS.afterHide as EventName<CustomEvent<never>>,
  },
});
