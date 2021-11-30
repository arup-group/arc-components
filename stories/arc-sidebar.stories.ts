import { html, TemplateResult } from 'lit';
import '../src/components/container/arc-container.js';
import '../src/components/sidebar/arc-sidebar.js';

interface Story<T> {
  (args: T): TemplateResult;

  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  gap: string;
  width: string;
  title: string;
}

const Template: Story<ArgTypes> = ({ gap, width, title }: ArgTypes) => html`
  <arc-container>
    <arc-navbar slot="nav" logo="../src/assets/arc-red.svg"></arc-navbar>
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
