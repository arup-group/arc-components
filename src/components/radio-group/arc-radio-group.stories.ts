import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit';
import type ArcRadioGroup from './ArcRadioGroup.js';
import './arc-radio-group.js';
import '../radio/arc-radio.js';
import { ARC_EVENTS } from '../../internal/constants/eventConstants.js';

export default {
  title: 'Components/ArcRadioGroup',
  component: 'arc-radio-group',
  parameters: {
    actions: {
      handles: [ARC_EVENTS.change],
    },
  },
} as Meta;

const Template: Story<ArcRadioGroup> = ({ label, row }) => html`
  <arc-radio-group label="${label}" ?row="${row}">
    <arc-radio>Item 1</arc-radio>
    <arc-radio>Item 2</arc-radio>
    <arc-radio>Item 3</arc-radio>
  </arc-radio-group>
`;

/* TYPES */
export const Default = Template.bind({});
Default.args = { label: 'Radio Group', row: false };

export const Row = Template.bind({});
Row.args = { label: 'Radio Group', row: true };
