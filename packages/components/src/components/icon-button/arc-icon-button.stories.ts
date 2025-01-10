import { Meta, StoryFn } from '@storybook/web-components';
import { html } from 'lit';
import ArcIconButton from './ArcIconButton';
import './arc-icon-button.js';
import '../ph-icon/rocket/ph-icon-rocket.js';
import '../ph-icon/link/ph-icon-link.js';
import '../ph-icon/download/ph-icon-download.js';

export default {
  title: 'Form/ArcIconButton',
  component: ArcIconButton.tag,
  argTypes: {
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
    active: { table: { disable: true } },
    href: { table: { disable: true } },
    target: { table: { disable: true } },
    download: { table: { disable: true } },
  },
} satisfies Meta;

export const Default: StoryFn<ArcIconButton> = ({ disabled, loading }) => html`
  <arc-icon-button ?disabled="${disabled}" ?loading="${loading}">
    <ph-icon-rocket slot="icon"></ph-icon-rocket>
  </arc-icon-button>
`;

export const Labaled: StoryFn<ArcIconButton> = ({ disabled, loading }) => html`
  <arc-icon-button ?disabled="${disabled}" ?loading="${loading}">
    <ph-icon-rocket slot="icon"></ph-icon-rocket>
    <span>Rocket</span>
  </arc-icon-button>
`;

export const Link: StoryFn<ArcIconButton> = ({ disabled, loading }) => html`
  <arc-icon-button
    href="https://arc.arup.com"
    target="_blank"
    rel="noopener"
    ?disabled="${disabled}"
    ?loading="${loading}"
  >
    <ph-icon-link slot="icon"></ph-icon-link>
    <span>Link</span>
  </arc-icon-button>
`;

export const Download: StoryFn<ArcIconButton> = ({ disabled, loading }) => html`
  <arc-icon-button
    download="file.txt"
    ?disabled="${disabled}"
    ?loading="${loading}"
  >
    <ph-icon-download slot="icon"></ph-icon-download>
    <span>Download</span>
  </arc-icon-button>
`;
