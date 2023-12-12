/* GENERATED FILE */
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { FONT_SIZES } from '../../../internal/constants/styleConstants.js';
import { icons } from '@phosphor-icons/core';
import './ph-icon-caret-circle-up-down.js';

export default {
  title: 'Components/Icons/PhIconCaretCircleUpDown',
  component: 'ph-icon-caret-circle-up-down',
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
  <ph-icon-caret-circle-up-down
    label=${ifDefined(label || undefined)}
    size=${ifDefined(size || undefined)}
    rotation=${ifDefined(rotation || undefined)}
  ></ph-icon-caret-circle-up-down>
`;

const ColorTemplate: Story<ArcIcon> = ({ label, size, rotation }) => html`
  <ph-icon-caret-circle-up-down
    label=${ifDefined(label || undefined)}
    size=${ifDefined(size || undefined)}
    rotation=${ifDefined(rotation || undefined)}
    style="--icon-color: rgb(var(--arc-red-050))"
  >
  </ph-icon-caret-circle-up-down>
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
