import { html, TemplateResult } from 'lit';
import '../components/container/arc-container.js';
import '../components/navbar/arc-navbar.js';
import '../components/sidebar/arc-sidebar.js';
import '../components/button/arc-button.js';

const arcLogo = new URL('../assets/arc-red.svg', import.meta.url).href;

export default {
  title: 'ArcContainer',
  component: 'arc-container',
  argTypes: {
    theme: {
      description: 'Set the theme for the container',
      defaultValue: { summary: 'auto' },
      control: { type: 'select' },
      options: ['auto', 'dark', 'light'],
    },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  theme: string,
}

const Template: Story<ArgTypes> = ({ theme }: ArgTypes) => html`
  <arc-container .theme=${theme}>
    <arc-navbar slot='nav' logo='${arcLogo}'>
      <span slot='name'>WebComponents</span>
      <arc-button type='tab'>Link 1</arc-button>
      <arc-button type='tab'>Link 2</arc-button>
      <arc-button type='tab'>Link 3</arc-button>
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
