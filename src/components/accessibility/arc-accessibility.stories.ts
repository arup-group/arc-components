import { html, TemplateResult } from 'lit';

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  open: boolean;
}

const Template: Story<ArgTypes> = ({ open }: ArgTypes) => html`
  <arc-accessibility ?open="${open}"></arc-accessibility>
`;

const defaultArgs: ArgTypes = {
  open: true,
};

/* TYPES */
export const Default = Template.bind({});
Default.args = { ...defaultArgs };
