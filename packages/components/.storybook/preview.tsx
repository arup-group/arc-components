import { html } from 'lit';
import { setCustomElementsManifest } from '@storybook/web-components';
import { Preview } from '@story/types';
import DocumentationTemplate from './documentation-template.mdx';
import '../themes/index.css';
import '../src/index';

// @ts-ignore
import CUSTOM_ELEMENTS from '../../../dist/packages/components/custom-elements.json';

setCustomElementsManifest(CUSTOM_ELEMENTS);

const PREVIEW: Preview = {
  decorators: [
    (story, { parameters }) => {
      const { noContainer } = parameters;
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
