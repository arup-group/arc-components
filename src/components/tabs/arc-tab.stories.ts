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
        type: { summary: 'boolean' },
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
  <arc-tab ?active=${active} ?disabled=${disabled}>My tab</arc-tab>
`;

export const ArcTab = Template.bind({});
ArcTab.args = {
  active: false,
  disabled: false,
};
