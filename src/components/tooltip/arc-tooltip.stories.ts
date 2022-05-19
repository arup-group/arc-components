import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import type ArcTooltip from './ArcTooltip.js';
import './arc-tooltip.js';

export default {
  title: 'Components/ArcTooltip',
  component: 'arc-tooltip',
} as Meta;

const Template: Story<ArcTooltip> = ({ placement, distance, skidding, open, disabled, hoist }) => html`
  <arc-tooltip
    placement=${ifDefined(placement || undefined)}
    distance=${ifDefined(distance || undefined)}
    skidding=${ifDefined(skidding || undefined)}
    ?open="${open}"
    ?disabled="${disabled}"
    ?hoist="${hoist}"
  ></arc-tooltip>
`;

const defaultArgs = {
  name: 'Test component',
  active: false,
};

export const Default = Template.bind({});
Default.args = { ...defaultArgs };

export const Active = Template.bind({});
Active.args = { ...defaultArgs, active: true };
