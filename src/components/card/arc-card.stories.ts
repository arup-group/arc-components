import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { ARC_EVENTS } from '../../internal/constants/eventConstants';
import type ArcCard from './ArcCard.js';
import './arc-card.js';

export default {
  title: 'Components/ArcCard',
  component: 'arc-card',
  parameters: {
    actions: {
      handles: [ARC_EVENTS.show, ARC_EVENTS.afterShow, ARC_EVENTS.hide, ARC_EVENTS.afterHide],
    },
  },
} as Meta;

const Template: Story<ArcCard> = ({ collapsed }) => html`
  <arc-card class="card" ?collapsed=${ifDefined(collapsed || undefined)}>
    <div slot="header">
      <strong>Header</strong>
      <arc-icon-button name="settings"></arc-icon-button>
    </div>
    <img
      slot="image"
      src="https://images.unsplash.com/photo-1646882172899-8436f0219b71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      alt="A picture of two birds."
    />
    These birds are as cute as they are playful!
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
      <arc-icon-button name="settings"></arc-icon-button>
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
    <img
      slot="image"
      src="https://images.unsplash.com/photo-1644990978896-c86bd2e5fd2e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1166&q=80"
      alt="A picture of an eagle landing on ice."
    />
    This eagle is a symbol for strength and freedom.
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
