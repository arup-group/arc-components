import '@arc-web/components/themes/index.css';
import '@arc-web/components/src/components/container/arc-container';

import '@arc-web/components/components/table/arc-table.css';
import ArcTable from '@arc-web/components/components/table/ArcTable';

const app = document.querySelector('app-root')!;
const table = document.createElement('div');

const grid = new ArcTable.Grid({
  columns: ["Name", "Email", "Phone Number"],
  data: [
    ["John", "john@example.com" , "(353) 01 222 3333"],
    ["Mark", "mark@exmaple.com", ""],
  ],
  resizable: true,
  search: true,
});

app.appendChild(table);

grid.render(table);
grid.on('cellClick', (cell, e) => {
  console.log(cell);
});

setTimeout(() => {
  grid.updateConfig({
    data: [
      ["John", "", ""],
      ["Mark", "", ""],
    ],
  }).forceRender();
}, 2000);
