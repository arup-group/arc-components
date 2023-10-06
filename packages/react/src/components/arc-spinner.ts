import { createComponent } from '@lit-labs/react';
import React from 'react';
import ArcSpinnerWC from '@arc-web/components/src/components/spinner/ArcSpinner';
import '@arc-web/components/src/components/spinner/arc-spinner';

export const ArcSpinner = createComponent({
  tagName: 'arc-spinner',
  elementClass: ArcSpinnerWC,
  react: React,
});
