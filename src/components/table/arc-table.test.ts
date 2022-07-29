import { html } from 'lit';
import { expect, fixture, elementUpdated, waitUntil } from '@open-wc/testing';
import sinon, { SinonSpy } from 'sinon';
import { ARC_EVENTS } from '../../internal/constants/eventConstants.js';

import type ArcTable from './ArcTable.js';
import './arc-table.js';

describe('ArcTable', () => {
  /* Test the rendering of the component */
  describe('rendering', () => {
    let element: ArcTable;

    beforeEach(async () => {
      element = await fixture(html`<arc-table></arc-table>`);
    });

    /* Test default properties that reflect to the DOM */
    it('renders the element with default properties in the dom', () => {
      expect(element).dom.to.equal(`<arc-table></arc-table>`);
    });

    /* Test the accessibility */
    it('passes the a11y audit', async () => {
      await expect(element).shadowDom.to.be.accessible();
    });
  });

  /* Test the setters/getters */
  describe('setters/getters', () => {
    it('renders the element with a custom columns property', async () => {
      const columns = ['Name', 'LastName', 'Email'];
      const element: ArcTable = await fixture(html`<arc-table .columns=${columns}></arc-table>`);
      expect(element.columns.length).to.equal(columns.length);
      expect(element.columns[0]).to.equal(columns[0]);
    });

    it('renders the element with a custom data property', async () => {
      const data = ['John', 'Doe', 'john.doe@johndoe.com'];
      const element: ArcTable = await fixture(html`<arc-table .data=${data}></arc-table>`);
      expect(element.data.length).to.equal(data.length);
      expect(element.data[0]).to.equal(data[0]);
    });

    it('renders the element with a custom height property', async () => {
      const element: ArcTable = await fixture(html`<arc-table height="200px"></arc-table>`);

      expect(element.height).to.equal('200px');
      expect(element.getAttribute('height')).to.equal('200px');
    });

    it('renders the element with a custom language property', async () => {
      const language = {
        search: {
          placeholder: 'Search...',
        },
      };
      const element: ArcTable = await fixture(html`<arc-table .language=${language}></arc-table>`);
      // @ts-ignore
      const { placeholder } = element.language.search;
      expect(placeholder).to.equal(language.search.placeholder);
    });

    it('renders the element with a custom pagination-limit property', async () => {
      const element: ArcTable = await fixture(html`<arc-table pagination-limit="10"></arc-table>`);

      expect(element.paginationLimit).to.equal(10);
      expect(element.getAttribute('pagination-limit')).to.equal('10');
    });
  });

  /* Test different component states (active, disabled, loading etc.) */
  describe('states', () => {
    let element: ArcTable;

    beforeEach(async () => {
      element = await fixture(html`<arc-table></arc-table>`);
    });

    it('renders the component in a fixed-header state', async () => {
      expect(element.fixedHeader).to.be.false;
      element.fixedHeader = true;
      await elementUpdated(element);
      expect(element.fixedHeader).to.be.true;
    });

    it('renders the component in a state that shows pagination', async () => {
      expect(element.pagination).to.be.false;
      element.pagination = true;
      await elementUpdated(element);
      expect(element.pagination).to.be.true;
    });

    it('renders the component in a state that shows the paginationSummary', async () => {
      expect(element.paginationSummary).to.be.false;
      element.paginationSummary = true;
      await elementUpdated(element);
      expect(element.paginationSummary).to.be.true;
    });

    it('renders the component in a resizable state', async () => {
      expect(element.resizable).to.be.false;
      element.resizable = true;
      await elementUpdated(element);
      expect(element.resizable).to.be.true;
    });

    it('renders the component in a sortable state', async () => {
      expect(element.sort).to.be.false;
      element.sort = true;
      await elementUpdated(element);
      expect(element.sort).to.be.true;
    });

    it('renders the component in a search state', async () => {
      expect(element.search).to.be.false;
      element.search = true;
      await elementUpdated(element);
      expect(element.search).to.be.true;
    });
  });

  /* Test specific methods */
  describe('methods', () => {
    let element: ArcTable;
    const tableReadySpy: SinonSpy = sinon.spy();

    /* Due to GridJS creating the table, the reference to any DOM elements is lost after each update. */
    const getTableBody = (): HTMLTableSectionElement => {
      const gridTable: HTMLTableElement = element.shadowRoot?.querySelector('table.gridjs-table')!;
      return gridTable.querySelector('tbody')!;
    };

    beforeEach(async () => {
      element = await fixture(html`<arc-table></arc-table>`);
      element.addEventListener(ARC_EVENTS.tableReady, tableReadySpy);
    });

    afterEach(() => {
      tableReadySpy.resetHistory();
    });

    it('should update the configuration after initializing the table', async () => {
      /* Wait for the underlying gridJS instance to finish rendering. */
      await waitUntil(() => tableReadySpy.calledOnce);

      /* When there is no data, there's a single row with an alert. */
      expect(getTableBody().children.length).to.equal(1);
      expect(element.pagination).to.be.false;
      expect(element.search).to.be.false;

      /* Update the configuration */
      element.updateConfig({
        data: [
          ['one', 'two', 'three'],
          ['four', 'five', 'six'],
        ],
        pagination: true,
        search: true,
      });

      /* Wait for the underlying GridJS instance to finish rendering. */
      await waitUntil(() => tableReadySpy.calledTwice);

      expect(getTableBody().children.length).to.equal(2);
      expect(element.pagination).to.be.true;
      expect(element.search).to.be.true;
    });

    it('throws an error when updating the configuration without properties', async () => {
      /* Wait for the underlying GridJS instance to finish rendering. */
      await waitUntil(() => tableReadySpy.calledOnce);

      expect(() => element.updateConfig({})).to.throw(
        'Missing property: Please provide at least one property to update the configuration.'
      );
    });

    it('should prevent updating or setting arc-table properties that are not part of the API', async () => {
      /* Wait for the underlying GridJS instance to finish rendering. */
      await waitUntil(() => tableReadySpy.calledOnce);

      // @ts-ignore It is known that the property does not exist on the arc-table.
      expect(element.autoWidth).to.be.undefined;

      /* Update the GridJS configuration */
      element.updateConfig({
        autoWidth: true,
      });

      /* Wait for the underlying GridJS instance to finish rendering. */
      await waitUntil(() => tableReadySpy.calledOnce);

      // @ts-ignore It is known that the property does not exist on the arc-table.
      expect(element.autoWidth).to.be.undefined;
    });

    it('should format a specific column through the format method', async () => {
      /* Wait for the underlying GridJS instance to finish rendering. */
      await waitUntil(() => tableReadySpy.calledOnce);

      /* Update the configuration */
      element.updateConfig({
        columns: [
          {
            name: 'Name',
            formatter: cell =>
              element.format(
                'strong',
                {
                  className: 'my-custom-class',
                },
                cell
              ),
          },
          'LastName',
        ],
        data: [
          ['John', 'Doe'],
          ['Jane', 'Doe'],
        ],
      });

      /* Wait for the underlying GridJS instance to finish rendering. */
      await waitUntil(() => tableReadySpy.calledTwice);

      const rows = getTableBody().children;
      const firstRow = rows[0] as HTMLTableRowElement;
      const columns = firstRow.children;
      const firstColumn = columns[0] as HTMLTableCellElement;

      expect(firstColumn).dom.to.equal(`<strong class="my-custom-class">John</strong>`);
    });
  });

  /* Test the events (click, focus, blur etc.) */
  describe('events', () => {
    let element: ArcTable;
    const rowClickSpy: SinonSpy = sinon.spy();
    const cellClickSpy: SinonSpy = sinon.spy();
    const tableReadySpy: SinonSpy = sinon.spy();

    /* Due to GridJS creating the table, the reference to any DOM elements is lost after each update. */
    const getTableBody = (): HTMLTableSectionElement => {
      const gridTable: HTMLTableElement = element.shadowRoot?.querySelector('table.gridjs-table')!;
      return gridTable.querySelector('tbody')!;
    };

    beforeEach(async () => {
      const data = ['John', 'Doe', 'john.doe@johndoe.com'];
      element = await fixture(html`<arc-table .data=${data}></arc-table>`);
      element.addEventListener(ARC_EVENTS.tableReady, tableReadySpy);
    });

    afterEach(async () => {
      rowClickSpy.resetHistory();
      cellClickSpy.resetHistory();
      tableReadySpy.resetHistory();
    });

    it('simulates a click on the table row', async () => {
      /* Wait for the underlying GridJS instance to finish rendering. */
      await waitUntil(() => tableReadySpy.calledOnce);

      const rows = getTableBody().children;
      const firstRow = rows[0] as HTMLTableRowElement;
      firstRow.addEventListener('click', rowClickSpy);

      firstRow.click();
      await waitUntil(() => rowClickSpy.calledOnce);

      expect(rowClickSpy).to.have.been.calledOnce;
    });

    it('simulates a click on the table cell', async () => {
      /* Wait for the underlying GridJS instance to finish rendering. */
      await waitUntil(() => tableReadySpy.calledOnce);

      const rows = getTableBody().children;
      const firstRow = rows[0] as HTMLTableRowElement;
      const columns = firstRow.children;
      const firstColumn = columns[0] as HTMLTableCellElement;

      firstColumn.addEventListener('click', cellClickSpy);

      firstColumn.click();
      await waitUntil(() => cellClickSpy.calledOnce);

      expect(cellClickSpy).to.have.been.calledOnce;
    });

    it('emits when the table is ready', async () => {
      /* Wait for the underlying GridJS instance to finish rendering. */
      await waitUntil(() => tableReadySpy.calledOnce);
      expect(tableReadySpy).to.have.been.calledOnce;
    });
  });
});
