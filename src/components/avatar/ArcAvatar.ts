import { html, LitElement } from 'lit';
import { property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { watch } from '../../internal/watch.js';
import { stringToInitials } from '../../internal/string.js';
import styles from './arc-avatar.styles.js';
import '../icon/arc-icon.js';

/**
 * @slot icon - The default icon to use when no image or initials are present.
 *
 * @cssproperty --size - The size of the avatar.
 */
export default class ArcAvatar extends LitElement {
  static tag = 'arc-avatar';

  static styles = styles;

  /** @internal - State that keeps track whether the given image failed to load. */
  @state() private _hasError: boolean = false;

  /** The image source to use for the avatar. */
  @property({ type: String }) image: string;

  /** A label to describe the avatar to assistive devices. */
  @property({ type: String }) label: string;

  /** Name to use as a fallback when no image is available. */
  @property({
    type: String,
    converter: (attrValue: string | null) => (attrValue ? stringToInitials(attrValue) : ''),
  })
  name: string;

  @watch('image')
  handleImageChange() {
    this._hasError = false;
  }

  _handleImageError() {
    this._hasError = true;
  }

  render() {
    return html`
      <div
        id="main"
        role="img"
        aria-label=${this.label}
        class=${classMap({ 'has-image': this.image && !this._hasError })}
      >
        ${this.image && !this._hasError
          ? html` <img id="avatar" src=${this.image} alt="Avatar" @error=${this._handleImageError} /> `
          : html`
              ${this.name
                ? html` <div id="initials">${this.name}</div> `
                : html`
                    <div id="icon">
                      <slot name="icon">
                        <arc-icon name="user"></arc-icon>
                      </slot>
                    </div>
                  `}
            `}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'arc-avatar': ArcAvatar;
  }
}
