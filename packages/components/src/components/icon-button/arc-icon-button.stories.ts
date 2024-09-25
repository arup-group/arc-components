import { Meta, StoryFn } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import type ArcIconButton from './ArcIconButton.js';
import '../ph-icon/hourglass/ph-icon-hourglass.js';
import './arc-icon-button.js';

export default {
  title: 'Components/ArcIconButton',
  component: 'arc-icon-button',
} as Meta;

export const Default: StoryFn<ArcIconButton> = ({
  label,
  href,
  target,
  download,
  active,
  disabled,
  loading,
}) => html`
  <arc-icon-button
    label=${ifDefined(label || undefined)}
    href=${ifDefined(href || undefined)}
    target=${ifDefined(target || undefined)}
    download=${ifDefined(download || undefined)}
    ?active="${active}"
    ?disabled="${disabled}"
    ?loading="${loading}"
    >
      Icon Button
    </arc-icon-button
  >
`;

export const WithIcon: StoryFn<ArcIconButton> = ({
  label,
  href,
  target,
  download,
  active,
  disabled,
  loading,
}) => html`
  <arc-icon-button
    label=${ifDefined(label || undefined)}
    href=${ifDefined(href || undefined)}
    target=${ifDefined(target || undefined)}
    download=${ifDefined(download || undefined)}
    ?active="${active}"
    ?disabled="${disabled}"
    ?loading="${loading}"
  >
    <ph-icon-hourglass slot="icon"></ph-icon-hourglass>
    Icon Button
  </arc-icon-button>
`;
