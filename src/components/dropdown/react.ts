import { createComponent, EventName } from '@lit-labs/react';
import React from 'react';
import { ARC_EVENTS } from '../../internal/constants/eventConstants.js';
import ArcDropdownWC from './ArcDropdown.js';
import './arc-dropdown.js';

export const ArcDropdown = createComponent({
  tagName: 'arc-dropdown',
  elementClass: ArcDropdownWC,
  react: React,
  events: {
    onArcShow: ARC_EVENTS.show as EventName<CustomEvent<{}>>,
    onArcAfterShow: ARC_EVENTS.afterShow as EventName<CustomEvent<{}>>,
    onArcHide: ARC_EVENTS.hide as EventName<CustomEvent<{}>>,
    onArcAfterHide: ARC_EVENTS.afterHide as EventName<CustomEvent<{}>>,
  },
});
