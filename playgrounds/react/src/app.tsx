import React from 'react';
import {
  ArcContainer,
  ArcNavbar,
  ArcIconButton,
  ArcSSO,
} from '@arc-web/react';
import { PhIconGear, PhIconHouse } from '@arc-web/react/src/components/ph-icon';

export function App() {
  return (
    <ArcContainer>
      <ArcNavbar slot="nav" logo="assets/arc-red.svg" tabs={0}>
        <span slot="name">ARC Playground</span>

        <ArcIconButton label="Home">
          <PhIconHouse></PhIconHouse>
        </ArcIconButton>
        <ArcIconButton label="Settings">
          <PhIconGear></PhIconGear>
        </ArcIconButton>

        <ArcSSO
          slot="user"
          client-id="b4a4c03f-4915-42db-aa79-d49a650974c2"
          tenant-id="4ae48b41-0137-4599-8661-fc641fe77bea"
        ></ArcSSO>
      </ArcNavbar>

      <section id="playground"></section>
    </ArcContainer>
  );
}
