import { createComponent } from '@lit-labs/react';
import React from 'react';
import ArcRadioGroupWC from '@arc-web/components/src/components/radio-group/ArcRadioGroup.js';
import '@arc-web/components/src/components/radio-group/arc-radio-group.js';

export const ArcRadioGroup = createComponent({
  tagName: 'arc-radio-group',
  elementClass: ArcRadioGroupWC,
  react: React,
});
