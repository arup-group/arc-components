import { createComponent } from '@lit-labs/react';
import React from 'react';
import ArcIconWC from '@arc-web/components/src/components/icon/ArcIcon.js';
import '@arc-web/components/src/components/icon/arc-icon.js';

export const ArcIcon = createComponent({
  tagName: 'arc-icon',
  elementClass: ArcIconWC,
  react: React,
});
