import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit';
import type ArcBottombar from './ArcBottombar.js';
import '../container/arc-container.js';
import './arc-bottombar.js';
import '../icon-button/arc-icon-button.js';
import '../ph-icon/house/ph-icon-house.js';
import '../icon/accessibility/arc-icon-accessibility.js';

export default {
  title: 'Components/ArcBottombar',
  component: 'arc-bottombar',
} as Meta;

const Template: Story<ArcBottombar> = () => html`
  <arc-container>
    <arc-navbar slot="nav"></arc-navbar>

    <section style="padding: var(--arc-spacing-small)">
      <p>
        The <code>ArcBottombar</code> component is only rendered on small screen
        sizes. Use an <code>ArcNavbar</code> for larger screens.
      </p>
    </section>

    <arc-bottombar slot="bottom" class="bottom-bar">
      <arc-icon-button label="Back to home">
        <ph-icon-house slot="icon"></ph-icon-house>
        Home
      </arc-icon-button>
      <arc-icon-button label="Accessibility control">
        <arc-icon-accessibility slot="icon"></arc-icon-accessibility>
        Accessibility
      </arc-icon-button>
    </arc-bottombar>
  </arc-container>
`;

export const Default = Template.bind({});
