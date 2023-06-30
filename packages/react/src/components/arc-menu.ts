import { createComponent, EventName } from '@lit-labs/react';
import React from 'react';
import { ARC_EVENTS } from '@arc-web/components/src/internal/constants/eventConstants.js';
import ArcMenuWC from '@arc-web/components/src/components/menu/ArcMenu.js';
import type ArcMenuItem from '@arc-web/components/src/components/menu-item/ArcMenuItem';
import '@arc-web/components/src/components/menu/arc-menu.js';

export const ArcMenu = createComponent({
  tagName: 'arc-menu',
  elementClass: ArcMenuWC,
  react: React,
  events: {
    onArcSelect: ARC_EVENTS.select as EventName<
      CustomEvent<{ item: ArcMenuItem }>
    >,
  },
});
