import { Meta, StoryFn } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import ArcAvatar from './ArcAvatar.js';
import './arc-avatar.js';

export default {
  title: 'Components/ArcAvatar',
  component: 'arc-avatar',
} as Meta;

export const Default: StoryFn<ArcAvatar> = ({ name, image, label }) => html`
  <arc-avatar
    name=${ifDefined(name)}
    image=${ifDefined(image)}
    label=${ifDefined(label)}
  />
`;

export const CustomFallbackIcon: StoryFn<ArcAvatar> = ({
  name,
  image,
  label,
}) => html`
  <arc-avatar
    name=${ifDefined(name)}
    image=${ifDefined(image)}
    label=${ifDefined(label)}
  >
    <ph-icon-x slot="icon" />
  </arc-avatar>
`;

export const AvatarWithName: StoryFn<ArcAvatar> = ({ image, label }) => html`
  <arc-avatar
    name="John Doe"
    image=${ifDefined(image)}
    label=${ifDefined(label)}
  />
`;

export const AvatarWithImage: StoryFn<ArcAvatar> = ({ name, label }) => html`
  <arc-avatar
    name=${ifDefined(name)}
    image="https://picsum.photos/200"
    label=${ifDefined(label)}
  />
`;
