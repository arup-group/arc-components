import { createComponent } from '@lit-labs/react';
import React from 'react';
import ArcIconAccessibilityWC from '@arc-web/components/src/components/icon/accessibility/arc-icon-accessibility.js';
import '@arc-web/components/src/components/spinner/arc-spinner';

export const ArcIconAccessibility = createComponent({
  tagName: 'arc-icon-accessibility',
  elementClass: ArcIconAccessibilityWC,
  react: React,
});
