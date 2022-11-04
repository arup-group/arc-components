import { createComponent } from '@lit-labs/react';
import React from 'react';
import ArcButtonWC from './ArcButton.js';
import './arc-button.js';

export const ArcButton = createComponent({ tagName: 'arc-button', elementClass: ArcButtonWC, react: React });
