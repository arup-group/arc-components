import { createComponent, EventName } from '@lit-labs/react';
import React from 'react';
import { ARC_EVENTS } from '../../internal/constants/eventConstants.js';
import ArcChipWC from './ArcChip.js';
import './arc-chip.js';

export const ArcChip = createComponent({
  tagName: 'arc-chip',
  elementClass: ArcChipWC,
  react: React,
  events: {
    onArcClear: ARC_EVENTS.clear as EventName<CustomEvent<{}>>,
  },
});
