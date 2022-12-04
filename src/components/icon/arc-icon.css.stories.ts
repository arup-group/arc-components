import { Meta, Story } from '@storybook/html';
import { ICON_TYPES } from './constants/IconConstants.js';
import { FONT_SIZES } from '../../internal/constants/styleConstants.js';
import { ARC_ICON_DEFAULT_ARGS, ArcIcon } from './arc-icon.css.utils';
import './arc-icon.css';

export default {
  title: 'CSS/ArcIcon',
  argTypes: {
    name: {
      control: 'select',
      options: Object.values(ICON_TYPES),
    },
    size: {
      control: 'select',
      options: Object.values(FONT_SIZES),
    },
    rotation: {
      control: 'select',
      options: [0, 90, 180, 270],
    },
  },
} as Meta;

const Template: Story<typeof ARC_ICON_DEFAULT_ARGS> = args => ArcIcon(args);

const ColorTemplate: Story = () => {
  const arcIcon = ArcIcon(ARC_ICON_DEFAULT_ARGS);
  arcIcon.style.color = 'rgb(var(--arc-blue-060))';
  return arcIcon;
};

/* TYPES */
export const Default = Template.bind({});
Default.args = { ...ARC_ICON_DEFAULT_ARGS };

export const Size = Template.bind({});
Size.args = { ...ARC_ICON_DEFAULT_ARGS, size: FONT_SIZES['xxx-large'] };

export const Rotation = Template.bind({});
Rotation.args = { ...ARC_ICON_DEFAULT_ARGS, rotation: 45 };

export const Color = ColorTemplate.bind({});
