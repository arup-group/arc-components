import { html, TemplateResult } from 'lit';
import './arc-button.js';

import { BUTTON_TYPES, BUTTON_COLORS, BUTTON_SIZES } from './constants/ButtonConstants.js';

export default {
  title: 'Buttons',
  component: 'arc-button',
  argTypes: {
    type: {
      type: { required: true },
      description: 'Set the type of the button.',
      defaultValue: { summary: 'contained' },
      control: { type: 'select' },
      options: Object.keys(BUTTON_TYPES),
    },
    color: {
      type: { required: true },
      description: 'Set the color of the button.',
      defaultValue: { summary: 'default' },
      control: { type: 'select' },
      options: Object.keys(BUTTON_COLORS),
    },
    size: {
      type: { required: true },
      description: 'Set the size of the button.',
      defaultValue: { summary: 'medium' },
      control: { type: 'select' },
      options: Object.keys(BUTTON_SIZES),
    },
    href: {
      type: { required: false },
      description: 'When set, the underlying button will be rendered as an `<a>` with this attribute',
      defaultValue: { summary: '' },
      control: { type: 'text' },
    },
    active: {
      type: { required: false },
      description: 'Draws the button in an active state.',
      defaultValue: { summary: 'false' },
      control: { type: 'boolean' },
    },
    disabled: {
      type: { required: false },
      description: 'Draws the button in a disabled state.',
      defaultValue: { summary: 'false' },
      control: { type: 'boolean' },
    },
    loading: {
      type: { required: false },
      description: 'Draws the button in a loading state.',
      defaultValue: { summary: 'false' },
      control: { type: 'boolean' },
    },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  type: string,
  color: string,
  size: string,
  href: string,
  active: boolean,
  disabled: boolean,
  loading: boolean,
}

const Template: Story<ArgTypes> = ({ type, color, size, active, disabled, loading, href }: ArgTypes) => html`
  <arc-button
    type='${type}'
    color='${color}'
    size='${size}'
    href='${href}'
    ?active='${active}'
    ?disabled='${disabled}'
    ?loading='${loading}'
  >Button</arc-button>
`;

export const Contained = Template.bind({});
Contained.args = {
  type: BUTTON_TYPES.contained,
  color: BUTTON_COLORS.default,
  size: BUTTON_SIZES.medium,
  href: '',
  active: false,
  disabled: false,
  loading: false,
};

export const Tile = Template.bind({});
Tile.args = { ...Contained.args, type: BUTTON_TYPES.tile };

export const Outlined = Template.bind({});
Outlined.args = { ...Contained.args, type: BUTTON_TYPES.outlined };

export const Pill = Template.bind({});
Pill.args = { ...Contained.args, type: BUTTON_TYPES.pill };

export const Tab = Template.bind({});
Tab.args = { ...Contained.args, type: BUTTON_TYPES.tab };
