import { html, LitElement } from 'lit';
import { property, query } from 'lit/decorators.js';
// @ts-ignore
import type Quill from 'quill/core/quill.js';
import 'quill';
import { FormController } from '../../internal/form-control.js';
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
  @query('#main') scrollContainer: HTMLElement;

  /** @internal */
  @query('#editor') editor: HTMLElement;

  /** @internal - Controller used to recognize form controls located inside a shadow root. */
  /* @ts-expect-error - Controller used to hook the component to the formData */
  private readonly formSubmitController = new FormController(this);

  /** The editor's name attribute. */
  @property() name: string;

  /** The editor's value attribute. */
  @property() value: string = '';

  /** The editor's label. */
  @property() label: string = '';

  /** Disables the editor. */
  @property({ type: Boolean, reflect: true }) disabled: boolean = false;

  /** Makes the editor readonly. */
  @property({ type: Boolean, reflect: true }) readonly: boolean = false;

  /**
   * This will be true when the control is in an invalid state. Validity is determined by props such as `type`,
   * `required`, `minlength` and `maxlength` using the browser's constraint validation API.
   */
  @property({ type: Boolean, reflect: true }) invalid = false;

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
      scrollingContainer: this.scrollContainer,
      placeholder: this.readonly ? 'The editor is read-only' : undefined,
      theme: 'snow',
      readOnly: this.readonly,
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

  /** Method that retrieves the content */
  getContent() {
    const { ops } = this._editor.getContents();
    return ops;
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
