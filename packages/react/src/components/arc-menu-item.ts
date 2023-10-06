import { createComponent } from '@lit-labs/react';
import React from 'react';
import ArcMenuItemWC from '@arc-web/components/src/components/menu-item/ArcMenuItem.js';
import '@arc-web/components/src/components/menu-item/arc-menu-item.js';

export const ArcMenuItem = createComponent({
  tagName: 'arc-menu-item',
  elementClass: ArcMenuItemWC,
  react: React,
});
