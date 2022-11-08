import { createComponent, EventName } from '@lit-labs/react';
import React from 'react';
import { ARC_EVENTS } from '../../internal/constants/eventConstants.js';
import ArcRadioWC from './ArcRadio.js';
import './arc-radio.js';

export const ArcRadio = createComponent({
  tagName: 'arc-radio',
  elementClass: ArcRadioWC,
  react: React,
  events: {
    onArcChange: ARC_EVENTS.change as EventName<CustomEvent<{}>>,
  },
});
