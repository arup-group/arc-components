import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit';
import ArcSidebar from './ArcSidebar.js';
import { ARC_EVENTS } from '../../internal/constants/eventConstants.js';

export default {
  title: 'Components/ArcSidebar',
  component: ArcSidebar.tag,
  parameters: {
    actions: {
      handles: [ARC_EVENTS.show, ARC_EVENTS.hide],
    },
  },
} as Meta;

const Template: Story<ArcSidebar> = ({ title, open }) => html`
  <arc-container>
    <arc-navbar slot="nav" logo="/arc-red.svg"></arc-navbar>
    <arc-sidebar slot="side" title="${title}" ?open=${open}>
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
Default.args = { open: true, title: 'Select an option' };
