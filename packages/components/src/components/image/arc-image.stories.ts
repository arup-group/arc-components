import { html } from 'lit';
import { Meta, StoryFn } from '@storybook/web-components';
import { ifDefined } from 'lit/directives/if-defined.js';
import type ArcImage from './ArcImage.js';
import './arc-image.js';

export default {
  title: 'Components/ArcImage',
  component: 'arc-image',
} as Meta;

export const Default: StoryFn<ArcImage> = ({ src, alt, delay, width, height }) => html`
  <arc-image
    src=${ifDefined(src || 'https://picsum.photos/900')}
    alt=${ifDefined(alt || 'A random generated background from picsum.photos.')}
    delay=${ifDefined(delay || 1000)}
    width=${ifDefined(width || '200')}
    height=${ifDefined(height || '200')}
  ></arc-image>
`;

