import { createComponent } from '@lit-labs/react';
import React from 'react';
import ArcCheckboxGroupWC from '@arc-web/components/src/components/checkbox-group/ArcCheckboxGroup.js';
import '@arc-web/components/src/components/checkbox-group/arc-checkbox-group.js';

export const ArcCheckboxGroup = createComponent({
  tagName: 'arc-checkbox-group',
  elementClass: ArcCheckboxGroupWC,
  react: React,
});
