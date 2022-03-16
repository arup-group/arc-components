import { Meta, Story } from '@storybook/web-components';
import { html, nothing } from 'lit';
import type ArcContainer from './ArcContainer.js';
import './arc-container.js';
import '../navbar/arc-navbar.js';
import '../button/arc-button.js';
import '../sidebar/arc-sidebar.js';
import { CONTAINER_THEMES } from './constants/ContainerConstants.js';

export default {
  title: 'Components/ArcContainer',
  component: 'arc-container',
  argTypes: {
    theme: {
      control: 'select',
      options: Object.values(CONTAINER_THEMES),
    },
  },
} as Meta;

const Template: Story<ArcContainer> = ({ theme, fullscreen }) => html`
  <arc-container theme="${theme}" ?fullscreen="${fullscreen}">
    <arc-navbar slot="nav" logo="/arc-red.svg">
      <span slot="name">WebComponents</span>
      <arc-button type="tab">Link 1</arc-button>
      <arc-button type="tab">Link 2</arc-button>
      <arc-button type="tab">Link 3</arc-button>
    </arc-navbar>
    ${!fullscreen
      ? html`
          <arc-sidebar slot="side">
            <div></div>
          </arc-sidebar>
        `
      : nothing}
    <div id="content">
      <p>This is the container content.</p>
      <p>When using the <code>fullscreen</code> property, the <code>arc-sidebar</code> component should not be used.</p>
      <p>The <code>arc-drawer</code> component could be used instead.</p>
    </div>
  </arc-container>
`;

export const Container = Template.bind({});
Container.args = { theme: CONTAINER_THEMES.auto, fullscreen: false };
