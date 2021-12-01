import { html } from 'lit';
import '../src/components/menu-item/arc-menu-item.js';
import '../src/components/icon/arc-icon.js';
const Template = ({ disabled, prefix, suffix, }) => html `
  <div role="menu" style="width: 15rem;">
    <arc-menu-item ?disabled="${disabled}">
      ${prefix ? html `<arc-icon name="home" slot="prefix"></arc-icon>` : ''}
      Label
      ${suffix ? html `<arc-icon name="settings" slot="suffix"></arc-icon>` : ''}
    </arc-menu-item>
  </div>
`;
const DisabledTemplate = () => html `
  <div role="menu" style="width: 15rem;">
    <arc-menu-item>Home</arc-menu-item>
    <arc-menu-item disabled>Messages</arc-menu-item>
    <arc-menu-item>Settings</arc-menu-item>
  </div>
`;
const PrefixSuffixTemplate = () => html `
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
export const Default = Template.bind({});
export const PrefixSuffix = PrefixSuffixTemplate.bind({});
Default.args = { ...defaultArgs };
PrefixSuffix.args = { ...defaultArgs };
export const Disabled = DisabledTemplate.bind({});
