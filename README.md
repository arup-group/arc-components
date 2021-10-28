## arc-components

## Quickstart

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

## Testing
The web-components can run unit tests with the help of [@open-wc/testing](https://open-wc.org/docs/testing/helpers/).
In order to run the tests, make sure that [Node](https://nodejs.org/) is installed.

### Single run
If you want to run one test iteration, run `yarn test`

### Debug
if you want to debug your tests, run `yarn test:watch`.
Your test environment will be kept active and listen to changes made in .test.js files.

You are given the following options in the terminal
- Press `F` to focus on a test file.
- Press `D` to debug in the browser.
- Press `M` to debug manually in a custom browser.
- Press `Q` to quit watch mode.
- Press `Enter` to re-run all tests.

Press `m` to start debugging in your custom browser, followed by `d` to open your default browser.

In the browser you will see the available test files. Click on one of the links to start debugging that specific component or utility.

Press `F12` to open the DevTools, then navigate to the Sources tab. 
Select the component/utility to debug from within the src/components directory or src/utilities directory.

That's it!

## Scripts
- `start` runs your app for development, reloading on file changes
- `build` builds your app and outputs it in your `dist` directory
- `test` runs your test suite with Web Test Runner
- `test:watch` runs your test suite with Web Test Runner while watching file changes
- `format` runs the formatter for your project to set Prettier code styles to all files
- `lint` checks whether all files use Prettier code styles
- `styles` create .css files of the themes and outputs it in your `dist` directory
- `analyze` creates a custom-elements manifest file
