import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { uppercaseFirstLetter } from '../../internal/string.js';
import { FLOATING_PLACEMENTS } from '../../internal/constants/placementConstants.js';
import { ARC_EVENTS } from '../../internal/constants/eventConstants.js';
import type ArcTooltip from './ArcTooltip.js';
import './arc-tooltip.js';
import '../button/arc-button.js';

export default {
  title: 'Components/ArcTooltip',
  component: 'arc-tooltip',
  argTypes: {
    placement: {
      control: 'select',
      options: Object.values(FLOATING_PLACEMENTS),
    },
    trigger: {
      control: 'select',
      options: ['click', 'hover', 'focus'],
    },
  },
  parameters: {
    actions: {
      handles: [ARC_EVENTS.show, ARC_EVENTS.afterShow, ARC_EVENTS.hide, ARC_EVENTS.afterHide],
    },
  },
} as Meta;

const Template: Story<ArcTooltip> = ({ placement, distance, skidding, delay, trigger, open, disabled, hoist }) => html`
  <arc-tooltip
    placement=${ifDefined(placement || undefined)}
    distance=${ifDefined(distance || undefined)}
    skidding=${ifDefined(skidding || undefined)}
    delay=${ifDefined(delay || undefined)}
    trigger=${ifDefined(trigger || undefined)}
    ?open="${open}"
    ?disabled="${disabled}"
    ?hoist="${hoist}"
    content="You used a ${trigger} to show this tooltip."
  >
    <arc-button>${uppercaseFirstLetter(trigger)} me!</arc-button>
  </arc-tooltip>
`;

const defaultArgs = {
  placement: FLOATING_PLACEMENTS.top,
  distance: 0,
  skidding: 0,
  delay: 150,
  trigger: 'hover',
  open: false,
  disabled: false,
  hoist: false,
};

/* TYPES */
export const Default = Template.bind({});
Default.args = { ...defaultArgs };

export const Clickable = Template.bind({});
Clickable.args = { ...defaultArgs, trigger: 'click' };

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

export const Disabled = Template.bind({});
Disabled.args = { ...defaultArgs, disabled: true };
