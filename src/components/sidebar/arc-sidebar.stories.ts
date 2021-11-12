import { html, TemplateResult } from 'lit';
import '../container/arc-container.js';
import './arc-sidebar.js';

import { getBasePath } from '../../utilities/base-path.js';

interface Story<T> {
  (args: T): TemplateResult;

  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  gap: string;
  width: string;
}

const Template: Story<ArgTypes> = ({ gap, width }: ArgTypes) => html`
  <arc-container>
    <arc-navbar
      slot="nav"
      logo="${getBasePath()}/assets/arc-red.svg"
    ></arc-navbar>
    <arc-sidebar
      slot="side"
      style="--gap-distance: ${gap}; --sidebar-width: ${width}"
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
};
