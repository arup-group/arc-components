import { html, TemplateResult } from 'lit';

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  label: string,
  row: boolean,
}

const Template: Story<ArgTypes> = ({ label, row }: ArgTypes) => html`
  <arc-radio-group label=${label} ?row=${row}>
    <arc-radio>Item 1</arc-radio>
    <arc-radio>Item 2</arc-radio>
    <arc-radio>Item 3</arc-radio>
  </arc-radio-group>
`;

const defaultArgs: ArgTypes = {
  label: 'Radio Group',
  row: false,
};

/* TYPES */
export const Default = Template.bind({});
export const Row = Template.bind({});
Default.args = { ...defaultArgs };
Row.args = { ...defaultArgs, row: true };
