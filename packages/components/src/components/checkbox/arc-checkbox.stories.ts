import { Meta, StoryFn } from '@storybook/web-components';
import { html } from 'lit';
import { ARC_EVENTS } from '../../internal/constants/eventConstants.js';
import type ArcCheckbox from './ArcCheckbox.js';
import './arc-checkbox.js';

export default {
  title: 'Form/ArcCheckbox',
  component: 'arc-checkbox',
  decorators: [],
  parameters: {
    actions: {
      handles: [ARC_EVENTS.change],
    },
  },
} as Meta;

const Template: StoryFn<ArcCheckbox> = ({ name, checked, disabled }) => html`
  <arc-checkbox name=${name} ?checked=${checked} ?disabled=${disabled}>
    Checkbox
  </arc-checkbox>
`;

const defaultArgs = {
  name: 'checkbox',
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
