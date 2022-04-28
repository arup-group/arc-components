import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit';
import type ArcAvatar from './ArcAvatar.js';
import './arc-avatar';

export default {
  title: 'Components/ArcAvatar',
  component: 'arc-avatar'
} as Meta;

const Template: Story<ArcAvatar> = ({ name, active }) => html`
  <arc-avatar name=${name} ?active=${active}></arc-avatar>
`;

const defaultArgs = {
  name: 'Test component',
  active: false,
};

export const Default = Template.bind({});
Default.args = { ...defaultArgs };

export const Active = Template.bind({});
Active.args = { ...defaultArgs, active: true };
