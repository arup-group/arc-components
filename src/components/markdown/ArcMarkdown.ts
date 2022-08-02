// @ts-ignore
import type Quill from 'quill/core/quill.js';
import 'quill';
import { html, LitElement } from 'lit';
import { property, query } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { live } from 'lit/directives/live.js';
import { emit } from '../../internal/event.js';
import { watch } from '../../internal/watch.js';
import { FormController } from '../../internal/form-control.js';
import { OUTPUT_TYPES, MarkdownOutput } from './constants/MarkdownConstants.js';
import { ARC_EVENTS } from '../../internal/constants/eventConstants.js';
import styles from './arc-markdown.styles.js';

/**
 * @event arc-change - Emitted when the editor's value changes.
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

  /** Disables the editor. */
  @property({ type: Boolean, reflect: true }) disabled: boolean = false;

  /** Makes the editor readonly. */
  @property({ type: Boolean, reflect: true }) readonly: boolean = false;

  /**
   * This will be true when the editor is in an invalid state.
   * Validity is determined by props such as 'minlength' and 'maxlength'.
   * */
  @property({ type: Boolean, reflect: true }) invalid: boolean = false;

  /** The minimum length of input that will be considered valid. */
  @property({ type: Number }) minlength: number;

  /** The maximum length of input that will be considered valid. */
  @property({ type: Number }) maxlength: number;

  /** The minimum lines of input that will be considered valid. */
  @property({ type: Number }) minlines: number;

  /** The maximum lines of input that will be considered valid. */
  @property({ type: Number }) maxlines: number;

  /** The type of data to output when submitting the form */
  @property({ type: String, reflect: true }) output: MarkdownOutput = OUTPUT_TYPES.default;

  /* Enable/disable the editor when the disabled property changes */
  @watch('disabled', { waitUntilFirstUpdate: true })
  handleDisabledChange() {
    this._editor.enable(!this.disabled);
  }

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
      placeholder:
        this.readonly || this.disabled ? `The editor is ${this.readonly ? 'read-only' : 'disabled'}` : undefined,
      theme: 'snow',
      readOnly: this.readonly || this.disabled,
    });

    /* Make the text selection work within the Shadow DOM */
    this._replaceRange();

    /* Add listeners to the WYSIWYG editor */
    this._addEditorListeners();
  }

  /* Method that adds a couple of necessary listeners. */
  private _addEditorListeners() {
    /* Update the editor selection */
    document.addEventListener('selectionchange', () => this._editor.selection.update());

    /* Listen to changes within the editor */
    this._editor.on('text-change', this._handleChange.bind(this));
  }

  /* Method that replaces the Quill getNativeRange method with a shadowDOM equivalent. */
  private _replaceRange() {
    this._editor.selection.getNativeRange = () => {
      const selection: Selection = this._editor.root.getRootNode().getSelection();
      if (selection == null || selection.rangeCount <= 0) return null;
      const nativeRange = selection.getRangeAt(0);
      if (nativeRange == null) return null;
      return this._normalizeNative(nativeRange);
    };
  }

  /*
  The document.getSelection model has properties startContainer and endContainer.
  The shadow.getSelection model has baseNode and focusNode.
  Unify these formats to always look like document.getSelection.
  */
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

  /* Emit the Quill text-change event */
  private _handleChange() {
    this.value = this.getOutput();
    emit(this, ARC_EVENTS.change);
  }

  /* Method used to retrieve the required content */
  getOutput(): string {
    switch (this.output) {
      case OUTPUT_TYPES.html:
        return this.editor.querySelector('.ql-editor')?.innerHTML || '';
      case OUTPUT_TYPES.text:
        return this._editor.getText() || '';
      default:
        return JSON.stringify(this._editor.getContents().ops);
    }
  }

  protected render() {
    return html`
      <div id="main">
        <input
          name=${ifDefined(this.name)}
          .value=${live(this.value)}
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          minlength=${ifDefined(this.minlength)}
          maxlength=${ifDefined(this.maxlength)}
          aria-disabled=${this.disabled}
          type="hidden"
        />
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
