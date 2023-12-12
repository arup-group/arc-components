import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit';
import { ARC_EVENTS } from '../../internal/constants/eventConstants.js';
import type ArcMenu from './ArcMenu.js';
import './arc-menu.js';
import '../menu-item/arc-menu-item.js';
import '../ph-icon/house/ph-icon-house.js';
import '../ph-icon/paper-plane-tilt/ph-icon-paper-plane-tilt.js';
import '../ph-icon/gear/ph-icon-gear.js';

export default {
  title: 'Components/ArcMenu',
  component: 'arc-menu',
  parameters: {
    actions: {
      handles: [ARC_EVENTS.select],
    },
  },
} as Meta;

const Template: Story<ArcMenu> = () => html`
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
`;

export const Default = Template.bind({});
