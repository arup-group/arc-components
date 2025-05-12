import { Meta, StoryFn } from '@storybook/web-components';
import { html } from 'lit';

export default {
  title: 'integrations/GridJS',
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
  },
} satisfies Meta;

export const Default: StoryFn = ({}) => {
  const id = crypto.randomUUID();
  return html`
    <div id="${id}"></div>
    <script type="module">
      const gridContainer = document.getElementById('${id}');
      const people = Array.from({ length: 10 }, createRandomPerson);
      new gridjs.Grid({
        columns: Object.keys(people[0]),
        data: people,
      }).render(gridContainer);
    </script>
  `;
};
