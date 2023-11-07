import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { ARC_EVENTS } from '../../internal/constants/eventConstants.js';
import './arc-checkbox-group.js';
import '../checkbox/arc-checkbox.js';

export default {
  title: 'Components/ArcCheckboxGroup',
  component: 'arc-checkbox-group',
  argTypes: {
    customLabel: {
      name: 'label',
      control: 'text',
      description:
        'The checkbox group label. Required for proper accessibility. Alternatively, the label slot can be used.',
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
  <arc-checkbox-group label=${ifDefined(customLabel || undefined)} ?row=${row}>
    <arc-checkbox name="car" value="vw">Volkswagen</arc-checkbox>
    <arc-checkbox name="car" value="opel">Opel</arc-checkbox>
    <arc-checkbox name="car" value="tesla">Tesla</arc-checkbox>
  </arc-checkbox-group>
`;

/* TYPES */
export const Default = Template.bind({});
Default.args = { customLabel: 'Checkbox Group', row: false };

export const Row = Template.bind({});
Row.args = { customLabel: 'Checkbox Group', row: true };
