## ARC web-components

## Quickstart

### Node
Before you start, make sure you have Node installed.
Check this by typing the following into the terminal:

```bash
node -v
```

If you see something like `vxx.xx.x` that means you are good to go.

If you get an error instead, install Node following the instructions on their official website: https://nodejs.org/en/

### Yarn
The web-component project makes use of the Yarn package manager.
Make sure you have Yarn installed.
Check this by typing the following into the terminal:

```bash
yarn -v
```

If you see something like `x.xx.xx` that means you are good to go.
If you get an error instead, install Yarn following the instructions on their official website: https://yarnpkg.com/

Navigate to the main directory of the project and install the required node_modules.
Do this by typing the following into the terminal:

```bash
yarn install
```

Once you finished installing the packages, you are good to go!

## Scripts
- `build` builds your app and outputs it in your `dist` directory
- `format` runs the formatter for your project
- `lint` runs the linter for your project
- `start` runs your app for development, reloading on file changes
- `start:build` runs your app after it has been built using the build command
- `storybook` runs the web-component playground for your project
- `test` runs your test suite with Web Test Runner

## Tooling configs
For most of the tools, the configuration is in the `package.json` to reduce the amount of files in your project.
If you customize the configuration a lot, you can consider moving them to individual files.
