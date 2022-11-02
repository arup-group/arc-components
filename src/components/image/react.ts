import { createComponent, EventName } from '@lit-labs/react';
import React from 'react';
import { ARC_EVENTS } from '../../internal/constants/eventConstants.js';
import ArcImageWC from './ArcImage.js';
import './arc-image.js';

export const ArcImage = createComponent(React, 'arc-image', ArcImageWC, {
  onArcLoaded: ARC_EVENTS.loaded as EventName<CustomEvent<number>>,
});
