import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit';
import { CHIP_SIZES } from './constants/ChipConstants.js';
import { THEME_COLORS } from '../../internal/constants/styleConstants.js';
import type ArcChip from './ArcChip.js';
import './arc-chip.js';

export default {
  title: 'Components/ArcChip',
  component: 'arc-chip',
} as Meta;

const Template: Story<ArcChip> = ({ color, size, pulse }) => html`
  <arc-chip color=${color} size=${size} ?pulse=${pulse}></arc-chip>
`;

const defaultArgs = {
  color: THEME_COLORS.default,
  size: CHIP_SIZES.medium,
  pulse: false,
};

export const Default = Template.bind({});
Default.args = { ...defaultArgs };

export const Active = Template.bind({});
Active.args = { ...defaultArgs, active: true };
