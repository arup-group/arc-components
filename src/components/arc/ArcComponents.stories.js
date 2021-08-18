import { html } from 'lit';

import './ArcComponent.js';

export default {
  title: 'ARC/Headlight',
  component: 'arc-components',
  argTypes: {
    color: { control: 'color' },
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, color, backgroundColor }) {
  return html`
    <arc-component
      style="--arc-grey-100: ${color ||
      'black'}; --arc-white-000: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </arc-component>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'Articulate. Reproducible. Considered.',
};
