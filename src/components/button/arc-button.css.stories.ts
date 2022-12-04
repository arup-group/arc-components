import { Meta, Story } from '@storybook/html';
import { ARC_BUTTON_DEFAULT_ARGS, ArcButton } from './arc-button.css.utils.js';
import { INPUT_SIZES, THEME_COLORS } from '../../internal/constants/styleConstants.js';
import { BUTTON_TYPES } from './constants/ButtonConstants.js';

import './arc-button.css';

export default {
  title: 'CSS/ArcButton',
  argTypes: {
    color: {
      control: 'select',
      options: Object.values(THEME_COLORS),
    },
    size: {
      control: 'select',
      options: Object.values(INPUT_SIZES),
    },
    type: {
      control: 'select',
      options: Object.values(BUTTON_TYPES),
    },
  },
} as Meta;

const Template: Story<typeof ARC_BUTTON_DEFAULT_ARGS> = args => ArcButton(args);

/* COLORS */
export const Primary = Template.bind({});
Primary.args = { ...ARC_BUTTON_DEFAULT_ARGS };

export const PrimaryTwo = Template.bind({});
PrimaryTwo.args = { ...ARC_BUTTON_DEFAULT_ARGS, color: THEME_COLORS.secondary };

export const Default = Template.bind({});
Default.args = { ...ARC_BUTTON_DEFAULT_ARGS, color: THEME_COLORS.default };

export const Error = Template.bind({});
Error.args = { ...ARC_BUTTON_DEFAULT_ARGS, color: THEME_COLORS.error };

export const Warning = Template.bind({});
Warning.args = { ...ARC_BUTTON_DEFAULT_ARGS, color: THEME_COLORS.warning };

export const Info = Template.bind({});
Info.args = { ...ARC_BUTTON_DEFAULT_ARGS, color: THEME_COLORS.info };

export const Success = Template.bind({});
Success.args = { ...ARC_BUTTON_DEFAULT_ARGS, color: THEME_COLORS.success };

/* TYPES */
export const Filled = Template.bind({});
Filled.args = { ...ARC_BUTTON_DEFAULT_ARGS };

export const Outlined = Template.bind({});
Outlined.args = { ...ARC_BUTTON_DEFAULT_ARGS, type: BUTTON_TYPES.outlined };

export const Tab = Template.bind({});
Tab.args = { ...ARC_BUTTON_DEFAULT_ARGS, type: BUTTON_TYPES.tab };

export const Link = Template.bind({});
Link.args = { ...ARC_BUTTON_DEFAULT_ARGS, href: '/' };

export const LinkNewWindow = Template.bind({});
LinkNewWindow.args = { ...Link.args, target: '_blank' };

export const LinkDownload = Template.bind({});
LinkDownload.args = { ...Link.args, download: 'ARC Storybook' };

export const LinkDisabled = Template.bind({});
LinkDisabled.args = { ...Link.args, disabled: true };

/* SIZES */
export const Small = Template.bind({});
Small.args = { ...ARC_BUTTON_DEFAULT_ARGS, size: INPUT_SIZES.small };

export const Medium = Template.bind({});
Medium.args = { ...ARC_BUTTON_DEFAULT_ARGS, size: INPUT_SIZES.medium };

export const Large = Template.bind({});
Large.args = { ...ARC_BUTTON_DEFAULT_ARGS, size: INPUT_SIZES.large };

/* STATES */
export const Active = Template.bind({});
Active.args = { ...Tab.args, active: true };

export const Disabled = Template.bind({});
Disabled.args = { ...ARC_BUTTON_DEFAULT_ARGS, disabled: true };

export const Loading = Template.bind({});
Loading.args = { ...ARC_BUTTON_DEFAULT_ARGS, loading: true };
