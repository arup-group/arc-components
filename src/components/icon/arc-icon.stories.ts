import { html, TemplateResult } from 'lit';
import './arc-icon.js';

import { ICON_SIZES, ICON_TYPES } from './constants/IconConstants.js';

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  name: string;
  size: string;
  rotation: number;
  spinning: boolean;
  colorPrimary: string | undefined;
  colorSecondary: string | undefined;
}

const Template: Story<ArgTypes> = ({
  name,
  size,
  rotation,
  spinning,
  colorPrimary,
  colorSecondary,
}: ArgTypes) => html`
  <arc-icon
    style="--icon-color-primary:${colorPrimary ||
    'inherit'}; --icon-color-secondary:${colorSecondary || 'inherit'};"
    name="${name}"
    size="${size}"
    rotation="${rotation}"
    ?spinning=${spinning}
  ></arc-icon>
`;

const defaultArgs = {
  name: ICON_TYPES.fire,
  size: ICON_SIZES.large,
  rotation: 0,
  spinning: false,
  colorPrimary: undefined,
};

// TYPES
export const Default = Template.bind({});
export const VariableSize = Template.bind({});
export const RedColor = Template.bind({});
export const GreenColor = Template.bind({});
export const BlueColor = Template.bind({});
export const PurpleColor = Template.bind({});
export const CustomSize = Template.bind({});

Default.args = { ...defaultArgs };
VariableSize.args = { ...defaultArgs, size: 'xxxx-large' };
RedColor.args = { ...defaultArgs, colorPrimary: 'red' };
GreenColor.args = { ...defaultArgs, colorPrimary: 'green' };
BlueColor.args = { ...defaultArgs, colorPrimary: 'blue' };
PurpleColor.args = { ...defaultArgs, colorPrimary: 'purple' };
CustomSize.args = { ...defaultArgs, size: 'custom' };
