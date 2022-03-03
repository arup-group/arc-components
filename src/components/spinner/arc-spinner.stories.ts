import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit';
import ArcSpinner from "./ArcSpinner.js";

export default {
  title: 'Components/ArcSpinner',
  component: ArcSpinner.tag
} as Meta;

const Template: Story<ArcSpinner> = () => html`
  <arc-spinner></arc-spinner>
`;

export const Default = Template.bind({});
