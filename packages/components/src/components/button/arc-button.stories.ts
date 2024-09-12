import { Meta, StoryFn } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import {
  INPUT_SIZES,
  THEME_COLORS,
} from '../../internal/constants/styleConstants.js';
import { BUTTON_TYPES } from './constants/ButtonConstants.js';
import type ArcButton from './ArcButton.js';
import './arc-button.js';

export default {
  title: 'Components/ArcButton',
  component: 'arc-button',
  argTypes: {
    color: {
      control: 'select',
      options: Object.values(THEME_COLORS),
    },
    size: {
      control: 'select',
      options: Object.values(INPUT_SIZES),
    },
    type: {
      control: 'select',
      options: Object.values(BUTTON_TYPES),
    },
  },
} as Meta;

export const Default: StoryFn<ArcButton> = ({
  color,
  size,
  type,
  name,
  value,
  href,
  target,
  download,
  active,
  disabled,
  loading,
  submit,
}) => html`
  <arc-button
    type=${ifDefined(type || undefined)}
    color=${ifDefined(color || undefined)}
    size=${ifDefined(size || undefined)}
    name=${ifDefined(name || undefined)}
    value=${ifDefined(value || undefined)}
    href=${ifDefined(href || undefined)}
    target=${ifDefined(target || undefined)}
    download=${ifDefined(download || undefined)}
    ?active="${active}"
    ?disabled="${disabled}"
    ?loading="${loading}"
    ?submit="${submit}"
    >Button</arc-button
  >
`;
