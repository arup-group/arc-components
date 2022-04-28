import { css, html, LitElement } from 'lit';
import { property, state } from 'lit/decorators.js';
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
        --size: 3rem;
      }

      #main {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        position: relative;
        width: var(--size);
        height: var(--size);
        background-color: rgb(var(--arc-grey-030));
        color: rgb(var(--arc-grey-000));
        user-select: none;
        vertical-align: middle;
      }

      #avatar {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        overflow: hidden;
      }

      #main,
      #avatar {
        border-radius: 50%;
      }

      #initials {
        font-size: calc(var(--size) * 0.4);
        line-height: 1;
        text-transform: uppercase;
        overflow: hidden;
        white-space: nowrap;
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
  @state() private hasError: boolean = false;

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
    this.hasError = false;
  }

  render() {
    return html`
      <div id="main" role="img" aria-label=${this.label}>
        ${this.image && !this.hasError
          ? html` <img id="avatar" src=${this.image} alt="Avatar" @error=${() => (this.hasError = true)} /> `
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
