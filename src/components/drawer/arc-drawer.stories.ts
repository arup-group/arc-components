import { Meta, Story } from "@storybook/web-components";
import { html } from 'lit';
import ArcDrawer from "./ArcDrawer.js";
import { DRAWER_PLACEMENTS, DrawerPlacements } from './constants/DrawerConstants.js';

interface ArgTypes {
  open: boolean;
  contained: boolean;
  placement: DrawerPlacements;
  label: string;
  size: string;
}

export default {
  title: 'Components/ArcDrawer',
  component: `${ArcDrawer.tag}`,
  argTypes: {
    placement: {
      control: 'select',
      options: Object.values(DRAWER_PLACEMENTS)
    }
  }
} as Meta;

const Template: Story<ArgTypes> = ({ open, contained, placement, label, size }: ArgTypes) => html`
  <div style="position: relative; height: 18rem; box-shadow: var(--arc-input-box-shadow); margin-bottom: var(--arc-spacing-medium)">
    <arc-drawer
      style="--size:${size}"
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

const LockedTemplate: Story<ArgTypes> = ({ open, contained, placement, label, size }: ArgTypes) => html`
  <div style="position: relative; height: 18rem; box-shadow: var(--arc-input-box-shadow); margin-bottom: var(--arc-spacing-medium)">
    <arc-drawer
      id="lockedDrawer"
      style="--size:${size}"
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
  size: '25rem',
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
