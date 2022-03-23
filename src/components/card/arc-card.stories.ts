import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit';
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
  <arc-card style="width: 20rem" ?collapsed=${collapsed}>
    <div slot="header">
      <div style="display: grid">
        <strong>Header</strong>
        <small>Subheading</small>
      </div>
    </div>
    <img
      slot="image"
      src="https://images.adsttc.com/media/images/5231/c740/e8e4/4efe/3a00/0090/large_jpg/gherkin_shaundunmall.jpg?1378993979"
      alt=""
    />
    <div style="display: grid">
      <strong>Header</strong>
      <small>Subheading</small>
    </div>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
    <div slot="footer">
      <arc-button>Action</arc-button>
    </div>
  </arc-card>
`;

export const Default = Template.bind({});
Default.args = { collapsed: false };

/* STATES */
export const Collapsed = Template.bind({});
Collapsed.args = { collapsed: true };
