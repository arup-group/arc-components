import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit';
import type ArcTable from './ArcTable.js';
import './arc-table.js';

export default {
  title: 'Components/ArcTable',
  component: 'arc-table',
} as Meta;

const Template: Story<ArcTable> = () => html` <arc-table></arc-table> `;

const defaultArgs = {
  name: 'Test component',
  active: false,
};

export const Default = Template.bind({});
Default.args = { ...defaultArgs };

export const Active = Template.bind({});
Active.args = { ...defaultArgs, active: true };
