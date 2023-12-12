import { Meta, Story } from '@storybook/web-components';
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

const Template: Story<ArcCard> = ({ collapsed }) => html`
  <arc-card class="card" ?collapsed=${ifDefined(collapsed || undefined)}>
    <div slot="header">
      <strong>Header</strong>
      <arc-icon-button>
        <ph-icon-gear slot="icon"></ph-icon-gear>
      </arc-icon-button>
    </div>
    <arc-image
      slot="image"
      src="https://picsum.photos/300"
      alt="Example banner for the arc-card component."
      height="200"
    ></arc-image>
    This is a basic card with a header, an image and a footer.
    <div slot="footer">
      <arc-button>Action</arc-button>
    </div>
  </arc-card>
  <style>
    .card {
      width: 20rem;
    }
  </style>
`;

const BasicTemplate: Story<ArcCard> = ({ collapsed }) => html`
  <arc-card class="card" ?collapsed=${ifDefined(collapsed || undefined)}>
    This is just a basic card. No image, no header, no footer, just content.
  </arc-card>
  <style>
    .card {
      width: 20rem;
    }
  </style>
`;

const HeaderTemplate: Story<ArcCard> = ({ collapsed }) => html`
  <arc-card class="card" ?collapsed=${ifDefined(collapsed || undefined)}>
    <div slot="header">
      <strong>Header</strong>
      <arc-icon-button>
        <ph-icon-gear slot="icon"></ph-icon-gear>
      </arc-icon-button>
    </div>
    This card has a header. You can put all sorts of things in it!
  </arc-card>
  <style>
    .card {
      width: 20rem;
    }
  </style>
`;

const FooterTemplate: Story<ArcCard> = ({ collapsed }) => html`
  <arc-card class="card" ?collapsed=${ifDefined(collapsed || undefined)}>
    This card has a footer. You can put all sorts of things in it!
    <div slot="footer">
      <arc-button>Action</arc-button>
    </div>
  </arc-card>
  <style>
    .card {
      width: 20rem;
    }
  </style>
`;

const ImageTemplate: Story<ArcCard> = ({ collapsed }) => html`
  <arc-card class="card" ?collapsed=${collapsed}>
    <arc-image
      slot="image"
      src="https://picsum.photos/300"
      alt="Example banner for the arc-card component."
      height="200"
    ></arc-image>
    This card has an image. You can put any image in it!
  </arc-card>
  <style>
    .card {
      width: 20rem;
    }
  </style>
`;

/* EXAMPLES */
export const Default = Template.bind({});
Default.args = { collapsed: false };

export const BasicCard = BasicTemplate.bind({});
BasicCard.args = { collapsed: false };

export const CardWithHeader = HeaderTemplate.bind({});
CardWithHeader.args = { collapsed: false };

export const CardWithFooter = FooterTemplate.bind({});
CardWithFooter.args = { collapsed: false };

export const CardWithImage = ImageTemplate.bind({});
CardWithImage.args = { collapsed: false };

/* STATES */
export const Collapsed = Template.bind({});
Collapsed.args = { collapsed: true };
