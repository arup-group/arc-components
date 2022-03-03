import { html, TemplateResult } from 'lit';


interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  imageUrl?: string;
  imageAlt?: string;
}

const Template: Story<ArgTypes> = ({imageUrl, imageAlt}:ArgTypes) => html`
<div style="display: flex; gap: 20px;">
    <arc-card 
      imageUrl="${imageUrl}"
      imageAlt="${imageAlt}"
    >
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore...</p>
        <div slot="heading">Heading</div>
        <arc-button slot="actions" type="pill">Preview</arc-button>
        <arc-button slot="actions" type="pill">Export</arc-button>
        <arc-icon-button slot="actions" name="info" label="info"></arc-icon-button>
    </arc-card>

    <arc-card>
        <div slot="heading">Heading</div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore...</p>
        <arc-button slot="actions" type="pill">Preview</arc-button>
        <arc-button slot="actions" type="pill">Export</arc-button>
        <arc-icon-button slot="actions" name="info" label="info"></arc-icon-button>
    </arc-card>

    <arc-card>
        <div slot="heading">Heading</div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore...</p>
        <arc-button slot="actions" type="pill">Preview</arc-button>
        <arc-button slot="actions" type="pill">Export</arc-button>
        <arc-icon-button slot="actions" name="info" label="info"></arc-icon-button>
    </arc-card>

</div>
`;


const defaultArgs: ArgTypes = {
  imageUrl: 'https://via.placeholder.com/600.png/09f/fff',
  imageAlt: 'Placeholder image'
};

export const Card = Template.bind({});
Card.args = { ...defaultArgs };