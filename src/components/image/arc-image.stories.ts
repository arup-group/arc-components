import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit';
import type ArcImage from './ArcImage.js';
import './arc-image';

export default {
  title: 'Components/ArcImage',
  component: 'arc-image',
} as Meta;

const Template: Story<ArcImage> = ({ src, fallback, alt, delay, margin, width, height }) => html`
  <arc-image
    src=${src}
    fallback=${fallback}
    alt=${alt}
    delay=${delay}
    margin=${margin}
    width=${width}
    height=${height}
  ></arc-image>
`;

const defaultArgs = {
  name: 'Test component',
  active: false,
};

export const Default = Template.bind({});
Default.args = { ...defaultArgs };

export const Active = Template.bind({});
Active.args = { ...defaultArgs, active: true };
