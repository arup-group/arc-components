import { html, TemplateResult } from 'lit';
import './arc-tab.js';

export default {
  title: 'Tabs',
  component: 'arc-tab',
  argTypes: {
    active: {
      type: { required: false },
      description: 'Draws the tab in an active state.',
      defaultValue: { summary: 'false' },
      control: { type: 'boolean' },
      table: {
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
  active: boolean;
  disabled: boolean;
}

const Template: Story<ArgTypes> = ({ active, disabled }: ArgTypes) => html`
  <arc-tab></arc-tab>
`;

export const ArcTab = Template.bind({});
ArcTab.args = {
  active: false,
  disabled: false,
};
