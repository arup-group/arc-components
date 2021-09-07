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
    },
    default: {
      name: '(default)',
      type: { required: false },
      description: 'The tab\'s label.',
      control: { type: null },
      table: {
        category: 'Slots',
      },
    },
    height: {
      name: '--height',
      type: { required: false },
      description: 'Set the base height of the tab',
      defaultValue: { summary: '3rem' },
      table: {
        category: 'CSS Parts',
      },
    },
    width: {
      name: '--width',
      type: { required: false },
      description: 'Set the base width of the tab',
      defaultValue: { summary: '7.5rem' },
      table: {
        category: 'CSS Parts',
      },
    },
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
  height: string;
  width: string;
}

const Template: Story<ArgTypes> = ({ active, disabled, href, height, width }: ArgTypes) => html`
  <arc-tab
    ?active=${active}
    ?disabled=${disabled}
    href='${href}'
    style="--height:${height}; --width:${width}"
  >My tab</arc-tab>
`;

export const ArcTab = Template.bind({});
ArcTab.args = {
  active: false,
  disabled: false,
  href: '',
  height: '3rem',
  width: '7.5rem',
};
