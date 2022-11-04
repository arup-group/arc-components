import { createComponent, EventName } from '@lit-labs/react';
import React from 'react';
import { ARC_EVENTS } from '../../internal/constants/eventConstants.js';
import ArcMenuWC from './ArcMenu.js';
import ArcMenuItem from '../menu-item/ArcMenuItem.js';
import './arc-menu.js';

export const ArcMenu = createComponent({
  tagName: 'arc-menu',
  elementClass: ArcMenuWC,
  react: React,
  events: {
    onArcSelect: ARC_EVENTS.select as EventName<CustomEvent<ArcMenuItem>>,
  },
});
