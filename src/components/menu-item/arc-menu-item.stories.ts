import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit';
import ArcMenuItem from "./ArcMenuItem.js";

export default {
  title: 'Components/ArcMenuItem',
  component: ArcMenuItem.tag,
} as Meta;

const Template: Story<ArcMenuItem> = ({ value, disabled }) => html`
  <arc-menu style="width: 15rem;">
    <arc-menu-item value="${value}" ?disabled="${disabled}">
      Label
    </arc-menu-item>
  </arc-menu>
`;

const PrefixSuffixTemplate: Story<ArcMenuItem> = () => html`
  <arc-menu style="width: 15rem;">
    <arc-menu-item>
      <arc-icon name="home" slot="prefix"></arc-icon>
      Home
    </arc-menu-item>
    <arc-menu-item>
      <arc-icon name="speech" slot="prefix"></arc-icon>
      Messages
    </arc-menu-item>
    <arc-menu-item>
      <arc-icon name="settings" slot="prefix"></arc-icon>
      Settings
      <arc-icon name="arrow-right" slot="suffix"></arc-icon>
    </arc-menu-item>
  </arc-menu>
`;

const DisabledTemplate: Story<ArcMenuItem> = () => html`
  <arc-menu style="width: 15rem;">
    <arc-menu-item>Home</arc-menu-item>
    <arc-menu-item disabled>Messages</arc-menu-item>
    <arc-menu-item>Settings</arc-menu-item>
  </arc-menu>
`;

const defaultArgs = {
  value: 'Menu item',
  disabled: false,
};

/* TYPES */
export const Default = Template.bind({});
Default.args = { ...defaultArgs };

export const PrefixSuffix = PrefixSuffixTemplate.bind({});
PrefixSuffix.args = { ...defaultArgs };

/* STATES */
export const Disabled = DisabledTemplate.bind({});
