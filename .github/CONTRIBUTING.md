# Table of contents

1. WebComponents
2. Requirements
3. Start
4. Create
5. Test
6. Documentation
7. Iconography
8. Build
9. Publish

# 1. WebComponents

ARC is built using [LIT](https://lit.dev/) web components and is built on top of the Web Components standards.
Every component is a native web component, with the power of interoperability.
Web components work anywhere you use HTML, with any framework, or none at all.
This makes using ARC ideal for building shareable components, or maintainable, future-ready sites and apps.

# 2. Requirements

## Node

Before you start, make sure you have [Node](https://nodejs.org/) installed.
Check this by typing the following into the terminal:

```bash
node -v
```

If you see something like `vxx.xx.x` that means you are good to go.
If you get an error like `node: The therm 'node' is not recognized...`,
install [Node](https://nodejs.org/) following the instructions on their official website.

## Yarn

The web-component project makes use of the Yarn package manager.
Make sure you have [Yarn](https://yarnpkg.com/) installed.
Check this by typing the following into the terminal:

```bash
yarn -v
```

If you see something like `x.xx.xx` that means you are good to go.
If you get an error like `yarn: The therm 'yarn' is not recognized...`,
install [Yarn](https://yarnpkg.com/) following the instructions on their official website.

Once you have `node` and `yarn` working, you are good to go!

# 3. Start

Navigate to the main directory of the project and install the required node_modules.
Do this by typing the following into the terminal:

```bash
yarn install
```

Once all node_modules are installed, run the following command to start the web-dev-server

```bash
yarn start
```

This command will automatically start the application and open your default browser.

## Index.html

Web-dev-server uses the `index.html` file located in the main directory of the project.
To avoid importing each new (or existing) component whenever you want to test it,
the `index.html` file imports the entire ARC library.
This is convenient for prototyping, but may result in longer load times.
To improve this, you can cherry-pick the components you want to play around with.

Replace the following line that imports the entire ARC library

```bash
<script type="module" src="out-tsc/arc.js" data-arc="/"></script>
```

with

```bash
<script type="module" data-arc="/">
  import './out-tsc/components/container/arc-container.js';
  import './out-tsc/components/navbar/arc-navbar.js';
</script>
```

This only imports the `arc-container` and `arc-navbar` components.

## Available scripts

The ARC component repository comes with a set of scripts.

- `start` runs your app for development, reloading on file changes
- `build` builds your app and outputs it in your `dist` directory
- `create` creates a web-component and all required files
- `test` runs your test suite with Web Test Runner
- `test:watch` runs your test suite with Web Test Runner while watching for file changes
- `storybook` runs the web-component playground for your project
- `storybook:build` builds the web-component playground for your project
- `format` runs the formatter for your project
- `lint` runs the linter for your project
- `analyze` runs the Custom Elements Manifest analyzer to generate a custom-elements.json file

# 4. Create

Now it is time to create your own custom web-components.
In order to create a fully documented and tested web-component, the following files should be present:

- Web component
- Separate style file (optional)
- Web component registry method
- Test file
- Storybook file

Next to that, the newly created web-component needs to be added to the `arc.ts` file in the `src` directory.

To simplify the above, ARC ships with a creation script.
Run `yarn run create` to create a new web-component.

The script takes care of the following.

- Creating a web component
- Creating a method to register the web component
- Creating a style file with some example styling
- Creating a test file with some example tests
- Creating a Storybook file with some example properties to play with
- Adds an import of the component inside the arc.ts file in the src directory
- Adds an export of the component inside the arc.ts file in the src directory

Now add your newly created web-component inside the `index.html` file like so:

```bash
<section id="section" aria-label="Test section">
  <arc-component></arc-component>
</section>
```

Run `yarn start` and you are good to go!

# 5. Testing

The web-components can run unit tests with the help of [@open-wc/testing](https://open-wc.org/docs/testing/helpers/).
By default, the `yarn run create` script creates a `.test.ts` file, which contains:

- Examples that test the rendering of a component in the DOM
- Examples that test the setters and getters
- Examples that test the states (active, disabled, loading etc.)
- Examples that test specific methods
- Examples that test events (click, focus, blur etc.)
- Examples that test responsiveness
- Examples that test slots
- Examples that test css variables

The above creates a template (a set of placeholders) to take into consideration.
Not all example tests are always required and might differ per component.
A `button` component might not face responsiveness issues that require additional testing,
whereas the `container` component most definitely will.

## Single run

If you want to run one test iteration, run `yarn test`.
This also outputs a coverage report in the coverage directory.

## Debug

if you want to debug your tests, run `yarn test:watch`.
Your test environment will be kept active and listen to changes made in .test.ts files.

You are given the following options in the terminal

- Press `F` to focus on a test file.
- Press `D` to debug in the browser.
- Press `M` to debug manually in a custom browser.
- Press `Q` to quit watch mode.
- Press `Enter` to re-run all tests.

If one (or multiple) tests fail, pressing the `F` key will show the failed tests and the number associated with that specific test.

```bash
Failed test files:

[1] src\components\image\arc-image.test.ts
```

Pressing the `1` key in the terminal, will focus on that failed test, this makes it easy to debug.
You can also press the `D` key, to debug the component in the browser and step through each line of code.

# 6. Documentation

Every component within the ARC-ecosystem requires documentation.
The documentation for each component is created with [Storybook](https://storybook.js.org/).
Storybook allows users to play with the components by changing properties and seeing the results of these changes directly.
Playing around with these components will promote the use of the components, and allows users to keep track of the available components in the library.

> **Note**: Storybook works well with web-components, but it lacks documentation.
> Most code snippets are displaying React solutions that will not work one-on-one within ARC.
> Inspect one of the many available components within the library and see how their `stories` are defined.

By default, the `yarn run create` script creates a `.stories.ts` file, which contains:

- An export of the title of the component (this is shown in the sidebar on the left-hand side).
- A reference to the component. This is needed to read the properties from the component and create the properties table.
- A template that renders the story with given properties.
- One (or multiple) exports. Each export (i.e. export const Default) creates a separate story that a user can play around with.
- Out-of-the box creation of a properties table.
- Out-of-the-box creation of code examples within the `Docs` tab.

## Best practices

In general, there are two ways to create a story.
When a component is not relying on third party software,
the default example from the `yarn run create` script ensures the best user experience.
When a component is relying on third party software (i.e. the arc-table component), a different approach can be required.

Good examples of Stories that are heavily relying on third party software can be found in components like:

- arc-sso.stories.ts
- arc-table.stories.ts

In the arc-table component, the underlying third party software `GridJS` has an internal state that requires updating.
This state should not be updated based on property changes within the `arc-table` component.
To allow Storybook to work nicely with these kinds of components, the template can be used to return an Object instead of an `html` template.

```bash
  const Template: Story<ComponentName> = (args: any) => Object.assign(document.createElement(ComponentName.tag), args);
```

This ensures that Storybook will re-render the component, causing the underlying third party software to work as expected.

> **Note**: Using the above approach might seem like the fastest and perhaps cleanest way of writing your documentation.
> However, creating a story this way creates useless code examples in the `Docs` tab.
> Make sure to only use this approach when re-rendering the component in Storybook cannot be achieved in any other way and is crucial for user-experience.

## Updating the component

Storybook does NOT refresh/update the component on every change entirely.
The component itself is responsible for showing and handling these changes.
A 're-render' will happen however when a story uses if-else constructors in the Storybook template.

```bash
  const Template: Story<ArcComponent> = ({ prop1, prop2 }) => html`
    ${prop1 ? hml`
      <arc-component
        prop1=${prop1}
      ></arc-component>
    ` : html`
      <arc-component
        prop2=${prop2}
      ></arc-component>
    `}
  `;
```

Wrapping each property in an if-else constructor might become tedious and make your code look very unorganized and unreadable.

Good examples of enforcing a refresh to happen can be found in components like:

- arc-button.stories.ts
- arc-sso.stories.ts

Notice the use if the `ifDefined` LIT directive.
This directive sets the attribute if the value is defined and removes the attribute if the value is undefined.
This ensures that the code examples within the `Docs` tab work nicely.

# 7. Iconography

ARC uses [Nucleo](https://nucleoapp.com/) to keep track of the available icons and make an easy export of them.
All the icons are exported as a single SVG `symbol` file, using the following preferences:

If you need to add new icons to the existing library, take the following steps:

1. Import the current icons.svg file into your [Nucleo](https://nucleoapp.com/) app.
2. Drag and drop an svg file into the existing set.
3. Select all icons.
4. Press the `Export` button.
5. Select the SVG <symbol> format.
6. Make sure that the export preferences are as follows:
   1. Base class: ''
   2. Icon ID Prefix: 'arc-'
   3. Use external reference for `use` element: false
   4. Remove stroke-width values: true
   5. Remove `title`: true
   6. Use BEM naming convention: false
   7. Use CSS custom properties: true
7. If everything is correct, press the `Export Icons` button.

Most SVG icons that are exported contain a `fill` or a `stroke` color like `#1C1C1C` or `#fff`.
The `arc-icon` component inherits the color(s) from its parent to style the SVG,
so you can set the color property on the `arc-icon` element or an ancestor to change the color.
In order to make the icons work in any theme, the `fill` and/or `stroke` attributes of the exported icons.svg need to be replaced with the `currentColor` value.

```bash
  icons.svg

  <symbol id="arc-action-undo" viewBox="0 0 31 28">
    <g fill="none" class="nc-icon-wrapper" stroke="none">
      <g clip-path="url(#clip0_5238_4149)">
        <path
          d="M29.97 27.438h-.03a.76.76 0 0 1-.59-.25c-.151-.167-.237-.386-.257-.657a7.418 7.418 0 0 0-.197-1.14c-.111-.47-.464-1.224-1.06-2.266a10.522 10.522 0 0 0-2.316-2.781c-.948-.813-2.386-1.542-4.314-2.188-1.927-.645-4.162-.968-6.705-.968v5.75a.821.821 0 0 1-.045.28c-.03.084-.066.168-.106.25a.694.694 0 0 1-.167.22c-.07.062-.146.114-.227.156-.383.187-.726.146-1.03-.125L.364 12.969a1.023 1.023 0 0 1 0-1.563L12.927.781c.303-.27.64-.317 1.014-.14.373.177.56.484.56.922v5.593c.807.042 1.584.11 2.331.203.747.094 1.473.22 2.18.375a17.11 17.11 0 0 1 2.028.579c.646.229 1.261.494 1.847.796.585.302 1.14.63 1.665.985.524.354 1.019.745 1.483 1.172.464.427.898.88 1.302 1.359a13.739 13.739 0 0 1 2.134 3.578c.555 1.344.934 2.558 1.135 3.64a22.44 22.44 0 0 1 .364 3.313c.04 1.125.045 1.917.015 2.375-.03.459-.066.813-.106 1.063-.04.25-.141.453-.303.61a.836.836 0 0 1-.605.233zm-16.438-12.25c1.574 0 3.028.083 4.36.25 1.332.166 2.502.411 3.511.734 1.01.323 1.913.677 2.71 1.062.797.386 1.508.834 2.134 1.344.626.51 1.15.995 1.574 1.453a13.2 13.2 0 0 1 1.211 1.532c-.383-3.021-1.443-5.563-3.178-7.625-2.644-3.188-6.752-4.782-12.322-4.782a.917.917 0 0 1-.68-.297.976.976 0 0 1-.289-.703v-4.5l-10.08 8.531 10.08 8.626v-4.625c0-.271.091-.51.273-.72a.81.81 0 0 1 .212-.155c.08-.042.161-.073.242-.094a.968.968 0 0 1 .242-.031z"
          fill="currentColor"/>
      </g>
      <defs>
        <clipPath id="clip0_5238_4149">
          <path fill="currentColor" d="M0 0h31v28H0z"/>
        </clipPath>
      </defs>
    </g>
  </symbol>
```

In the code example above, the `fill` attribute is provided with the `currentColor` value,
this ensures that the SVG is no longer responsible for the colors.

# 8. Build

To build a production-ready bundle of ARC, you can use the GitHub workflow located in .github/workflows/main.yml.
This workflow will automatically run when code gets merged into the `main` branch, and takes the following actions:

- Install Yarn
- Create a production-ready Storybook bundle
- Clear the S3 bucket
- Upload the Storybook bundle to S3

# 9. Publish

ARC is published as an open-source project on NPM.
To publish a new version of ARC, you can use the GitHub workflow located in .github/workflows/publish.yml.
This workflow will automatically run when a new release is created through GitHub, and takes the following actions:

- Install Yarn
- Create a production-ready ARC bundle
- Publish the files within the `dist` folder to NPM

Whenever you publish a new version of ARC,
it is recommended to update the version number to communicate the extent of the changes to others who rely on the code.
To change the version number in the `package.json` file, on the command line, in the package root directory,
run the following command, replacing `<update_type>` with one of the semantic versioning release types (patch, major, or minor):

```bash
npm version <update_type>
```

ARC uses the following logic on making a decision for the versioning.

- major - A breaking change, i.e. removed properties, deprecated component etc.
- minor - A new component or an addition to an existing component, which does not break (or change) the functionality of the component.
- patch - Any patch that fixes a bug in the code and does not break (or change) the functionality of the component.
