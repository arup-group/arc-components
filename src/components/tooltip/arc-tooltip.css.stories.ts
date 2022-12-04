import { Meta, Story } from '@storybook/html';
import { ARC_TOOLTIP_DEFAULT_ARGS, ArcTooltip } from './arc-tooltip.css.utils.js';
import './arc-tooltip.css';

export default {
  title: 'CSS/Tooltip',
} as Meta;

const Template: Story<typeof ARC_TOOLTIP_DEFAULT_ARGS> = args => ArcTooltip(args);

/* TYPES */
export const Default = Template.bind({});
Default.args = { ...ARC_TOOLTIP_DEFAULT_ARGS };
