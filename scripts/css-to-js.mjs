#!/usr/bin/node

/**
 * Generate CSS in JS files for a list of given relative CSS file
 * paths. Provide CSS file paths as arguments.
 */

import { readFileSync, writeFileSync } from 'fs';

/**
 * Generate file content for CSS in JS.
 *
 * The contents of this file imports the `css` functions
 * from lit and exports a constant that is the results of
 * calling the `css` function with the provided CSS content.
 *
 * @param css {string} The css content.
 * @return {string} The generated file content.
 */
function generateFileContent(css) {
  return `import { css } from 'lit'; export default css\`${css}\`;`;
}

/**
 * For each CSS file path arg, read the CSS content, generate a
 * CSS in JS file content, then write new JS file.
 */
for (let i = 2; i < process.argv.length; i++) {
  try {
    const filePath = process.argv[i];
    const css = readFileSync(filePath).toString('utf-8');
    writeFileSync(`${filePath}.js`, generateFileContent(css));
  } catch (error) {
    console.error(error);
  }
}
