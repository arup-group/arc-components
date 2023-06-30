import { createComponent, EventName } from '@lit-labs/react';
import React from 'react';
import { ARC_EVENTS } from '@arc-web/components/src/internal/constants/eventConstants.js';
import ArcImageWC from '@arc-web/components/src/components/image/ArcImage.js';
import '@arc-web/components/src/components/image/arc-image.js';

export const ArcImage = createComponent({
  tagName: 'arc-image',
  elementClass: ArcImageWC,
  react: React,
  events: {
    onArcLoaded: ARC_EVENTS.loaded as EventName<CustomEvent<number>>,
  },
});
