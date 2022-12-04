import { Meta, Story } from '@storybook/html';
import { ARC_AVATAR_DEFAULT_ARGS, ArcAvatar } from './arc-avatar.css.utils.js';
import './arc-avatar.css';

export default {
  title: 'CSS/ArcAvatar',
} as Meta;

const Template: Story<typeof ARC_AVATAR_DEFAULT_ARGS> = args => ArcAvatar(args);

export const Default = Template.bind({});
Default.args = { ...ARC_AVATAR_DEFAULT_ARGS };

export const Image = Template.bind({});
Image.args = {
  ...ARC_AVATAR_DEFAULT_ARGS,
  image: 'https://picsum.photos/300',
  label: 'Example avatar for the arc-avatar component.',
};

export const Initials = Template.bind({});
Initials.args = {
  ...ARC_AVATAR_DEFAULT_ARGS,
  name: 'User Name',
};
