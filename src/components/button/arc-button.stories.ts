import { html, TemplateResult } from 'lit';
import './arc-button.js';
import '../icon/arc-icon.js';

import {
  BUTTON_COLORS,
  BUTTON_SIZES,
  BUTTON_TYPES,
} from './constants/ButtonConstants.js';

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  label: string;
  type: string;
  color: string;
  size: string;
  href: string | undefined;
  target: string | undefined;
  download: string | undefined;
  active: boolean;
  disabled: boolean;
  loading: boolean;
  submit: boolean;
  width: string;
  minWidth: string;
  btnColor: string | undefined;
  btnBackground: string | undefined;
  prefix: boolean | undefined;
  suffix: boolean | undefined;
}

const Template: Story<ArgTypes> = ({
  label,
  type,
  color,
  size,
  href,
  target,
  download,
  active,
  disabled,
  loading,
  submit,
  width,
  minWidth,
  btnColor,
  btnBackground,
  prefix,
  suffix,
}: ArgTypes) => html`
  <arc-button
    style="width:${width}; --min-width:${minWidth}; --btn-color:${btnColor}; --btn-background:${btnBackground};"
    type="${type}"
    color="${color}"
    size="${size}"
    .href="${href}"
    .target="${target}"
    .download="${download}"
    ?active="${active}"
    ?disabled="${disabled}"
    ?loading="${loading}"
    ?submit="${submit}"
  >
    ${prefix ? html`<arc-icon slot="prefix" name="home"></arc-icon>` : null}
    ${label.charAt(0).toUpperCase() + label.slice(1)}
    ${suffix ? html`<arc-icon slot="suffix" name="settings"></arc-icon>` : null}
  </arc-button>
`;

const defaultArgs = {
  label: 'Default',
  type: 'contained',
  color: 'default',
  size: 'medium',
  href: undefined,
  target: undefined,
  download: undefined,
  active: false,
  disabled: false,
  loading: false,
  submit: false,
  width: undefined,
  minWidth: undefined,
  btnColor: undefined,
  btnBackground: undefined,
};

/* TYPES */
export const Contained = Template.bind({});
export const Tile = Template.bind({});
export const Outlined = Template.bind({});
export const Pill = Template.bind({});
export const Tab = Template.bind({});
export const Link = Template.bind({});
export const LinkNewWindow = Template.bind({});
export const LinkDownload = Template.bind({});
export const LinkDisabled = Template.bind({});

Contained.args = { ...defaultArgs, label: BUTTON_TYPES.contained };
Tile.args = {
  ...defaultArgs,
  label: BUTTON_TYPES.tile,
  type: BUTTON_TYPES.tile,
};
Outlined.args = {
  ...defaultArgs,
  label: BUTTON_TYPES.outlined,
  type: BUTTON_TYPES.outlined,
};
Pill.args = {
  ...defaultArgs,
  label: BUTTON_TYPES.pill,
  type: BUTTON_TYPES.pill,
};
Tab.args = { ...defaultArgs, label: BUTTON_TYPES.tab, type: BUTTON_TYPES.tab };
Link.args = { ...defaultArgs, label: 'Link', href: '/' };
LinkNewWindow.args = { ...Link.args, label: 'New Window', target: '_blank' };
LinkDownload.args = {
  ...Link.args,
  label: 'Download',
  download: 'ARC Storybook',
};
LinkDisabled.args = { ...Link.args, label: 'Disabled', disabled: true };

/* SLOTS */
export const Prefix = Template.bind({});
export const Suffix = Template.bind({});

Prefix.args = { ...defaultArgs, label: 'Home', prefix: true };
Suffix.args = { ...defaultArgs, label: 'Settings', suffix: true };

/* COLORS */
export const Default = Template.bind({});
export const Primary = Template.bind({});
export const Secondary = Template.bind({});
export const Error = Template.bind({});
export const Warning = Template.bind({});
export const Info = Template.bind({});
export const Success = Template.bind({});

Default.args = {
  ...defaultArgs,
  label: BUTTON_COLORS.default,
  color: BUTTON_COLORS.default,
};
Primary.args = {
  ...defaultArgs,
  label: BUTTON_COLORS.primary,
  color: BUTTON_COLORS.primary,
};
Secondary.args = {
  ...defaultArgs,
  label: BUTTON_COLORS.secondary,
  color: BUTTON_COLORS.secondary,
};
Error.args = {
  ...defaultArgs,
  label: BUTTON_COLORS.error,
  color: BUTTON_COLORS.error,
};
Warning.args = {
  ...defaultArgs,
  label: BUTTON_COLORS.warning,
  color: BUTTON_COLORS.warning,
};
Info.args = {
  ...defaultArgs,
  label: BUTTON_COLORS.info,
  color: BUTTON_COLORS.info,
};
Success.args = {
  ...defaultArgs,
  label: BUTTON_COLORS.success,
  color: BUTTON_COLORS.success,
};

/* SIZES */
export const Small = Template.bind({});
export const Medium = Template.bind({});
export const Large = Template.bind({});

Small.args = {
  ...defaultArgs,
  label: BUTTON_SIZES.small,
  size: BUTTON_SIZES.small,
};
Medium.args = {
  ...defaultArgs,
  label: BUTTON_SIZES.medium,
  size: BUTTON_SIZES.medium,
};
Large.args = {
  ...defaultArgs,
  label: BUTTON_SIZES.large,
  size: BUTTON_SIZES.large,
};

/* STATES */
export const Active = Template.bind({});
export const Disabled = Template.bind({});
export const Loading = Template.bind({});

Active.args = { ...Tab.args, label: 'Active', active: true };
Disabled.args = { ...Tab.args, label: 'Disabled', disabled: true };
Loading.args = { ...Tab.args, label: 'Loading', loading: true };
