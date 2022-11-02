import { createComponent, EventName } from '@lit-labs/react';
import React from 'react';
import { ARC_EVENTS } from '../../internal/constants/eventConstants.js';
import ArcRadioWC from './ArcRadio.js';
import './arc-radio.js';

export const ArcRadio = createComponent(React, 'arc-radio', ArcRadioWC, {
  onArcChange: ARC_EVENTS.change as EventName<CustomEvent<never>>,
});
