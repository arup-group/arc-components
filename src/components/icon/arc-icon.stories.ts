import { html, TemplateResult } from 'lit';
import './arc-icon.js';

import { ICON_SIZES } from './constants/IconConstants.js';

export default {
  title: 'Icons',
  component: 'arc-icon',
  argTypes: {
    name: {
      type: { required: true },
      description: 'Set the type of the icon',
      defaultValue: { summary: 'fire' },
      control: { type: 'text' },
      table: {
        type: { summary: 'string' },
        category: 'Properties',
      },
    },
    size: {
      type: { required: true },
      description: 'Set the size of the icon',
      defaultValue: { summary: 'medium' },
      control: { type: 'select' },
      options: Object.keys(ICON_SIZES),
      table: {
        type: { summary: 'string' },
        category: 'Properties',
      },
    },
    rotation: {
      type: { required: false },
      description: 'Set the rotation of the icon',
      defaultValue: { summary: '0' },
      control: { type: 'number' },
      table: {
        type: { summary: 'number' },
        category: 'Properties',
      },
    },
    spinning: {
      type: { required: false },
      description: 'Draws the icons in a spinning state.',
      defaultValue: { summary: 'false' },
      control: { type: 'boolean' },
      table: {
        type: { summary: 'boolean' },
        category: 'Properties',
      },
    },
    primaryColor: {
      name: '--icon-color-primary',
      type: { required: false },
      description: 'Set the primary color of the icon',
      defaultValue: { summary: '' },
      control: { type: 'color' },
      table: {
        category: 'CSS Variables',
      },
    },
    secondaryColor: {
      name: '--icon-color-secondary',
      type: { required: false },
      description: 'Set the secondary color of the icon',
      defaultValue: { summary: '' },
      control: { type: 'color' },
      table: {
        category: 'CSS Variables',
      },
    }
  }
}

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  name: string,
  size: string,
  rotation: number,
  spinning: boolean,
  primaryColor: string,
  secondaryColor: string,
}

const Template: Story<ArgTypes> = ({ name, size, rotation, spinning, primaryColor, secondaryColor }: ArgTypes) => html`
  <arc-icon style='--icon-color-primary: ${primaryColor}; --icon-color-secondary: ${secondaryColor};'
    name='${name}'
    size='${size}'
    rotation='${rotation}'
    ?spinning=${spinning}
  ></arc-icon>
`;

export const Default = Template.bind({});
Default.args = {
  name: 'fire',
  size: ICON_SIZES.medium,
  rotation: 0,
  spinning: false,
  primaryColor: 'initial',
  secondaryColor: 'currentColor',
};

