import { readFileSync, writeFileSync } from 'fs';

function generateFileContent(css) {
  return `import { css } from 'lit'; export default css\`${css}\`;`;
}

for (let i = 2; i < process.argv.length; i++) {
  try {
    const filePath = process.argv[i];
    const css = readFileSync(filePath).toString('utf-8');
    writeFileSync(`${filePath}.js`, generateFileContent(css));
  } catch (error) {
    console.error(error);
  }
}
