import { Meta, StoryFn } from '@storybook/web-components';
import { html } from 'lit';
import { ARC_EVENTS } from '../../internal/constants/eventConstants.js';
import type ArcAccessibility from './ArcAccessibility.js';
import '../container/arc-container.js';
import '../navbar/arc-navbar.js';

export default {
  title: 'Components/ArcAccessibility',
  component: 'arc-accessibility',
  parameters: {
    noContainer: true,
    actions: {
      handles: [ARC_EVENTS.accessibilityChange],
    },
  },
} as Meta;

const Template: StoryFn<ArcAccessibility> = () => html`
  <arc-container>
    <arc-navbar slot="nav"></arc-navbar>
    <div style="padding: var(--arc-spacing-normal)">
      <p>Hi there!</p>
      <p>
        You can click on the <arc-icon name="accessibility"></arc-icon> icon in
        the navbar to change your personal preferences.
      </p>
      <p>
        Check the arc-accessibility-change event being fired inside the
        <code class="code-block">Actions</code> tab whenever a change is made.
      </p>
    </div>
  </arc-container>
`;

export const Default = Template.bind({});
