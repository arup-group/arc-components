import { html, LitElement } from 'lit';
import { property, query } from 'lit/decorators.js';
// @ts-ignore
import type Quill from 'quill/core/quill.js';
import 'quill';
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
  private _editor: Quill;

  /** @internal */
  @query('#editor') editor: HTMLElement;

  /** Draws the editor in a disabled state. */
  @property({ type: Boolean, reflect: true }) disabled: boolean = false;

  /* Create a new Quill instance. */
  firstUpdated() {
    this._editor = new Quill(this.editor, {
      modules: {
        toolbar: [
          ['bold', 'italic', 'underline'],
          [{ header: 1 }, { header: 2 }],
          [{ list: 'ordered' }, { list: 'bullet' }],
          [{ color: [] }, { background: [] }],
          ['clean'],
        ],
      },
      placeholder: this.disabled ? 'The editor is in read-only mode' : undefined,
      theme: 'snow',
      readOnly: this.disabled,
    });

    /* Make the text selection work within the Shadow DOM */
    this._replaceRange();

    /* Update the editor selection */
    document.addEventListener('selectionchange', () => this._editor.selection.update());
  }

  /* Method that replaces the document.getSelection with shadow.getSelection */
  private _replaceRange() {
    this._editor.selection.getNativeRange = () => {
      const selection: Selection = this._editor.root.getRootNode().getSelection();
      if (selection == null || selection.rangeCount <= 0) return null;
      const nativeRange = selection.getRangeAt(0);
      if (nativeRange == null) return null;
      return this._normalizeNative(nativeRange);
    };
  }

  /**
   * The document.getSelection model has properties startContainer and endContainer.
   * The shadow.getSelection model has baseNode and focusNode.
   * Unify these formats to always look like document.getSelection.
   * */
  private _normalizeNative(nativeRange: Range) {
    if (
      !this._editor.root.contains(nativeRange.startContainer) ||
      (!nativeRange.collapsed && !this._editor.root.contains(nativeRange.startContainer))
    ) {
      return null;
    }

    const range = {
      start: { node: nativeRange.startContainer, offset: nativeRange.startOffset },
      end: { node: nativeRange.endContainer, offset: nativeRange.endOffset },
      native: nativeRange,
    };

    [range.start, range.end].forEach(position => {
      let { node, offset } = position;

      while (!(node instanceof Text) && node.childNodes.length > 0) {
        if (node.childNodes.length > offset) {
          node = node.childNodes[offset];
          offset = 0;
        } else if (node.childNodes.length === offset) {
          // @ts-ignore
          node = node.lastChild;
          offset = node instanceof Text ? node.data.length : node.childNodes.length + 1;
        } else {
          break;
        }
      }
      position.node = node;
      position.offset = offset;
    });
    return range;
  }

  protected render() {
    return html`
      <div id="main">
        <div id="editor"></div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'arc-markdown': ArcMarkdown;
  }
}
