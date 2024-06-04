import { createComponent, EventName } from '@lit-labs/react';
import React from 'react';
import { ARC_EVENTS } from '@arc-web/components/src/internal/constants/eventConstants.js';
import ArcCheckboxWC from '@arc-web/components/src/components/checkbox/ArcCheckbox';
import '@arc-web/components/src/components/checkbox/arc-checkbox.js';

export const ArcCheckbox = createComponent({
  tagName: 'arc-checkbox',
  elementClass: ArcCheckboxWC,
  react: React,
  events: {
    onArcChange: ARC_EVENTS.change as EventName<CustomEvent<{}>>,
  },
});
