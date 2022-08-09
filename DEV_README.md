# TOC
1. WebComponents
2. Requirements
3. Start
4. Create
5. Test
6. Documentation
7. Iconography
8. Build
9. Publish

## 1. WebComponents

ARC is built using [LIT](https://lit.dev/) web components and is built on top of the Web Components standards.
Every component is a native web component, with the power of interoperability.
Web components work anywhere you use HTML, with any framework, or none at all.
This makes using ARC ideal for building shareable components, or maintainable, future-ready sites and apps.

## 2. Requirements

### Node
Before you start, make sure you have [Node](https://nodejs.org/) installed.
Check this by typing the following into the terminal:

```bash
node -v
```

If you see something like `vxx.xx.x` that means you are good to go.
If you get an error instead, install [Node](https://nodejs.org/) following the instructions on their official website.

### Yarn
The web-component project makes use of the Yarn package manager.
Make sure you have [Yarn](https://yarnpkg.com/) installed.
Check this by typing the following into the terminal:

```bash
yarn -v
```

If you see something like `x.xx.xx` that means you are good to go.
If you get an error instead, install [Yarn](https://yarnpkg.com/) following the instructions on their official website.

Once you finished installing the packages, you are good to go!

## 2. Start
Navigate to the main directory of the project and install the required node_modules.
Do this by typing the following into the terminal:

```bash
yarn install
```

Once all node_modules are installed, run the following command to start the web-dev-server

```bash
yarn start
```

### Available scripts
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

## 3. Create
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

## 4. Testing
The web-components can run unit tests with the help of [@open-wc/testing](https://open-wc.org/docs/testing/helpers/).

### Single run
If you want to run one test iteration, run `yarn test`. This also outputs a coverage report in the coverage directory.

### Debug
if you want to debug your tests, run `yarn test:watch`.
Your test environment will be kept active and listen to changes made in .test.ts files.

You are given the following options in the terminal
- Press `F` to focus on a test file.
- Press `D` to debug in the browser.
- Press `M` to debug manually in a custom browser.
- Press `Q` to quit watch mode.
- Press `Enter` to re-run all tests.

## 5. Documentation
Every component within the ARC-ecosystem requires documentation.
The documentation for each component is created with [Storybook](https://storybook.js.org/).
Storybook allows users to play with the components by changing properties and seeing the results of these changes directly.
Playing around with these components will promote the use of the components, and allows users to keep track of the available components in the library.

> **Note**: Storybook works well with web-components, but it lacks a massive amount of documentation.
> Take a close look at the different components and how their `stories` are defined.

By default, the `yarn run create` script creates a `.stories.ts` file, which contains:
- An export of the title of the component (this is shown in the sidebar on the left-hand side).
- A reference to the component. This is needed to read the properties from the component and create the properties table.
- A template that renders the story with given properties.
- One (or multiple) exports. Each export (i.e. export const Default) creates a separate story that a user can play around with.
- Out-of-the box creation of a properties table.
- Out-of-the-box creation of code examples within the `Docs` tab.

### Best practices
In general, there are two ways to create a story.
When a component is not relying on third party software,
the default example from the `yarn run create` script ensures the best user experience.
When a component is relying on third party software (i.e. the arc-table component), a different approach can be required.

A good example of a Story that is heavily relying on third party software can be found in components like:
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
> Make sure to only use this approach when re-rendering the component in Storybook cannot be achieved in any other way.

### Updating the component
Storybook does NOT refresh/update the component on every change entirely.
The component itself is responsible for showing the changes.
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

Wrapping each property in an if-else constructors might become tedious and make your code look very unorganized and unreadable.

Good examples of enforcing a refresh to happen can be found in components like:
- arc-button.stories.ts
- arc-sso.stories.ts

Notice the use if the `ifDefined` LIT directive.
This directive sets the attribute if the value is defined and removes the attribute if the value is undefined.
This ensures that the code examples within the `Docs` tab work nicely.

## 6. Iconography
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

## 7. Build
To build a production-ready bundle of ARC, you can use the GitHub workflow located in .github/workflows/main.yml.
This workflow will automatically run when code gets merged into the `main` branch, and takes the following actions:
- Install Yarn
- Create a production-ready Storybook bundle
- Clear the S3 bucket
- Upload the Storybook bundle to S3

## 8. Publish
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
