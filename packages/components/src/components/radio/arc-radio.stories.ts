import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit';
import { ARC_EVENTS } from '../../internal/constants/eventConstants.js';
import type ArcRadio from './ArcRadio.js';
import '../radio-group/arc-radio-group.js';
import './arc-radio.js';

export default {
  title: 'Form/ArcRadio',
  component: 'arc-radio',
  parameters: {
    actions: {
      handles: [ARC_EVENTS.change],
    },
  },
} as Meta;

const Template: Story<ArcRadio> = ({ name, value, checked, disabled }) => html`
  <arc-radio-group label="Radio Group">
    <arc-radio
      name=${name}
      value=${value}
      ?disabled=${disabled}
      ?checked=${checked}
      >Option 1</arc-radio
    >
    <arc-radio name=${name} value="option_2">Option 2</arc-radio>
    <arc-radio name=${name} value="option_3">Option 3</arc-radio>
  </arc-radio-group>
  <p>
    For demoing purposes, only the first item responds to the
    <code class="code-block">checked</code>,
    <code class="code-block">disabled</code> and
    <code class="code-block">value</code> properties.
  </p>
`;

const defaultArgs = {
  name: 'arc-test',
  value: 'option_1',
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
