import { html, TemplateResult } from 'lit';
import './arc-container.js';

export default {
  title: 'Containers',
  component: 'arc-container',
  argTypes: {
    theme: {
      options: ['auto', 'dark', 'light'],
      control: { type: 'select' },
    },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  theme?: string;
}

const Template: Story<ArgTypes> = ({ theme }: ArgTypes) => html`
  <arc-container .theme=${theme}>
    <arc-navbar slot="nav">NAVBAR</arc-navbar>
    <arc-sidebar slot="side">SIDEBAR</arc-sidebar>
    <arc-content slot="content">CONTENT</arc-content>
  </arc-container>
`;

export const ArcContainer = Template.bind({});
ArcContainer.args = {
  theme: 'light',
};
