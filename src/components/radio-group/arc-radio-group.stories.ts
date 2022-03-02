import { Meta, Story } from "@storybook/web-components";
import { html } from 'lit';
import ArcRadioGroup from "./ArcRadioGroup.js";

interface ArgTypes {
  label: string;
  row: boolean;
}

export default {
  title: 'Components/ArcRadioGroup',
  component: `${ArcRadioGroup.tag}`
} as Meta;

const Template: Story<ArgTypes> = ({ label, row }: ArgTypes) => html`
  <div id="content">
    <arc-radio-group label="${label}" ?row="${row}">
      <arc-radio>Item 1</arc-radio>
      <arc-radio>Item 2</arc-radio>
      <arc-radio>Item 3</arc-radio>
    </arc-radio-group>
  </div>
`;

const defaultArgs: ArgTypes = {
  label: 'Radio Group',
  row: false,
};

/* TYPES */
export const Default = Template.bind({});
Default.args = { ...defaultArgs };

export const Row = Template.bind({});
Row.args = { ...defaultArgs, row: true };
