import { Meta, Story } from '@storybook/html';
import { ARC_SWITCH_DEFAULT_ARGS, ArcSwitch } from './arc-switch.css.utils.js';
import './arc-switch.css';

export default {
  title: 'CSS/ArcSwitch',
} as Meta;

const Template: Story<typeof ARC_SWITCH_DEFAULT_ARGS> = args => ArcSwitch(args);

/* TYPES */
export const Default = Template.bind({});
Default.args = { ...ARC_SWITCH_DEFAULT_ARGS };

export const Checked = Template.bind({});
Checked.args = { ...ARC_SWITCH_DEFAULT_ARGS, checked: true };

export const Disabled = Template.bind({});
Disabled.args = { ...ARC_SWITCH_DEFAULT_ARGS, disabled: true };
