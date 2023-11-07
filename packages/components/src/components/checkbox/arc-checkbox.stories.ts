import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit';
import ArcCheckBox from './ArcCheckBox.js';
import './arc-checkbox.js';
import { ifDefined } from 'lit/directives/if-defined.js';

export default {
  title: 'Components/ArcCheckbox',
  component: 'arc-checkbox',
} as Meta;

const Template: Story<ArcCheckBox> = ({ name, value, checked, disabled }) =>
  html`<arc-checkbox
    name=${ifDefined(name || undefined)}
    checked=${ifDefined(checked || undefined)}
    disabled=${ifDefined(disabled || undefined)}
    >checkbox</arc-checkbox
  >`;

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
