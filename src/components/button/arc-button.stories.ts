import { html, TemplateResult } from 'lit';
import { live } from 'lit/directives/live.js';
import './arc-button.js';
import '../icon/arc-icon.js';

import { BUTTON_TYPES, BUTTON_COLORS, BUTTON_SIZES } from './constants/ButtonConstants.js';

const arcLogo = new URL('../../../../assets/arc-red.svg', import.meta.url).href;

export default {
  title: 'ArcButton',
  component: 'arc-button',
  argTypes: {
    type: {
      description: 'Set the type of the button',
      defaultValue: { summary: 'contained' },
      control: { type: 'select' },
      options: Object.keys(BUTTON_TYPES),
    },
    color: {
      description: 'Set the color of the button.',
      defaultValue: { summary: 'default' },
      control: { type: 'select' },
      options: Object.keys(BUTTON_COLORS),
    },
    size: {
      description: 'Set the size of the button',
      defaultValue: { summary: 'medium' },
      control: { type: 'select' },
      options: Object.keys(BUTTON_SIZES),
    },
    href: {
      description: 'When set, the underlying button will be rendered as an `<a>` with this property.',
      defaultValue: { summary: '' },
      control: { type: 'text' },
    },
    target: {
      description: 'Tells the browser where to open the link. Only used when href is set. ',
      defaultValue: { summary: '' },
      control: { type: 'text' },
    },
    download: {
      description: 'Tells the browser to download the linked file as this filename. Only used when href is set. ',
      defaultValue: { summary: '' },
      control: { type: 'text' },
    },
    active: {
      description: 'Draws the button in an active state.',
      defaultValue: { summary: 'false' },
      control: { type: 'boolean' },
    },
    disabled: {
      description: 'Draws the button in a disabled state.',
      defaultValue: { summary: 'false' },
      control: { type: 'boolean' },
    },
    loading: {
      description: 'Draws the button in a loading state.',
      defaultValue: { summary: 'false' },
      control: { type: 'boolean' },
    },
    submit: {
      description: 'Indicates if activating the button should submit the form. Ignored when href is set.',
      defaultValue: { summary: 'false' },
      control: { type: 'boolean' },
    }
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  label: string,
  type: string,
  color: string,
  size: string,
  href: string,
  target: string,
  download: string,
  active: boolean,
  disabled: boolean,
  loading: boolean,
  submit: boolean,
  prefix: boolean | undefined,
  suffix: boolean | undefined
}

const Template: Story<ArgTypes> = ({ label, type, color, size, href, target, download, active, disabled, loading, submit, prefix, suffix }: ArgTypes) => html`
  <arc-button
    type='${type}'
    color='${color}'
    size='${size}'
    href='${live(href)}'
    .target='${live(target)}'
    download='${download}'
    ?active='${active}'
    ?disabled='${disabled}'
    ?loading='${loading}'
    ?submit='${submit}'
  >
    ${prefix ? html`<arc-icon slot='prefix' name='home'></arc-icon>` : null}
    ${label.toUpperCase()}
    ${suffix ? html`<arc-icon slot='suffix' name='settings'></arc-icon>` : null}
  </arc-button>
`;

const defaultArgs = {
  label: 'Default',
  type: 'contained',
  color: 'default',
  size: 'medium',
  href: '',
  target: '',
  download: '',
  active: false,
  disabled: false,
  loading: false,
  submit: false,
};

// TYPES
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
Tile.args = { ...defaultArgs, label: BUTTON_TYPES.tile, type: BUTTON_TYPES.tile };
Outlined.args = { ...defaultArgs, label: BUTTON_TYPES.outlined, type: BUTTON_TYPES.outlined };
Pill.args = { ...defaultArgs, label: BUTTON_TYPES.pill, type: BUTTON_TYPES.pill };
Tab.args = { ...defaultArgs, label: BUTTON_TYPES.tab, type: BUTTON_TYPES.tab };
Link.args = { ... defaultArgs, label: 'Link', href: '/' };
LinkNewWindow.args = { ... Link.args, label: 'New Window', target: '_blank' };
LinkDownload.args = { ... Link.args, label: 'Download', href: arcLogo, download: 'ARC Logo' };
LinkDisabled.args = { ... Link.args, label: 'Disabled', disabled: true };

// SLOTS
export const Prefix = Template.bind({});
export const Suffix = Template.bind({});

Prefix.args = { ...defaultArgs, label: 'Home', prefix: true };
Suffix.args = { ...defaultArgs, label: 'Settings', suffix: true };

// COLORS
export const Default = Template.bind({});
export const Primary = Template.bind({});
export const Secondary = Template.bind({});
export const Error = Template.bind({});
export const Warning = Template.bind({});
export const Info = Template.bind({});
export const Success = Template.bind({});

Default.args = { ...defaultArgs, label: BUTTON_COLORS.default, color: BUTTON_COLORS.default };
Primary.args = { ...defaultArgs, label: BUTTON_COLORS.primary, color: BUTTON_COLORS.primary };
Secondary.args = { ...defaultArgs, label: BUTTON_COLORS.secondary, color: BUTTON_COLORS.secondary };
Error.args = { ...defaultArgs, label: BUTTON_COLORS.error, color: BUTTON_COLORS.error };
Warning.args = { ...defaultArgs, label: BUTTON_COLORS.warning, color: BUTTON_COLORS.warning };
Info.args = { ...defaultArgs, label: BUTTON_COLORS.info, color: BUTTON_COLORS.info };
Success.args = { ...defaultArgs, label: BUTTON_COLORS.success, color: BUTTON_COLORS.success };

// SIZES
export const Small = Template.bind({});
export const Medium = Template.bind({});
export const Large = Template.bind({});

Small.args = { ...defaultArgs, label: BUTTON_SIZES.small, size: BUTTON_SIZES.small };
Medium.args = { ...defaultArgs, label: BUTTON_SIZES.medium, size: BUTTON_SIZES.medium };
Large.args = { ...defaultArgs, label: BUTTON_SIZES.large, size: BUTTON_SIZES.large };

// STATES
export const Active = Template.bind({});
export const Disabled = Template.bind({});
export const Loading = Template.bind({});

Active.args = { ...Tab.args, label: 'Active', active: true };
Disabled.args = { ...Tab.args, label: 'Disabled', disabled: true };
Loading.args = { ...Tab.args, label: 'Loading', loading: true };
