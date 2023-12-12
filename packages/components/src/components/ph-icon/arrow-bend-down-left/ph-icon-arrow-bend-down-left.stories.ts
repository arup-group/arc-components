/* GENERATED FILE */
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { FONT_SIZES } from '../../../internal/constants/styleConstants.js';
import { icons } from '@phosphor-icons/core';
import './ph-icon-arrow-bend-down-left.js';

export default {
  title: 'Components/Icons/PhIconArrowBendDownLeft',
  component: 'ph-icon-arrow-bend-down-left',
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
  <ph-icon-arrow-bend-down-left
    label=${ifDefined(label || undefined)}
    size=${ifDefined(size || undefined)}
    rotation=${ifDefined(rotation || undefined)}
  ></ph-icon-arrow-bend-down-left>
`;

const ColorTemplate: Story<ArcIcon> = ({ label, size, rotation }) => html`
  <ph-icon-arrow-bend-down-left
    label=${ifDefined(label || undefined)}
    size=${ifDefined(size || undefined)}
    rotation=${ifDefined(rotation || undefined)}
    style="--icon-color: rgb(var(--arc-red-050))"
  >
  </ph-icon-arrow-bend-down-left>
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
