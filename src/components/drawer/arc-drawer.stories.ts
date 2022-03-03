import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit';
import ArcDrawer from "./ArcDrawer.js";
import { DRAWER_PLACEMENTS } from './constants/DrawerConstants.js';
import { ARC_EVENTS } from '../../internal/constants/eventConstants.js';

export default {
  title: 'Components/ArcDrawer',
  component: ArcDrawer.tag,
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
  <div
    style="position: relative; height: 18rem; box-shadow: var(--arc-input-box-shadow); margin-bottom: var(--arc-spacing-medium)"
  >
    <arc-drawer
      ?open="${open}"
      ?contained="${contained}"
      placement="${placement}"
      label="${label}"
    >
      <div style="height: 150vh;">
        <p>Scroll down and give it a try! 👇</p>
      </div>
    </arc-drawer>
  </div>
`;

const LockedTemplate: Story<ArcDrawer> = ({ open, contained, placement, label}) => html`
  <div
    style="position: relative; height: 18rem; box-shadow: var(--arc-input-box-shadow); margin-bottom: var(--arc-spacing-medium)"
  >
    <arc-drawer
      id="lockedDrawer"
      ?open="${open}"
      ?contained="${contained}"
      placement="${placement}"
      label="${label}"
      @arc-request-close=${(e: CustomEvent) => e.preventDefault()}
    >
      <p>This drawer is locked from closing!</p>
    </arc-drawer>
  </div>
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
export const Closing = LockedTemplate.bind({});
Closing.args = { ...defaultArgs };
