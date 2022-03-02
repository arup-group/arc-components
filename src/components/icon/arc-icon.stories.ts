import {Meta, Story} from "@storybook/web-components";
import {html} from 'lit';
import {ifDefined} from "lit/directives/if-defined.js";
import ArcIcon from "./ArcIcon.js";
import {ICON_TYPES, IconType} from './constants/IconConstants.js';
import {FONT_SIZES, FontSize} from '../../internal/constants/styleConstants.js';

interface ArgTypes {
  name: IconType;
  size: FontSize;
  rotation: number;
  spinning: boolean;
  colorPrimary?: string;
  colorSecondary?: string;
}

export default {
  title: 'Components/ArcIcon',
  component: ArcIcon.tag,
  argTypes: {
    name: {
      control: 'select',
      options: Object.values(ICON_TYPES)
    },
    size: {
      control: 'select',
      options: Object.values(FONT_SIZES)
    }
  }
} as Meta;

const Template: Story<ArgTypes> = ({name, size, rotation, spinning, colorPrimary}: ArgTypes) => html`
  <arc-icon
    style="--icon-color-primary:${colorPrimary};"
    name="${name}"
    size="${size}"
    rotation=${ifDefined(rotation || undefined)}
    ?spinning=${spinning}
  ></arc-icon>
`;

const defaultArgs: ArgTypes = {
  name: ICON_TYPES.fire,
  size: FONT_SIZES.large,
  rotation: 0,
  spinning: false,
  colorPrimary: '',
  colorSecondary: '',
};

/* TYPES */
export const Default = Template.bind({});
Default.args = {...defaultArgs};

export const VariableSize = Template.bind({});
VariableSize.args = {...defaultArgs, size: FONT_SIZES['xxx-large']};

export const RedColor = Template.bind({});
RedColor.args = {...defaultArgs, colorPrimary: 'red'};

export const GreenColor = Template.bind({});
GreenColor.args = {...defaultArgs, colorPrimary: 'green'};

export const BlueColor = Template.bind({});
BlueColor.args = {...defaultArgs, colorPrimary: 'blue'};

export const PurpleColor = Template.bind({});
PurpleColor.args = {...defaultArgs, colorPrimary: 'purple'};
