import { Meta, Story } from '@storybook/web-components';
import {html} from 'lit';
import ArcAccessibility from "./ArcAccessibility.js";
import {ARC_EVENTS} from "../../internal/constants/eventConstants.js";

export default {
  title: 'Components/ArcAccessibility',
  component: ArcAccessibility.tag,
  parameters: {
    actions: {
      handles: [ARC_EVENTS.accessibilityChange]
    }
  }
} as Meta;

const Template: Story = () => html`
  <style>

  </style>
  <arc-container>
    <arc-navbar slot="nav"></arc-navbar>
    <div id="content">
      <p>Press the <code>a</code> key to toggle the built-in accessibility.</p>
      <p>Change your personal preferences by making a selection within the accessibility panel.</p>
      <p>
        Check the arc-accessibility-change event being fired inside the <code>Actions</code> tab whenever a change is
        made.
      </p>
    </div>
  </arc-container>
`;

/* TYPES */
export const Default = Template.bind({});
