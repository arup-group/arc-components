import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit';

interface ArgTypes {
  height?: string;
}

export default {
  title: 'Components/ArcBottombar',
  component: 'arc-bottombar',
} as Meta;

const Template: Story<ArgTypes> = ({ height }: ArgTypes) => html`
  <div style="display: grid;">
    <arc-bottombar style="height: ${height}">
      <arc-icon-button name="home" label="Back to home">Home</arc-icon-button>
      <arc-icon-button name="menu" label="Change settings">More</arc-icon-button>
      <arc-icon-button name="accessibility" label="Accessibility control">Accessibility</arc-icon-button>
    </arc-bottombar>
  </div>
`;

const defaultArgs: ArgTypes = {
  height: 'var(--arc-bottom-height)',
};

/* TYPES */
export const Default = Template.bind({});
Default.args = { ...defaultArgs };
