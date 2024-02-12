import { Meta, Story } from '@storybook/web-components';
import ArcAccessibilityDocumentation from './arc-accessibility.documentation.mdx';
import { html } from 'lit';
import { ARC_EVENTS } from '../../internal/constants/eventConstants.js';
import type ArcAccessibility from './ArcAccessibility.js';
import './arc-accessibility.js';
import '../container/arc-container.js';
import '../navbar/arc-navbar.js';
import '../button/arc-button.js';
import '../switch/arc-switch.js';

export default {
  title: 'Components/ArcAccessibility',
  component: 'arc-accessibility',
  argTypes: {},
  parameters: {
    actions: {
      handles: [ARC_EVENTS.accessibilityChange],
    },
    docs: {
      page: ArcAccessibilityDocumentation,
    },
  },
} as Meta;

export const Default: Story<ArcAccessibility> = () => html`<arc-container></arc-container>`;


export const ListenToChanages: Story<ArcAccessibility> = () => html`
<arc-container id="container-1"></arc-container>

<script>
  const container_1 = document.querySelector('container-1');

  container_1?.addEventListener('arc-accessibility-change', (e) => {
    // Do something with the event
  });
</script>
`;

export const OpenWithCustomButton: Story<ArcAccessibility> = () => html`
<arc-container id="container-2">
  <arc-accessibility id="accessibility-2" slot="accessibility"></arc-accessibility>

  <arc-button id="button-2">Open Accessibility</arc-button>
</arc-container>

<script>
  const container_2 = document.querySelector('#container-2');
  const accessibility_2 = document.querySelector('#accessibility-2');
  const button_2 = document.querySelector('#button-2');

  function showAccessibility() {
    accessibility_2.open = true;
  }

  container_2?.addEventListener('arc-show-accessibility', () => showAccessibility());
  button_2?.addEventListener('click', () => showAccessibility());
</script>
`;

export const ExtendWithCustomControls: Story<ArcAccessibility> = () => html`
<arc-container id="container-3">
  <arc-accessibility id="accessibility-3" slot="accessibility">
    <div slot="options" style="display: grid; gap: var(--arc-spaceing-small);">
      <span>Custom Accessibility Feature</span>
      <arc-switch id="switch-3">Enable</arc-switch>
    </div>
  </arc-accessibility>
</arc-container>

<script>
  const container_3 = document.querySelector('#container-3');
  const accessibility_3 = document.querySelector('#accessibility-3');
  const switch_3 = document.querySelector('#switch-3');

  container_3?.addEventListener('arc-show-accessibility', () => {
    accessibility_3.open = true;
  });

  switch_3?.addEventListener('arc-change', (e) => {
    // Do somthing when the switch emits a value change
  });

  switch_3.checked = true;
</script>
`;
