import { Meta, StoryFn } from '@storybook/web-components';
import { html } from 'lit';

export default {
  title: 'Intergrations/D3',
  parameters: {
    controls: { disable: true },
    actions: { disable: true },
  },
} satisfies Meta;

export const Color: StoryFn = ({}) => {
  const id = crypto.randomUUID();
  return html`
    <div id="${id}"></div>
    <script type="module">
      let size = 48;
      let svg = d3
        .select('#${id}')
        .append('svg')
        .attr('width', size * 11)
        .attr('height', size * 10);
      let demo = svg.append('g').attr('transform', 'translate(0, 0)');

      function present(th, x) {
        var cls = 'color-' + x;
        demo
          .selectAll('.' + cls)
          .data(Object.values(th).sort((a, b) => 
            parseInt(a.replace(/[^0-9]/g, '')) - parseInt(b.replace(/[^0-9]/g, '')
          )))
          .enter()
          .append('rect')
          .attr('class', cls)
          .attr('y', x * size)
          .attr('x', (d, i) => i * size)
          .attr('width', size)
          .attr('height', size)
          .attr('fill', (d) => d);
      }

      [
        arc.Theme.colors.blue, 
        arc.Theme.colors.green,
        arc.Theme.colors.grey,
        arc.Theme.colors.orange,
        arc.Theme.colors.pink,
        arc.Theme.colors.purple,
        arc.Theme.colors.red,
        arc.Theme.colors.teal,
        arc.Theme.colors.yellow,
      ].forEach(present);
    </script>
  `;
};

export const BarChart: StoryFn = ({}) => {
  const id = crypto.randomUUID();
  return html`
    <div id="${id}"></div>
    <script type="module">
      const width = 800;
      const height = 400;
      const margin = 30;
      const people = Array.from({ length: 10 }, createRandomPerson);

      const x = d3
        .scaleBand()
        .domain(
          d3.groupSort(
            people,
            ([d]) => -d.age,
            (d) => d.firstName,
          ),
        )
        .range([margin, width - margin])
        .padding(0.1);
      const y = d3
        .scaleLinear()
        .domain([0, d3.max(people, (d) => d.age)])
        .range([height - margin, margin]);
      const svg = d3
        .select('#${id}')
        .append('svg')
        .attr('width', width)
        .attr('height', height)
        .attr('viewBox', [0, 0, width, height])
        .attr('style', 'max-width: 100%; height: auto;');
      svg
        .append('g')
        .attr('fill', 'rgb(var(--arc-color-primary))')
        .selectAll()
        .data(people)
        .join('rect')
        .attr('x', (d) => x(d.firstName))
        .attr('y', (d) => y(d.age))
        .attr('height', (d) => y(0) - y(d.age))
        .attr('width', x.bandwidth());
      svg
        .append('g')
        .attr('transform', 'translate(0,' + (height - margin) + ')')
        .call(d3.axisBottom(x).tickSizeOuter(0));
      svg
        .append('g')
        .attr('transform', 'translate(' + margin + ',0)')
        .call(d3.axisLeft(y).tickFormat((y) => (y * 100).toFixed()))
        .call((g) => g.select('.domain').remove())
        .call((g) =>
          g
            .append('text')
            .attr('x', -margin)
            .attr('y', 10)
            .attr('fill', 'currentColor')
            .attr('text-anchor', 'start')
            .text('Age'),
        );
    </script>
  `;
};