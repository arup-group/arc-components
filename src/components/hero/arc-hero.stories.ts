import { html } from 'lit';
import { Meta, Story } from '@storybook/web-components';
import type ArcHero from './ArcHero.js';

export default {
  title: 'Components/ArcHero',
  component: 'arc-hero'
} as Meta;

const Template: Story<ArcHero> = ({ background }) => html`
  <arc-hero  bgImg="${background}" >
  <span slot='title'>Generative Design & the Built Environment...</span>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  </arc-hero>
`;

const ImgTemplate: Story<ArcHero> = () => html`
  <arc-hero  >
  <span slot='title'>Generative Design & the Built Environment...</span>
  <img src="https://random.imagecdn.app/500/150"/>
  </arc-hero>
`;

/* TYPES */
export const Default = Template.bind({});
export const ImgDisplay = ImgTemplate.bind({});
export const BackgroundImg = Template.bind({});
BackgroundImg.args = { background: "https://random.imagecdn.app/500/150"};
