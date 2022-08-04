// @ts-ignore
import type Quill from 'quill/core/quill.js';
import 'quill';
import { html, LitElement } from 'lit';
import { property, query, state } from 'lit/decorators.js';
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

  /** @internal */
  @query('#input') input: HTMLInputElement;

  /** @internal - Controller used to recognize form controls located inside a shadow root. */
  /* @ts-expect-error - Controller used to hook the component to the formData */
  private readonly formSubmitController = new FormController(this);

  /** The editor's name attribute. */
  @property() name: string;

  /** The editor's value attribute. Will automatically convert to html. */
  @property() value: string;

  /** Disables the editor. */
  @property({ type: Boolean, reflect: true }) disabled: boolean = false;

  /** Makes the editor readonly. */
  @property({ type: Boolean, reflect: true }) readonly: boolean = false;

  /** The minimum length of input that will be considered valid. */
  @property({ type: Number }) minlength: number;

  /** The maximum length of input that will be considered valid. */
  @property({ type: Number }) maxlength: number;

  /** The minimum lines of input that will be considered valid. */
  @property({ type: Number }) minlines: number;

  /** The maximum lines of input that will be considered valid. */
  @property({ type: Number }) maxlines: number;

  /** Makes the editor a required field. */
  @property({ type: Boolean, reflect: true }) required = false;

  /**
   * This will be true when the editor is in an invalid state.
   * Validity is determined by props such as 'minlength' and 'maxlength'.
   * */
  @property({ type: Boolean, reflect: true }) invalid: boolean = false;

  /** The type of data to output when submitting the form */
  @property({ type: String, reflect: true }) output: MarkdownOutput = OUTPUT_TYPES.default;

  /** The length of the content. */
  @state() length: number = 0;

  /** The lines of the content. */
  @state() lines: string[] = [];

  /* Enable/disable the editor when the disabled property changes */
  @watch('disabled', { waitUntilFirstUpdate: true })
  handleDisabledChange() {
    /* Disabled form controls are always valid, so we need to recheck validity when the state changes */
    this.input.disabled = this.disabled;
    this.invalid = !this.input.checkValidity();
    this._editor.enable(!this.disabled);
  }

  @watch('value', { waitUntilFirstUpdate: true })
  handleValueChange() {
    /* Update the counters */
    this._updateStatus();

    /* Check if the editor is valid */
    this.invalid = !this.checkValidity();
  }

  /* Listen to changes on the document selection */
  connectedCallback() {
    super.connectedCallback();
    document.addEventListener('selectionchange', this._updateSelection.bind(this));
  }

  /* Remove to document selection listener */
  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener('selectionchange', this._updateSelection.bind(this));
  }

  firstUpdated() {
    /* If the 'value' attribute contains data, make sure to store this in the editor. */
    if (this.value) this.editor.innerHTML = this.value;

    /* Create a new Quill instance. */
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

    this._replaceRange();
    this._updateStatus();

    /* Listen to changes within the editor. */
    this._editor.on('text-change', this._handleChange.bind(this));

    /* Check if the editor is valid. */
    this.invalid = !this.checkValidity();
  }

  /* Make the text selection work within the Shadow DOM */
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

  /* Whenever the selection within the document changes, update the editor selection. */
  private _updateSelection() {
    this._editor.selection.update();
  }

  /* Whenever the content within the editor changes. */
  private _handleChange() {
    this.value = this._getOutput();
    emit(this, ARC_EVENTS.change);
  }

  /* Method used to retrieve the required content. */
  private _getOutput(): string {
    switch (this.output) {
      case OUTPUT_TYPES.html:
        return this.editor.querySelector('.ql-editor')?.innerHTML || '';
      case OUTPUT_TYPES.text:
        return this._editor.getText() || '';
      default:
        return JSON.stringify(this._editor.getContents().ops);
    }
  }

  /* Method to update the status bar. */
  private _updateStatus(): void {
    this.length = this._editor.getLength() - 1;
    this.lines = this._editor.getLines();
  }

  /* Method that validates the length of the given content with the 'minlength' property */
  private _validateMinLength(length: number): boolean {
    const isValid = !this.minlength || length >= this.minlength;
    this.setCustomValidity(
      !isValid
        ? `Please lengthen this text to ${this.minlength} characters or more (you are currently using ${length})`
        : ''
    );
    return isValid;
  }

  /* Method that validates the length of the given content with the 'maxlength' property */
  private _validateMaxLength(length: number): boolean {
    const isValid = !this.maxlength || length <= this.maxlength;
    this.setCustomValidity(
      !isValid
        ? `Please shorten this text to ${this.maxlength} characters or less (you are currently using ${length})`
        : ''
    );
    return isValid;
  }

  /* Method that validates the line-count of the given content with the 'minlines' property */
  private _validateMinLines(lines: string[]): boolean {
    const isValid = !this.minlines || lines.length >= this.minlines;
    this.setCustomValidity(
      !isValid
        ? `Please lengthen this text to ${this.minlines} lines or more (you are currently using ${lines.length})`
        : ''
    );
    return isValid;
  }

  /* Method that validates the line-count of the given content with the 'maxlines' property */
  private _validateMaxLines(lines: string[]): boolean {
    const isValid = !this.maxlines || lines.length <= this.maxlines;
    this.setCustomValidity(
      !isValid
        ? `Please shorten this text to ${this.maxlines} lines or less (you are currently using ${lines.length})`
        : ''
    );
    return isValid;
  }

  /** Selects all the text in the editor. */
  select() {
    this._editor.setSelection(0, this._editor.getLength());
  }

  /** Checks for validity and shows the browser's validation message if the control is invalid. */
  reportValidity() {
    return this.input.reportValidity();
  }

  /** Sets a custom validation message. If `message` is not empty, the field will be considered invalid. */
  setCustomValidity(message: string) {
    this.input.setCustomValidity(message);
    this.invalid = !this.input.checkValidity();
  }

  /** Checks for validity and adds custom validation on the input. */
  checkValidity() {
    /* If the field is optional, validate if the user added content. */
    if (!this.required && this.length === 0) {
      this.setCustomValidity('');
      return true;
    }

    return (
      this._validateMinLength(this.length) &&
      this._validateMaxLength(this.length) &&
      this._validateMinLines(this.lines) &&
      this._validateMaxLines(this.lines)
    );
  }

  protected render() {
    return html`
      <div id="main">
        <input
          id="input"
          type="text"
          name=${ifDefined(this.name)}
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          ?required=${this.required}
          .value=${live(this.value)}
          aria-invalid=${this.invalid ? 'true' : 'false'}
        />
        <div id="editor"></div>
        <div id="status">
          <small>characters: ${this.length}</small>
          <small>lines: ${this.lines.length}</small>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'arc-markdown': ArcMarkdown;
  }
}
