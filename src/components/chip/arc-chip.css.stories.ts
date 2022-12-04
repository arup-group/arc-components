import { Meta, Story } from '@storybook/html';
import { INPUT_SIZES } from '../../internal/constants/styleConstants.js';
import { CHIP_TYPES } from './constants/ChipConstants.js';
import { ARC_CHIP_DEFAULT_ARGS, ArcChip, ArcChipWithAvatar } from './arc-chip.css.utils.js';
import './arc-chip.css';

export default {
  title: 'CSS/ArcChip',
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

const Template: Story<typeof ARC_CHIP_DEFAULT_ARGS> = args => ArcChip(args);

const AvatarTemplate: Story<typeof ARC_CHIP_DEFAULT_ARGS> = args => ArcChipWithAvatar(args);

export const Filled = Template.bind({});
Filled.args = { ...ARC_CHIP_DEFAULT_ARGS };

export const Outlined = Template.bind({});
Outlined.args = { ...ARC_CHIP_DEFAULT_ARGS, type: CHIP_TYPES.outlined };

export const Clearable = Template.bind({});
Clearable.args = { ...ARC_CHIP_DEFAULT_ARGS, clearable: true };

export const ChipWithAvatar = AvatarTemplate.bind({});
ChipWithAvatar.args = { ...ARC_CHIP_DEFAULT_ARGS };
