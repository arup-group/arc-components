import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit';
import { DRAWER_PLACEMENTS } from './constants/DrawerConstants.js';
import { ARC_EVENTS } from '../../internal/constants/eventConstants.js';
import type ArcDrawer from './ArcDrawer.js';
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
  parameters: {
    actions: {
      handles: [
        ARC_EVENTS.show,
        ARC_EVENTS.afterShow,
        ARC_EVENTS.hide,
        ARC_EVENTS.afterHide,
        ARC_EVENTS.initialFocus,
        ARC_EVENTS.requestClose,
      ],
    },
  },
} as Meta;

const Template: Story<ArcDrawer> = ({ open, contained, placement, label }) => html`
  <div class="wrapper">
    <arc-drawer ?open=${open} ?contained=${contained} placement=${placement} label=${label}>
      <div id="content">
        <p>Scroll down and give it a try! 👇</p>
      </div>
    </arc-drawer>
  </div>
  <style>
    .wrapper {
      height: 18rem;
      position: relative;
      box-shadow: var(--arc-box-shadow);
      margin-bottom: var(--arc-spacing-medium);
    }

    #content {
      height: 150vh;
    }
  </style>
`;

const LockedTemplate: Story<ArcDrawer> = ({ open, contained, placement, label }) => html`
  <div class="wrapper">
    <arc-drawer
      id="lockedDrawer"
      ?open=${open}
      ?contained=${contained}
      placement=${placement}
      label=${label}
      @arc-request-close=${(e: CustomEvent) => e.preventDefault()}
    >
      <p>This drawer is locked from closing!</p>
    </arc-drawer>
  </div>
  <style>
    .wrapper {
      height: 18rem;
      position: relative;
      box-shadow: var(--arc-box-shadow);
      margin-bottom: var(--arc-spacing-medium);
    }
  </style>
`;

const defaultArgs = {
  open: true,
  contained: true,
  placement: DRAWER_PLACEMENTS.end,
  label: 'Drawer',
};

/* TYPES */
export const Default = Template.bind({});
Default.args = { ...defaultArgs };

export const Top = Template.bind({});
Top.args = { ...defaultArgs, placement: DRAWER_PLACEMENTS.top, label: 'Drawer top' };

export const End = Template.bind({});
End.args = { ...defaultArgs, placement: DRAWER_PLACEMENTS.end, label: 'Drawer end' };

export const Bottom = Template.bind({});
Bottom.args = { ...defaultArgs, placement: DRAWER_PLACEMENTS.bottom, label: 'Drawer bottom' };

export const Start = Template.bind({});
Start.args = { ...defaultArgs, placement: DRAWER_PLACEMENTS.start, label: 'Drawer start' };

/* OTHER */
export const PreventClosing = LockedTemplate.bind({});
PreventClosing.args = { ...defaultArgs };
