import { html } from 'lit';
import '../src/components/container/arc-container.js';
import '../navbar/arc-navbar.js';
import '../sidebar/arc-sidebar.js';
import '../button/arc-button.js';
import { getBasePath } from '../src/utilities/base-path.js';
const Template = ({ theme }) => html `
  <arc-container theme="${theme}">
    <arc-navbar slot="nav" logo="${getBasePath()}/assets/arc-red.svg">
      <span slot="name">WebComponents</span>
      <arc-button type="tab">Link 1</arc-button>
      <arc-button type="tab">Link 2</arc-button>
      <arc-button type="tab">Link 3</arc-button>
    </arc-navbar>
    <arc-sidebar slot="side">
      <div></div>
    </arc-sidebar>
  </arc-container>
`;
export const Container = Template.bind({});
export const DarkContainer = Template.bind({});
Container.args = { theme: 'auto' };
DarkContainer.args = { theme: 'dark' };
