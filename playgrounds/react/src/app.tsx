import React from 'react';
import { ArcContainer, ArcNavbar } from '@arc-web/react';
import { PhIconGear, PhIconHouse } from '@arc-web/react/src/components/ph-icon';

export function App() {
  return (
    <ArcContainer>
      <ArcNavbar slot="nav" logo="assets/arc-red.svg">
        <span slot="name">ARC Playground</span>
      </ArcNavbar>

      <section id="playground"></section>
    </ArcContainer>
  );
}
