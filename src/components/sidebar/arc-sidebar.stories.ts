import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit';
import { ARC_EVENTS } from '../../internal/constants/eventConstants.js';
import type ArcSidebar from './ArcSidebar.js';
import '../container/arc-container.js';
import '../navbar/arc-navbar.js';
import './arc-sidebar.js';
import '../menu/arc-menu.js';
import '../menu-item/arc-menu-item.js';
import '../icon/arc-icon.js';

export default {
  title: 'Components/ArcSidebar',
  component: 'arc-sidebar',
  parameters: {
    actions: {
      handles: [ARC_EVENTS.show, ARC_EVENTS.afterShow, ARC_EVENTS.hide, ARC_EVENTS.afterHide],
    },
  },
} as Meta;

const Template: Story<ArcSidebar> = ({ label, open }) => html`
  <arc-container>
    <arc-navbar slot="nav" logo="/arc-red.svg"></arc-navbar>
    <arc-sidebar slot="side" label="${label}" ?open=${open}>
      <arc-menu>
        <arc-menu-item value="home">
          <arc-icon name="home" slot="prefix"></arc-icon>
          Home
        </arc-menu-item>
        <arc-menu-item value="messages">
          <arc-icon name="speech" slot="prefix"></arc-icon>
          Messages
        </arc-menu-item>
      </arc-menu>
      <arc-menu>
        <arc-menu-item value="settings">
          <arc-icon name="settings" slot="prefix"></arc-icon>
          Settings
        </arc-menu-item>
      </arc-menu>
    </arc-sidebar>
  </arc-container>
`;

export const Default = Template.bind({});
Default.args = { open: true, label: 'Select an option' };
