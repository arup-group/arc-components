import React from 'react';
import { ArcContainer, ArcNavbar } from '@arc-web/react';

import { PhIconHouse } from '@arc-web/react/src/components/ph-icon/house/ph-icon-house';

export function App() {
  return (
    <ArcContainer>
      <ArcNavbar slot="nav" logo="assets/arc-red.svg">
        <span slot="name">ARC Playground</span>
      </ArcNavbar>

      <section id="playground">

        <PhIconHouse />

      </section>
    </ArcContainer>
  );
}
