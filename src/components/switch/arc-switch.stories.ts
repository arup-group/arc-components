import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import type ArcSwitch from './ArcSwitch.js';
import './arc-switch.js';
import { ARC_EVENTS } from '../../internal/constants/eventConstants.js';

export default {
  title: 'Components/ArcSwitch',
  component: 'arc-switch',
  parameters: {
    actions: {
      handles: [ARC_EVENTS.change],
    },
  },
} as Meta;

const Template: Story<ArcSwitch> = ({ name, value, checked, disabled }) => html`
  <arc-switch
    name=${ifDefined(name || undefined)}
    value=${ifDefined(value || undefined)}
    ?disabled=${disabled}
    ?checked=${checked}
  >
    Switch
  </arc-switch>
`;

const defaultArgs = {
  name: 'arc-test',
  value: 'switch',
  checked: false,
  disabled: false,
};

/* TYPES */
export const Default = Template.bind({});
Default.args = { ...defaultArgs };

export const Checked = Template.bind({});
Checked.args = { ...defaultArgs, checked: true };

export const Disabled = Template.bind({});
Disabled.args = { ...defaultArgs, disabled: true };
