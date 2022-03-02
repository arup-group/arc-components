import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit';
import ArcMenuItem from './ArcMenuItem.js';

interface ArgTypes {
  disabled?: boolean;
  prefix?: boolean;
  suffix?: boolean;
}

export default {
  title: 'Components/ArcMenuItem',
  component: ArcMenuItem.tag,
} as Meta;

const Template: Story<ArgTypes> = ({ disabled, prefix, suffix }: ArgTypes) => html`
  <arc-menu style="width: 15rem;">
    <arc-menu-item ?disabled="${disabled}">
      ${prefix ? html`<arc-icon name="home" slot="prefix"></arc-icon>` : ''} Label
      ${suffix ? html`<arc-icon name="settings" slot="suffix"></arc-icon>` : ''}
    </arc-menu-item>
  </arc-menu>
`;

const DisabledTemplate: Story<ArgTypes> = () => html`
  <arc-menu style="width: 15rem;">
    <arc-menu-item>Home</arc-menu-item>
    <arc-menu-item disabled>Messages</arc-menu-item>
    <arc-menu-item>Settings</arc-menu-item>
  </arc-menu>
`;

const PrefixSuffixTemplate: Story<ArgTypes> = () => html`
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

const defaultArgs: ArgTypes = {
  disabled: false,
};

/* TYPES */
export const Default = Template.bind({});
export const PrefixSuffix = PrefixSuffixTemplate.bind({});

Default.args = { ...defaultArgs };
PrefixSuffix.args = { ...defaultArgs };

/* STATES */
export const Disabled = DisabledTemplate.bind({});
