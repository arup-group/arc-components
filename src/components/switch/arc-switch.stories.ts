import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit';
import type ArcSwitch from './ArcSwitch.js';
import './arc-switch';
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

const Template: Story<ArcSwitch> = ({ name, value, disabled, checked  }) => html`
  <arc-switch name="${name}" value=${value} ?disabled=${disabled} ?checked=${checked} >
  Switch
  </arc-switch>
`;
const defaultArgs = {
  name: 'arc-test',
  value: 'switch',
  disabled: false,
  checked: false,
};
/* TYPES */
export const Default = Template.bind({});
Default.args = {...defaultArgs };

export const Disabled = Template.bind({});
Disabled.args = { ...defaultArgs, disabled: true };
