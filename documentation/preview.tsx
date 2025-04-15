import { html } from 'lit';
import { setCustomElementsManifest } from '@storybook/web-components';
import DocumentationTemplate from './documentation-template.mdx';
import '../packages/components/themes/index.css';
import '../packages/components/src/index';
import * as d3 from 'd3';

// @ts-ignore
import CUSTOM_ELEMENTS from '../dist/packages/components/custom-elements.json';

setCustomElementsManifest(CUSTOM_ELEMENTS);

const PREVIEW = {
  decorators: [
    (story, { parameters }) => {
      const { noContainer } = parameters;
      window.d3 = d3;
      return noContainer
        ? html`${story()}`
        : html`<arc-container
            ><div style="padding: var(--arc-spacing-small);">
              ${story()}
            </div></arc-container
          >`;
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
