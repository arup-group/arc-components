import { Meta } from '@storybook/web-components';
import { html, TemplateResult } from 'lit';
import ArcRadio from "./ArcRadio.js";

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  name: string;
  value?: string;
  disabled?: boolean;
  checked?: boolean;
}

export default {
  title: 'Components/ArcRadio',
  component: `${ArcRadio.tag}`
} as Meta;

const Template: Story<ArgTypes> = ({ name, disabled, checked }: ArgTypes) => html`
  <p>For demoing purposes, only the first item responds to the checked switch in the Controls panel</p>
  <arc-radio-group label="Radio Group">
    <arc-radio name=${name} value="option_1" ?disabled=${disabled} ?checked=${checked}>Option 1</arc-radio>
    <arc-radio name=${name} value="option_2" ?disabled=${disabled}>Option 2</arc-radio>
    <arc-radio name=${name} value="option_3" ?disabled=${disabled}>Option 3</arc-radio>
  </arc-radio-group>
`;

const defaultArgs: ArgTypes = {
  name: 'arc-test',
  value: '',
  disabled: false,
  checked: false,
};

/* TYPES */
export const Default = Template.bind({});
export const Disabled = Template.bind({});
Default.args = { ...defaultArgs };
Disabled.args = { ...defaultArgs, disabled: true };
