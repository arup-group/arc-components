import { html, TemplateResult } from 'lit';
import './arc-button.js';

export default {
  title: 'Buttons',
  component: 'arc-button',
  argTypes: {
    type: {
      type: { required: true },
      description: 'Set the type of the button',
      defaultValue: { summary: 'contained' },
      control: { type: 'select' },
      options: ['contained', 'tile', 'outlined', 'pill', 'tab'],
      table: {
        type: { summary: 'string' },
        category: 'Properties',
      },
    },
    color: {
      type: { required: true },
      description: 'Set the color of the button. This property uses the --arc-color-xxx css variable, where xxx can be any default (or custom) provided RGB value',
      defaultValue: { summary: 'default' },
      control: { type: 'select' },
      options: ['default', 'primary', 'secondary', 'error', 'warning', 'info', 'success'],
      table: {
        type: { summary: 'string' },
        category: 'Properties',
      },
    },
    size: {
      type: { required: true },
      description: 'Set the size of the button',
      defaultValue: { summary: 'medium' },
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      table: {
        type: { summary: 'string' },
        category: 'Properties',
      },
    },
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
      name: 'width',
      type: { required: false },
      description: 'Set the width of the button',
      defaultValue: { summary: 'auto' },
      control: { type: 'text' },
      table: {
        category: 'CSS Parts',
      },
    },
    minWidth: {
      name: '--min-width',
      type: { required: false },
      description: 'Set the min width of the button',
      defaultValue: { summary: '0' },
      control: { type: 'text' },
      table: {
        category: 'CSS Parts',
      },
    },
    buttonColor: {
      name: '--btn-color-palette',
      type: { required: false },
      description: 'Set the font color of the button. If none is given, it uses the color property instead',
      defaultValue: { summary: '' },
      control: { type: 'color' },
      table: {
        category: 'CSS Parts',
      },
    },
    buttonBackground: {
      name: '--btn-background-palette',
      type: { required: false },
      description: 'Set the font color of the button. If none is given, it uses the color property instead',
      defaultValue: { summary: '' },
      control: { type: 'color' },
      table: {
        category: 'CSS Parts',
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
  label: string;
  type: string;
  color: string;
  size: string;
  active: boolean;
  disabled: boolean;
  href: string;
  width: string;
  minWidth: string;
  buttonColor: string;
  buttonBackground: string;
}

const Template: Story<ArgTypes> = ({ label, type, color, size, active, disabled, href, width, minWidth, buttonColor, buttonBackground }: ArgTypes) => html`
  <arc-button style='
  width: ${width};
  --min-width: ${minWidth};
  --btn-color: ${buttonColor};
  --btn-background: ${buttonBackground}'
    type='${type}'
    color='${color}'
    size='${size}'
    ?active=${active}
    ?disabled=${disabled}
    href='${href}'
  >${label}</arc-button>
`;

export const Contained = Template.bind({});
Contained.args = {
  label: 'My Button!',
  type: 'contained',
  color: 'default',
  size: 'medium',
  active: false,
  disabled: false,
  href: '',
  width: '',
  minWidth: '',
  buttonColor: '',
  buttonBackground: '',
};

export const Tile = Template.bind({});
Tile.args = { ...Contained.args, type: 'tile' }

export const Outlined = Template.bind({});
Outlined.args = { ...Contained.args, type: 'outlined' }

export const Pill = Template.bind({});
Pill.args = { ...Contained.args, type: 'pill' }

export const Tab = Template.bind({});
Tab.args = { ...Contained.args, type: 'tab' }

export const CustomWidth = Template.bind({});
CustomWidth.args = { ...Contained.args, width: '10rem', }

export const CustomPalette = Template.bind({});
CustomPalette.args = { ...Contained.args, color: 'custom' }

export const CustomOverwrite = Template.bind({});
CustomOverwrite.args = { ...Contained.args, buttonColor: 'red', buttonBackground: 'green' }