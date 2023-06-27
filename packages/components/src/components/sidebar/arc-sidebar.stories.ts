import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { ARC_EVENTS } from '../../internal/constants/eventConstants.js';
import '../container/arc-container.js';
import '../navbar/arc-navbar.js';
import './arc-sidebar.js';
import '../menu/arc-menu.js';
import '../menu-item/arc-menu-item.js';
import '../icon/arc-icon.js';

export default {
  title: 'Components/ArcSidebar',
  component: 'arc-sidebar',
  argTypes: {
    customLabel: {
      name: 'label',
      control: 'text',
      description:
        'The sidebar label. Required for proper accessibility. Alternatively, the label slot can be used.',
      table: {
        category: 'properties',
      },
    },
  },
  parameters: {
    actions: {
      handles: [
        ARC_EVENTS.show,
        ARC_EVENTS.afterShow,
        ARC_EVENTS.hide,
        ARC_EVENTS.afterHide,
      ],
    },
  },
} as Meta;

const Template: Story = ({ customLabel, open }) => html`
  <arc-container>
    <arc-navbar slot="nav" logo="/arc-red.svg"></arc-navbar>
    <arc-sidebar
      slot="side"
      label=${ifDefined(customLabel || undefined)}
      ?open=${open}
    >
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
    <div style="padding: var(--arc-spacing-normal)">
      <p>
        When using the <code class="code-block">fullscreen</code> property, the
        <code class="code-block">arc-sidebar</code> component should not be
        used.
      </p>
      <p>
        The <code class="code-block">arc-drawer</code> component could be used
        instead.
      </p>
    </div>
  </arc-container>
`;

const defaultArgs = {
  open: true,
  customLabel: 'Select an option',
};

export const Default = Template.bind({});
Default.args = { ...defaultArgs };
