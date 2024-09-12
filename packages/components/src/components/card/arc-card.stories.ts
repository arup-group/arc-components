import { Meta, StoryFn } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { ARC_EVENTS } from '../../internal/constants/eventConstants.js';
import type ArcCard from './ArcCard.js';
import './arc-card.js';
import '../image/arc-image.js';
import '../ph-icon/gear/ph-icon-gear.js';

export default {
  title: 'Components/ArcCard',
  component: 'arc-card',
  parameters: {
    actions: {
      handles: [
        ARC_EVENTS.show,
        ARC_EVENTS.afterShow,
        ARC_EVENTS.hide,
        ARC_EVENTS.afterHide,
      ],
    },
  },
} as Meta;

export const Default: StoryFn<ArcCard> = ({ collapsed }) => html`
  <arc-card
    ?collapsed=${ifDefined(collapsed || undefined)}
    style="width: 400px;"
  >
    <div slot="header">
      <strong>Header</strong>
      <arc-icon-button>
        <ph-icon-gear slot="icon"></ph-icon-gear>
      </arc-icon-button>
    </div>

    <arc-image
      slot="image"
      src="https://picsum.photos/300"
      height="200"
    ></arc-image>

    Basic ArcCard with a header, image and footer.

    <div slot="footer">
      <arc-button>Action</arc-button>
    </div>
  </arc-card>
`;
