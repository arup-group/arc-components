import { html } from 'lit';
import { setCustomElementsManifest } from '@storybook/web-components';
import DocumentationTemplate from './documentation-template.mdx';
import '../packages/components/themes/index.css';
import '../packages/components/themes/gridjs.css';
import '../packages/components/themes/tanstack-table.css';
import '../packages/components/src/index';
// @ts-ignore
import CUSTOM_ELEMENTS from '../dist/packages/components/custom-elements.json';
import * as arc from '../packages/components/src/index';
import * as d3 from 'd3';
import * as gridjs from 'gridjs';
import * as tanstacktablecore from '@tanstack/table-core';

/** Storybook preview utils */
function createRandomPerson() {
  return {
    firstName: Math.random()
      .toString(36)
      .substring(Math.floor(Math.random() * 10)),
    lastName: Math.random()
      .toString(36)
      .substring(Math.floor(Math.random() * 10)),
    age: Math.floor(Math.random() * 100),
  };
}

function RenderStory(story) {
  return html`${story()}`;
}

function RenderStoryWithArcContainer(story) {
  return html`
    <arc-container>
      <div
        style="margin: var(--arc-spacing-small); height: 100%; overflow-y: auto;"
      >
        ${story()}
      </div>
    </arc-container>
  `;
}

/* Set custom elements manifest for components */
setCustomElementsManifest(CUSTOM_ELEMENTS);

/* Setup globals for stories */
window.arc = arc;
window.d3 = d3;
window.gridjs = gridjs;
window.tanstacktablecore = tanstacktablecore;
window.createRandomPerson = createRandomPerson;

const PREVIEW = {
  decorators: [
    (story, { parameters }) => {
      const { noContainer } = parameters;
      return noContainer
        ? RenderStory(story)
        : RenderStoryWithArcContainer(story);
    },
  ],
  parameters: {
    layout: 'fullscreen',
    docs: {
      page: DocumentationTemplate,
    },
    options: {
      storySort: {
        order: ['Welcome', 'Components'],
      },
    },
  },
};

export default PREVIEW;
