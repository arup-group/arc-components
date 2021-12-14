import { html, TemplateResult } from 'lit';
import './arc-card.js';
import '../button/arc-button.js';
import '../icon-button/arc-icon-button.js';


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
    <arc-card>
        <h4 slot="heading">Heading</h2>
        <p slot="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore...</p>
        <arc-button slot="actions" type="pill">Preview</arc-button>
        <arc-button slot="actions" type="pill">Export</arc-button>
        <arc-icon-button slot="actions" name="info" label="info"></arc-icon-button>
    </arc-card>

    <arc-card>
        <h4 slot="heading">Heading</h2>
        <p slot="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore...</p>
        <arc-button slot="actions" type="pill">Preview</arc-button>
        <arc-button slot="actions" type="pill">Export</arc-button>
        <arc-icon-button slot="actions" name="info" label="info"></arc-icon-button>
    </arc-card>

    <arc-card>
        <h4 slot="heading">Heading</h2>
        <p slot="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore...</p>
        <arc-button slot="actions" type="pill">Preview</arc-button>
        <arc-button slot="actions" type="pill">Export</arc-button>
        <arc-icon-button slot="actions" name="info" label="info"></arc-icon-button>
    </arc-card>

</div>
`;

export const Card = Template.bind({});
