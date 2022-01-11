import { html, TemplateResult } from 'lit';
import { CONTAINER_THEMES, ContainerTheme } from './constants/ContainerConstants.js';

import { getBasePath } from '../../utilities/base-path.js';

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  theme?: ContainerTheme;
}

const Template: Story<ArgTypes> = ({ theme }: ArgTypes) => html`
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

Container.args = { theme: CONTAINER_THEMES.auto };
DarkContainer.args = { theme: CONTAINER_THEMES.dark };
