import { Meta, Story } from '@storybook/web-components';
import ArcMarkdown from './ArcMarkdown.js';
import './arc-markdown.js';

export default {
  title: 'Components/ArcMarkdown',
  component: 'arc-markdown',
} as Meta;

const Template: Story<ArcMarkdown> = (args: any) => Object.assign(document.createElement(ArcMarkdown.tag), args);

const defaultArgs = {
  columns: 'my-editor',
  value: '',
  disabled: false,
  readonly: false,
  minlength: undefined,
  maxlength: undefined,
  minlines: undefined,
  maxlines: undefined,
  required: false,
  invalid: false,
  output: undefined,
};

export const BasicEditor = Template.bind({});
BasicEditor.args = { ...defaultArgs };

export const HTMLOutput = Template.bind({});
HTMLOutput.args = { ...defaultArgs, output: 'html' };

export const TextOutput = Template.bind({});
TextOutput.args = { ...defaultArgs, output: 'text' };

export const Disabled = Template.bind({});
Disabled.args = { ...defaultArgs, disabled: true };

export const ReadOnly = Template.bind({});
ReadOnly.args = { ...defaultArgs, readonly: true };

export const Required = Template.bind({});
Required.args = { ...defaultArgs, required: true };

export const EditorOptions = Template.bind({});
EditorOptions.args = { ...defaultArgs, minlength: 5, minlines: 2, required: true };

export const CustomValidation = Template.bind({});
CustomValidation.args = { ...defaultArgs };
