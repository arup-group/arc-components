import {Meta, Story} from '@storybook/web-components';
import {html} from 'lit';
import {ifDefined} from 'lit/directives/if-defined.js';
import ArcDropdown from './ArcDropdown.js';
import {Placement} from '@popperjs/core';
import {DROPDOWN_PLACEMENTS} from './constants/DropdownConstants.js';

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
  component: `${ArcDropdown.tag}`,
  argTypes: {
    placement: {
      control: 'select',
      options: Object.values(DROPDOWN_PLACEMENTS)
    }
  }
} as Meta;

const Template: Story<ArgTypes> = ({placement, distance, skidding, open, disabled, hoist}: ArgTypes) => html`
  <arc-dropdown
    placement=${placement}
    distance=${ifDefined(distance ? distance : undefined)}
    skidding=${ifDefined(skidding ? skidding : undefined)}
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
Default.args = {...defaultArgs};

/* POSITIONING */
export const Position = Template.bind({});
export const Distance = Template.bind({});
export const Skidding = Template.bind({});

Position.args = {...defaultArgs, placement: DROPDOWN_PLACEMENTS['top-start']};
Distance.args = {...defaultArgs, distance: 20};
Skidding.args = {...defaultArgs, skidding: 20};

/* STATES */
export const Hoist = Template.bind({});
Hoist.args = {...defaultArgs, hoist: true};
