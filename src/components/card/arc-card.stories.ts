import { html, TemplateResult } from 'lit';
import './arc-card.js';

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  theme: string;
}

const Template: Story<ArgTypes> = () => html`
  <arc-card>
  </arc-card>
`;

export const Card = Template.bind({});
