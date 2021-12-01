import { html } from 'lit';
import '../src/components/spinner/arc-spinner.js';
const Template = ({ color, width, size }) => html `
  <arc-spinner
    style="--stroke-color: ${color}; --track-width: ${width}; font-size:${size}"
  ></arc-spinner>
`;
const defaultArgs = {
    color: 'rgb(var(--arc-font-color))',
    width: '2px',
    size: 'var(--arc-font-size-medium)',
};
export const Default = Template.bind({});
export const RedColor = Template.bind({});
export const GreenColor = Template.bind({});
export const BlueColor = Template.bind({});
export const PurpleColor = Template.bind({});
Default.args = { ...defaultArgs };
RedColor.args = { ...defaultArgs, color: 'red' };
GreenColor.args = { ...defaultArgs, color: 'green' };
BlueColor.args = { ...defaultArgs, color: 'blue' };
PurpleColor.args = { ...defaultArgs, color: 'purple' };
export const Small = Template.bind({});
export const XXLarge = Template.bind({});
export const XXXXLarge = Template.bind({});
Small.args = { ...defaultArgs, size: 'var(--arc-font-size-small)' };
XXLarge.args = { ...defaultArgs, size: 'var(--arc-font-size-xx-large)' };
XXXXLarge.args = { ...defaultArgs, size: 'var(--arc-font-size-xxxx-large)' };
