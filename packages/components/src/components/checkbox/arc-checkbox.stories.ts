import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit';
import { ARC_EVENTS } from '../../internal/constants/eventConstants.js';
import type ArcCheckbox from './ArcCheckbox.js';
import './arc-checkbox.js';

export default {
  title: 'Components/ArcCheckbox',
  component: 'arc-checkbox',
  parameters: {
    actions: {
      handles: [ARC_EVENTS.change],
    },
  },
} as Meta;

const Template: Story<ArcCheckbox> = ({ name, checked, disabled }) => html`
  <arc-container>
    <arc-checkbox name=${name} ?disabled=${disabled} ?checked=${checked}>
      Arc Checkbox
    </arc-checkbox>
  </arc-container>
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
