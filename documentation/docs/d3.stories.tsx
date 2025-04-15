import { Meta, StoryFn } from '@storybook/web-components';
import { html } from 'lit';

export default {
  title: 'Intergrations/D3',
  parameters: {
    autoDocs: false,
    viewMode: 'canvas',
  }
} satisfies Meta;

export const Color: StoryFn = ({ }) => {
  const id = Math.random().toString(36).substring(2, 15);
  return html`
    <div id="${id}"></div>
    <script type="module">
      let size = 24;

      let svg = d3.select('#${id}')
        .append('svg')
        .attr('width', size * 11)
        .attr('height', size * 10);

      let demo = svg.append('g')
        .attr('transform', 'translate(0, 0)');

      function present(th, x) {
        var cls = 'color-' + x;
        demo.selectAll('.' + cls).data(th).enter()
          .append('rect').attr('class', cls)
          .attr('y', x * size)
          .attr('x', (d, i) => i * size)
          .attr('width', size).attr('height', size)
          .attr('fill', (d) => d);
      }

      ['blue', 'green', 'grey', 'orange', 'pink', 'purple', 'red', 'teal', 'yellow'].map((color) => 
        ['000', '010', '020', '030', '040', '050', '060', '070', '080', '090', '100'].map((shade) =>
          "rgb(var(--arc-" + color + "-" + shade + "))"
      )).forEach(present);
    </script>
  `;
};

export const BarChart: StoryFn = ({ }) => {
  const id = Math.random().toString(36).substring(2, 15);
  return html`
    <div id="${id}"></div>
    <script type="module">
      const data = [
        { name: 'Information', value: Math.random(), color: 'rgb(var(--arc-color-info))' },
        { name: 'Warning', value: Math.random(), color: 'rgb(var(--arc-color-warning))' }, 
        { name: 'Success', value: Math.random(), color: 'rgb(var(--arc-color-success))' },
        { name: 'Error', value: Math.random(), color: 'rgb(var(--arc-color-error))' },
      ];

      const width = 400;
      const height = 400;
      const margin = 30;

    const x = d3.scaleBand()
      .domain(d3.groupSort(data, ([d]) => -d.value, (d) => d.name))
      .range([margin, width - margin])
      .padding(0.1);
  
    const y = d3.scaleLinear()
      .domain([0, d3.max(data, (d) => d.value)])
      .range([height - margin, margin]);

    const svg = d3.select("#${id}")
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", [0, 0, width, height])
      .attr("style", "max-width: 100%; height: auto;");

    svg.append("g")
      .attr("fill", "var(--arc-color-primary)")
      .selectAll()
      .data(data)
      .join("rect")
        .attr("fill", (d) => d.color)
        .attr("x", (d) => x(d.name))
        .attr("y", (d) => y(d.value))
        .attr("height", (d) => y(0) - y(d.value))
        .attr("width", x.bandwidth());

    svg.append("g")
      .attr("transform", "translate(0," + (height - margin) + ")")
      .call(d3.axisBottom(x).tickSizeOuter(0));

    svg.append("g")
      .attr("transform", "translate(" + margin + ",0)")
      .call(d3.axisLeft(y).tickFormat((y) => (y * 100).toFixed()))
      .call(g => g.select(".domain").remove())
      .call(g => g.append("text")
          .attr("x", -margin)
          .attr("y", 10)
          .attr("fill", "currentColor")
          .attr("text-anchor", "start")
          .text("Log Rate (%)")); 
    </script>
  `;
};

