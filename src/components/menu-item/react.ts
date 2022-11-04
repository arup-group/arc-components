import { createComponent } from '@lit-labs/react';
import React from 'react';
import ArcMenuItemWC from './ArcMenuItem.js';
import './arc-menu-item.js';

export const ArcMenuItem = createComponent({ tagName: 'arc-menu-item', elementClass: ArcMenuItemWC, react: React });
