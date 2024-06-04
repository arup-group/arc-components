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
import Block, { BlockEmbed } from 'quill/blots/block.js';

export default class ArcEditor extends LitElement {
  static tag = 'arc-markdown';
  static styles = styles;

  private quill: Quill;

  @query('#editor') editor: HTMLElement;
  @query('#input') input: HTMLInputElement;

  // @ts-ignore
  private readonly formSubmitController = new FormController(this, {
    value: (control: ArcEditor) => control.value,
  });

  @property() public name: string;
  @property() public value: string = '';
  @property() public placeholder: string = '';
  @property({ type: Boolean, reflect: true }) public disabled: boolean = false;
  @property({ type: Boolean, reflect: true }) public readonly: boolean = false;
  @property({ type: Number }) public minlength: number;
  @property({ type: Number }) public maxlength: number;
  @property({ type: Number }) public minlines: number;
  @property({ type: Number }) public maxlines: number;
  @property({ type: Boolean, reflect: true }) public required = false;
  @property({ type: Boolean, reflect: true }) public invalid: boolean = false;
  @property({ type: String, reflect: true }) public output: EditorOutput =
    OUTPUT_TYPES.default;

  @state() public length: number = 0;
  @state() public lines: (Block | BlockEmbed)[] = [];

  @watch('disabled', { waitUntilFirstUpdate: true })
  public handleDisabledChange(): void {
    this.invalid = !this.input.checkValidity();
    this.quill.enable(!this.disabled);
  }

  @watch('readonly', { waitUntilFirstUpdate: true })
  public handleReadOnlyChange(): void {
    this.quill.enable(!this.readonly);
  }

  @watch('value', { waitUntilFirstUpdate: true })
  public handleValueChange(): void {
    this.updateStatus();
    this.invalid = !this.checkValidity();
  }

  public connectedCallback(): void {
    super.connectedCallback();
    document.addEventListener(
      'selectionchange',
      this.updateSelection.bind(this),
    );
  }

  public disconnectedCallback(): void {
    super.disconnectedCallback();
    document.removeEventListener(
      'selectionchange',
      this.updateSelection.bind(this),
    );
  }

  public firstUpdated(): void {
    this.quill = new Quill(this.editor, {
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
      placeholder: this.placeholder,
      readOnly: this.readonly || this.disabled,
      theme: 'snow',
    });
    if (this.value) this.quill.root.innerHTML = this.value;
    this.updateStatus();
    this.quill.on('text-change', this.handleChange.bind(this));
    this.quill.selection.getNativeRange.bind(this.getNativeRange);
    this.invalid = !this.checkValidity();
  }

  public select(): void {
    this.quill.setSelection(0, this.quill.getLength());
  }

  public reportValidity(): boolean {
    return this.input.reportValidity();
  }

  public setCustomValidity(message: string): void {
    this.input.setCustomValidity(message);
    this.invalid = !this.input.checkValidity();
  }

  public checkValidity(): boolean {
    const valid =
      this.readonly || (this.required === false && this.length === 0);

    if (valid) {
      return true;
    }

    return (
      this.validateMinLength(this.length) &&
      this.validateMaxLength(this.length) &&
      this.validateMinLines(this.lines) &&
      this.validateMaxLines(this.lines)
    );
  }

  private validateMinLength(length: number): boolean {
    const isValid = !this.minlength || length >= this.minlength;
    const message = !isValid
      ? `Please lengthen this text to ${this.minlength} characters or more (you are currently using ${length})`
      : '';
    this.setCustomValidity(message);
    return isValid;
  }

  private validateMaxLength(length: number): boolean {
    const isValid = !this.maxlength || length <= this.maxlength;
    const message = !isValid
      ? `Please shorten this text to ${this.maxlength} characters or less (you are currently using ${length})`
      : '';
    this.setCustomValidity(message);
    return isValid;
  }

  private validateMinLines(lines: (Block | BlockEmbed)[]): boolean {
    const isValid = !this.minlines || lines.length >= this.minlines;
    const message = !isValid
      ? `Please lengthen this text to ${this.minlines} lines or more (you are currently using ${lines.length})`
      : '';
    this.setCustomValidity(message);
    return isValid;
  }

  private validateMaxLines(lines: (Block | BlockEmbed)[]): boolean {
    const isValid = !this.maxlines || lines.length <= this.maxlines;
    const message = !isValid
      ? `Please shorten this text to ${this.maxlines} lines or less (you are currently using ${lines.length})`
      : '';
    this.setCustomValidity(message);
    return isValid;
  }

  private updateStatus(): void {
    this.length = this.quill.getLength() - 1;
    this.lines = this.quill.getLines();
  }

  private updateSelection(): void {
    this.quill.selection.update();
  }

  private handleChange(): void {
    this.value = this.getOutput();
    emit(this, ARC_EVENTS.change);
  }

  private getOutput(): string {
    const regex = /<p\s*\/?><br\s*\/?><\/p\s*\/?>/gi;
    switch (this.output) {
      case OUTPUT_TYPES.html:
        return this.editor
          .querySelector('.ql-editor')!
          .innerHTML.replace(regex, '<p></p>');
      case OUTPUT_TYPES.text:
        return this.quill.getText().slice(0, -1) || '';
      default:
        return JSON.stringify(this.quill.getContents().ops);
    }
  }

  private getNativeRange() {
    const dom = this.quill.root.getRootNode();
    // @ts-ignore
    const selection = dom.getSelection();
    const range = this.normalizeNative(selection);
    return range;
  }

  private normalizeNative(nativeRange: any | null) {
      // document.getSelection model has properties startContainer and endContainer
      // shadow.getSelection model has baseNode and focusNode
      // Unify formats to always look like document.getSelection 
    
      if (nativeRange) {
    
        const range = nativeRange;
        
        if (range.baseNode) {  
          range.startContainer = nativeRange.baseNode;
          range.endContainer = nativeRange.focusNode;
          range.startOffset = nativeRange.baseOffset;
          range.endOffset = nativeRange.focusOffset;
    
          if (range.endOffset < range.startOffset) {
            range.startContainer = nativeRange.focusNode;
            range.endContainer = nativeRange.baseNode;    
            range.startOffset = nativeRange.focusOffset;
            range.endOffset = nativeRange.baseOffset;
          }
        }
    
        if (range.startContainer) {
          
          return {
            start: { node: range.startContainer, offset: range.startOffset },
            end: { node: range.endContainer, offset: range.endOffset },
            native: range
          };
        }
      }
    
      return null
  }

  protected render() {
    return html`
      <! -- TODO: REMOVE THIS -- !>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/quill@2.0.2/dist/quill.snow.css" />
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
