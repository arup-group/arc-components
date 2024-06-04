import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit';
import type ArcMenuItem from './ArcMenuItem.js';
import '../menu/arc-menu.js';
import './arc-menu-item.js';
import '../ph-icon/house/ph-icon-house.js';
import '../ph-icon/paper-plane-tilt/ph-icon-paper-plane-tilt.js';
import '../ph-icon/gear/ph-icon-gear.js';

export default {
  title: 'Components/ArcMenuItem',
  component: 'arc-menu-item',
} as Meta;

const Template: Story<ArcMenuItem> = ({ value, href, disabled }) => html`
  <arc-menu>
    <arc-menu-item>Label 1</arc-menu-item>
    <arc-menu-item value="${value}" href="${href}" ?disabled=${disabled}
      >Label 2</arc-menu-item
    >
    <arc-menu-item>Label 3</arc-menu-item>
  </arc-menu>
`;

const PrefixSuffixTemplate: Story<ArcMenuItem> = () => html`
  <arc-menu class="menu">
    <arc-menu-item>
      <ph-icon-house slot="prefix"></ph-icon-house>
      Home
    </arc-menu-item>
    <arc-menu-item>
      <ph-icon-paper-plane-tilt slot="prefix"></ph-icon-paper-plane-tilt>
      Messages
    </arc-menu-item>
    <arc-menu-item>
      <ph-icon-gear slot="prefix"></ph-icon-gear>
      Settings
      <ph-icon name="arrow-right" slot="suffix"></ph-icon>
    </arc-menu-item>
  </arc-menu>
  <style>
    .menu {
      width: 15rem;
    }
  </style>
`;

const defaultArgs = {
  value: 'Menu item',
  href: '',
  target: '',
  download: '',
  disabled: false,
};

/* TYPES */
export const Default = Template.bind({});
Default.args = { ...defaultArgs };

export const Link = Template.bind({});
Link.args = { ...defaultArgs, href: '/' };

/* STATES */
export const Disabled = Template.bind({});
Disabled.args = { ...defaultArgs, disabled: true };

/* OTHER */
export const PrefixSuffix = PrefixSuffixTemplate.bind({});
PrefixSuffix.args = { ...defaultArgs };
