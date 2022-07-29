import { html, LitElement } from 'lit';
import { query } from 'lit/decorators.js';
import { EditorView, basicSetup } from 'codemirror';
import styles from './arc-markdown.styles.js';

/**
 * @slot default - A description of the default slot.
 * @slot something - A description of the something slot.
 *
 * @event arc-event-name - A description of the event.
 *
 * @cssproperty --custom-color - A description of the --custom-color property.
 */
export default class ArcMarkdown extends LitElement {
  static tag = 'arc-markdown';

  static styles = styles;

  /** @internal - Reference to the CodeMirror instance. */
  private _editor: EditorView;

  /** @internal */
  @query('#main') editor: HTMLElement;

  firstUpdated() {
    this._editor = new EditorView({
      extensions: [basicSetup],
      parent: this.editor,
    });
    // eslint-disable-next-line no-console
    console.log(this._editor);
  }

  protected render() {
    return html` <div id="main"></div> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'arc-markdown': ArcMarkdown;
  }
}
