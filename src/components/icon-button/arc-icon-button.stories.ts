import { html, TemplateResult } from 'lit';
import './arc-icon-button.js';

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  content: string;
  name: string;
  label: string;
  href: string | undefined;
  target: string | undefined;
  download: string | undefined;
  active: boolean;
  disabled: boolean;
  loading: boolean;
  iconColor: string | undefined;
}

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
    style="--icon-color:${iconColor || 'inherit'}"
    name="${name}"
    label="${label}"
    .href="${href}"
    .target="${target}"
    .download="${download}"
    ?active="${active}"
    ?disabled="${disabled}"
    ?loading="${loading}"
  >
    ${content}
  </arc-icon-button>
`;

const defaultArgs = {
  content: 'Default',
  name: 'fire',
  label: 'Icon button',
  href: undefined,
  target: undefined,
  download: undefined,
  active: false,
  disabled: false,
  loading: false,
  iconColor: undefined,
};

// TYPES
export const Default = Template.bind({});
export const CustomColor = Template.bind({});
export const Link = Template.bind({});
export const LinkNewWindow = Template.bind({});
export const LinkDownload = Template.bind({});
export const LinkDisabled = Template.bind({});

Default.args = { ...defaultArgs };
CustomColor.args = {
  ...defaultArgs,
  content: 'Custom color',
  iconColor: 'red',
};
Link.args = { ...defaultArgs, name: 'link', content: 'Link', href: '/' };
LinkNewWindow.args = {
  ...Link.args,
  name: 'link',
  content: 'New window',
  target: '_blank',
};
LinkDownload.args = {
  ...Link.args,
  name: 'link',
  content: 'Download',
  download: 'ARC Storybook',
};
LinkDisabled.args = {
  ...Link.args,
  name: 'link',
  content: 'Disabled',
  disabled: true,
};

// STATES
export const Active = Template.bind({});
export const Disabled = Template.bind({});
export const Loading = Template.bind({});

Active.args = {
  ...defaultArgs,
  label: 'Icon button',
  content: 'Active',
  active: true,
};
Disabled.args = {
  ...defaultArgs,
  label: 'Icon button',
  content: 'Disabled',
  disabled: true,
};
Loading.args = {
  ...defaultArgs,
  label: 'Icon button',
  content: 'Loading',
  loading: true,
};