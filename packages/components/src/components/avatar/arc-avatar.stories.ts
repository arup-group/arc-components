import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import ArcAvatar from './ArcAvatar.js';
import './arc-avatar.js';
type S = Story<ArcAvatar>;

export default {
  title: 'Components/ArcAvatar',
  component: 'arc-avatar',
  argTypes: {
    name: { control: 'text' },
    image: {
      control: 'select',
      options: [
        undefined,
        'https://picsum.photos/100',
        'https://picsum.photos/200',
        'https://picsum.photos/300',
      ],
    },
    label: { control: 'text' },
  },
  parameters: { controls: { include: ['name', 'image', 'label'] } },
} as Meta;

export const Default: S = ({ name, image, label }) => html`
  <arc-avatar
    name=${ifDefined(name || undefined)}
    image=${ifDefined(image || undefined)}
    label=${ifDefined(label || undefined)}
  ></arc-avatar>
`;
Default.args = {};

export const WithInitials: S = Default.bind({});
WithInitials.args = { name: 'User Name' };

export const WithImage: S = Default.bind({});
WithImage.args = {
  name: 'User Name',
  image: 'https://picsum.photos/100',
  label: 'Alt text for avater image',
};
