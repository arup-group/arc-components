import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit';
import {ifDefined} from 'lit/directives/if-defined.js';
import ArcIconButton from "./ArcIconButton.js";
import { ICON_TYPES, IconType } from '../icon/constants/IconConstants.js';

interface ArgTypes {
  content?: string;
  name: IconType;
  label: string;
  href?: string;
  target?: string;
  download?: string;
  active: boolean;
  disabled: boolean;
  loading: boolean;
  iconColor?: string;
}

export default {
  title: 'Components/ArcIconButton',
  component: `${ArcIconButton.tag}`,
  argTypes: {
    name: {
      control: 'select',
      options: Object.values(ICON_TYPES)
    }
  }
} as Meta;

const Template: Story<ArgTypes> = ({
  content,
  name,
  label,
  href,
  target,
  download,
  active,
  disabled,
  loading,
  iconColor,
}: ArgTypes) => html`
  <arc-icon-button
    style="--icon-color:${iconColor}"
    name="${name}"
    label="${label}"
    href=${ifDefined(href || undefined)}
    target=${ifDefined(target || undefined)}
    download=${ifDefined(download || undefined)}
    ?active="${active}"
    ?disabled="${disabled}"
    ?loading="${loading}"
  >
    ${content}
  </arc-icon-button>
`;

const defaultArgs: ArgTypes = {
  content: 'Default',
  name: ICON_TYPES.fire,
  label: 'Icon button',
  href: '',
  target: '',
  download: '',
  active: false,
  disabled: false,
  loading: false,
  iconColor: '',
};

/* TYPES */
export const Default = Template.bind({});
Default.args = { ...defaultArgs };

export const CustomColor = Template.bind({});
CustomColor.args = {
  ...defaultArgs,
  content: 'Custom color',
  iconColor: 'red',
};

export const Link = Template.bind({});
Link.args = { ...defaultArgs, name: ICON_TYPES.link, content: 'Link', href: '/' };

export const LinkNewWindow = Template.bind({});
LinkNewWindow.args = {
  ...Link.args,
  name: ICON_TYPES.link,
  content: 'New window',
  target: '_blank',
};

export const LinkDownload = Template.bind({});
LinkDownload.args = {
  ...Link.args,
  name: ICON_TYPES.link,
  content: 'Download',
  download: 'ARC Storybook',
};

export const LinkDisabled = Template.bind({});
LinkDisabled.args = {
  ...Link.args,
  name: ICON_TYPES.link,
  content: 'Disabled',
  disabled: true,
};


/* STATES */
export const Active = Template.bind({});
Active.args = {
  ...defaultArgs,
  label: 'Icon button',
  content: 'Active',
  active: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...defaultArgs,
  label: 'Icon button',
  content: 'Disabled',
  disabled: true,
};

export const Loading = Template.bind({});
Loading.args = {
  ...defaultArgs,
  label: 'Icon button',
  content: 'Loading',
  loading: true,
};
