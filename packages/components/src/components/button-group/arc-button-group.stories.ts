import { Meta, StoryFn } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import ArcButtonGroup from './ArcButtonGroup.js';
import {
  INPUT_SIZES,
  THEME_COLORS,
} from '../../internal/constants/styleConstants.js';
import '../button/arc-button.js';
import './arc-button-group.js';

export default {
  title: 'Form/ArcButtonGroup',
  component: ArcButtonGroup.tag,
  argTypes: {
    color: {
      control: 'select',
      options: Object.values(THEME_COLORS),
    },
    size: {
      control: 'select',
      options: Object.values(INPUT_SIZES),
    },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
    active: { table: { disable: true } },
    submit: { table: { disable: true } },
    prefix: { table: { disable: true } },
    suffix: { table: { disable: true } },
    default: { table: { disable: true } },
    type: { table: { disable: true } },
    '--min-width': { table: { disable: true } },
    '--btn-color': { table: { disable: true } },
    '--btn-background': { table: { disable: true } },
  },
} satisfies Meta;

export const Default: StoryFn<ArcButtonGroup> = ({
  color,
  size,
  disabled,
  loading,
}) => html`
  <arc-button-group
    color=${ifDefined(color || undefined)}
    size=${ifDefined(size || undefined)}
    ?disabled="${disabled}"
    ?loading="${loading}"
  >
    <arc-button value="1">Button 1</arc-button>
    <arc-button value="2">Button 2</arc-button>
    <arc-button value="3">Button 3</arc-button>
  </arc-button-group>
`;

export const Outlined: StoryFn<ArcButtonGroup> = ({
  color,
  size,
  disabled,
  loading,
}) => html`
  <arc-button-group
    type="outlined"
    color=${ifDefined(color || undefined)}
    size=${ifDefined(size || undefined)}
    ?disabled="${disabled}"
    ?loading="${loading}"
  >
    <arc-button value="1">Button 1</arc-button>
    <arc-button value="2">Button 2</arc-button>
    <arc-button value="3">Button 3</arc-button>
  </arc-button-group>
`;
