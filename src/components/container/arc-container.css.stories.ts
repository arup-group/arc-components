import { Meta, Story } from '@storybook/html';
import { CONTAINER_THEMES } from './constants/ContainerConstants.js';
import { ARC_CONTAINER_DEFAULT_ARGS, ArcContainer } from './arc-container.css.utils';

export default {
  title: 'CSS/ArcContainer',
  argTypes: {
    theme: {
      control: 'select',
      options: Object.values(CONTAINER_THEMES),
    },
  },
} as Meta;

const Template: Story<typeof ARC_CONTAINER_DEFAULT_ARGS> = args => ArcContainer(args);

export const Container = Template.bind({});
Container.args = { theme: CONTAINER_THEMES.light, fullscreen: false };
