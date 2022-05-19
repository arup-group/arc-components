import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { FLOATING_PLACEMENTS } from '../../internal/constants/placementConstants.js';
import { ARC_EVENTS } from '../../internal/constants/eventConstants.js';
import type ArcDropdown from './ArcDropdown.js';
import './arc-dropdown.js';
import '../button/arc-button.js';
import '../menu/arc-menu.js';
import '../menu-item/arc-menu-item.js';

export default {
  title: 'Components/ArcDropdown',
  component: 'arc-dropdown',
  argTypes: {
    placement: {
      control: 'select',
      options: Object.values(FLOATING_PLACEMENTS),
    },
  },
  parameters: {
    actions: {
      handles: [ARC_EVENTS.show, ARC_EVENTS.afterShow, ARC_EVENTS.hide, ARC_EVENTS.afterHide, ARC_EVENTS.select],
    },
  },
} as Meta;

const Template: Story<ArcDropdown> = ({ placement, distance, skidding, open, disabled, hoist }) => html`
  <arc-dropdown
    placement=${ifDefined(placement || undefined)}
    distance=${ifDefined(distance || undefined)}
    skidding=${ifDefined(skidding || undefined)}
    ?open="${open}"
    ?disabled="${disabled}"
    ?hoist="${hoist}"
  >
    <arc-button slot="trigger">Dropdown</arc-button>
    <arc-menu>
      <arc-menu-item>Item 1</arc-menu-item>
      <arc-menu-item>Item 2</arc-menu-item>
      <arc-menu-item>Item 3</arc-menu-item>
    </arc-menu>
  </arc-dropdown>
`;

const defaultArgs = {
  distance: 0,
  skidding: 0,
  open: false,
  disabled: false,
  hoist: false,
};

/* TYPES */
export const Default = Template.bind({});
Default.args = { ...defaultArgs };

/* POSITIONING */
export const Position = Template.bind({});
Position.args = { ...defaultArgs, placement: FLOATING_PLACEMENTS['top-start'] };

export const Distance = Template.bind({});
Distance.args = { ...defaultArgs, distance: 20 };

export const Skidding = Template.bind({});
Skidding.args = { ...defaultArgs, skidding: 20 };

/* STATES */
export const Hoist = Template.bind({});
Hoist.args = { ...defaultArgs, hoist: true };
