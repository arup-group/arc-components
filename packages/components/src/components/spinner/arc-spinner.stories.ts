import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit';
import type ArcSpinner from './ArcSpinner.js';
import './arc-spinner.js';

export default {
  title: 'Components/ArcSpinner',
  component: 'arc-spinner',
} as Meta;

const Template: Story<ArcSpinner> = () => html`<arc-spinner></arc-spinner>`;
const FontTemplate: Story<ArcSpinner> = () => html`
  <arc-spinner></arc-spinner>
  <arc-spinner style="font-size: 2rem;"></arc-spinner>
  <arc-spinner style="font-size: 3rem;"></arc-spinner>
`;
const TrackWidthTemplate: Story<ArcSpinner> = () => html`
  <arc-spinner style="font-size: 3rem; --track-width: .5rem;"></arc-spinner>
`;
const ColorTemplate: Story<ArcSpinner> = () => html`
  <arc-spinner style="font-size: 3rem; --stroke-color: red"></arc-spinner>
`;

export const Default = Template.bind({});
export const Size = FontTemplate.bind({});
export const TrackWidth = TrackWidthTemplate.bind({});
export const Color = ColorTemplate.bind({});
