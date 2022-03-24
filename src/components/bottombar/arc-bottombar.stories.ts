import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit';
import './arc-bottombar.js';
import '../icon-button/arc-icon-button.js';

export default {
  title: 'Components/ArcBottombar',
  component: 'arc-bottombar',
  argTypes: {
    height: {
      control: 'text',
    },
  },
} as Meta;

const Template: Story = ({ height }) => html`
  <arc-bottombar class="bottom-bar" style="height: ${height}">
    <arc-icon-button name="home" label="Back to home">Home</arc-icon-button>
    <arc-icon-button name="menu" label="Change settings">More</arc-icon-button>
    <arc-icon-button name="accessibility" label="Accessibility control">Accessibility</arc-icon-button>
  </arc-bottombar>
  <style>
    .bottom-bar {
      display: block;
    }
  </style>
`;

const defaultArgs = {
  height: '4.5rem',
};

export const Default = Template.bind({});
Default.args = { ...defaultArgs };

export const CustomHeight = Template.bind({});
CustomHeight.args = { ...defaultArgs, height: '8rem;' };
