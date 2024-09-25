import { Meta, StoryFn } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { uppercaseFirstLetter } from '../../internal/string.js';
import { FLOATING_PLACEMENTS } from '../../internal/constants/placementConstants.js';
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
} as Meta;

export const Default: StoryFn<ArcTooltip> = ({
  placement,
  distance,
  skidding,
  delay,
  trigger,
  open,
  disabled,
  hoist,
}) => html`
  <arc-tooltip
    placement=${ifDefined(placement || undefined)}
    distance=${ifDefined(distance || undefined)}
    skidding=${ifDefined(skidding || undefined)}
    delay=${ifDefined(delay || undefined)}
    trigger=${ifDefined(trigger || undefined)}
    ?open="${open}"
    ?disabled="${disabled}"
    ?hoist="${hoist}"
    content="You used a ${trigger || 'hover'} to show this tooltip."
  >
    <arc-button>${uppercaseFirstLetter(trigger || 'hover')} me!</arc-button>
  </arc-tooltip>
`;

