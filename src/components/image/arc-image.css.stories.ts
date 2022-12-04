import { Meta, Story } from '@storybook/html';
import { ARC_IMAGE_DEFAULT_ARGS, ArcImage } from './arc-image.css.utils';
import './arc-image.css';

export default {
  title: 'CSS/ArcImage',
} as Meta;

const Template: Story<typeof ARC_IMAGE_DEFAULT_ARGS> = args => ArcImage(args);

export const Default = Template.bind({});
Default.args = { ...ARC_IMAGE_DEFAULT_ARGS };

export const Invalid = Template.bind({});
Invalid.args = { ...ARC_IMAGE_DEFAULT_ARGS, src: '' };
