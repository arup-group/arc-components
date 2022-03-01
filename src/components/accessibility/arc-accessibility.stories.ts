import { Meta } from '@storybook/web-components';
import {html, TemplateResult} from 'lit';
import ArcAccessibility from "./ArcAccessibility.js";

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  open: boolean;
}

export default {
  title: 'Components/ArcAccessibility',
  component: `${ArcAccessibility.tag}`
} as Meta;

const Template: Story<ArgTypes> = () => html`
  <style>
    #content {
      padding: var(--arc-spacing-medium);
    }

    #content code {
      background-color: rgb(var(--arc-background-color));
      padding: 5px;
      border-radius: 5px;
    }
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

const defaultArgs: ArgTypes = {
  open: false,
};

/* TYPES */
export const Default = Template.bind({});
Default.args = {...defaultArgs};
