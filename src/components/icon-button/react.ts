import { createComponent } from '@lit-labs/react';
import React from 'react';
import ArcIconButtonWC from './ArcIconButton.js';
import './arc-icon-button.js';

export const ArcIconButton = createComponent({
  tagName: 'arc-icon-button',
  elementClass: ArcIconButtonWC,
  react: React,
});
