import {Meta, Story} from "@storybook/web-components";
import {html,} from 'lit';
import {ifDefined} from 'lit/directives/if-defined.js';
import ArcButton from "./ArcButton.js";
import {
  BUTTON_COLORS,
  BUTTON_SIZES,
  BUTTON_TYPES,
  ButtonColor,
  ButtonSize,
  ButtonType
} from './constants/ButtonConstants.js';

interface ArgTypes {
  label: string;
  type: ButtonType;
  color: ButtonColor;
  size: ButtonSize;
  name?: string;
  value?: string;
  href?: string;
  target?: string;
  download?: string;
  active: boolean;
  disabled: boolean;
  loading: boolean;
  submit: boolean;
  width?: string;
  minWidth?: string;
  btnColor?: string;
  btnBackground?: string;
  prefix?: boolean;
  suffix?: boolean;
}

export default {
  title: 'Components/ArcButton',
  component: `${ArcButton.tag}`,
  argTypes: {
    type: {
      control: 'select',
      options: Object.values(BUTTON_TYPES)
    },
    color: {
      control: 'select',
      options: Object.values(BUTTON_COLORS)
    },
    size: {
      control: 'select',
      options: Object.values(BUTTON_SIZES)
    }
  }
} as Meta;

const Template: Story<ArgTypes> = ({
                                     label,
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
                                     minWidth,
                                     btnColor,
                                     btnBackground,
                                     prefix,
                                     suffix
                                   }: ArgTypes) => html`
  <div id="content">
    <arc-button
      style="width:${width}; --min-width:${minWidth}; --btn-color:${btnColor}; --btn-background:${btnBackground};"
      type="${type}"
      color="${color}"
      size="${size}"
      name=${ifDefined(name || undefined)}
      value=${ifDefined(value || undefined)}
      href=${ifDefined(href || undefined)}
      target=${ifDefined(target || undefined)}
      download=${ifDefined(download || undefined)}
      ?active="${active}"
      ?disabled="${disabled}"
      ?loading="${loading}"
      ?submit="${submit}"
    >
      ${prefix ? html`
        <arc-icon slot="prefix" name="home"></arc-icon>` : null}
      ${label.charAt(0).toUpperCase() + label.slice(1)}
      ${suffix ? html`
        <arc-icon slot="suffix" name="settings"></arc-icon>` : null}
    </arc-button>
  </div>
`;

const defaultArgs: ArgTypes = {
  label: 'Default',
  type: BUTTON_TYPES.contained,
  color: BUTTON_COLORS.default,
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
  width: 'auto',
  minWidth: '0',
  btnColor: '',
  btnBackground: '',
};

/* TYPES */
export const Contained = Template.bind({});
Contained.args = {
  ...defaultArgs,
  label: BUTTON_TYPES.contained,
  type: BUTTON_TYPES.contained,
};

export const Tile = Template.bind({});
Tile.args = {
  ...defaultArgs,
  label: BUTTON_TYPES.tile,
  type: BUTTON_TYPES.tile,
};

export const Outlined = Template.bind({});
Outlined.args = {
  ...defaultArgs,
  label: BUTTON_TYPES.outlined,
  type: BUTTON_TYPES.outlined,
};

export const Pill = Template.bind({});
Pill.args = {
  ...defaultArgs,
  label: BUTTON_TYPES.pill,
  type: BUTTON_TYPES.pill,
};

export const Tab = Template.bind({});
Tab.args = {...defaultArgs, label: BUTTON_TYPES.tab, type: BUTTON_TYPES.tab};

export const Link = Template.bind({});
Link.args = {...defaultArgs, label: 'Link', href: '/'};

export const LinkNewWindow = Template.bind({});
LinkNewWindow.args = {...Link.args, label: 'New Window', target: '_blank'};

export const LinkDownload = Template.bind({});
LinkDownload.args = {
  ...Link.args,
  label: 'Download',
  download: 'ARC Storybook',
};

export const LinkDisabled = Template.bind({});
LinkDisabled.args = {...Link.args, label: 'Disabled', disabled: true};

/* SLOTS */
export const Prefix = Template.bind({});
Prefix.args = {...defaultArgs, label: 'Home', prefix: true};

export const Suffix = Template.bind({});
Suffix.args = {...defaultArgs, label: 'Settings', suffix: true};

/* COLORS */
export const Default = Template.bind({});
Default.args = {
  ...defaultArgs,
  label: BUTTON_COLORS.default,
  color: BUTTON_COLORS.default,
};

export const Primary = Template.bind({});
Primary.args = {
  ...defaultArgs,
  label: BUTTON_COLORS.primary,
  color: BUTTON_COLORS.primary,
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...defaultArgs,
  label: BUTTON_COLORS.secondary,
  color: BUTTON_COLORS.secondary,
};

export const Error = Template.bind({});
Error.args = {
  ...defaultArgs,
  label: BUTTON_COLORS.error,
  color: BUTTON_COLORS.error,
};

export const Warning = Template.bind({});
Warning.args = {
  ...defaultArgs,
  label: BUTTON_COLORS.warning,
  color: BUTTON_COLORS.warning,
};

export const Info = Template.bind({});
Info.args = {
  ...defaultArgs,
  label: BUTTON_COLORS.info,
  color: BUTTON_COLORS.info,
};

export const Success = Template.bind({});
Success.args = {
  ...defaultArgs,
  label: BUTTON_COLORS.success,
  color: BUTTON_COLORS.success,
};

/* SIZES */
export const Small = Template.bind({});
Small.args = {
  ...defaultArgs,
  label: BUTTON_SIZES.small,
  size: BUTTON_SIZES.small,
};

export const Medium = Template.bind({});
Medium.args = {
  ...defaultArgs,
  label: BUTTON_SIZES.medium,
  size: BUTTON_SIZES.medium,
};

export const Large = Template.bind({});
Large.args = {
  ...defaultArgs,
  label: BUTTON_SIZES.large,
  size: BUTTON_SIZES.large,
};

/* STATES */
export const Active = Template.bind({});
Active.args = {...Tab.args, label: 'Active', active: true};

export const Disabled = Template.bind({});
Disabled.args = {...Tab.args, label: 'Disabled', disabled: true};

export const Loading = Template.bind({});
Loading.args = {...Tab.args, label: 'Loading', loading: true};
