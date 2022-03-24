import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { ARC_EVENTS } from '../../internal/constants/eventConstants.js';
import './arc-radio-group.js';
import '../radio/arc-radio.js';

export default {
  title: 'Components/ArcRadioGroup',
  component: 'arc-radio-group',
  argTypes: {
    customLabel: {
      name: 'label',
      control: 'text',
      description:
        'The radio group label. Required for proper accessibility. Alternatively, the label slot can be used.',
      table: {
        category: 'properties',
      },
    },
  },
  parameters: {
    actions: {
      handles: [ARC_EVENTS.change],
    },
  },
} as Meta;

const Template: Story = ({ customLabel, row }) => html`
  <arc-radio-group label=${ifDefined(customLabel || undefined)} ?row=${row}>
    <arc-radio>Item 1</arc-radio>
    <arc-radio>Item 2</arc-radio>
    <arc-radio>Item 3</arc-radio>
  </arc-radio-group>
`;

/* TYPES */
export const Default = Template.bind({});
Default.args = { customLabel: 'Radio Group', row: false };

export const Row = Template.bind({});
Row.args = { customLabel: 'Radio Group', row: true };
