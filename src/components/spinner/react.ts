import { createComponent } from '@lit-labs/react';
import React from 'react';
import ArcSpinnerWC from './ArcSpinner.js';
import './arc-spinner.js';

export const ArcSpinner = createComponent({ tagName: 'arc-spinner', elementClass: ArcSpinnerWC, react: React });
