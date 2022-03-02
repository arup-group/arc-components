import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit';
import ArcRadio from './ArcRadio.js';
import { ARC_EVENTS } from '../../internal/constants/eventConstants.js';

interface ArgTypes {
  name: string;
  value?: string;
  disabled: boolean;
  checked: boolean;
}

export default {
  title: 'Components/ArcRadio',
  component: ArcRadio.tag,
  parameters: {
    actions: {
      handles: [ARC_EVENTS.change],
    },
  },
} as Meta;

const Template: Story<ArgTypes> = ({ name, value, disabled, checked }: ArgTypes) => html`
  <div id="content">
    <arc-radio-group label="Radio Group">
      <arc-radio name=${name} value=${value} ?disabled=${disabled} ?checked=${checked}>Option 1</arc-radio>
      <arc-radio name=${name} value="option_2" ?disabled=${disabled}>Option 2</arc-radio>
      <arc-radio name=${name} value="option_3" ?disabled=${disabled}>Option 3</arc-radio>
    </arc-radio-group>
    <p>
      For demoing purposes, only the first item responds to the <code>checked</code> and <code>value</code> properties.
    </p>
  </div>
`;

const defaultArgs: ArgTypes = {
  name: 'arc-test',
  value: 'option_1',
  disabled: false,
  checked: false,
};

/* TYPES */
export const Default = Template.bind({});
Default.args = { ...defaultArgs };

export const Disabled = Template.bind({});
Disabled.args = { ...defaultArgs, disabled: true };
