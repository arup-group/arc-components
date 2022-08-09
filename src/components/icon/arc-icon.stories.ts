import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { ICON_TYPES } from './constants/IconConstants.js';
import { FONT_SIZES } from '../../internal/constants/styleConstants.js';
import type ArcIcon from './ArcIcon.js';
import './arc-icon.js';

export default {
  title: 'Components/ArcIcon',
  component: 'arc-icon',
  argTypes: {
    name: {
      control: 'select',
      options: Object.values(ICON_TYPES),
    },
    size: {
      control: 'select',
      options: Object.values(FONT_SIZES),
    },
  },
} as Meta;

const AllTemplate: Story = () =>
  html`
    <p>This is a list of all the available icons within the component library.</p>
    <p>Click on an icon to copy the code to your clipboard!</p>
    <div id="container">
      ${Object.values(ICON_TYPES).map(
        icon => html`<arc-tooltip content=${icon}><arc-icon name=${icon}></arc-icon></arc-tooltip>`
      )}
    </div>
    <style>
      #container {
        width: 50%;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(min(max(100% / 8 - 1rem, 1rem), 100%), 1fr));
        grid-auto-rows: max-content;
        gap: 1rem;
      }

      arc-icon {
        justify-self: center;
      }
    </style>
    <script>
      document
        .getElementById('container')
        .querySelectorAll('arc-icon')
        .forEach(icon => {
          icon.addEventListener('click', e => {
            const { target } = e;
            navigator.clipboard.writeText(target.outerHTML);
          });
        });
    </script>
  `;

const Template: Story<ArcIcon> = ({ name, label, size, rotation }) => html`
  <arc-icon
    name="${name}"
    label=${ifDefined(label || undefined)}
    size=${ifDefined(size || undefined)}
    rotation=${ifDefined(rotation || undefined)}
  ></arc-icon>
`;

const ColorTemplate: Story<ArcIcon> = () => html`
  <div style="display: flex;">
    <arc-icon size="large" style="--icon-color-primary: rgb(var(--arc-red-060))"></arc-icon>
    <arc-icon size="large" style="--icon-color-primary: rgb(var(--arc-blue-060))"></arc-icon>
    <arc-icon size="large" style="--icon-color-primary: rgb(var(--arc-green-060))"></arc-icon>
  </div>
`;

const defaultArgs = {
  name: ICON_TYPES.fire,
  label: '',
  size: FONT_SIZES.large,
  rotation: 0,
};

/* TYPES */
export const All = AllTemplate.bind({});

export const Default = Template.bind({});
Default.args = { ...defaultArgs };

export const Size = Template.bind({});
Size.args = { ...defaultArgs, size: FONT_SIZES['xxx-large'] };

export const Rotation = Template.bind({});
Rotation.args = { ...defaultArgs, rotation: 45 };

export const Color = ColorTemplate.bind({});
