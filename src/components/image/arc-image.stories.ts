import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit';
import type ArcImage from './ArcImage.js';
import './arc-image';

export default {
  title: 'Components/ArcImage',
  component: 'arc-image'
} as Meta;

const Template: Story<ArcImage> = ({ name, active }) => html`
  <arc-image name=${name} ?active=${active}></arc-image>
`;

const defaultArgs = {
  name: 'Test component',
  active: false,
};

export const Default = Template.bind({});
Default.args = { ...defaultArgs };

export const Active = Template.bind({});
Active.args = { ...defaultArgs, active: true };
