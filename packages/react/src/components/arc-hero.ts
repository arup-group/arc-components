import { createComponent } from '@lit-labs/react';
import React from 'react';
import ArcHeroWC from '@arc-web/components/src/components/hero/ArcHero.js';
import '@arc-web/components/src/components/hero/arc-hero.js';

export const ArcHero = createComponent({
  tagName: 'arc-hero',
  elementClass: ArcHeroWC,
  react: React,
});
