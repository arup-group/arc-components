import { Meta, StoryFn } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import {
  INPUT_SIZES,
  THEME_COLORS,
} from '../../internal/constants/styleConstants.js';
import ArcButtonGroup from './arc-button-group.js';
import '../menu/arc-menu.js';
import '../menu-item/arc-menu-item.js';
import '../dropdown/arc-dropdown.js';
import '../icon-button/arc-icon-button.js';
import '../ph-icon/caret-down/ph-icon-caret-down.js';

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
    row: { table: { disable: true } },
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
    <arc-button>Button 1</arc-button>
    <arc-button>Button 2</arc-button>
    <arc-button>Button 3</arc-button>
  </arc-button-group>
`;

export const Outlined: StoryFn<ArcButtonGroup> = ({
  color,
  size,
  disabled,
  loading,
}) => html`
  <arc-button-group
    type="group-outlined"
    color=${ifDefined(color || undefined)}
    size=${ifDefined(size || undefined)}
    ?disabled="${disabled}"
    ?loading="${loading}"
  >
    <arc-button>Button 1</arc-button>
    <arc-button>Button 2</arc-button>
    <arc-button>Button 3</arc-button>
  </arc-button-group>
`;

export const Vertical: StoryFn<ArcButtonGroup> = ({
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
    column
  >
    <arc-button>Button 1</arc-button>
    <arc-button>Button 2</arc-button>
    <arc-button>Button 3</arc-button>
  </arc-button-group>
`;

export const Menu: StoryFn<ArcButtonGroup> = ({
  color,
  size,
  disabled,
  loading,
}) => html`
  <arc-button-group
    type="group-filled"
    column
    color=${ifDefined(color || undefined)}
    size=${ifDefined(size || undefined)}
    ?disabled="${disabled}"
    ?loading="${loading}"
  >
    <arc-button>Button 1</arc-button>
    <arc-button>Button 2</arc-button>
    <arc-button>Button 3</arc-button>
    <arc-dropdown slot="menu">
      <arc-button slot="trigger"
        ><ph-icon-caret-down></ph-icon-caret-down
      ></arc-button>
      <arc-menu>
        <arc-menu-item>Button 4</arc-menu-item>
        <arc-menu-item>Button 5</arc-menu-item>
        <arc-menu-item>Button 6</arc-menu-item>
      </arc-menu>
    </arc-dropdown>
  </arc-button-group>
`;
