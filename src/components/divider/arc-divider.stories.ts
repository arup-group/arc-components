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
      defaultValue: { summary: 'none' },
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
  type: string;
}

const Template: Story<ArgTypes> = ({ type }: ArgTypes) => html`
  <style>
    .parent > *:not(arc-divider[type="none"]) {
      background: lightblue;
    }
  </style>
  <div class='parent'>
    <div>Some content</div>
    <arc-divider type='${type}' style='--arc-color-default: var(--arc-black-100)'></arc-divider>
    <div>Some more content</div>
  </div>
`;

export const Default = Template.bind({});
Default.args = {
  type: 'none',
};

export const Dotted = Template.bind({});
Dotted.args = { ...Default.args, type: DIVIDER_TYPES.dotted }

export const Dashed = Template.bind({});
Dashed.args = { ...Default.args, type: DIVIDER_TYPES.dashed }

export const Solid = Template.bind({});
Solid.args = { ...Default.args, type: DIVIDER_TYPES.solid }
