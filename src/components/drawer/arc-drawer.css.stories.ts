import { Meta, Story } from '@storybook/html';
import { ARC_DRAWER_DEFAULT_ARGS, WrapperWithArcDrawer } from './arc-drawer.css.utils';
import { DRAWER_PLACEMENTS } from './constants/DrawerConstants.js';
import './arc-drawer.css';

export default {
  title: 'CSS/ArcDrawer',
  argTypes: {
    placement: {
      control: 'select',
      options: Object.values(DRAWER_PLACEMENTS),
    },
    customLabel: {
      name: 'label',
      control: 'text',
      description: 'The drawer label. Required for proper accessibility. Alternatively, the label slot can be used.',
      table: {
        category: 'properties',
      },
    },
  },
} as Meta;

const Template: Story<typeof ARC_DRAWER_DEFAULT_ARGS> = args => WrapperWithArcDrawer(args);

export const Default = Template.bind({});
Default.args = { ...ARC_DRAWER_DEFAULT_ARGS };
