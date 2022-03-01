import {Meta} from "@storybook/web-components";
import {html, TemplateResult} from 'lit';
import ArcIcon from "./ArcIcon.js";
import {ICON_TYPES, IconType} from './constants/IconConstants.js';
import {FONT_SIZES, FontSize} from '../../internal/constants/styleConstants.js';

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  name: IconType;
  size?: FontSize;
  rotation?: number;
  spinning?: boolean;
  colorPrimary?: string;
  colorSecondary?: string;
}

export default {
  title: 'Components/ArcIcon',
  component: `${ArcIcon.tag}`
} as Meta;

const Template: Story<ArgTypes> = ({name, size, rotation, spinning, colorPrimary, colorSecondary}: ArgTypes) => html`
  <arc-icon
    style="--icon-color-primary:${colorPrimary || 'inherit'}; --icon-color-secondary:${colorSecondary || 'inherit'};"
    name="${name}"
    size="${size}"
    rotation="${rotation}"
    ?spinning=${spinning}
  ></arc-icon>
`;

const defaultArgs: ArgTypes = {
  name: ICON_TYPES.fire,
  size: FONT_SIZES.large,
  rotation: 0,
  spinning: false,
  colorPrimary: undefined,
};

/* TYPES */
export const Default = Template.bind({});
export const VariableSize = Template.bind({});
export const RedColor = Template.bind({});
export const GreenColor = Template.bind({});
export const BlueColor = Template.bind({});
export const PurpleColor = Template.bind({});
export const CustomSize = Template.bind({});

Default.args = {...defaultArgs};
VariableSize.args = {...defaultArgs, size: FONT_SIZES['xxx-large']};
RedColor.args = {...defaultArgs, colorPrimary: 'red'};
GreenColor.args = {...defaultArgs, colorPrimary: 'green'};
BlueColor.args = {...defaultArgs, colorPrimary: 'blue'};
PurpleColor.args = {...defaultArgs, colorPrimary: 'purple'};
CustomSize.args = {...defaultArgs, size: 'custom'};
