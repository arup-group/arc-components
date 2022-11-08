import { createComponent } from '@lit-labs/react';
import React from 'react';
import ArcRadioGroupWC from './ArcRadioGroup.js';
import './arc-radio-group.js';

export const ArcRadioGroup = createComponent({
  tagName: 'arc-radio-group',
  elementClass: ArcRadioGroupWC,
  react: React,
});
