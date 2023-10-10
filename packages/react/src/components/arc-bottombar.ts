import { createComponent } from '@lit-labs/react';
import React from 'react';
import ArcBottombarWC from '@arc-web/components/src/components/bottombar/ArcBottombar.js';
import '@arc-web/components/src/components/bottombar/arc-bottombar.js';

export const ArcBottombar = createComponent({
  tagName: 'arc-bottombar',
  elementClass: ArcBottombarWC,
  react: React,
});
