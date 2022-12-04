import { Meta, Story } from '@storybook/html';
import { ARC_BOTTOMBAR_DEFAULT_ARGS, ArcBottombar, ArcBottombarCustomHeight } from './arc-bottombar.css.utils.js';
import './arc-bottombar.css';

export default {
  title: 'CSS/ArcBottombar',
} as Meta;

const Template: Story<typeof ARC_BOTTOMBAR_DEFAULT_ARGS> = args => ArcBottombar(args);

const HeightTemplate: Story<typeof ARC_BOTTOMBAR_DEFAULT_ARGS> = args => ArcBottombarCustomHeight(args);

export const Default = Template.bind({});

export const CustomHeight = HeightTemplate.bind({});
