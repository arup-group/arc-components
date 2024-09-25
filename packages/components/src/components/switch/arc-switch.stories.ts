import { Meta, StoryFn } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import type ArcSwitch from './ArcSwitch.js';
import './arc-switch.js';

export default {
  title: 'Components/ArcSwitch',
  component: 'arc-switch',
} as Meta;

export const Default: StoryFn<ArcSwitch> = ({ name, value, checked, disabled }) => html`
  <arc-switch
    name=${ifDefined(name || undefined)}
    value=${ifDefined(value || undefined)}
    ?disabled=${disabled}
    ?checked=${checked}
  >
    Switch
  </arc-switch>
`;
