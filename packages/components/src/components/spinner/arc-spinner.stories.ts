import { Meta, StoryFn } from '@storybook/web-components';
import { html } from 'lit';
import type ArcSpinner from './ArcSpinner.js';
import './arc-spinner.js';

export default {
  title: 'Components/ArcSpinner',
  component: 'arc-spinner',
} as Meta;

export const Default: StoryFn<ArcSpinner> = ({}) => html`<arc-spinner></arc-spinner>`;
