import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit';
import './arc-textfield'; // Ensure the import path is correct
import type ArcTextField from './ArcTextField'; // Adjust the import path as necessary
import { TEXT_BOX_TYPES } from './constants/TextFieldConstants';
import {
  THEME_COLORS,
  INPUT_SIZES,
} from '../../internal/constants/styleConstants';
import '../ph-icon/lock-key/ph-icon-lock-key.js';
import '../ph-icon/eye/ph-icon-eye.js';

export default {
  title: 'Components/ArcTextField',
  component: 'arc-textfield',
  argTypes: {
    size: {
      control: 'select',
      options: Object.values(INPUT_SIZES),
    },
    color: {
      control: 'select',
      options: Object.values(THEME_COLORS),
    },
    focusColor: {
      control: 'select',
      options: Object.values(THEME_COLORS),
    },
    type: {
      control: 'select',
      options: Object.values(TEXT_BOX_TYPES),
    },
    required: {
      control: 'boolean',
      description: 'Marks the input field as required',
    },
    helperText: {
      control: 'text',
    },
    errorText: {
      control: 'text',
    },
    value: {
      control: 'text',
    },
    defaultValue: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
    loading: {
      control: 'boolean',
    },
  },
} as Meta;

const Template: Story<ArcTextField> = (args) => html`
  <arc-textfield
    .size="${args.size}"
    .color="${args.color}"
    .focusColor="${args.focusColor}"
    .type="${args.type}"
    .value="${args.value}"
    .defaultValue="${args.defaultValue}"
    ?disabled="${args.disabled}"
    ?loading="${args.loading}"
    ?required="${args.required}"
    .helperText="${args.helperText}"
    .errorText="${args.errorText}"
    .adornments="${args.adornments}"
  ></arc-textfield>
`;

export const Default = Template.bind({});
Default.args = {
  size: 'medium',
  color: 'default',
  focusColor: 'primary',
  type: 'standard',
  value: '',
  defaultValue: 'Placeholder text',
  disabled: false,
  loading: false,
  required: false,
  helperText: '',
  errorText: null,
  adornments: null
};

export const PrimaryFilledLarge = Template.bind({});
PrimaryFilledLarge.args = {
  ...Default.args,
  color: 'primary',
  type: 'filled',
  size: 'large',
};

export const SecondaryOutlinedSmall = Template.bind({});
SecondaryOutlinedSmall.args = {
  ...Default.args,
  color: 'secondary',
  type: 'outlined',
  size: 'small',
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
};

export const Loading = Template.bind({});
Loading.args = {
  ...Default.args,
  loading: true,
};

export const RequiredField = Template.bind({});
RequiredField.args = {
  ...Default.args,
  required: true,
  defaultValue: 'Required field', 
};

export const RequiredWithoutInput = Template.bind({});
RequiredWithoutInput.args = {
  ...Default.args,
  required: true,
  errorText: 'This field is required',
};

export const HelperText = Template.bind({});
HelperText.args = {
  ...Default.args,
  helperText: 'Example helper text',
};

export const WithAdornments = Template.bind({});
WithAdornments.args = {
  ...Default.args,
  adornments: {
    start: html`<ph-icon-lock-key></ph-icon-lock-key>`,
    end: html`<ph-icon-eye></ph-icon-eye>`,
  },
};