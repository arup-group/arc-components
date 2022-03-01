import { Meta } from '@storybook/web-components';
import { html, TemplateResult } from 'lit';
import ArcMenu from "./ArcMenu.js";

interface Story {
  (): TemplateResult;
}

export default {
  title: 'Components/ArcMenu',
  component: `${ArcMenu.tag}`
} as Meta;

const Template: Story = () => html`
  <arc-menu style="width: 15rem;">
    <arc-menu-item value="home">
      <arc-icon name="home" slot="prefix"></arc-icon>
      Home
    </arc-menu-item>
    <arc-menu-item value="messages">
      <arc-icon name="speech" slot="prefix"></arc-icon>
      Messages
    </arc-menu-item>
    <arc-menu-item value="calendar" disabled>
      <arc-icon name="calender" slot="prefix"></arc-icon>
      Calendar
    </arc-menu-item>
    <arc-menu-item value="settings">
      <arc-icon name="settings" slot="prefix"></arc-icon>
      Settings
      <arc-icon name="arrow-right" slot="suffix"></arc-icon>
    </arc-menu-item>
  </arc-menu>
`;

/* TYPES */
export const Default = Template.bind({});
