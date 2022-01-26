import { html, TemplateResult } from 'lit';
import { getBasePath } from '../../utilities/base-path.js';

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  gap?: string;
  width?: string;
  title?: string;
}

const Template: Story<ArgTypes> = ({ gap, width, title }: ArgTypes) => html`
  <arc-container>
    <arc-navbar slot="nav" logo="${getBasePath()}/assets/arc-red.svg"></arc-navbar>
    <arc-sidebar slot="side" style="--gap-distance: ${gap}; --sidebar-width: ${width}" title="${title}">
      <arc-menu>
        <arc-menu-item value="home">
          <arc-icon name="home" slot="prefix"></arc-icon>
          Home
        </arc-menu-item>
        <arc-menu-item value="messages">
          <arc-icon name="speech" slot="prefix"></arc-icon>
          Messages
        </arc-menu-item>
      </arc-menu>
      <arc-menu>
        <arc-menu-item value="settings">
          <arc-icon name="settings" slot="prefix"></arc-icon>
          Settings
        </arc-menu-item>
      </arc-menu>
    </arc-sidebar>
  </arc-container>
`;

export const Default = Template.bind({});
Default.args = {
  gap: 'var(--arc-spacing-normal)',
  width: 'clamp(15rem, 30%, var(--arc-sidebar-width))',
  title: 'Select an option',
};
