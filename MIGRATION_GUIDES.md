# Migration Guides

## v2 to v3

#### `ArcButton` color property

The `ArcButton` components' default color property has been updated from `primary` to `default`. This change has been made to facilitate a fix for setting the `--btn-background` CSS variable when the color property was not set to an empty string, see (#174)[https://github.com/arup-group/arc-components/pull/174]. Update any `ArcButton` components with no color property set to `primary` if you wish to maintain the same appearance.

```diff
- <arc-button>Click Me</arc-button>
+ <arc-button color="primary">Click Me</arc-button>
```

#### Cherry-picking components

Cherry-picking components from the `@arc-web/components` package has changed from importing from the `/dist` directory to importing from the `/src` directory:

```diff
- import '@arc-web/components/dist/src/components/button/arc-button';
+ import '@arc-web/components/src/components/button/arc-button';
```

#### React component wrappers

React component wrappers have been moved from the `@arc-web/components` package to the `@arc-web/react` package. Ensure you install this package and update any imports from the `@arc-web/components` package to the `@arc-web/react` package:

```sh
npm install @arc-web/components @arc-web/react@latest
```

```diff
- import { ArcButton } from '@arc-web/components/react';
+ import { ArcButton } from '@arc-web/react';
```
