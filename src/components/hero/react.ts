import { createComponent } from '@lit-labs/react';
import React from 'react';
import ArcHeroWC from './ArcHero.js';
import './arc-hero.js';

export const ArcHero = createComponent({ tagName: 'arc-hero', elementClass: ArcHeroWC, react: React });
