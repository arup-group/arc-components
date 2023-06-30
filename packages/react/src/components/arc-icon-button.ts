import { createComponent } from '@lit-labs/react';
import React from 'react';
import ArcIconButtonWC from '@arc-web/components/src/components/icon-button/ArcIconButton.js';
import '@arc-web/components/src/components/icon-button/arc-icon-button.js';

export const ArcIconButton = createComponent({
  tagName: 'arc-icon-button',
  elementClass: ArcIconButtonWC,
  react: React,
});
