#!/usr/bin/env node

import { IconStyle } from '@phosphor-icons/core';
import fs from 'fs';
import path from 'path';

/**
 * Icons.
 *
 * Object to store all the icons.
 */
const ICONS: any = {};

/**
 * Weights.
 *
 * Array with all the possiable weights.
 */
const WEIGHTS: IconStyle[] = Object.values(IconStyle);

/**
 * Index Path.
 *
 * Path to the index file of the arc-icon folder.
 */
const INDEX_PATH = path.join(
  __dirname,
  '../packages/components/src/components/ph-icon/index.ts',
);

/**
 * React Index Path.
 *
 * Path to the index file of the arc-icon folder.
 */
const REACT_INDEX_PATH = path.join(
  __dirname,
  '../packages/react/src/components/ph-icon/index.ts',
);

/**
 * Assets Path.
 *
 * Path to the assets folder of the phosphor icons.
 */
const ASSETS_PATH = path.join(
  __dirname,
  '../node_modules/@phosphor-icons/core/assets',
);

/**
 * Components Path.
 *
 * Path to the write components source.
 */
const COMPONENTS_PATH = path.join(
  __dirname,
  '../packages/components/src/components/ph-icon',
);

/**
 * React Components Path.
 *
 * Path to the write components source.
 */
const REACT_COMPONENTS_PATH = path.join(
  __dirname,
  '../packages/react/src/components/ph-icon',
);

/**
 * Read File.
 *
 * Read file from given path. Replace all the unnecessary parts of the svg file
 * and save it to the icons object.
 */
function readFile(pathname: string, name: string, weight: string): void {
  const file = fs.readFileSync(pathname);
  ICONS[name][weight] = file
    .toString('utf-8')
    .replace(/^.*<\?xml.*?\>/g, '')
    .replace(/<svg.*?>/g, '')
    .replace(/<\/svg>/g, '')
    .replace(
      /<rect width="25[\d,\.]+" height="25[\d,\.]+" fill="none".*?\/>/g,
      '',
    )
    .replace(/"#0+"/g, '"${color}"')
    .replace(/"currentColor"/g, '"${color}"')
    .replace(/<title.*/, '');
}

/**
 * Load Weights.
 *
 * Load all the weights from the assets folder and save them to the icons object.
 */
function loadWeights(): void {
  const weightFolder = fs.readdirSync(ASSETS_PATH, 'utf-8');
  weightFolder.forEach((weightFolder) => {
    if (!fs.lstatSync(path.join(ASSETS_PATH, weightFolder)).isDirectory()) {
      return;
    }
    if (!WEIGHTS.includes(weightFolder as IconStyle)) {
      process.exit(1);
    }
    const files = fs.readdirSync(path.join(ASSETS_PATH, weightFolder));
    files.forEach((filename) => {
      let name;
      const nameParts = filename.split('.svg')[0].split('-');
      if (nameParts[nameParts.length - 1] === weightFolder) {
        name = nameParts.slice(0, -1).join('-');
      } else {
        name = nameParts.join('-');
      }
      if (!ICONS[name]) {
        ICONS[name] = {};
      }
      const filepath = path.join(ASSETS_PATH, weightFolder, filename);
      readFile(filepath, name, weightFolder);
    });
  });
}

/**
 * Check Files.
 *
 * Check if all the files are present.
 */
function checkFiles(icon: IconStyle): boolean {
  const weightsPresent = Object.keys(icon);
  return (
    weightsPresent.length === 6 &&
    weightsPresent.every((w: IconStyle) => WEIGHTS.includes(w))
  );
}

function generateIconSourceFiles() {
  let passes = 0;
  let fails = 0;

  if (fs.existsSync(COMPONENTS_PATH)) {
    fs.rmSync(COMPONENTS_PATH, { recursive: true });
  }
  fs.mkdirSync(COMPONENTS_PATH);
  if (fs.existsSync(REACT_COMPONENTS_PATH)) {
    fs.rmSync(REACT_COMPONENTS_PATH, { recursive: true });
  }
  fs.mkdirSync(REACT_COMPONENTS_PATH);

  for (let key in ICONS) {
    const icon = ICONS[key];
    const name = pascalize(key);

    if (!checkFiles(icon)) {
      fails += 1;
      continue;
    }

    const componentString = `\
/* GENERATED FILE */
import { html, svg, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { styleMap } from 'lit/directives/style-map.js';
import {
  FONT_SIZES,
  FontSize,
} from '../../../internal/constants/styleConstants.js';
import styles from '../../icon/icon.styles.js';

/**
 * @cssproperty --icon-color - Set the color of the icon.
 *
 * @ssr - True
 */
@customElement('ph-icon-${key}')
export default class PhIcon${name} extends LitElement {
  /** @internal */
  static tag = 'ph-icon-${key}';

  /** @internal */
  static styles = styles;

  /** @internal */
  static svg = svg\`${icon.regular}\`;

  /** An alternate description to use for accessibility. If omitted, the icon will be ignored by assistive devices. */
  @property({ type: String }) label: string;

  /** Set the size of the icon. */
  @property({ type: String, reflect: true }) size: FontSize = FONT_SIZES.medium;

  /** Set the rotation of the icon. */
  @property({ type: Number }) rotation: 0 | 90 | 180 | 270 = 0;

  protected render() {
    return html\`
      <svg
        id="main"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 256"
        role=\${ifDefined(this.label ? 'img' : undefined)}
        aria-label=\${ifDefined(this.label || undefined)}
        aria-hidden=\${ifDefined(this.label ? undefined : 'true')}
        style=\${styleMap({
          transform: this.rotation ? \`rotate(\${this.rotation}deg)\` : null,
          height: \`var(--arc-font-size-\${this.size})\`,
          width: \`var(--arc-font-size-\${this.size})\`,
        })}
      >
        \${PhIcon${name}.svg}
      </svg>
    \`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ph-icon-${key}": PhIcon${name};
  }
}
`;

    const reactComponentString = `\
/* GENERATED FILE */
import { createComponent } from '@lit-labs/react';
import React from 'react';
import PhIcon${name}WC from '@arc-web/components/src/components/ph-icon/${key}/ph-icon-${key}.js';
import '@arc-web/components/src/components/ph-icon/${key}/ph-icon-${key}.js';

export const PhIcon${name} = createComponent({
  tagName: 'ph-icon-${key}',
  elementClass: PhIcon${name}WC,
  react: React,
});
`;

    const storyString = `\
/* GENERATED FILE */
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { FONT_SIZES } from '../../../internal/constants/styleConstants.js';
import { icons } from '@phosphor-icons/core';
import './ph-icon-${key}.js';

export default {
  title: 'Components/Icons/PhIcon${name}',
  component: 'ph-icon-${key}',
  argTypes: {
    size: {
      control: 'select',
      options: Object.values(FONT_SIZES),
    },
    rotation: {
      control: 'select',
      options: [0, 90, 180, 270],
    },
  },
} as Meta;

const Template: Story<ArcIcon> = ({ label, size, rotation }) => html\`
  <ph-icon-${key}
    label=\${ifDefined(label || undefined)}
    size=\${ifDefined(size || undefined)}
    rotation=\${ifDefined(rotation || undefined)}
  ></ph-icon-${key}>
\`;

const ColorTemplate: Story<ArcIcon> = ({ label, size, rotation }) => html\`
  <ph-icon-${key}
    label=\${ifDefined(label || undefined)}
    size=\${ifDefined(size || undefined)}
    rotation=\${ifDefined(rotation || undefined)}
    style="--icon-color: rgb(var(--arc-red-050))">
  </ph-icon-${key}>
\`;

const defaultArgs = {
  label: '',
  size: FONT_SIZES.large,
  rotation: 0,
};

export const Default = Template.bind({});
Default.args = { ...defaultArgs };

export const Color = ColorTemplate.bind({});
Color.args = { ...defaultArgs };
`;

    try {
      console.log(`Generating ${key}...`);
      fs.mkdirSync(path.join(COMPONENTS_PATH, key));
      fs.mkdirSync(path.join(REACT_COMPONENTS_PATH, key));
      fs.writeFileSync(
        path.join(COMPONENTS_PATH, key, `ph-icon-${key}.ts`),
        componentString,
        {
          flag: 'w',
        },
      );
      fs.writeFileSync(
        path.join(REACT_COMPONENTS_PATH, key, `ph-icon-${key}.ts`),
        reactComponentString,
        {
          flag: 'w',
        },
      );
      fs.writeFileSync(
        path.join(COMPONENTS_PATH, key, `ph-icon-${key}.stories.ts`),
        storyString,
        {
          flag: 'w',
        },
      );
      passes += 1;
    } catch (err) {
      fails += 1;
    }
  }
  if (passes > 0) {
    console.log(`${passes} component${passes > 1 ? 's' : ''} generated`);
  }
  if (fails > 0) {
    console.log(`${fails} component${fails > 1 ? 's' : ''} failed`);
  }
}

function generateExports() {
  let indexString = `\
/* GENERATED FILE */
`;
  for (let key in ICONS) {
    indexString += `\
export * from './${key}/ph-icon-${key}.js';
`;
  }

  let reactIndexString = `\
/* GENERATED FILE */
`;
  for (let key in ICONS) {
    reactIndexString += `\
export * from './${key}/ph-icon-${key}.js';
`;
  }
  try {
    fs.writeFileSync(INDEX_PATH, indexString, {
      flag: 'w',
    });
    fs.writeFileSync(REACT_INDEX_PATH, reactIndexString, {
      flag: 'w',
    });
    console.log('Export success');
  } catch (err) {
    console.error('Export failed');
    console.group();
    console.error(err);
    console.groupEnd();
  }
}

function pascalize(str: string) {
  return str
    .split('-')
    .map((substr) => substr.replace(/^\w/, (c) => c.toUpperCase()))
    .join('');
}

function arcIconAssemble() {
  loadWeights();
  generateIconSourceFiles();
  generateExports();
}

arcIconAssemble();
