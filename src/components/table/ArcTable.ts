import { html, LitElement } from 'lit';
import { property, query } from 'lit/decorators.js';
import { Grid } from 'gridjs';
import { TCell, TColumn } from 'gridjs/dist/src/types';
import { emit } from '../../internal/event.js';
import { watch } from '../../internal/watch.js';
import styles from './arc-table.styles.js';

/**
 * @event arc-row-click - Emitted when the user clicks on a row.
 * @event arc-cell-click - Emitted when the user clicks on a cell.
 *
 * @cssproperty --table-height - Set the height of the table.
 */
export default class ArcTable extends LitElement {
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

  /** Localize and update the messages used in the table. */
  @property() language: { [key: string]: string | ((...args: any) => string) };

  /** Add pagination. */
  @property({ type: Boolean }) pagination: boolean = false;

  /** Set the pagination limit. */
  @property({ attribute: 'pagination-limit' }) paginationLimit: number;

  /** Show the pagination summary. */
  @property({ type: Boolean, attribute: 'pagination-summary' }) paginationSummary: boolean = true;

  /** Allow resizing of columns. */
  @property({ type: Boolean }) resizable: boolean = false;

  /** Allow sorting. */
  @property({ type: Boolean }) sort: boolean = false;

  /** Support global search on all rows and columns. */
  @property({ type: Boolean }) search: boolean = false;

  @watch('active')
  handlePropChange() {
    emit(this, 'arc-event-name');
  }

  firstUpdated() {
    this._grid = new Grid({
      columns: this.columns,
      data: this.data || [],
      fixedHeader: this.fixedHeader,
      language: this.language,
      pagination: {
        enabled: this.pagination,
        limit: this.paginationLimit,
        summary: this.paginationSummary,
      },
      resizable: this.resizable,
      sort: this.sort,
      search: this.search,
    }).render(this.table);
  }

  protected render() {
    console.log(this._grid);
    return html` <div id="main"></div> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'arc-table': ArcTable;
  }
}
