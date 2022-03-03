# Quickstart

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

## Launch
Navigate to the main directory of the project and install the required node_modules.
Do this by typing the following into the terminal:

```bash
yarn install
```

Once all node_modules are installed, run the following command to start the web-dev-server

```bash
yarn start
```

## Scripts
- `start` runs your app for development, reloading on file changes
- `build` builds your app and outputs it in your `dist` directory
- `create` creates a web-component and all required files
- `test` runs your test suite with Web Test Runner
- `test:watch` runs your test suite with Web Test Runner while watching file changes
- `storybook` runs the web-component playground for your project
- `storybook:build` builds the web-component playground for your project
- `format` runs the formatter for your project
- `lint` runs the linter for your project
- `analyze` runs the Custom Elements Manifest analyzer to generate a custom-elements.json file

## Creating web components
In order to build a fully documented and tested web-component, the following files should be present:
* Web component
* Web component registry method
* Test file
* Storybook file

Next to that, the newly created web-component needs to be added to the `arc.ts` file in the `src` directory.

To simplify the above, ARC ships with a creation script.
Run `yarn run create` to create a new web-component and all the required files.

This script takes care of the following.
* Creates a web component
* Creates a method to register the web component
* Creates a test file with some example tests
* Creates a Storybook file with some example properties to play with
* Adds an import of the component inside the arc.ts file in the src directory
* Adds an export of the component inside the arc.ts file in the src directory

Once the script is done, add your newly created web-component inside the `index.html` file.
Goodluck!

## Testing
The web-components can run unit tests with the help of [@open-wc/testing](https://open-wc.org/docs/testing/helpers/).
In order to run the tests, make sure that [Node](https://nodejs.org/) is installed.

### Single run
If you want to run one test iteration, run `yarn test`

### Debug
if you want to debug your tests, run `yarn test:watch`.
Your test environment will be kept active and listen to changes made in .test.ts files.

You are given the following options in the terminal
- Press `F` to focus on a test file.
- Press `D` to debug in the browser.
- Press `M` to debug manually in a custom browser.
- Press `Q` to quit watch mode.
- Press `Enter` to re-run all tests.
