import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit';
import './arc-textfield'; // Ensure the import path is correct
import type ArcTextField from './ArcTextField'; // Adjust the import path as necessary

export default {
  title: 'Components/ArcTextField',
  component: 'arc-text-field',
  argTypes: {
    value: {
      control: 'text',
      description: 'The input value of the text field',
    },
    defaultValue: {
      control: 'text',
      description: 'The default (placeholder) value of the text field',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the text field if true',
    },
    loading: {
      control: 'boolean',
      description: 'Shows a loading indicator if true',
    },
  },
} as Meta;

const Template: Story<ArcTextField> = ({
  value,
  defaultValue,
  disabled,
  loading,
}) => html`
  <arc-textfield
    .value=${value || ''}
    .defaultValue=${defaultValue || ''}
    ?disabled=${disabled}
    ?loading=${loading}
  ></arc-textfield>
`;

// Default story
export const Default = Template.bind({});
Default.args = {
  value: '',
  defaultValue: 'Type here...',
  disabled: false,
  loading: false,
};

// Disabled state
export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};

// Loading state
export const Loading = Template.bind({});
Loading.args = {
  ...Default.args,
  loading: true,
};

// With default value
export const WithDefaultValue = Template.bind({});
WithDefaultValue.args = {
  ...Default.args,
  defaultValue: 'Hello, World!',
};

// With initial value
export const WithInitialValue = Template.bind({});
WithInitialValue.args = {
  ...Default.args,
  value: 'Initial value',
};
