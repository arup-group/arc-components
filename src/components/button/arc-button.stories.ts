import { html, TemplateResult } from 'lit';
import './arc-button.js';

import { BUTTON_TYPES, BUTTON_COLORS, BUTTON_SIZES } from './constants/ButtonConstants.js';

export default {
  title: 'Buttons',
  component: 'arc-button',
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
  active: boolean,
  disabled: boolean,
  loading: boolean,
}

const Template: Story<ArgTypes> = ({ label, type, color, size, active, disabled, loading, href }: ArgTypes) => html`
  <arc-button
    type='${type}'
    color='${color}'
    size='${size}'
    href='${href}'
    ?active='${active}'
    ?disabled='${disabled}'
    ?loading='${loading}'
  >${label.toUpperCase()}
  </arc-button>
`;

const defaultArgs = {
  label: 'Default',
  type: 'contained',
  color: 'default',
  size: 'medium',
  href: '',
  active: false,
  disabled: false,
  loading: false,
};

// TYPES
export const Contained = Template.bind({});
export const Tile = Template.bind({});
export const Outlined = Template.bind({});
export const Pill = Template.bind({});
export const Tab = Template.bind({});

Contained.args = { ...defaultArgs, label: BUTTON_TYPES.contained, type: BUTTON_TYPES.contained };
Tile.args = { ...defaultArgs, label: BUTTON_TYPES.tile, type: BUTTON_TYPES.tile };
Outlined.args = { ...defaultArgs, label: BUTTON_TYPES.outlined, type: BUTTON_TYPES.outlined };
Pill.args = { ...defaultArgs, label: BUTTON_TYPES.pill, type: BUTTON_TYPES.pill };
Tab.args = { ...defaultArgs, label: BUTTON_TYPES.tab, type: BUTTON_TYPES.tab };

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
