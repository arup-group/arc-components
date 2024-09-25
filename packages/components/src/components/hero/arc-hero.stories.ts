import { html } from 'lit';
import { Meta, StoryFn } from '@storybook/web-components';
import { ifDefined } from 'lit/directives/if-defined.js';
import ArcHero from './ArcHero.js';
import './arc-hero.js';

export default {
  title: 'Components/ArcHero',
  component: 'arc-hero',
} as Meta;

export const Default: StoryFn<ArcHero> = ({
  background,
  fullscreen,
  title,
  subtitle,
}) => html`
  <arc-container>
    <arc-hero
      background=${ifDefined(background || undefined)}
      title=${ifDefined(title || 'Callisto')}
      subtitle=${ifDefined(subtitle || '25888 Entries | 2021-09-01')}
      ?fullscreen=${fullscreen}
      style=${ifDefined(background ? 'color: white;' : undefined)}
    >
      <span>
        Creating a prototype website that also contains copy and images is the
        best way to help the client understand what the concept behind your design
        is.
      </span>
    </arc-hero>
  </arc-container>
`;
