/* GENERATED FILE */
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { FONT_SIZES } from '../../../internal/constants/styleConstants.js';
import { icons } from '@phosphor-icons/core';
import './arc-icon-arrows-out-line-vertical.js';

export default {
  title: 'Components/Icons/ArcIconArrowsOutLineVertical',
  component: 'arc-icon-arrows-out-line-vertical',
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
  <arc-icon-arrows-out-line-vertical
    label=${ifDefined(label || undefined)}
    size=${ifDefined(size || undefined)}
    rotation=${ifDefined(rotation || undefined)}
  ></arc-icon-arrows-out-line-vertical>
`;

const ColorTemplate: Story<ArcIcon> = ({ label, size, rotation }) => html`
  <arc-icon-arrows-out-line-vertical
    label=${ifDefined(label || undefined)}
    size=${ifDefined(size || undefined)}
    rotation=${ifDefined(rotation || undefined)}
    style="--icon-color-primary: rgb(var(--arc-pink-050))">
  </arc-icon-arrows-out-line-vertical>
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
