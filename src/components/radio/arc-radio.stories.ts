import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit';
import ArcRadio from "./ArcRadio.js";

interface ArgTypes {
  name: string;
  value?: string;
  disabled: boolean;
  checked: boolean;
}

export default {
  title: 'Components/ArcRadio',
  component: `${ArcRadio.tag}`
} as Meta;

const Template: Story<ArgTypes> = ({ name, value, disabled, checked }: ArgTypes) => html`
  <div id="content">
    <p>For demoing purposes, only the first item responds to the <code>checked</code> and <code>value</code> properties.</p>
    <arc-radio-group label="Radio Group">
      <arc-radio name=${name} value=${value} ?disabled=${disabled} ?checked=${checked}>Option 1</arc-radio>
      <arc-radio name=${name} value="option_2" ?disabled=${disabled}>Option 2</arc-radio>
      <arc-radio name=${name} value="option_3" ?disabled=${disabled}>Option 3</arc-radio>
    </arc-radio-group>
  </div>
`;

const defaultArgs: ArgTypes = {
  name: 'arc-test',
  value: 'option_1',
  disabled: false,
  checked: false,
};

/* TYPES */
export const Default = Template.bind({});
export const Disabled = Template.bind({});
Default.args = { ...defaultArgs };
Disabled.args = { ...defaultArgs, disabled: true };
