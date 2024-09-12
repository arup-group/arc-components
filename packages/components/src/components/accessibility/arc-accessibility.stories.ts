import { Meta, StoryFn } from '@storybook/web-components';
import { html } from 'lit';
import { ARC_EVENTS } from '../../internal/constants/eventConstants.js';
import ArcAccessibility from '../accessibility/ArcAccessibility';
import ArcContainer from '../container/ArcContainer.js';
import '../container/arc-container.js';
import '../switch/arc-switch.js';

export default {
  title: 'Components/ArcAccessibility',
  component: 'arc-accessibility',
  parameters: {
    actions: {
      handles: [ARC_EVENTS.accessibilityChange],
    },
  },
} as Meta;

export const Default: StoryFn<ArcAccessibility> = () =>
  html`<arc-container></arc-container>`;

const handleAccessibilityOpen = (event: CustomEvent) => {
  const container = event.target as ArcContainer;
  const accessibility = container.querySelector(
    'arc-accessibility',
  ) as ArcAccessibility;
  if (accessibility) {
    accessibility.open = true;
  }
};

export const CustomFeature: StoryFn<ArcAccessibility> = () =>
  html`<arc-container
    @arc-show-accessibility=${(event: CustomEvent) =>
      handleAccessibilityOpen(event)}
  >
    <arc-accessibility slot="accessibility">
      <div slot="options" class="accessibility__options">
        <span class="accessibility__label">Custom Accessibility Feature</span>
        <arc-switch>Enable custom feature</arc-switch>
      </div>
    </arc-accessibility>
  </arc-container> `;
