import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit';
import { ARC_EVENTS } from '../../internal/constants/eventConstants.js';
import type ArcMenu from './ArcMenu.js';
import './arc-menu.js';
import '../menu-item/arc-menu-item.js';
import '../arc-icon/house/arc-icon-house.js';
import '../arc-icon/paper-plane-tilt/arc-icon-paper-plane-tilt.js';
import '../arc-icon/gear/arc-icon-gear.js';

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
      <arc-icon-house slot="prefix"></arc-icon-house>
      Home
    </arc-menu-item>
    <arc-menu-item value="messages">
      <arc-icon-paper-plane-tilt slot="prefix"></arc-icon-paper-plane-tilt>
      Messages
    </arc-menu-item>
    <arc-menu-item value="settings">
      <arc-icon-gear slot="prefix"></arc-icon-gear>
      Settings
      <arc-icon name="arrow-right" slot="suffix"></arc-icon>
    </arc-menu-item>
  </arc-menu>
`;

export const Default = Template.bind({});
