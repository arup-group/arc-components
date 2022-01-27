import { html, TemplateResult } from 'lit';
import { getBasePath } from '../../utilities/base-path.js';
import { CONTAINER_THEMES, ContainerTheme } from './constants/ContainerConstants.js';

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  theme?: ContainerTheme;
  fullscreen?: boolean
}

const Template: Story<ArgTypes> = ({ theme, fullscreen }: ArgTypes) => html`
  <arc-container theme="${theme}" ?fullscreen="${fullscreen}">
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

const defaultArgs: ArgTypes = {
  theme: CONTAINER_THEMES.auto,
  fullscreen: false
}

export const Container = Template.bind({});
export const DarkContainer = Template.bind({});

Container.args = { ...defaultArgs };
DarkContainer.args = { ...defaultArgs, theme: CONTAINER_THEMES.dark };
