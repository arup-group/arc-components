import { Meta, StoryFn } from '@storybook/web-components';
import { html } from 'lit';
import { ARC_EVENTS } from '../../internal/constants/eventConstants.js';
import type ArcCheckbox from './ArcCheckbox.js';
import './arc-checkbox.js';
import { ifDefined } from 'lit/directives/if-defined.js';

export default {
  title: 'Components/ArcCheckbox',
  component: 'arc-checkbox',
  parameters: {
    actions: {
      handles: [ARC_EVENTS.change],
    },
  },
} as Meta;

export const Default: StoryFn<ArcCheckbox> = ({
  name,
  checked,
  disabled,
}) => html`
  <arc-checkbox
    name=${ifDefined(name)}
    ?disabled=${disabled}
    ?checked=${checked}
  >
    Arc Checkbox
  </arc-checkbox>
`;
