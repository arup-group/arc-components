import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit';
import type ArcBottombar from './ArcBottombar.js';
import './arc-bottombar.js';
import '../icon-button/arc-icon-button.js';

export default {
  title: 'Components/ArcBottombar',
  component: 'arc-bottombar',
} as Meta;

const Template: Story<ArcBottombar> = () => html`
  <arc-bottombar class="bottom-bar">
    <arc-icon-button name="home" label="Back to home">Home</arc-icon-button>
    <arc-icon-button name="menu" label="Change settings">More</arc-icon-button>
    <arc-icon-button name="accessibility" label="Accessibility control">Accessibility</arc-icon-button>
  </arc-bottombar>
  <style>
    .bottom-bar {
      display: block;
    }
  </style>
`;
const HeightTemplate: Story<ArcBottombar> = () => html`
  <arc-bottombar class="bottom-bar" style="height: 8rem;">
    <arc-icon-button name="home" label="Back to home">Home</arc-icon-button>
    <arc-icon-button name="menu" label="Change settings">More</arc-icon-button>
    <arc-icon-button name="accessibility" label="Accessibility control">Accessibility</arc-icon-button>
  </arc-bottombar>
  <style>
    .bottom-bar {
      display: block;
    }
  </style>
`;

export const Default = Template.bind({});
export const CustomHeight = HeightTemplate.bind({});
