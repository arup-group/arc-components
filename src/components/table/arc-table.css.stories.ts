import { Meta, Story } from '@storybook/html';
import { ARC_TABLE_DEFAULT_ARGS, ArcTable } from './arc-table.css.utils';
import './arc-table.css';

export default {
  title: 'CSS/ArcTable',
} as Meta;

const Template: Story<typeof ARC_TABLE_DEFAULT_ARGS> = args => ArcTable(args);

/* TYPES */
export const Default = Template.bind({});
Default.args = { ...ARC_TABLE_DEFAULT_ARGS };
