import { css, html, LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
import { classMap } from 'lit/directives/class-map.js';
import { componentStyles } from '../styles/component.styles.js';

import { ICON_SIZES } from './constants/IconConstants.js';

const arcIcons = new URL('../../../../assets/arc-icons.svg', import.meta.url).href;

export class ArcIcon extends LitElement {
  static tag = 'arc-icon';

  static styles = [
    componentStyles,
    css`
      :root {
        --icon-color-primary: inherit;
        --icon-color-secondary: currentColor;
      }

      .icon {
        display: inline-block;
        color: var(--icon-color-primary);
        line-height: 1;
        flex-shrink: 0;
        max-width: initial;
      }

      .icon use {
        fill: var(--icon-color-secondary);
        stroke: var(--icon-color-secondary);
      }

      /* Caps/Corners */
      .icon use {
        --icon-stroke-linecap-butt: butt;
        stroke-miterlimit: 10;
        stroke-linecap: square;
        stroke-linejoin: miter;
      }

      .stroke-round use {
        --icon-stroke-linecap-butt: round;
        stroke-linecap: round;
        stroke-linejoin: round;
      }

      /* Animations */
      .spinning {
        animation: icon-spin var(--arc-transition-x-slow) infinite linear;
      }

      @keyframes icon-spin {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    `
  ];

  /** @type { 'control-end' | 'key' | 'heart' | 'social-steam' | 'event' | 'social-vkontakte' | 'exclamation' | 'organization' | 'minus' | 'social-stumbleupon' | 'social-spotify' | 'social-soundcloud' | 'social-foursqare' | 'social-behance' | 'social-skype' | 'social-reddit' | 'social-google' | 'social-github' | 'social-pintarest' | 'social-linkedin' | 'social-instagram' | 'paypal' | 'arrow-up' | 'arrow-right' | 'arrow-left' | 'arrow-down' | 'options' | 'options-vertical' | 'menu' | 'phone' | 'volume-off' | 'volume-2' | 'volume-1' | 'target' | 'symbol-male' | 'symble-female' | 'star' | 'settings' | 'reload' | 'refresh' | 'power' | 'location-pin' | 'plus' | 'paper-plane' | 'paper-clip' | 'magnifier-remove' | 'magnifier-add' | 'magnifier' | 'lock-open' | 'lock' | 'link' | 'control-rewind' | 'info' | 'chart' | 'folder' | 'flag' | 'eye' | 'envolope' | 'doc' | 'cloud-upload' | 'cloud-download' | 'close' | 'clock' | 'check' | 'camera' | 'camrecorder' | 'bubble' | 'ban' | 'arrow-down-circle' | 'arrow-left-circle' | 'arrow-right-circle' | 'arrow-up-circle' | 'action-undo' | 'bulb' | 'calender' | 'dislike' | 'control-forward' | 'control-pause' | 'control-play' | 'note' | 'control-start' | 'cursor' | 'logout' | 'equalizer' | 'graph' | 'grid' | 'home' | 'like' | 'list' | 'login' | 'size-fullscreen' | 'loop' | 'microphone' | 'music-tone' | 'music-tone-alt' | 'direction' | 'pencil' | 'pie-chart' | 'question' | 'rocket' | 'share' | 'share-alt' | 'shuffle' | 'size-actual' | 'basket' | 'support' | 'tag' | 'trash' | 'umbrella' | 'wrench' | 'action-redo' | 'call-end' | 'bag' | 'playlist' | 'basket-loaded' | 'book-open' | 'briefcase' | 'bubbles' | 'calculator' | 'docs' | 'call-in' | 'call-out' | 'compass' | 'cup' | 'diamond' | 'people' | 'directions' | 'feed' | 'drawar' | 'drop' | 'earphones' | 'earphones-alt' | 'anchor' | 'film' | 'folder-alt' | 'frame' | 'globe' | 'globe-alt' | 'handbag' | 'layers' | 'map' | 'picture' | 'pin' | 'envolope-letter' | 'present' | 'printer' | 'puzzle' | 'speech' | 'vector' | 'wallet' | 'plane' | 'badge' | 'bell' | 'chemistry' | 'credit-card' | 'crop' | 'cursor-move' | 'disc' | 'emotsmile' | 'energy' | 'user-follow' | 'envelope-open' | 'eyeglass' | 'fire' | 'game-controller' | 'ghost' | 'graduation' | 'hourglass' | 'magic-wand' | 'magnet' | 'mouse' | 'mustache' | 'notebook' | 'user-following' | 'screen-desktop' | 'screen-smartphone' | 'screen-tablet' | 'shield' | 'social-dribbble' | 'social-dropbox' | 'social-facebook' | 'social-tumblr' | 'social-twitter' | 'social-youtube' | 'speedometer' | 'trophy' | 'user' | 'user-unfollow' | 'user-female' } */
  @property({ type: String })
  name: string = 'fire';

  /** @type { 'small' | 'medium' | 'large' } */
  @property({ type: String })
  size: string = ICON_SIZES.medium;

  /** @type { 0 | 90 | 180 | 270 } */
  @property({ type: Number })
  rotation: number = 0;

  @property({ type: Boolean })
  spinning: boolean = false;

  render() {
    const classes = {
      'spinning': this.spinning,
    }

    const styles = {
      'transform': `${this.rotation ? `rotate(${this.rotation}deg)` : null}`,
      'height': `var(--arc-font-size-${this.size})`,
      'width': `var(--arc-font-size-${this.size})`,
    };

    return html`
      <svg class='icon ${classMap(classes)}' style=${styleMap(styles)}>
        <use href='${arcIcons}#arc-${this.name}' xlink:href='${arcIcons}#arc-${this.name}' />
      </svg>
    `;
  }
}
