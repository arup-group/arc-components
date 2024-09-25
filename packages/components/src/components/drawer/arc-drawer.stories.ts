import { Meta, StoryFn } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { DRAWER_PLACEMENTS } from './constants/DrawerConstants.js';
import ArcDrawer from './ArcDrawer.js';
import './arc-drawer.js';

export default {
  title: 'Components/ArcDrawer',
  component: 'arc-drawer',
  argTypes: {
    placement: {
      control: 'select',
      options: Object.values(DRAWER_PLACEMENTS),
    },
  },
} as Meta;

export const Default: StoryFn<ArcDrawer>= ({ open, contained, placement, label }) => html`
  <arc-container>
    <arc-drawer
      ?open=${open}
      ?contained=${contained}
      placement=${placement}
      label=${ifDefined(label || undefined)}
    >
      <div style="height: 150vh;">Scroll down and give it a try! 👇</div>
    </arc-drawer>
  </arc-container>
`;
