import { html, TemplateResult } from 'lit';
import './arc-divider.js';

import { DIVIDER_TYPES } from './constants/DividerConstants.js';

export default {
  title: 'Divider',
  component: 'arc-divider',
  argTypes: {
    type: {
      type: { required: true },
      description: 'Set the type of the divider',
      defaultValue: { summary: 'solid' },
      control: { type: 'select' },
      options: Object.keys(DIVIDER_TYPES),
      table: {
        type: { summary: 'string' },
        category: 'Properties',
      },
    }
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  type: string,
}

const Template: Story<ArgTypes> = ({ type }: ArgTypes) => html`
  <div>Some content</div>
  <arc-divider type='${type}'></arc-divider>
  <div>Some more content</div>
`;

export const Default = Template.bind({});
Default.args = {
  type: DIVIDER_TYPES.solid,
};

export const Dotted = Template.bind({});
Dotted.args = { ...Default.args, type: DIVIDER_TYPES.dotted }

export const Dashed = Template.bind({});
Dashed.args = { ...Default.args, type: DIVIDER_TYPES.dashed }

