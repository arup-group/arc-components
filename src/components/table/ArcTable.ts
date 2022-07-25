import { html, LitElement } from 'lit';
import { property, query } from 'lit/decorators.js';
import { Grid, Row, createElement } from 'gridjs';
import { TCell, TColumn } from 'gridjs/dist/src/types';
import { JSXInternal } from 'preact/src/jsx';
import { ComponentChildren } from 'preact';
import { emit } from '../../internal/event.js';
import { watch } from '../../internal/watch.js';
import { ARC_EVENTS, ArcEvent } from '../../internal/constants/eventConstants.js';
import { TABLE_EVENTS } from './constants/TableConstants.js';
import styles from './arc-table.styles.js';

/**
 * @event arc-row-click - Emitted when the user clicks on a row.
 * @event arc-cell-click - Emitted when the user clicks on a cell.
 */
export default class ArcTable extends LitElement {
  /** @internal */
  static tag = 'arc-table';

  static styles = styles;

  /** @internal - Reference to the GridJS table. */
  private _grid: Grid;

  /** @internal */
  @query('#main') table: HTMLElement;

  /** Define the columns of the table. */
  @property() columns: string[] | TColumn[];

  /** Define the rows and columns of the table. */
  @property() data: TCell[][] | { [key: string]: TCell }[];

  /** Puts the header in a fixed state. */
  @property({ type: Boolean, attribute: 'fixed-header' }) fixedHeader: boolean = false;

  /** Set the height of the table. This is useful when setting a fixed header. */
  @property() height: string;

  /** Localize and update the messages used in the table. */
  @property() language: { [key: string]: string | ((...args: any) => string) };

  /** Show the pagination. */
  @property({ type: Boolean }) pagination: boolean = false;

  /** Set the pagination limit. */
  @property({ attribute: 'pagination-limit' }) paginationLimit: number = 10;

  /** Show the pagination summary. */
  @property({ type: Boolean, attribute: 'pagination-summary' }) paginationSummary: boolean = true;

  /** Allow resizing of columns. */
  @property({ type: Boolean }) resizable: boolean = false;

  /** Allow sorting. */
  @property({ type: Boolean }) sort: boolean = false;

  /** Support global search on all rows and columns. */
  @property({ type: Boolean }) search: boolean = false;

  /** Whenever the columns change, update the GridJS table. */
  @watch('columns', { waitUntilFirstUpdate: true })
  handleTableDataChange() {
    this.updateConfig(this.columns);
  }

  /** Whenever the data changes, update the GridJS table. */
  @watch('data', { waitUntilFirstUpdate: true })
  handleDataChange() {
    this.updateConfig(this.data);
  }

  /**
   * Create a new GridJS instance.
   * The reason this is done in the firstUpdated method,
   * is because the reference to 'this.table' is not yet known in the connectedCallback
   */
  firstUpdated() {
    this._grid = new Grid({
      columns: this.columns || [],
      data: this.data || [],
      height: this.height,
      fixedHeader: this.fixedHeader,
      language: {
        loading: 'Retrieving your data, please wait...',
        pagination: {
          previous: '˂',
          next: '˃',
        },
        error: 'An error occurred while fetching your data',
        ...this.language,
      },
      pagination: {
        enabled: this.pagination,
        limit: this.paginationLimit,
        summary: this.paginationSummary,
      },
      resizable: this.resizable,
      sort: this.sort,
      search: this.search,
    }).render(this.table);

    /* Add listeners to the grid */
    this._addTableListeners();
  }

  /* Emit an event for the table (row|cell) click */
  _emitTableClick(
    type: ArcEvent,
    args: [e: MouseEvent, row: Row] | [e: MouseEvent, cell: TCell, column: TColumn, row: Row]
  ) {
    emit(this, ARC_EVENTS[type], {
      detail: args,
    });
  }

  /* Add specific listeners to the table cells and rows  */
  _addTableListeners() {
    this._grid.on('rowClick', (...args) => this._emitTableClick(TABLE_EVENTS.ROW_CLICK, args));
    this._grid.on('cellClick', (...args) => this._emitTableClick(TABLE_EVENTS.CELL_CLICK, args));
  }

  /** Method used to update the table configuration. */
  updateConfig(props: any) {
    this._grid.updateConfig({ ...props });
    this.forceUpdate();
  }

  /** Method used to re-render the table. */
  forceUpdate() {
    this._grid.forceRender();
  }

  /** Method used to format the given column. */
  format(
    type: string,
    props: (JSXInternal.HTMLAttributes & JSXInternal.SVGAttributes & Record<string, any>) | null,
    ...children: ComponentChildren[]
  ) {
    return createElement(type, { ...props }, ...children);
  }

  protected render() {
    return html`<div id="main"></div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'arc-table': ArcTable;
  }
}
