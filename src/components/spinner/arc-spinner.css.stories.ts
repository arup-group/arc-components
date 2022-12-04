import { Meta, Story, StoryFn } from '@storybook/html';
import { ARC_SPINNER_DEFAULT_ARGS, ArcSpinner } from './arc-spinner.css.utils';
import './arc-spinner.css';

export default {
  title: 'CSS/ArcSpinner',
} as Meta;

const Template: Story<typeof ARC_SPINNER_DEFAULT_ARGS> = args => ArcSpinner(args);

export const Primary: StoryFn = Template.bind({});
Primary.args = { ...ARC_SPINNER_DEFAULT_ARGS };
