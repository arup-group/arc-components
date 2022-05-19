import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit';
import type ArcTooltip from './ArcTooltip.js';
import './arc-tooltip.js';

export default {
  title: 'Components/ArcTooltip',
  component: 'arc-tooltip',
} as Meta;

const Template: Story<ArcTooltip> = ({ name, active }) => html`
  <arc-tooltip name=${name} ?active=${active}></arc-tooltip>
`;

const defaultArgs = {
  name: 'Test component',
  active: false,
};

export const Default = Template.bind({});
Default.args = { ...defaultArgs };

export const Active = Template.bind({});
Active.args = { ...defaultArgs, active: true };
