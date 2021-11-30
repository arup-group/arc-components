import { html, TemplateResult } from 'lit';
import '../src/components/container/arc-container.js';
import '../src/components/navbar/arc-navbar.js';
import '../src/components/sidebar/arc-sidebar.js';
import '../src/components/button/arc-button.js';

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  theme: string;
}

const Template: Story<ArgTypes> = ({ theme }: ArgTypes) => html`
  <arc-container theme="${theme}">
    <arc-navbar slot="nav" logo="../src/assets/arc-red.svg">
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
