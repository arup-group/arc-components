import { Meta, StoryFn } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { FLOATING_PLACEMENTS } from '../../internal/constants/placementConstants.js';
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
} as Meta;

export const Default: StoryFn<ArcDropdown> = ({
  placement,
  distance,
  skidding,
  open,
  disabled,
  hoist,
}) => html`
  <arc-container>
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
  </arc-container>
`;
