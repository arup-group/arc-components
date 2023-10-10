import { createComponent, EventName } from '@lit-labs/react';
import React from 'react';
import { ARC_EVENTS } from '@arc-web/components/src/internal/constants/eventConstants.js';
import ArcSwitchWC from '@arc-web/components/src/components/switch/ArcSwitch.js';
import '@arc-web/components/src/components/switch/arc-switch.js';

export const ArcSwitch = createComponent({
  tagName: 'arc-switch',
  elementClass: ArcSwitchWC,
  react: React,
  events: {
    onArcChange: ARC_EVENTS.change as EventName<CustomEvent<{}>>,
  },
});
