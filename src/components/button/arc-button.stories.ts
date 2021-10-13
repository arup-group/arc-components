import { html, TemplateResult } from 'lit';
import './arc-button.js';

import { BUTTON_TYPES, BUTTON_COLORS, BUTTON_SIZES } from './constants/ButtonConstants.js';

export default {
  title: 'Buttons',
  component: 'arc-button',
  argTypes: {
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
    basePart: {
      name: 'base',
      type: { required: false },
      description: 'The component\'s base wrapper.',
      control: { type: null },
      table: {
        category: 'CSS Parts',
      },
    },
    prefixPart: {
      name: 'prefix',
      type: { required: false },
      description: 'The prefix container.',
      control: { type: null },
      table: {
        category: 'CSS Parts',
      },
    },
    labelPart: {
      name: 'label',
      type: { required: false },
      description: 'The button\'s label.',
      control: { type: null },
      table: {
        category: 'CSS Parts',
      },
    },
    suffixPart: {
      name: 'suffix',
      type: { required: false },
      description: 'The suffix container.',
      control: { type: null },
      table: {
        category: 'CSS Parts',
      },
    },
    width: {
      name: 'width',
      type: { required: false },
      description: 'Set the width of the button',
      defaultValue: { summary: 'auto' },
      control: { type: 'text' },
      table: {
        category: 'CSS Variables',
      },
    },
    minWidth: {
      name: '--min-width',
      type: { required: false },
      description: 'Set the min width of the button',
      defaultValue: { summary: '0' },
      control: { type: 'text' },
      table: {
        category: 'CSS Variables',
      },
    },
    buttonColor: {
      name: '--btn-color',
      type: { required: false },
      description: 'Set the font color of the button. If none is given, it uses the color property instead',
      defaultValue: { summary: '' },
      control: { type: 'color' },
      table: {
        category: 'CSS Variables',
      },
    },
    buttonBackground: {
      name: '--btn-background',
      type: { required: false },
      description: 'Set the font color of the button. If none is given, it uses the color property instead',
      defaultValue: { summary: '' },
      control: { type: 'color' },
      table: {
        category: 'CSS Variables',
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
  label: string,
  type: string,
  color: string,
  size: string,
  active: boolean,
  disabled: boolean,
  loading: boolean,
  href: string,
  width: string,
  minWidth: string,
  buttonColor: string,
  buttonBackground: string,
}

const Template: Story<ArgTypes> = ({
                                     label,
                                     type,
                                     color,
                                     size,
                                     active,
                                     disabled,
                                     loading,
                                     href,
                                     width,
                                     minWidth,
                                     buttonColor,
                                     buttonBackground,
                                   }: ArgTypes) => html`
  <arc-button
    style='width: ${width}; --min-width: ${minWidth}; --btn-color: ${buttonColor}; --btn-background: ${buttonBackground}'
    type='${type}'
    color='${color}'
    size='${size}'
    ?active='${active}'
    ?disabled='${disabled}'
    ?loading='${loading}'
    href='${href}'
  >${label}
  </arc-button>
`;

export const Contained = Template.bind({});
Contained.args = {
  label: 'My Button!',
  type: 'contained',
  color: 'default',
  size: 'medium',
  active: false,
  disabled: false,
  loading: false,
  href: '',
  width: 'auto',
  minWidth: 'auto',
  buttonColor: 'initial',
  buttonBackground: 'initial',
};

export const Tile = Template.bind({});
Tile.args = { ...Contained.args, type: BUTTON_TYPES.tile };

export const Outlined = Template.bind({});
Outlined.args = { ...Contained.args, type: BUTTON_TYPES.outlined };

export const Pill = Template.bind({});
Pill.args = { ...Contained.args, type: BUTTON_TYPES.pill };

export const Tab = Template.bind({});
Tab.args = { ...Contained.args, type: BUTTON_TYPES.tab };

export const CustomWidth = Template.bind({});
CustomWidth.args = { ...Contained.args, width: '10rem' };

export const CustomPalette = Template.bind({});
CustomPalette.args = { ...Contained.args, color: 'custom' };

export const CustomOverwrite = Template.bind({});
CustomOverwrite.args = { ...Contained.args, buttonColor: 'red', buttonBackground: 'green' };
