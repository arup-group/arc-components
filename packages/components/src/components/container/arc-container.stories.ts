import { Meta, StoryFn } from '@storybook/web-components';
import { html } from 'lit';
import { CONTAINER_THEME_PREFERENCES } from './constants/ContainerConstants.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import type ArcContainer from './ArcContainer.js';
import './arc-container.js';

export default {
  title: 'Components/ArcContainer',
  component: 'arc-container',
  argTypes: {
    banner: { control: 'text' },
    theme: {
      control: 'select',
      options: Object.values(CONTAINER_THEME_PREFERENCES),
    },
  },
} as Meta;

const Template: StoryFn<ArcContainer> = ({ theme, fullscreen, banner }) =>
  html`<arc-container
    theme="${theme ?? 'auto'}"
    ?fullscreen="${ifDefined(fullscreen)}"
    banner="${ifDefined(banner)}"
  ></arc-container>`;

export const Container = Template.bind({});

export const Fullscreen = Template.bind({});
Fullscreen.args = { fullscreen: true };

export const Banner = Template.bind({});
Banner.args = { banner: 'Arc Banner' };
