import { Meta, StoryFn, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import {
  INPUT_SIZES,
  THEME_COLORS,
} from '../../internal/constants/styleConstants.js';
import ArcButton from './ArcButton.js';
import './arc-button.js';
import '../ph-icon/arrow-left/ph-icon-arrow-left.js';
import '../ph-icon/arrow-right/ph-icon-arrow-right.js';

export default {
  title: 'Form/ArcButton',
  component: ArcButton.tag,
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
    "--min-width": { table: { disable: true } },
    "--btn-color": { table: { disable: true } },
    "--btn-background": { table: { disable: true } },
  },
} satisfies Meta;

export const Default: StoryFn<ArcButton> = ({ color, size, disabled, loading }) =>
  html`
    <arc-button
      color=${ifDefined(color || undefined)}
      size=${ifDefined(size || undefined)}
      ?disabled="${disabled}"
      ?loading="${loading}"
    >
      Button
    </arc-button>
  `;

export const Submit: StoryFn<ArcButton> = ({ color, size, disabled, loading }) => html`
  <form @submit=${(e: Event) => { e.preventDefault(); console.log(e); }}>
    <arc-button
      submit
      color=${ifDefined(color || undefined)}
      size=${ifDefined(size || undefined)}
      ?disabled="${disabled}"
      ?loading="${loading}"
    >
      Submit
    </arc-button
  </form>
`;

export const Link: StoryFn<ArcButton> = ({ color, size, disabled, loading }) =>
  html`
    <arc-button
      href="https://arc.arup.com"
      target="_blank"
      rel="noopener"
      color=${ifDefined(color || undefined)}
      size=${ifDefined(size || undefined)}
      ?disabled="${disabled}"
      ?loading="${loading}"
    >
      Link
    </arc-button>
  `;

export const Download: StoryFn<ArcButton> = ({ color, size, disabled, loading }) =>
  html`
    <arc-button
      download="arc"
      color=${ifDefined(color || undefined)}
      size=${ifDefined(size || undefined)}
      ?disabled="${disabled}"
      ?loading="${loading}"
    >
      Download
    </arc-button>
  `;

export const Outlined: StoryFn<ArcButton> = ({ color, size, disabled, loading }) =>
  html`
    <arc-button
      type="outlined"
      color=${ifDefined(color || undefined)}
      size=${ifDefined(size || undefined)}
      ?disabled="${disabled}"
      ?loading="${loading}"
    >
      Outlined
    </arc-button>
  `;

type TabStory = StoryObj<ArcButton>;

export const Tab: TabStory = {
  parameters: { noContainer: true },
  argTypes: {
    active: { table: { disable: false } },
    color: { table: { disable: true } },
    size: { table: { disable: true } },
  },
  render: ({ disabled, loading, active }) => html`
    <arc-container>
      <arc-navbar slot="nav">
        <arc-button
          type="tab"
          ?disabled="${disabled}"
          ?loading="${loading}"
          ?active="${active}"
        >
          Tab
        </arc-button>
      </arc-navbar>
    </arc-container>
  `,
};

export const Prefix: StoryFn<ArcButton> = ({ color, size, disabled, loading }) =>
  html`
    <arc-button
      color=${ifDefined(color || undefined)}
      size=${ifDefined(size || undefined)}
      ?disabled="${disabled}"
      ?loading="${loading}"
    >
      <span slot="prefix">
        <ph-icon-arrow-left></ph-icon-arrow-left>
      </span>
      Prefix
    </arc-button>
  `;

export const Suffix: StoryFn<ArcButton> = ({ color, size, disabled, loading }) =>
  html`
    <arc-button
      color=${ifDefined(color || undefined)}
      size=${ifDefined(size || undefined)}
      ?disabled="${disabled}"
      ?loading="${loading}"
    >
      Suffix
      <span slot="suffix">
        <ph-icon-arrow-right></ph-icon-arrow-right>
      </span>
    </arc-button>
  `;
