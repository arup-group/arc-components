import { createComponent, EventName } from '@lit-labs/react';
import React from 'react';
import { ARC_EVENTS } from '@arc-web/components/src/internal/constants/eventConstants.js';
import ArcChipWC from '@arc-web/components/src/components/chip/ArcChip.js';
import '@arc-web/components/src/components/chip/arc-chip.js';

export const ArcChip = createComponent({
  tagName: 'arc-chip',
  elementClass: ArcChipWC,
  react: React,
  events: {
    onArcClear: ARC_EVENTS.clear as EventName<CustomEvent<{}>>,
  },
});
