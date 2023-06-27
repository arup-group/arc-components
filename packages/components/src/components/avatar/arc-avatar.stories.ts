import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import type ArcAvatar from './ArcAvatar.js';
import './arc-avatar.js';

export default {
  title: 'Components/ArcAvatar',
  component: 'arc-avatar',
} as Meta;

const Template: Story<ArcAvatar> = ({ name, image, label }) => html`
  <arc-avatar
    name=${ifDefined(name || undefined)}
    image=${ifDefined(image || undefined)}
    label=${ifDefined(label || undefined)}
  ></arc-avatar>
`;

const GroupTemplate: Story<ArcAvatar> = () => html`
  <div class="avatar-group">
    <arc-avatar
      image="https://picsum.photos/200"
      label="First avatar in avatar group."
    ></arc-avatar>

    <arc-avatar
      image="https://picsum.photos/300"
      label="Second avatar in avatar group."
    ></arc-avatar>

    <arc-avatar
      image="https://picsum.photos/400"
      label="Third avatar in avatar group."
    ></arc-avatar>
  </div>
  <style>
    .avatar-group arc-avatar:not(:first-of-type) {
      margin-left: -1rem;
    }

    .avatar-group arc-avatar {
      border: var(--arc-border-style) 2px rgb(var(--arc-grey-000));
    }
  </style>
`;

export const Default = Template.bind({});

export const Image = Template.bind({});
Image.args = {
  image: 'https://picsum.photos/300',
  label: 'Example avatar for the arc-avatar component.',
};

export const Initials = Template.bind({});
Initials.args = {
  name: 'User Name',
};

export const AvatarGroupExample = GroupTemplate.bind({});
