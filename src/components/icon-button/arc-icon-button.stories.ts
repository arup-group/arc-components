import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import type ArcIconButton from './ArcIconButton.js';
import './arc-icon-button.js';
import { ICON_TYPES } from '../icon/constants/IconConstants.js';

export default {
  title: 'Components/ArcIconButton',
  component: 'arc-icon-button',
  argTypes: {
    name: {
      control: 'select',
      options: Object.values(ICON_TYPES),
    },
  },
} as Meta;

const Template: Story<ArcIconButton> = ({ name, label, href, target, download, active, disabled, loading }) => html`
  <arc-icon-button
    name="${name}"
    label="${label}"
    href=${ifDefined(href || undefined)}
    target=${ifDefined(target || undefined)}
    download=${ifDefined(download || undefined)}
    ?active="${active}"
    ?disabled="${disabled}"
    ?loading="${loading}"
    >${label}</arc-icon-button
  >
`;

const defaultArgs = {
  name: ICON_TYPES.fire,
  label: 'Icon button',
  href: '',
  target: '',
  download: '',
  active: false,
  disabled: false,
  loading: false,
};

/* TYPES */
export const Default = Template.bind({});
Default.args = { ...defaultArgs };

export const Link = Template.bind({});
Link.args = { ...defaultArgs, name: ICON_TYPES.link, href: '/' };

export const LinkNewWindow = Template.bind({});
LinkNewWindow.args = { ...Link.args, target: '_blank' };

export const LinkDownload = Template.bind({});
LinkDownload.args = { ...Link.args, download: 'ARC Storybook' };

export const LinkDisabled = Template.bind({});
LinkDisabled.args = { ...Link.args, disabled: true };

/* STATES */
export const Active = Template.bind({});
Active.args = { ...defaultArgs, active: true };

export const Disabled = Template.bind({});
Disabled.args = { ...defaultArgs, disabled: true };

export const Loading = Template.bind({});
Loading.args = { ...defaultArgs, loading: true };
