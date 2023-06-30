import { createComponent } from '@lit-labs/react';
import React from 'react';
import ArcButtonWC from '@arc-web/components/src/components/button/ArcButton.js';
import '@arc-web/components/src/components/button/arc-button.js';

export const ArcButton = createComponent({
  tagName: 'arc-button',
  elementClass: ArcButtonWC,
  react: React,
});
