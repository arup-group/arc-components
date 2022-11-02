import { createComponent, EventName } from '@lit-labs/react';
import React from 'react';
import { ARC_EVENTS } from '../../internal/constants/eventConstants.js';
import ArcSwitchWC from './ArcSwitch.js';
import './arc-switch.js';

export const ArcSwitch = createComponent(React, 'arc-switch', ArcSwitchWC, {
  onArcChange: ARC_EVENTS.change as EventName<CustomEvent<never>>,
});
