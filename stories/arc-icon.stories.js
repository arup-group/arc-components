import { html } from 'lit';
import '../src/components/icon/arc-icon.js';
import { ICON_SIZES, ICON_TYPES } from '../src/components/icon/constants/IconConstants.js';
const Template = ({ name, size, rotation, spinning, colorPrimary, colorSecondary, }) => html `
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
