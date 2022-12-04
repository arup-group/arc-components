import { Meta, Story } from '@storybook/html';
import { ARC_RADIO_GROUP_DEFAULT_ARGS, ArcRadioGroup } from './arc-radio-group.css.utils.js';
import './arc-radio-group.css';

export default {
  title: 'CSS/ArcRadioGroup',
  argTypes: {
    customLabel: {
      name: 'label',
      control: 'text',
      description:
        'The radio group label. Required for proper accessibility. Alternatively, the label slot can be used.',
      table: {
        category: 'properties',
      },
    },
  },
} as Meta;

const Template: Story<typeof ARC_RADIO_GROUP_DEFAULT_ARGS> = args => ArcRadioGroup(args);

/* TYPES */
export const Default = Template.bind({});
Default.args = { customLabel: 'Radio Group', row: false };

export const Row = Template.bind({});
Row.args = { customLabel: 'Radio Group', row: true };
