import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit';
import { THEME_COLORS } from '../../internal/constants/styleConstants.js';
import { CHIP_SIZES, CHIP_TYPES } from './constants/ChipConstants.js';
import type ArcChip from './ArcChip.js';
import './arc-chip.js';

export default {
  title: 'Components/ArcChip',
  component: 'arc-chip',
  argTypes: {
    color: {
      control: 'select',
      options: Object.values(THEME_COLORS),
    },
    size: {
      control: 'select',
      options: Object.values(CHIP_SIZES),
    },
    type: {
      control: 'select',
      options: Object.values(CHIP_TYPES),
    },
  },
} as Meta;

const Template: Story<ArcChip> = ({ color, size, type, clearable }) => html`
  <arc-chip color=${color} size=${size} type=${type} ?clearable=${clearable}></arc-chip>
`;

const defaultArgs = {
  color: THEME_COLORS.default,
  size: CHIP_SIZES.medium,
  type: CHIP_TYPES.filled,
  pulse: false,
};

export const Default = Template.bind({});
Default.args = { ...defaultArgs };
