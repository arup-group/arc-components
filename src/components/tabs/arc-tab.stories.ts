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
    },
    disabled: {
      type: { required: false },
      description: 'Draws the tab in a disabled state.',
      defaultValue: { summary: 'false' },
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        category: 'Properties',
      },
    },
    href: {
      type: { required: false },
      description: 'When set, the underlying button will be rendered as an `<a>` with this attribute instead of a `<button>`',
      defaultValue: { summary: '' },
      control: { type: 'text' },
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
  active: boolean;
  disabled: boolean;
  href: string;
}

const Template: Story<ArgTypes> = ({ active, disabled, href }: ArgTypes) => html`
  <arc-tab ?active=${active} ?disabled=${disabled} href='${href}'>My tab</arc-tab>
`;

export const ArcTab = Template.bind({});
ArcTab.args = {
  active: false,
  disabled: false,
  href: ''
};
