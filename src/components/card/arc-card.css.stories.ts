import { Meta, Story } from '@storybook/html';
import { ARC_CARD_DEFAULT_ARGS, ArcCard } from './arc-card.css.utils';
import './arc-card.css';

export default {
  title: 'CSS/ArcCard',
} as Meta;

const Template: Story<typeof ARC_CARD_DEFAULT_ARGS> = args => ArcCard(args);

export const Default = Template.bind({});
Default.args = { ...ARC_CARD_DEFAULT_ARGS };
