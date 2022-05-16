import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit';
import { INPUT_SIZES } from '../../internal/constants/styleConstants.js';
import { CHIP_TYPES } from './constants/ChipConstants.js';
import type ArcChip from './ArcChip.js';
import './arc-chip.js';

export default {
  title: 'Components/ArcChip',
  component: 'arc-chip',
  argTypes: {
    size: {
      control: 'select',
      options: Object.values(INPUT_SIZES),
    },
    type: {
      control: 'select',
      options: Object.values(CHIP_TYPES),
    },
  },
} as Meta;

const Template: Story<ArcChip> = ({ size, type, clearable }) => html`
  <arc-chip size=${size} type=${type} ?clearable=${clearable}>Chip</arc-chip>
`;

const defaultArgs = {
  size: INPUT_SIZES.medium,
  type: CHIP_TYPES.filled,
  clearable: false,
};

export const Default = Template.bind({});
Default.args = { ...defaultArgs };
