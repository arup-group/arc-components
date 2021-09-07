import { html, TemplateResult } from 'lit';
import './arc-button.js';

export default {
  title: 'Buttons',
  component: 'arc-button',
  argTypes: {
    active: {
      type: { required: false },
      description: 'Draws the button in an active state.',
      defaultValue: { summary: 'false' },
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        category: 'Properties',
      },
    },
    disabled: {
      type: { required: false },
      description: 'Draws the button in a disabled state.',
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
      description: 'The button\'s label.',
      control: { type: null },
      table: {
        category: 'Slots',
      },
    },
    width: {
      name: '--min-width',
      type: { required: false },
      description: 'Set the base width of the button',
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
  label: string;
  active: boolean;
  disabled: boolean;
  href: string;
  width: string;
}

const Template: Story<ArgTypes> = ({ label, active, disabled, href, width }: ArgTypes) => html`
  <arc-button
    ?active=${active}
    ?disabled=${disabled}
    href='${href}'
    style="--min-width:${width}"
  >${label}</arc-button>
`;

export const ArcButton = Template.bind({});
ArcButton.args = {
  label: 'Button',
  active: false,
  disabled: false,
  href: '',
  width: '7.5rem',
};
