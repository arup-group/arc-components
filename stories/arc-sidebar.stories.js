import { html } from 'lit';
import '../src/components/container/arc-container.js';
import '../src/components/sidebar/arc-sidebar.js';
import { getBasePath } from '../src/utilities/base-path.js';
const Template = ({ gap, width, title }) => html `
  <arc-container>
    <arc-navbar
      slot="nav"
      logo="${getBasePath()}/assets/arc-red.svg"
    ></arc-navbar>
    <arc-sidebar
      slot="side"
      style="--gap-distance: ${gap}; --sidebar-width: ${width}"
      title="${title}"
    >
      <div>Side block 1</div>
      <div>Side block 2</div>
    </arc-sidebar>
  </arc-container>
`;
export const Default = Template.bind({});
Default.args = {
    gap: 'var(--arc-spacing-normal)',
    width: 'clamp(15rem, 30%, var(--arc-sidebar-width))',
    title: 'Select an option',
};
