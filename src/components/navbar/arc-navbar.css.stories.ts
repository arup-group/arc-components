import { Meta, Story } from '@storybook/html';
import { ARC_NAVBAR_DEFAULT_ARGS, ArcNavbar } from './arc-navbar.css.utils';
import './arc-navbar.css';

export default {
  title: 'CSS/ArcNavbar',
} as Meta;

const Template: Story<typeof ARC_NAVBAR_DEFAULT_ARGS> = args => ArcNavbar(args);

export const Default = Template.bind({});
Default.args = { ...ARC_NAVBAR_DEFAULT_ARGS };
