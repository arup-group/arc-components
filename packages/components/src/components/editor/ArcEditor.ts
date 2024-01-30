import Quill from 'quill';
import { html, LitElement } from 'lit';
import { property, query, state } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { live } from 'lit/directives/live.js';
import { emit } from '../../internal/event.js';
import { watch } from '../../internal/watch.js';
import { getRootColors } from '../../utilities/style-utils.js';
import { FormController } from '../../internal/form-control.js';
import { OUTPUT_TYPES, EditorOutput } from './constants/EditorConstants.js';
import { ARC_EVENTS } from '../../internal/constants/eventConstants.js';
import styles from './arc-editor.styles.js';

export default class ArcEditor extends LitElement {
  static tag = 'arc-markdown';

  static styles = styles;

  private _editor: Quill;

  @query('#main') scrollContainer: HTMLElement;
  @query('#editor') editor: HTMLElement;
  @query('#input') input: HTMLInputElement;

  // @ts-ignore
  private readonly formSubmitController = new FormController(this);

  @property() name: string;
  @property() value: string = '';

  @property({ type: Boolean, reflect: true }) disabled: boolean = false;
  @property({ type: Boolean, reflect: true }) readonly: boolean = false;
  @property({ type: Number }) minlength: number;
  @property({ type: Number }) maxlength: number;
  @property({ type: Number }) minlines: number;
  @property({ type: Number }) maxlines: number;
  @property({ type: Boolean, reflect: true }) required = false;
  @property({ type: Boolean, reflect: true }) invalid: boolean = false;
  @property({ type: String, reflect: true }) output: EditorOutput =
    OUTPUT_TYPES.default;

  @state() length: number = 0;
  @state() lines: string[] = [];

  @watch('disabled', { waitUntilFirstUpdate: true })
  handleDisabledChange() {
    this.invalid = !this.input.checkValidity();
    this._editor.enable(!this.disabled);
  }

  @watch('readonly', { waitUntilFirstUpdate: true })
  handleReadOnlyChange() {
    this._editor.enable(!this.readonly);
  }

  @watch('value', { waitUntilFirstUpdate: true })
  handleValueChange() {
    this._updateStatus();
    this.invalid = !this.checkValidity();
  }

  connectedCallback() {
    super.connectedCallback();
    document.addEventListener(
      'selectionchange',
      this._updateSelection.bind(this),
    );
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener(
      'selectionchange',
      this._updateSelection.bind(this),
    );
  }

  firstUpdated() {
    this._editor = new Quill(this.editor, {
      modules: {
        toolbar: [
          [{ header: [1, 2, 3, 4, false] }],
          ['bold', 'italic', 'underline', 'strike'],
          [{ list: 'ordered' }, { list: 'bullet' }],
          [{ script: 'sub' }, { script: 'super' }, 'code-block'],
          [{ color: getRootColors() }, { background: getRootColors() }],
          ['clean'],
        ],
      },
      placeholder: this._getPlaceholder(),
      readOnly: this.readonly || this.disabled,
      scrollingContainer: this.scrollContainer,
      theme: 'snow',
    });
    if (this.value) this._editor.root.innerHTML = this.value;
    this._updateStatus();
    this._replaceRange();
    this._editor.on('text-change', this._handleChange.bind(this));
    this.invalid = !this.checkValidity();
  }

  private _replaceRange() {
    // this._editor.selection.getNativeRange = () => {
    //   const selection: Selection = this._editor.root.getRootNode().getSelection();
    //   if (selection == null || selection.rangeCount <= 0) return null;
    //   const nativeRange = selection.getRangeAt(0);
    //   if (nativeRange == null) return null;
    //   return this._normalizeNative(nativeRange);
    // };
  }

  // private _normalizeNative(nativeRange: Range) {
  // if (
  //   !this._editor.root.contains(nativeRange.startContainer) ||
  //   (!nativeRange.collapsed && !this._editor.root.contains(nativeRange.startContainer))
  // ) {
  //   return null;
  // }
  //
  // const range = {
  //   start: { node: nativeRange.startContainer, offset: nativeRange.startOffset },
  //   end: { node: nativeRange.endContainer, offset: nativeRange.endOffset },
  //   native: nativeRange,
  // };
  //
  // [range.start, range.end].forEach(position => {
  //   let { node, offset } = position;
  //
  //   while (!(node instanceof Text) && node.childNodes.length > 0) {
  //     if (node.childNodes.length > offset) {
  //       node = node.childNodes[offset];
  //       offset = 0;
  //     } else if (node.childNodes.length === offset) {
  //       // @ts-ignore
  //       node = node.lastChild;
  //       offset = node instanceof Text ? node.data.length : node.childNodes.length + 1;
  //     } else {
  //       break;
  //     }
  //   }
  //   position.node = node;
  //   position.offset = offset;
  // });
  // return range;
  // }

  private _updateSelection() {
    this._editor;
  }

  private _handleChange() {
    this.value = this._getOutput();
    emit(this, ARC_EVENTS.change);
  }

  private _getOutput(): string {
    const regex = /<p\s*\/?><br\s*\/?><\/p\s*\/?>/gi;
    switch (this.output) {
      case OUTPUT_TYPES.html:
        return this.editor
          .querySelector('.ql-editor')!
          .innerHTML.replace(regex, '<p></p>');
      case OUTPUT_TYPES.text:
        return this._editor.getText().slice(0, -1) || '';
      default:
        return JSON.stringify(this._editor.getContents().ops);
    }
  }

  private _getPlaceholder(): string | undefined {
    if ((this.disabled || this.readonly) && !this.value) {
      return `The editor is ${this.disabled ? 'disabled' : 'read-only'}.`;
    }
    return undefined;
  }

  private _updateStatus(): void {
    this.length = this._editor.getLength() - 1;
    this.lines = this._editor.getLines();
  }

  private _validateMinLength(length: number): boolean {
    const isValid = !this.minlength || length >= this.minlength;
    this.setCustomValidity(
      !isValid
        ? `Please lengthen this text to ${this.minlength} characters or more (you are currently using ${length})`
        : '',
    );
    return isValid;
  }

  private _validateMaxLength(length: number): boolean {
    const isValid = !this.maxlength || length <= this.maxlength;
    this.setCustomValidity(
      !isValid
        ? `Please shorten this text to ${this.maxlength} characters or less (you are currently using ${length})`
        : '',
    );
    return isValid;
  }

  private _validateMinLines(lines: string[]): boolean {
    const isValid = !this.minlines || lines.length >= this.minlines;
    this.setCustomValidity(
      !isValid
        ? `Please lengthen this text to ${this.minlines} lines or more (you are currently using ${lines.length})`
        : '',
    );
    return isValid;
  }

  private _validateMaxLines(lines: string[]): boolean {
    const isValid = !this.maxlines || lines.length <= this.maxlines;
    this.setCustomValidity(
      !isValid
        ? `Please shorten this text to ${this.maxlines} lines or less (you are currently using ${lines.length})`
        : '',
    );
    return isValid;
  }

  select() {
    this._editor.setSelection(0, this._editor.getLength());
  }

  reportValidity() {
    return this.input.reportValidity();
  }

  setCustomValidity(message: string) {
    this.input.setCustomValidity(message);
    this.invalid = !this.input.checkValidity();
  }

  checkValidity() {
    if (
      this.disabled ||
      this.readonly ||
      (!this.required && this.length === 0)
    ) {
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
    'arc-editor': ArcEditor;
  }
}
