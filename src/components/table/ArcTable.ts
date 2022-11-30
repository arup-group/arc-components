import { html, LitElement } from 'lit';
import { property, query } from 'lit/decorators.js';
import { Grid, Row, createElement, UserConfig } from 'gridjs';
import { TCell, TColumn } from 'gridjs/dist/src/types';
import { Language } from 'gridjs/dist/src/i18n/language';
import { ComponentChildren, ComponentType, Attributes } from 'preact';
import { emit } from '../../internal/event.js';
import { ARC_EVENTS, ArcEvent } from '../../internal/constants/eventConstants.js';
import styles from './arc-table.styles.js';

const enum TABLE_EVENTS {
  CELL_CLICK = 'cellClick',
  ROW_CLICK = 'rowClick',
  TABLE_READY = 'tableReady',
}

/**
 * @event arc-cell-click - Emitted when the user clicks on a cell.
 * @event arc-row-click - Emitted when the user clicks on a row.
 * @event arc-table-ready - Emitted when the table is ready.
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
  @property() language: Language;

  /** Show the pagination. */
  @property({ type: Boolean }) pagination: boolean = false;

  /** Set the pagination limit. */
  @property({ type: Number, attribute: 'pagination-limit' }) paginationLimit: number = 10;

  /** Show the pagination summary. */
  @property({ type: Boolean, attribute: 'pagination-summary' }) paginationSummary: boolean = false;

  /** Allow resizing of columns. */
  @property({ type: Boolean }) resizable: boolean = false;

  /** Allow sorting. */
  @property({ type: Boolean }) sort: boolean = false;

  /** Support global search on all rows and columns. */
  @property({ type: Boolean }) search: boolean = false;

  /* Create a new GridJS instance. */
  firstUpdated() {
    this._grid = new Grid({
      columns: this.columns || [],
      data: this.data || [],
      height: this.height,
      fixedHeader: this.fixedHeader,
      language: {
        pagination: {
          previous: '˂',
          next: '˃',
        },
        loading: 'Retrieving your data, please wait...',
        noRecordsFound: 'No matching records found.',
        error: 'An error occurred while fetching your data.',
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

  /* Emit the GridJS events, so the user can listen to arc-specific events instead. */
  private _emitTableEvent(
    type: ArcEvent,
    args?: [e: MouseEvent, row: Row] | [e: MouseEvent, cell: TCell, column: TColumn, row: Row]
  ) {
    emit(this, ARC_EVENTS[type], {
      detail: args,
    });
  }

  /* Add specific listeners to the table instance. */
  private _addTableListeners() {
    this._grid.on('rowClick', (...args) => this._emitTableEvent(TABLE_EVENTS.ROW_CLICK, args));
    this._grid.on('cellClick', (...args) => this._emitTableEvent(TABLE_EVENTS.CELL_CLICK, args));
    this._grid.on('ready', () => this._emitTableEvent(TABLE_EVENTS.TABLE_READY));
  }

  /* Method used to format a table cell. */
  format(type: ComponentType<string>, props: (Attributes & string) | null, ...children: ComponentChildren[]) {
    return createElement(type, props, ...children);
  }

  /**
   * Method to update the GridJS configuration and set the required arc-table properties.
   * GridJS provides support for more advanced features than the arc-table requires.
   * To allow the flexibility that GridJS provides, the given userConfig needs to be checked.
   * */
  updateConfig(userConfig: Partial<UserConfig>) {
    const keys = Object.keys(userConfig);

    /* Make sure there are actual properties given. */
    if (keys.length === 0) {
      throw new Error('Missing property: Please provide at least one property to update the configuration.');
    }

    /* Update the GridJS config */
    this._grid.updateConfig({ ...userConfig });
    this._grid.forceRender();

    /* Each property of the component itself will also require an update, but only if they exist in the ArcTable API */
    keys.forEach((key: keyof UserConfig) => {
      if (!(key in this)) return; // Make sure that the given key exists on the ArcTable (this) class.
      (this as any)[key] = userConfig[key]; // Update the value of a given key.
    });
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
