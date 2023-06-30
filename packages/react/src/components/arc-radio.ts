import { createComponent, EventName } from '@lit-labs/react';
import React from 'react';
import { ARC_EVENTS } from '@arc-web/components/src/internal/constants/eventConstants.js';
import ArcRadioWC from '@arc-web/components/src/components/radio/ArcRadio.js';
import '@arc-web/components/src/components/radio/arc-radio.js';

export const ArcRadio = createComponent({
  tagName: 'arc-radio',
  elementClass: ArcRadioWC,
  react: React,
  events: {
    onArcChange: ARC_EVENTS.change as EventName<CustomEvent<{}>>,
  },
});
