import { html, TemplateResult } from 'lit';
import './arc-icon.js';

import { ICON_SIZES, ICON_TYPES } from './constants/IconConstants.js';

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

const Template: Story<ArgTypes> = ({
  name,
  size,
  rotation,
  spinning,
}: ArgTypes) => html`
  <arc-icon
    name="${name}"
    size="${size}"
    rotation="${rotation}"
    ?spinning=${spinning}
  ></arc-icon>
`;

const defaultArgs = {
  name: ICON_TYPES.fire,
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
