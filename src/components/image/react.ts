import { createComponent, EventName } from '@lit-labs/react';
import React from 'react';
import { ARC_EVENTS } from '../../internal/constants/eventConstants.js';
import ArcImageWC from './ArcImage.js';
import './arc-image.js';

export const ArcImage = createComponent({
  tagName: 'arc-image',
  elementClass: ArcImageWC,
  react: React,
  events: {
    onArcLoaded: ARC_EVENTS.loaded as EventName<CustomEvent<number>>,
  },
});
