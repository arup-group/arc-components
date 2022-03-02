import { Meta, Story } from '@storybook/web-components';
import { html, nothing } from 'lit';
import ArcContainer from './ArcContainer.js';
import { CONTAINER_THEMES, ContainerTheme } from './constants/ContainerConstants.js';

interface ArgTypes {
  theme?: ContainerTheme;
  fullscreen?: boolean;
}

export default {
  title: 'Components/ArcContainer',
  component: ArcContainer.tag,
  argTypes: {
    theme: {
      control: 'select',
      options: Object.values(CONTAINER_THEMES),
    },
  },
} as Meta;

const Template: Story<ArgTypes> = ({ theme, fullscreen }: ArgTypes) => html`
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
      <p>
        When using the <code>fullscreen</code> property, be aware that the <code>arc-sidebar</code> component does not
        function well.
      </p>
      <p>The <code>arc-drawer</code> component could be used instead.</p>
    </div>
  </arc-container>
`;

const defaultArgs: ArgTypes = {
  theme: CONTAINER_THEMES.auto,
  fullscreen: false,
};

export const Container = Template.bind({});
Container.args = { ...defaultArgs };
