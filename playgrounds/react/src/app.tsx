import React from 'react';
import {
  ArcContainer,
  ArcNavbar,
  ArcIconButton,
  ArcSSO,
  ArcCheckBox,
  ArcCheckboxGroup,
  ArcRadio,
  ArcRadioGroup,
} from '@arc-web/react';

export function App() {
  return (
    <ArcContainer>
      <ArcNavbar slot="nav" logo="assets/arc-red.svg" tabs={0}>
        <span slot="name">ARC Playground</span>

        <ArcIconButton label="Home" name="home"></ArcIconButton>
        <ArcIconButton label="Settings" name="settings"></ArcIconButton>

        <ArcSSO
          slot="user"
          client-id="b4a4c03f-4915-42db-aa79-d49a650974c2"
          tenant-id="4ae48b41-0137-4599-8661-fc641fe77bea"
        ></ArcSSO>
      </ArcNavbar>

      <ArcRadioGroup
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <ArcRadio>test rad 1</ArcRadio>
      </ArcRadioGroup>

      <ArcCheckboxGroup
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <ArcCheckBox name="test" value="testval" checked>
          test
        </ArcCheckBox>
        <ArcCheckBox>test2</ArcCheckBox>
      </ArcCheckboxGroup>

      <section id="playground"></section>
    </ArcContainer>
  );
}
