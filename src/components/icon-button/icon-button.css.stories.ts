import { Meta, Story } from '@storybook/html';
import { ICON_TYPES } from '../icon/constants/IconConstants.js';
import { ARC_ICON_BUTTON_DEFAULT_ARGS, ArcIconButton } from './icon-button.css.utils';

import './arc-icon-button.css';
import '../icon/arc-icon.css';
import '../spinner/arc-spinner.css';

export default {
  title: 'CSS/ArcIconButton',
  argTypes: {
    name: {
      control: 'select',
      options: Object.values(ICON_TYPES),
    },
  },
} as Meta;

const Template: Story<typeof ARC_ICON_BUTTON_DEFAULT_ARGS> = args => ArcIconButton(args);

/* TYPES */
export const Default = Template.bind({});
Default.args = { ...ARC_ICON_BUTTON_DEFAULT_ARGS };

export const Link = Template.bind({});
Link.args = { ...ARC_ICON_BUTTON_DEFAULT_ARGS, name: ICON_TYPES.link, href: '/' };

export const LinkNewWindow = Template.bind({});
LinkNewWindow.args = { ...Link.args, target: '_blank' };

export const LinkDownload = Template.bind({});
LinkDownload.args = { ...Link.args, download: 'ARC Storybook' };

export const LinkDisabled = Template.bind({});
LinkDisabled.args = { ...Link.args, disabled: true };

/* STATES */
export const Active = Template.bind({});
Active.args = { ...ARC_ICON_BUTTON_DEFAULT_ARGS, active: true };

export const Disabled = Template.bind({});
Disabled.args = { ...ARC_ICON_BUTTON_DEFAULT_ARGS, disabled: true };

export const Loading = Template.bind({});
Loading.args = { ...ARC_ICON_BUTTON_DEFAULT_ARGS, loading: true };
