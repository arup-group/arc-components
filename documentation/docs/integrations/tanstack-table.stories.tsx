import { Meta, StoryFn } from '@storybook/web-components';
import { html } from 'lit';

export default {
  title: 'Integrations/TanStack Table',
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
      const tableContainer = document.getElementById('${id}');
      const columnHelper = tanstacktablecore.createColumnHelper();
      const people = Array.from({ length: 10 }, createRandomPerson);
      const table = tanstacktablecore.createTable({
        state: {},
        onStateChange: () => {},
        renderFallbackValue: null,
        columns: Object.keys(people[0]).map((key) =>
          columnHelper.accessor(key, {}),
        ),
        data: people,
        getCoreRowModel: tanstacktablecore.getCoreRowModel(),
      });
      table.setOptions((prev) => ({
        ...prev,
        state: { ...table.initialState },
      }));
      const tableElement = document.createElement('table');
      tableElement.attributes.setNamedItem(
        document.createAttribute('arc-table'),
      );
      const theadElement = document.createElement('thead');
      const tbodyElement = document.createElement('tbody');
      tableElement.appendChild(theadElement);
      tableElement.appendChild(tbodyElement);
      table.getHeaderGroups().forEach((headerGroup) => {
        const trElement = document.createElement('tr');
        headerGroup.headers.forEach((header) => {
          const thElement = document.createElement('th');
          thElement.innerHTML =
            typeof header.column.columnDef.header === 'function'
              ? header.column.columnDef.header(header.getContext())
              : header.column.columnDef.header;
          trElement.appendChild(thElement);
        });
        theadElement.appendChild(trElement);
      });
      table.getRowModel().rows.forEach((row) => {
        const trElement = document.createElement('tr');
        row.getVisibleCells().forEach((cell) => {
          const tdElement = document.createElement('td');
          tdElement.innerHTML =
            typeof cell.column.columnDef.cell === 'function'
              ? cell.column.columnDef.cell(cell.getContext())
              : cell.column.columnDef.cell;
          trElement.appendChild(tdElement);
        });
        tbodyElement.appendChild(trElement);
      });
      tableContainer.appendChild(tableElement);
    </script>
  `;
};
