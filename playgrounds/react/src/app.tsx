import React from 'react';
import { ArcContainer, ArcNavbar, ArcIconButton, ArcSSO } from '@arc-web/react';

export function App() {
  return (
    <ArcContainer>
      <ArcNavbar slot="nav" logo="/arc-red.svg" tabs={0}>
        <span slot="name">Web Components</span>

        <ArcIconButton label="Home" name="home"></ArcIconButton>
        <ArcIconButton label="Settings" name="settings"></ArcIconButton>

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
