import { Meta, StoryFn } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import './arc-radio-group.js';
import '../radio/arc-radio.js';

export default {
  title: 'Components/ArcRadioGroup',
  component: 'arc-radio-group',
} as Meta;

export const Default: StoryFn = ({ label, row }) => html`
  <arc-radio-group label=${ifDefined(label || undefined)} ?row=${row}>
    <arc-radio name="car" value="vw">Volkswagen</arc-radio>
    <arc-radio name="car" value="opel">Opel</arc-radio>
    <arc-radio name="car" value="tesla">Tesla</arc-radio>
  </arc-radio-group>
`;
