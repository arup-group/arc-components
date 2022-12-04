import { Meta, Story } from '@storybook/html';
import { ARC_RADIO_DEFAULT_ARGS, ArcRadio } from './arc-radio.css.utils';
import './arc-radio.css';

export default {
  title: 'CSS/ArcRadio',
} as Meta;

const Template: Story<typeof ARC_RADIO_DEFAULT_ARGS> = args => ArcRadio(args);

/* TYPES */
export const Default = Template.bind({});
Default.args = { ...ARC_RADIO_DEFAULT_ARGS };

export const Checked = Template.bind({});
Checked.args = { ...ARC_RADIO_DEFAULT_ARGS, checked: true };

export const Disabled = Template.bind({});
Disabled.args = { ...ARC_RADIO_DEFAULT_ARGS, disabled: true };
