import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit';
import { ARC_EVENTS } from '../../internal/constants/eventConstants.js';
import type ArcImage from './ArcImage.js';
import './arc-image.js';

export default {
  title: 'Components/ArcImage',
  component: 'arc-image',
  parameters: {
    actions: {
      handles: [ARC_EVENTS.loaded, ARC_EVENTS.error],
    },
  },
} as Meta;

const Template: Story<ArcImage> = ({ src, alt, delay, width, height }) => html`
  <arc-image src=${src} alt=${alt} delay=${delay} width=${width} height=${height}></arc-image>
`;

const defaultArgs = {
  src: 'https://picsum.photos/900',
  alt: 'A random generated background from picsum.photos.',
  delay: 1000,
  width: '200',
  height: '200',
};

export const Default = Template.bind({});
Default.args = { ...defaultArgs };

export const Error = Template.bind({});
Error.args = { ...defaultArgs, src: 'invalid' };
