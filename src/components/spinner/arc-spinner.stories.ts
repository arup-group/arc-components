import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit';
import ArcSpinner from './ArcSpinner.js';
import { FONT_SIZES, FontSize } from '../../internal/constants/styleConstants.js';

interface ArgTypes {
  width: string;
  size: FontSize;
  strokeColor?: string;
}

export default {
  title: 'Components/ArcSpinner',
  component: ArcSpinner.tag,
  argTypes: {
    size: {
      control: 'select',
      options: Object.values(FONT_SIZES),
    },
  },
} as Meta;

const Template: Story<ArgTypes> = ({ strokeColor, width, size }: ArgTypes) => html`
  <arc-spinner
    style="--stroke-color:${strokeColor}; --track-width: ${width}; font-size:var(--arc-font-size-${size})"
  ></arc-spinner>
`;

const defaultArgs: ArgTypes = {
  width: '2px',
  size: FONT_SIZES.medium,
  strokeColor: '',
};

/* TYPES */
export const Default = Template.bind({});
Default.args = { ...defaultArgs };

export const RedColor = Template.bind({});
RedColor.args = { ...defaultArgs, strokeColor: 'red' };

export const GreenColor = Template.bind({});
GreenColor.args = { ...defaultArgs, strokeColor: 'green' };

export const BlueColor = Template.bind({});
BlueColor.args = { ...defaultArgs, strokeColor: 'blue' };

export const PurpleColor = Template.bind({});
PurpleColor.args = { ...defaultArgs, strokeColor: 'purple' };

/* Sizes */
export const Small = Template.bind({});
Small.args = { ...defaultArgs, size: FONT_SIZES.small };

export const XXLarge = Template.bind({});
XXLarge.args = { ...defaultArgs, size: FONT_SIZES['xx-large'] };

export const XXXXLarge = Template.bind({});
XXXXLarge.args = { ...defaultArgs, size: FONT_SIZES['xxxx-large'] };
