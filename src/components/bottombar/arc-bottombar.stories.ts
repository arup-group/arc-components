import { Meta } from '@storybook/web-components';
import { html, TemplateResult } from 'lit';

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  height?: string;
}

export default {
  title: 'Components/ArcBottombar',
  argTypes: {
    height: { control: 'text' }
  },
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

export const Default = Template.bind({});
Default.args = {
  height: 'var(--arc-bottom-height)',
};
