import { createComponent, EventName } from '@lit-labs/react';
import React from 'react';
import { ARC_EVENTS } from '@arc-web/components/src/internal/constants/eventConstants.js';
import ArcCheckBoxWC from '@arc-web/components/src/components/checkbox/ArcCheckBox';

import '@arc-web/components/src/components/checkbox/arc-checkbox.js';

export const ArcCheckBox = createComponent({
  tagName: 'arc-checkbox',
  elementClass: ArcCheckBoxWC,
  react: React,
  events: {
    onArcChange: ARC_EVENTS.change as EventName<CustomEvent<{}>>,
  },
});
