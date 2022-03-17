import {html} from 'lit';
import {Meta, Story} from '@storybook/web-components';
import {ifDefined} from 'lit/directives/if-defined.js';
import type ArcHero from './ArcHero.js';
import './arc-hero.js';

export default {
  title: 'Components/ArcHero',
  component: 'arc-hero'
} as Meta;

const Template: Story<ArcHero> = ({ background}) => html`
  <arc-hero background=${ifDefined(background || undefined)} style="color: ${background ? 'white' : undefined}">
    <span slot="title">Callisto</span>
    <span slot="subtitle">25888 Entries | 11/06/1922</span>
    <span>Creating a prototype website that also contains copy and images is the best way to help the client understand what the concept behind your design is.</span>
  </arc-hero>
`

/* TYPES */
export const Default = Template.bind({});
export const BackgroundImg = Template.bind({});
BackgroundImg.args = {background: 'https://images.adsttc.com/media/images/5231/c740/e8e4/4efe/3a00/0090/large_jpg/gherkin_shaundunmall.jpg?1378993979'};
