import { html, TemplateResult } from 'lit';


interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  theme: string;
}

const Template: Story<ArgTypes> = () => html`
<div style="display: flex; gap: 20px;">
    <arc-card 
      imageUrl="https://via.placeholder.com/600.png/09f/fff"
      imageAlt="Placeholder image"
    >
        <div slot="heading">Heading</div>
        <p slot="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore...</p>
        <arc-button slot="actions" type="pill">Preview</arc-button>
        <arc-button slot="actions" type="pill">Export</arc-button>
        <arc-icon-button slot="actions" name="info" label="info"></arc-icon-button>
    </arc-card>

    <arc-card>
        <div slot="heading">Heading</div>
        <p slot="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore...</p>
        <arc-button slot="actions" type="pill">Preview</arc-button>
        <arc-button slot="actions" type="pill">Export</arc-button>
        <arc-icon-button slot="actions" name="info" label="info"></arc-icon-button>
    </arc-card>

    <arc-card>
        <div slot="heading">Heading</div>
        <p slot="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore...</p>
        <arc-button slot="actions" type="pill">Preview</arc-button>
        <arc-button slot="actions" type="pill">Export</arc-button>
        <arc-icon-button slot="actions" name="info" label="info"></arc-icon-button>
    </arc-card>

</div>
`;

export const Card = Template.bind({});
