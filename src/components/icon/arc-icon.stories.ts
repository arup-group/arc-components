import { html, TemplateResult } from 'lit';
import './arc-icon.js';

import { ICON_SIZES } from './constants/IconConstants.js';

export default {
  title: 'ArcIcon',
  component: 'arc-icon',
  argTypes: {
    name: {
      description: 'Set the type of the icon',
      defaultValue: { summary: 'fire' },
      control: { type: 'text' },
    },
    size: {
      description: 'Set the size of the icon',
      defaultValue: { summary: 'medium' },
      control: { type: 'select' },
      options: Object.keys(ICON_SIZES),
    },
    rotation: {
      description: 'Set the rotation of the icon',
      defaultValue: { summary: '0' },
      control: { type: 'number' },
    },
    spinning: {
      description: 'Draws the icons in a spinning state.',
      defaultValue: { summary: 'false' },
      control: { type: 'boolean' },
    },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  name: string;
  size: string;
  rotation: number;
  spinning: boolean;
}

const Template: Story<ArgTypes> = ({ name, size, rotation, spinning }: ArgTypes) => html`
  <arc-icon name="${name}" size="${size}" rotation="${rotation}" ?spinning=${spinning}></arc-icon>
`;

const defaultArgs = {
  name: 'fire',
  size: ICON_SIZES.large,
  rotation: 0,
  spinning: false,
};

export const Default = Template.bind({});
export const VariableSize = Template.bind({});
export const CustomSize = Template.bind({});

Default.args = { ...defaultArgs };
VariableSize.args = { ...defaultArgs, size: 'xxxx-large' };
CustomSize.args = { ...defaultArgs, size: 'custom' };
