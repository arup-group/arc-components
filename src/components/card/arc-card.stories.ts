import {Meta, Story} from '@storybook/web-components';
import {html} from 'lit';
import type ArcCard from "./ArcCard.js";
import './arc-card.js';

export default {
  title: 'Components/ArcCard',
  component: 'arc-card'
} as Meta;

const Template: Story<ArcCard> = ({imageUrl, imageAlt}) => html`
  <div style="display: flex; gap: 20px;">
    <arc-card
      imageUrl="${imageUrl}"
      imageAlt="${imageAlt}"
    >
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
        dolore...</p>
      <div slot="heading">Heading</div>
      <arc-button slot="actions" type="pill">Preview</arc-button>
      <arc-button slot="actions" type="pill">Export</arc-button>
      <arc-icon-button slot="actions" name="info" label="info"></arc-icon-button>
    </arc-card>

    <arc-card>
      <div slot="heading">Heading</div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
        dolore...</p>
      <arc-button slot="actions" type="pill">Preview</arc-button>
      <arc-button slot="actions" type="pill">Export</arc-button>
      <arc-icon-button slot="actions" name="info" label="info"></arc-icon-button>
    </arc-card>

    <arc-card>
      <div slot="heading">Heading</div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
        dolore...</p>
      <arc-button slot="actions" type="pill">Preview</arc-button>
      <arc-button slot="actions" type="pill">Export</arc-button>
      <arc-icon-button slot="actions" name="info" label="info"></arc-icon-button>
    </arc-card>
  </div>
`;

export const Default = Template.bind({});
Default.args = {
  imageUrl: 'https://via.placeholder.com/600.png/09f/fff',
  imageAlt: 'Placeholder image'
};
