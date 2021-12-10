import { html, TemplateResult } from 'lit';
import { Placement } from '@popperjs/core';

import './arc-dropdown.js';
import '../button/arc-button.js';
import '../menu/arc-menu.js';
import '../menu-item/arc-menu-item.js';

import { DROPDOWN_PLACEMENTS } from './constants/DropdownConstants.js';

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  placement: Placement;
  distance: number;
  skidding: number;
  open: boolean;
  disabled: boolean;
  hoist: boolean;
}

const Template: Story<ArgTypes> = ({ placement, distance, skidding, open, disabled, hoist }: ArgTypes) => html`
  <arc-dropdown
    placement=${placement}
    distance=${distance}
    skidding=${skidding}
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
  placement: DROPDOWN_PLACEMENTS.bottomStart,
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
export const Distance = Template.bind({});
export const Skidding = Template.bind({});

Position.args = { ...defaultArgs, placement: DROPDOWN_PLACEMENTS.topStart };
Distance.args = { ...defaultArgs, distance: 20 };
Skidding.args = { ...defaultArgs, skidding: 20 };

/* STATES */
export const Hoist = Template.bind({});
Hoist.args = { ...defaultArgs, hoist: true };
