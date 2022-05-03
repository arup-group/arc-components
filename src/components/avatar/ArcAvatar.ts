import { css, html, LitElement } from 'lit';
import { property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { watch } from '../../internal/watch.js';
import componentStyles from '../../styles/component.styles.js';
import { stringToInitials } from '../../internal/string.js';

/**
 * @slot icon - The default icon to use when no image or initials are present.
 *
 * @cssproperty --size - The size of the avatar.
 */
export default class ArcAvatar extends LitElement {
  static tag = 'arc-avatar';

  static styles = [
    componentStyles,
    css`
      :host {
        display: inline-block;
        border-radius: 50%;
        --size: 3rem;
      }

      #main {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        position: relative;
        width: var(--size);
        height: var(--size);
        color: rgb(var(--arc-grey-000));
        user-select: none;
        vertical-align: middle;
      }

      #main:not(.has-image) {
        background-color: rgb(var(--arc-grey-050));
      }

      #avatar {
        width: 100%;
        height: 100%;
        object-fit: cover;
        overflow: hidden;
      }

      #main,
      #avatar {
        border-radius: inherit;
      }

      #initials {
        font-size: calc(var(--size) * 0.4);
        line-height: 1;
      }

      #icon {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    `,
  ];

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

  render() {
    return html`
      <div
        id="main"
        role="img"
        aria-label=${this.label}
        class=${classMap({ 'has-image': this.image && !this._hasError })}
      >
        ${this.image && !this._hasError
          ? html` <img id="avatar" src=${this.image} alt="Avatar" @error=${() => (this._hasError = true)} /> `
          : html`
              ${this.name
                ? html` <div id="initials">${this.name}</div> `
                : html`
                    <div id="icon">
                      <slot name="icon">
                        <arc-icon name="user" size="large"></arc-icon>
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
