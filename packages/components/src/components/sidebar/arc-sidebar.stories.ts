import { Meta, StoryFn } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { ARC_EVENTS } from '../../internal/constants/eventConstants.js';
import '../container/arc-container.js';
import '../navbar/arc-navbar.js';
import './arc-sidebar.js';
import '../menu/arc-menu.js';
import '../menu-item/arc-menu-item.js';
import '../ph-icon/house/ph-icon-house.js';
import '../ph-icon/paper-plane-tilt/ph-icon-paper-plane-tilt.js';
import '../ph-icon/gear/ph-icon-gear.js';
import ArcSidebar from './ArcSidebar.js';

export default {
  title: 'Components/ArcSidebar',
  component: 'arc-sidebar',
} as Meta;

export const Default: StoryFn<ArcSidebar>= ({ label, open }) => html`
  <arc-container>
    <arc-sidebar
      slot="side"
      label=${ifDefined(label || undefined)}
      ?open=${open}
    >
      <arc-menu>
        <arc-menu-item value="home">
          <ph-icon-house slot="prefix"></ph-icon-house>
          Home
        </arc-menu-item>
        <arc-menu-item value="messages">
          <ph-icon-paper-plane-tilt slot="prefix"></ph-icon-paper-plane-tilt>
          Messages
        </arc-menu-item>
        <arc-menu-item value="settings">
          <ph-icon-gear slot="prefix"></ph-icon-gear>
          Settings
        </arc-menu-item>
      </arc-menu>
    </arc-sidebar>
  </arc-container>
`;
