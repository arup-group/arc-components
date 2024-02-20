import { Meta, Story } from '@storybook/web-components';
import ArcBottombarDocumentation from './arc-bottombar.documentation.mdx';
import { html } from 'lit';
import ArcBottombar from './ArcBottombar.js';
import '../container/arc-container.js';
import './arc-bottombar.js';
import '../icon-button/arc-icon-button.js';
import '../ph-icon/house/ph-icon-house.js';
type S = Story<ArcBottombar>;

export default {
  title: 'Components/ArcBottombar',
  component: 'arc-bottombar',
  docs: {
    page: ArcBottombarDocumentation,
  },
} as Meta;

export const Default: S = () => html`<arc-container></arc-container>`;

export const WithContent: S = () => html`
  <arc-container id="container-0">
    <arc-bottombar id="bottombar-0" slot="bottom">
      <arc-icon-button>
        <ph-icon-house slot="icon"></ph-icon-house>
        Home
      </arc-icon-button>
    </arc-bottombar>
  </arc-container>

  <script>
    const container_0 = document.querySelector('#container-0');
    const bottombar_0 = document.querySelector('#bottombar-0');

    bottombar_0.addEventListener('arc-show-accessibility', (e) => {
      container_0.showAccessibility();
    });
  </script>
`;
