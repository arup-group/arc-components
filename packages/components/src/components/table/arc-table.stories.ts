import { Meta, Story } from '@storybook/web-components';
import ArcTable from './ArcTable.js';
import './arc-table.js';

export default {
  title: 'Components/ArcTable',
  component: 'arc-table',
} as Meta;

const Template: Story<ArcTable> = (args: any) =>
  Object.assign(document.createElement(ArcTable.tag), args);

const defaultArgs = {
  columns: ['Name', 'Lastname', 'Email'],
  data: [
    ['John', 'Doe', 'john.doe@arup.com'],
    ['Jane', 'Doe', 'jane.doe@arup.com'],
    ['Joe', 'Doakes', 'joe.doakes@arup.com'],
    ['Juan', 'Perez', 'juan.perez@arup.com'],
    ['Fred', 'Nerk', 'fred.nerk@arup.com'],
  ],
  fixedHeader: false,
  height: '',
  language: undefined,
  pagination: false,
  paginationLimit: 10,
  paginationSummary: true,
  resizable: false,
  sort: false,
  search: false,
};

export const BasicTable = Template.bind({});
BasicTable.args = { ...defaultArgs };

export const FixedHeader = Template.bind({});
FixedHeader.args = { ...defaultArgs, fixedHeader: true, height: '250px' };

export const Pagination = Template.bind({});
Pagination.args = { ...defaultArgs, pagination: true };

export const Resizable = Template.bind({});
Resizable.args = { ...defaultArgs, resizable: true };

export const Sorting = Template.bind({});
Sorting.args = { ...defaultArgs, sort: true };

export const Search = Template.bind({});
Search.args = { ...defaultArgs, search: true };

export const Localization = Template.bind({});
Localization.args = {
  ...defaultArgs,
  search: true,
  pagination: true,
  language: {
    search: {
      placeholder: '🔍 Search...',
    },
    pagination: {
      previous: '⬅️',
      next: '➡️',
      showing: '😃 Displaying',
      results: 'Records',
    },
  },
};
