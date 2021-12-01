import { html, TemplateResult } from 'lit';
import './arc-menu-item.js';
import '../icon/arc-icon.js';

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  disabled: boolean;
  prefix: boolean;
  suffix: boolean;
}

const Template: Story<ArgTypes> = ({
                                     disabled,
                                     prefix,
                                     suffix,
                                   }: ArgTypes) => html`
  <div role="menu" style="width: 15rem;">
    <arc-menu-item ?disabled="${disabled}">
      ${prefix ? html`<arc-icon name="home" slot="prefix"></arc-icon>` : ''}
      Label
      ${suffix ? html`<arc-icon name="settings" slot="suffix"></arc-icon>` : ''}
    </arc-menu-item>
  </div>
`;

const DisabledTemplate: Story<ArgTypes> = () => html`
  <div role="menu" style="width: 15rem;">
    <arc-menu-item>Home</arc-menu-item>
    <arc-menu-item disabled>Messages</arc-menu-item>
    <arc-menu-item>Settings</arc-menu-item>
  </div>
`;

const PrefixSuffixTemplate: Story<ArgTypes> = () => html`
  <div role="menu" style="width: 15rem;">
    <arc-menu-item>
      <arc-icon name="home" slot="prefix"></arc-icon>
      Home
    </arc-menu-item>
    <arc-menu-item>
      <arc-icon name="speech" slot="prefix"></arc-icon>
      Messages
    </arc-menu-item>
    <arc-menu-item>
      <arc-icon name="settings" slot="prefix"></arc-icon>
      Settings
      <arc-icon name="arrow-right" slot="suffix"></arc-icon>
    </arc-menu-item>
  </div>
`;

const defaultArgs = {
  disabled: false,
};

/* TYPES */
export const Default = Template.bind({});
export const PrefixSuffix = PrefixSuffixTemplate.bind({});

Default.args = { ...defaultArgs };
PrefixSuffix.args = { ...defaultArgs };

/* STATES */
export const Disabled = DisabledTemplate.bind({});
