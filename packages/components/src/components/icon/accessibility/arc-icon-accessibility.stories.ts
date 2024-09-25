import { Meta, StoryFn } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { FONT_SIZES } from '../../../internal/constants/styleConstants.js';
import ArcIconAccessibility from './arc-icon-accessibility.js';
import './arc-icon-accessibility.js';

export default {
  title: 'Components/Icons/ArcIconAccessibility',
  component: 'arc-icon-accessibility',
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

export const Default: StoryFn<ArcIconAccessibility> = ({ label, size, rotation }) => html`
  <arc-icon-accessibility
    label=${ifDefined(label || undefined)}
    size=${ifDefined(size || undefined)}
    rotation=${ifDefined(rotation || undefined)}
  ></arc-icon-accessibility>
`;
