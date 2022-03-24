import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { ICON_TYPES } from './constants/IconConstants.js';
import { FONT_SIZES } from '../../internal/constants/styleConstants.js';
import type ArcIcon from './ArcIcon.js';
import './arc-icon.js';

export default {
  title: 'Components/ArcIcon',
  component: 'arc-icon',
  argTypes: {
    name: {
      control: 'select',
      options: Object.values(ICON_TYPES),
    },
    size: {
      control: 'select',
      options: Object.values(FONT_SIZES),
    },
  },
} as Meta;

const Template: Story<ArcIcon> = ({ name, label, size, rotation, spinning }) => html`
  <arc-icon
    name="${name}"
    label=${ifDefined(label || undefined)}
    size=${ifDefined(size || undefined)}
    rotation=${ifDefined(rotation || undefined)}
    ?spinning=${spinning}
  ></arc-icon>
`;
const ColorTemplate: Story<ArcIcon> = () => html`
  <div style="display: flex;">
    <arc-icon size="large" style="--icon-color-primary: rgb(var(--arc-red-060))"></arc-icon>
    <arc-icon size="large" style="--icon-color-primary: rgb(var(--arc-blue-060))"></arc-icon>
    <arc-icon size="large" style="--icon-color-primary: rgb(var(--arc-green-060))"></arc-icon>
  </div>
`;

const defaultArgs = {
  name: ICON_TYPES.fire,
  label: '',
  size: FONT_SIZES.large,
  rotation: 0,
  spinning: false,
};

/* TYPES */
export const Default = Template.bind({});
Default.args = { ...defaultArgs };

export const Size = Template.bind({});
Size.args = { ...defaultArgs, size: FONT_SIZES['xxx-large'] };

export const Rotation = Template.bind({});
Rotation.args = { ...defaultArgs, rotation: 45 };

export const Spinning = Template.bind({});
Spinning.args = { ...defaultArgs, spinning: true };

export const Color = ColorTemplate.bind({});
