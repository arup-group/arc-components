import { createComponent } from '@lit-labs/react';
import React from 'react';
import ArcTextFieldWC from '@arc-web/components/src/components/text-field/ArcTextField.js';
import '@arc-web/components/src/components/text-field/arc-textfield.js';

export const ArcTextField = createComponent({
  tagName: 'arc-textfield',
  elementClass: ArcTextFieldWC,
  react: React,
});
