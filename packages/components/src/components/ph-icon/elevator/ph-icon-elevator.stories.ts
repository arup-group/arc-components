/* GENERATED FILE */
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { FONT_SIZES } from '../../../internal/constants/styleConstants.js';
import { icons } from '@phosphor-icons/core';
import './ph-icon-elevator.js';

export default {
  title: 'Components/Icons/PhIconElevator',
  component: 'ph-icon-elevator',
  argTypes: {
    size: {
      control: 'select',
      options: Object.values(FONT_SIZES),
    },
    rotation: {
      control: 'select',
      options: [0, 90, 180, 270],
    },
  },
} as Meta;

const Template: Story<ArcIcon> = ({ label, size, rotation }) => html`
  <ph-icon-elevator
    label=${ifDefined(label || undefined)}
    size=${ifDefined(size || undefined)}
    rotation=${ifDefined(rotation || undefined)}
  ></ph-icon-elevator>
`;

const ColorTemplate: Story<ArcIcon> = ({ label, size, rotation }) => html`
  <ph-icon-elevator
    label=${ifDefined(label || undefined)}
    size=${ifDefined(size || undefined)}
    rotation=${ifDefined(rotation || undefined)}
    style="--icon-color: rgb(var(--arc-red-050))"
  >
  </ph-icon-elevator>
`;

const defaultArgs = {
  label: '',
  size: FONT_SIZES.large,
  rotation: 0,
};

export const Default = Template.bind({});
Default.args = { ...defaultArgs };

export const Color = ColorTemplate.bind({});
Color.args = { ...defaultArgs };
