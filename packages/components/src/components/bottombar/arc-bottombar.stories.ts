import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit';
import type ArcBottombar from './ArcBottombar.js';
import '../container/arc-container.js';
import './arc-bottombar.js';
import '../icon-button/arc-icon-button.js';
import '../arc-icon/house/arc-icon-house.js';
import '../arc-icon/wheelchair/arc-icon-wheelchair.js';

export default {
  title: 'Components/ArcBottombar',
  component: 'arc-bottombar',
} as Meta;

const Template: Story<ArcBottombar> = () => html`
  <arc-container>
    <arc-navbar slot="nav"></arc-navbar>

    <section style="padding: var(--arc-spacing-small)">
      <p>The <code>ArcBottombar</code> component is only rendered on small screen sizes. Use an <code>ArcNavbar</code> for larger screens.</p>
    </section>

    <arc-bottombar slot="bottom" class="bottom-bar">
      <arc-icon-button label="Back to home">
        <arc-icon-house slot="icon"></arc-icon-house>
        Home
       </arc-icon-button>
      <arc-icon-button label="Accessibility control">
        <arc-icon-wheelchair slot="icon"></arc-icon-wheelchair>
        Accessibility
      </arc-icon-button>
    </arc-bottombar>
  </arc-container>
`;

export const Default = Template.bind({});
