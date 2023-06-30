import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { DRAWER_PLACEMENTS } from './constants/DrawerConstants.js';
import { ARC_EVENTS } from '../../internal/constants/eventConstants.js';
import './arc-drawer.js';

export default {
  title: 'Components/ArcDrawer',
  component: 'arc-drawer',
  argTypes: {
    placement: {
      control: 'select',
      options: Object.values(DRAWER_PLACEMENTS),
    },
    customLabel: {
      name: 'label',
      control: 'text',
      description: 'The drawer label. Required for proper accessibility. Alternatively, the label slot can be used.',
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
        ARC_EVENTS.initialFocus,
        ARC_EVENTS.requestClose,
      ],
    },
  },
} as Meta;

const Template: Story = ({ open, contained, placement, customLabel }) => html`
  <div class="wrapper">
    <arc-drawer
      ?open=${open}
      ?contained=${contained}
      placement=${placement}
      label=${ifDefined(customLabel || undefined)}
    >
      <div id="content">Scroll down and give it a try! 👇</div>
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
const SizeTemplate: Story = () => html`
  <div class="wrapper">
    <arc-drawer label="Drawer" open contained style="--size: 50vw;">
      This drawer is always 50% of the viewport.
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
const LockedTemplate: Story = ({ open, contained, placement, customLabel }) => html`
  <div class="wrapper">
    <arc-drawer
      ?open=${open}
      ?contained=${contained}
      placement=${placement}
      label=${ifDefined(customLabel || undefined)}
      @arc-request-close=${(e: CustomEvent) => e.preventDefault()}
    >
      This drawer is locked from closing!
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
  customLabel: 'Drawer',
};

/* TYPES */
export const Default = Template.bind({});
Default.args = { ...defaultArgs };

export const Top = Template.bind({});
Top.args = { ...defaultArgs, placement: DRAWER_PLACEMENTS.top, customLabel: 'Drawer top' };

export const End = Template.bind({});
End.args = { ...defaultArgs, placement: DRAWER_PLACEMENTS.end, customLabel: 'Drawer end' };

export const Bottom = Template.bind({});
Bottom.args = { ...defaultArgs, placement: DRAWER_PLACEMENTS.bottom, customLabel: 'Drawer bottom' };

export const Start = Template.bind({});
Start.args = { ...defaultArgs, placement: DRAWER_PLACEMENTS.start, customLabel: 'Drawer start' };

/* SIZES */
export const CustomSize = SizeTemplate.bind({});

/* OTHER */
export const Locked = LockedTemplate.bind({});
Locked.args = { ...defaultArgs };
