import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit';
import type ArcSpinner from './ArcSpinner.js';
import './arc-spinner.js';

export default {
  title: 'Components/ArcSpinner',
  component: 'arc-spinner',
} as Meta;

const Template: Story<ArcSpinner> = () => html` <arc-spinner></arc-spinner> `;

export const Default = Template.bind({});
