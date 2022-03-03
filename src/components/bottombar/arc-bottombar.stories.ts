import { Meta, Story } from '@storybook/web-components';
import ArcBottombar from "./ArcBottombar.js";
import { html } from 'lit';

export default {
  title: 'Components/ArcBottombar',
  component: ArcBottombar.tag,
  argTypes: {
    height: {
      control: 'text'
    }
  }
} as Meta;

const Template: Story<ArcBottombar> = () => html`
  <div style="display: grid;">
    <arc-bottombar>
      <arc-icon-button name="home" label="Back to home">Home</arc-icon-button>
      <arc-icon-button name="menu" label="Change settings">More</arc-icon-button>
      <arc-icon-button name="accessibility" label="Accessibility control">Accessibility</arc-icon-button>
    </arc-bottombar>
  </div>
`;

export const Default = Template.bind({});
