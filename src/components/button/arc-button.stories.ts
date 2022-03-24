import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { BUTTON_COLORS, BUTTON_SIZES, BUTTON_TYPES } from './constants/ButtonConstants.js';
import './arc-button.js';

export default {
  title: 'Components/ArcButton',
  component: 'arc-button',
  argTypes: {
    type: {
      control: 'select',
      options: Object.values(BUTTON_TYPES),
    },
    color: {
      control: 'select',
      options: Object.values(BUTTON_COLORS),
    },
    size: {
      control: 'select',
      options: Object.values(BUTTON_SIZES),
    },
    width: {
      control: 'text',
    },
  },
} as Meta;

const Template: Story = ({
  type,
  color,
  size,
  name,
  value,
  href,
  target,
  download,
  active,
  disabled,
  loading,
  submit,
  width,
}) => html`
  <arc-button
    style=${ifDefined(width ? `width: ${width}` : undefined)}
    type=${ifDefined(type || undefined)}
    color=${ifDefined(color || undefined)}
    size=${ifDefined(size || undefined)}
    name=${ifDefined(name || undefined)}
    value=${ifDefined(value || undefined)}
    href=${ifDefined(href || undefined)}
    target=${ifDefined(target || undefined)}
    download=${ifDefined(download || undefined)}
    ?active="${active}"
    ?disabled="${disabled}"
    ?loading="${loading}"
    ?submit="${submit}"
    >Button</arc-button
  >
`;

const defaultArgs = {
  size: BUTTON_SIZES.medium,
  name: '',
  value: '',
  href: '',
  target: '',
  download: '',
  active: false,
  disabled: false,
  loading: false,
  submit: false,
  width: undefined,
};

/* COLORS */
export const Default = Template.bind({});
Default.args = { ...defaultArgs, color: BUTTON_COLORS.default };

export const Primary = Template.bind({});
Primary.args = { ...defaultArgs, color: BUTTON_COLORS.primary };

export const PrimaryTwo = Template.bind({});
PrimaryTwo.args = { ...defaultArgs, color: BUTTON_COLORS.secondary };

export const Error = Template.bind({});
Error.args = { ...defaultArgs, color: BUTTON_COLORS.error };

export const Warning = Template.bind({});
Warning.args = { ...defaultArgs, color: BUTTON_COLORS.warning };

export const Info = Template.bind({});
Info.args = { ...defaultArgs, color: BUTTON_COLORS.info };

export const Success = Template.bind({});
Success.args = { ...defaultArgs, color: BUTTON_COLORS.success };

/* TYPES */
export const Pill = Template.bind({});
Pill.args = { ...defaultArgs };

export const Contained = Template.bind({});
Contained.args = { ...defaultArgs, type: BUTTON_TYPES.contained };

export const Tile = Template.bind({});
Tile.args = { ...defaultArgs, type: BUTTON_TYPES.tile };

export const Outlined = Template.bind({});
Outlined.args = { ...defaultArgs, type: BUTTON_TYPES.outlined };

export const Tab = Template.bind({});
Tab.args = { ...defaultArgs, type: BUTTON_TYPES.tab };

export const Link = Template.bind({});
Link.args = { ...defaultArgs, href: '/' };

export const LinkNewWindow = Template.bind({});
LinkNewWindow.args = { ...Link.args, target: '_blank' };

export const LinkDownload = Template.bind({});
LinkDownload.args = { ...Link.args, download: 'ARC Storybook' };

export const LinkDisabled = Template.bind({});
LinkDisabled.args = { ...Link.args, disabled: true };

/* SIZES */
export const Small = Template.bind({});
Small.args = { ...defaultArgs, size: BUTTON_SIZES.small };

export const Medium = Template.bind({});
Medium.args = { ...defaultArgs, size: BUTTON_SIZES.medium };

export const Large = Template.bind({});
Large.args = { ...defaultArgs, size: BUTTON_SIZES.large };

export const CustomWidth = Template.bind({});
CustomWidth.args = { ...defaultArgs, width: '10rem' };

/* STATES */
export const Active = Template.bind({});
Active.args = { ...Tab.args, active: true };

export const Disabled = Template.bind({});
Disabled.args = { ...Tab.args, disabled: true };

export const Loading = Template.bind({});
Loading.args = { ...Tab.args, loading: true };
