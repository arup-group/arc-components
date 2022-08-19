/*
This file is used to run a set of actions when running the `yarn run create` script.
Each action in the setGenerator method adds or modifies a file.
The current actions include:
 - Adding a web-component (templates/component.hbs)
 - Adding a web-component registry, following the open-web approach (templates/registry.hbs)
 - Adding a test file (templates/test.hbs)
 - Adding a story file (templates/story.hbs)
 - Adding a style file (templates/styles.hbs)
 - Add import statement to the arc.ts file (src/arc.ts)
 - Add export statement to the arc.ts file (src/arc.ts)
*/
export default function (plop) {
  plop.setHelper('tagWithoutPrefix', tag => tag.replace(/^arc-/, ''));

  plop.setHelper('tagToTitle', tag => {
    const withoutPrefix = plop.getHelper('tagWithoutPrefix');
    const titleCase = plop.getHelper('titleCase');
    return titleCase(withoutPrefix(tag));
  });

  plop.setGenerator('component', {
    description: 'Generate a new ARC web-component',
    prompts: [
      {
        type: 'input',
        name: 'tag',
        message: 'Tag name? (e.g. arc-button)',
        validate: value => {
          // Start with arc- and include only a-z + dashes
          if (!/^arc-[a-z-+]+/.test(value)) {
            return false;
          }

          // No double dashes or ending dash
          return !(value.includes('--') || value.endsWith('-'));
        }
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../../src/components/{{ tagWithoutPrefix tag }}/{{ properCase tag }}.ts',
        templateFile: './templates/component.hbs'
      },
      {
        type: 'add',
        path: '../../src/components/{{ tagWithoutPrefix tag }}/{{ tag }}.ts',
        templateFile: './templates/registry.hbs'
      },
      {
        type: 'add',
        path: '../../src/components/{{ tagWithoutPrefix tag }}/{{ tag }}.test.ts',
        templateFile: './templates/tests.hbs'
      },
      {
        type: 'add',
        path: '../../src/components/{{ tagWithoutPrefix tag }}/{{ tag }}.stories.ts',
        templateFile: './templates/story.hbs'
      },
      {
        type: 'add',
        path: '../../src/components/{{ tagWithoutPrefix tag }}/{{ tag }}.styles.ts',
        templateFile: './templates/styles.hbs'
      },
      {
        type: 'modify',
        path: '../../src/arc.ts',
        pattern: /\/\* plop:component-import \*\//,
        template: `import './components/{{ tagWithoutPrefix tag }}/{{ tag }}.js';\n/* plop:component-import */`
      },
      {
        type: 'modify',
        path: '../../src/arc.ts',
        pattern: /\/\* plop:component-export \*\//,
        template: `export { default as {{ properCase tag }} } from './components/{{ tagWithoutPrefix tag }}/{{ properCase tag }}.js';\n/* plop:component-export */`
      }
    ]
  });
};
