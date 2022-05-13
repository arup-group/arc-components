import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { INPUT_SIZES, THEME_COLORS } from '../../internal/constants/styleConstants.js';
import { BUTTON_TYPES } from './constants/ButtonConstants.js';
import type ArcButton from './ArcButton.js';
import './arc-button.js';

export default {
  title: 'Components/ArcButton',
  component: 'arc-button',
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

const Template: Story<ArcButton> = ({
  color,
  size,
  type,
  name,
  value,
  href,
  target,
  download,
  active,
  disabled,
  loading,
  submit,
}) => html`
  <arc-button
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
const WidthTemplate: Story<ArcButton> = () => html`<arc-button style="width: 10rem;">Button</arc-button>`;

const defaultArgs = {
  size: INPUT_SIZES.medium,
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
Default.args = { ...defaultArgs, color: THEME_COLORS.default };

export const Primary = Template.bind({});
Primary.args = { ...defaultArgs, color: THEME_COLORS.primary };

export const PrimaryTwo = Template.bind({});
PrimaryTwo.args = { ...defaultArgs, color: THEME_COLORS.secondary };

export const Error = Template.bind({});
Error.args = { ...defaultArgs, color: THEME_COLORS.error };

export const Warning = Template.bind({});
Warning.args = { ...defaultArgs, color: THEME_COLORS.warning };

export const Info = Template.bind({});
Info.args = { ...defaultArgs, color: THEME_COLORS.info };

export const Success = Template.bind({});
Success.args = { ...defaultArgs, color: THEME_COLORS.success };

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
Small.args = { ...defaultArgs, size: INPUT_SIZES.small };

export const Medium = Template.bind({});
Medium.args = { ...defaultArgs, size: INPUT_SIZES.medium };

export const Large = Template.bind({});
Large.args = { ...defaultArgs, size: INPUT_SIZES.large };

export const CustomWidth = WidthTemplate.bind({});

/* STATES */
export const Active = Template.bind({});
Active.args = { ...Tab.args, active: true };

export const Disabled = Template.bind({});
Disabled.args = { ...Tab.args, disabled: true };

export const Loading = Template.bind({});
Loading.args = { ...Tab.args, loading: true };
