import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { Placement } from '@popperjs/core';
import ArcDropdown from './ArcDropdown.js';
import { DROPDOWN_PLACEMENTS } from './constants/DropdownConstants.js';
import { ARC_EVENTS } from '../../internal/constants/eventConstants.js';

interface ArgTypes {
  placement: Placement;
  distance?: number;
  skidding?: number;
  open: boolean;
  disabled: boolean;
  hoist: boolean;
}

export default {
  title: 'Components/ArcDropdown',
  component: ArcDropdown.tag,
  argTypes: {
    placement: {
      control: 'select',
      options: Object.values(DROPDOWN_PLACEMENTS),
    },
  },
  parameters: {
    actions: {
      handles: [ARC_EVENTS.show, ARC_EVENTS.afterShow, ARC_EVENTS.hide, ARC_EVENTS.afterHide, ARC_EVENTS.select],
    },
  },
} as Meta;

const Template: Story<ArgTypes> = ({ placement, distance, skidding, open, disabled, hoist }: ArgTypes) => html`
  <arc-dropdown
    placement=${placement}
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

const defaultArgs: ArgTypes = {
  placement: DROPDOWN_PLACEMENTS['bottom-start'],
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
Position.args = { ...defaultArgs, placement: DROPDOWN_PLACEMENTS['top-start'] };

export const Distance = Template.bind({});
Distance.args = { ...defaultArgs, distance: 20 };

export const Skidding = Template.bind({});
Skidding.args = { ...defaultArgs, skidding: 20 };

/* STATES */
export const Hoist = Template.bind({});
Hoist.args = { ...defaultArgs, hoist: true };
