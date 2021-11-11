import { html, TemplateResult } from 'lit';
import './arc-icon-button.js';

export default {
  title: 'ArcIconButton',
  component: 'arc-icon-button',
  argTypes: {
    name: {
      description: 'Set the type of the icon',
      defaultValue: { summary: 'fire' },
      control: { type: 'text' },
    },
    href: {
      description:
        'When set, the underlying button will be rendered as an `<a>` with this property.',
      defaultValue: { summary: '' },
      control: { type: 'text' },
    },
    target: {
      description:
        'Tells the browser where to open the link. Only used when href is set.',
      defaultValue: { summary: '' },
      control: { type: 'text' },
    },
    download: {
      description:
        'Tells the browser to download the linked file as this filename. Only used when href is set.',
      defaultValue: { summary: '' },
      control: { type: 'text' },
    },
    label: {
      description:
        'A description that gets read by screen readers and other assistive devices. For optimal accessibility, you should always include a label that describes what the icon button does.',
      defaultValue: { summary: '' },
      control: { type: 'text' },
    },
    active: {
      description: 'Draws the button in an active state.',
      defaultValue: { summary: 'false' },
      control: { type: 'boolean' },
    },
    disabled: {
      description: 'Draws the button in a disabled state.',
      defaultValue: { summary: 'false' },
      control: { type: 'boolean' },
    },
    loading: {
      description: 'Draws the button in a loading state.',
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
  label: string;
  content: string;
  color: string;
  active: boolean;
  disabled: boolean;
  loading: boolean;
  href: string | undefined;
  target: string | undefined;
  download: string | undefined;
}

const Template: Story<ArgTypes> = ({
  name,
  label,
  content,
  color,
  href,
  target,
  download,
  active,
  disabled,
  loading,
}: ArgTypes) => html`
  <arc-icon-button
    .name="${name}"
    .label="${label}"
    .href="${href}"
    .target="${target}"
    .download="${download}"
    ?active="${active}"
    ?disabled="${disabled}"
    ?loading="${loading}"
    style="--icon-color: ${color || 'inherit'}"
  >
    ${content}
  </arc-icon-button>
`;

const defaultArgs = {
  name: 'fire',
  label: 'Icon button',
  content: 'Default',
  color: 'inherit',
  href: undefined,
  target: undefined,
  download: undefined,
  active: false,
  disabled: false,
  loading: false,
};

// TYPES
export const Default = Template.bind({});
export const CustomColor = Template.bind({});
export const Link = Template.bind({});
export const LinkNewWindow = Template.bind({});
export const LinkDownload = Template.bind({});
export const LinkDisabled = Template.bind({});

Default.args = { ...defaultArgs };
CustomColor.args = { ...defaultArgs, content: 'Custom color', color: 'red' };
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
