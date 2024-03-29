import { html, LitElement } from 'lit';
import { property, state, query } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';
import {
  setDefaultAnimation,
  getAnimation,
  startAnimations,
  stopAnimations,
  parseDuration,
} from '../../internal/animate.js';
import { emit } from '../../internal/event.js';
import { watch } from '../../internal/watch.js';
import { ARC_EVENTS } from '../../internal/constants/eventConstants.js';
import styles from './arc-image.styles.js';

/**
 * @event arc-loaded - Emitted when the image is loaded.
 * @event arc-error - Emitted when the image cannot be loaded.
 *
 * @ssr - True
 */
export default class ArcImage extends LitElement {
  /** @internal */
  static tag = 'arc-image';

  static styles = styles;

  /** @internal */
  @query('#main') container: HTMLElement;

  /** @internal */
  @query('#image') image: HTMLImageElement;

  /** @internal */
  @query('#loader') loader: HTMLElement;

  /** @internal - Reference to the intersection observer. */
  private _intersectionObserver: IntersectionObserver;

  /** @internal - Options that define certain aspects of the observer’s behavior. */
  private _observerOptions: IntersectionObserverInit = {
    root: null,
    rootMargin: '0px',
    threshold: [0, 1],
  };

  /** @internal - Used to set a timeout on loading the image. */
  private _loadTimer: number | null = null;

  /** @internal - Loading state of the image. */
  @state() private _loading: boolean = false;

  /** @internal - Is a valid image loaded?. */
  @state() private _hasImage: boolean = false;

  /** Set the path to the image. */
  @property({ type: String }) src: string;

  /** Set the alternate text for the image. */
  @property({ type: String }) alt: string;

  /** Set the delay in ms before loading the image. */
  @property({
    type: Number,
    converter: (attrValue: string | null) =>
      attrValue ? parseDuration(attrValue) : 1000,
  })
  delay: number = 1000;

  /** Set the width of the image. */
  @property({ type: String }) width: string;

  /** Set the height of the image. */
  @property({ type: String }) height: string;

  @watch('src', { waitUntilFirstUpdate: true })
  handleSrcChange() {
    this._attachObserver();
  }

  @watch('_loading', { waitUntilFirstUpdate: true })
  async handleLoadingChange() {
    if (this._loading) {
      await stopAnimations(this.loader);
      const { keyframes, options } = getAnimation(this.loader, 'loader.show');
      await startAnimations(this.loader, keyframes, options);
    } else {
      await stopAnimations(this.loader);
    }
  }

  firstUpdated() {
    this._attachObserver();
  }

  private _attachObserver() {
    this._removeObserver();
    this._intersectionObserver = new IntersectionObserver(
      this._handleIntersection.bind(this),
      this._observerOptions,
    );
    this._intersectionObserver.observe(this.container);
  }

  private _removeObserver() {
    if (!this._intersectionObserver) return;
    this._intersectionObserver.disconnect();
  }

  /* Callback that gets fired whenever the first or last pixel of the container is intersecting the root element */
  private _handleIntersection(entries: any[]) {
    entries.forEach(({ intersectionRatio }) => {
      if (intersectionRatio === 0) {
        if (this._loadTimer) {
          clearTimeout(this._loadTimer);
          this._loadTimer = null;
        }
      } else if (intersectionRatio === 1) {
        this._loadTimer = window.setTimeout(
          this._loadImage.bind(this),
          this.delay,
        );
      }
    });
  }

  /* Load the image and handle the response */
  private _loadImage() {
    this._loading = true;
    this.image.src = this.src;
    this.image.onload = this._imageResponse.bind(this);
    this.image.onerror = this._imageResponse.bind(this);
  }

  /* Emit the response from the image */
  private _imageResponse(e: any) {
    this._loading = false;
    this._hasImage = e.type === 'load';
    this._removeObserver();

    emit(this, this._hasImage ? ARC_EVENTS.loaded : ARC_EVENTS.error, {
      detail: e,
    });
  }

  handleSize(size: string) {
    if (size.endsWith('px') || size.endsWith('%')) {
      return size;
    }
    return `${size}px`;
  }

  protected render() {
    const imageStyles = {
      width: this.width ? this.handleSize(this.width) : undefined,
      height: this.height ? this.handleSize(this.height) : undefined,
    };

    return html`
      <div
        id="main"
        class=${classMap({
          image: true,
          'image--has-image': this._hasImage,
          'image--loading': this._loading,
        })}
        style=${styleMap(imageStyles)}
      >
        <img id="image" src="" alt=${this.alt} />
        <div id="overlay">
          <div id="loader"></div>
          <svg
            id="placeholder"
            width="100%"
            height="100%"
            viewBox="0 0 360 172"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M182.36 55L216.446 114.04H148.273L182.36 55Z"
              fill="rgb(var(--arc-grey-030))"
            />
            <circle cx="236" cy="55" r="17" fill="rgb(var(--arc-grey-030))" />
            <rect
              x="122"
              y="87"
              width="27"
              height="27"
              fill="rgb(var(--arc-grey-030))"
            />
          </svg>
        </div>
      </div>
    `;
  }
}

setDefaultAnimation('loader.show', {
  keyframes: [
    {
      boxShadow:
        'var(--shadow-n), var(--shadow-n), var(--shadow-n), var(--shadow-n)',
    },
    {
      boxShadow:
        'var(--shadow-n), var(--shadow-pn), var(--shadow-pn), var(--shadow-pn)',
    },
    {
      boxShadow:
        'var(--shadow-n), var(--shadow-pn), var(--shadow-p), var(--shadow-p)',
    },
    {
      boxShadow:
        'var(--shadow-n), var(--shadow-pn), var(--shadow-p), var(--shadow-np)',
    },
    {
      boxShadow:
        'var(--shadow-n), var(--shadow-pn), var(--shadow-p), var(--shadow-n)',
    },
    {
      boxShadow:
        'var(--shadow-pn), var(--shadow-pn), var(--shadow-p), var(--shadow-pn)',
    },
    {
      boxShadow:
        'var(--shadow-p), var(--shadow-p), var(--shadow-p), var(--shadow-p)',
    },
    {
      boxShadow:
        'var(--shadow-np), var(--shadow-np), var(--shadow-p), var(--shadow-np)',
    },
    {
      boxShadow:
        'var(--shadow-n), var(--shadow-n), var(--shadow-p), var(--shadow-np)',
    },
    {
      boxShadow:
        'var(--shadow-n), var(--shadow-pn), var(--shadow-p), var(--shadow-np)',
    },
    {
      boxShadow:
        'var(--shadow-n), var(--shadow-p), var(--shadow-p), var(--shadow-np)',
    },
    {
      boxShadow:
        'var(--shadow-n), var(--shadow-np), var(--shadow-np), var(--shadow-np)',
    },
    {
      boxShadow:
        'var(--shadow-n), var(--shadow-n), var(--shadow-n), var(--shadow-n)',
    },
  ],
  options: {
    duration: 6000,
    iterations: Infinity,
  },
});

declare global {
  interface HTMLElementTagNameMap {
    'arc-image': ArcImage;
  }
}
