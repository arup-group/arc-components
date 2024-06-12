import '@arc-web/components/themes/index.css';
import '@arc-web/components';

const app = document.querySelector('app-root')!;
const container = document.createElement('arc-container');
const table = document.createElement('arc-table');

Object.assign(table, {
  columns: [
    'Name',
    'LastName',
    'Email',
  ],
  data: [
    ['John', 'Doe', 'john.doe@arup.com'],
    ['Jane', 'Doe', 'jane.doe@arup.com'],
    ['Joe', 'Doakes', 'joe.doakes@arup.com'],
    ['Juan', 'Perez', 'juan.perez@arup.com'],
    ['Fred', 'Nerk', 'fred.nerk@arup.com'],
  ],
});

container.appendChild(table);
app.appendChild(container);
