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
