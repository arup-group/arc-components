# Migration Guides

## v2 to v3

In version 3 we have taken the opportunity to make serval important breaking changes to the library. Please take care to read the following migration guide before upgrading.

#### Breaking Changes

- `ArcContainer` now renders an `ArcNavbar` component within its 'nav' slot by default.
- `ArcBottombar` now renders an `ArcIconButton` component by default to open the `ArcAccessibility` panel and emits an `arc-accessibility-open` event when clicked.
- `ArcIcon` has been replaced with genorated components.
- `ArcButton` color property has been updated from `primary` to `default`.
- Cerry-picking components from the `@arc-web/components` package has changed from importing from the `/dist/src` directory to importing from the `/src` directory.
- React component wrappers have been moved from the `@arc-web/components` package to the `@arc-web/react` package.

#### Upgrade Steps

1. Replace all instances of `ArcIcon` with the new genorated components.

```diff
- import '@arc-web/components/src/components/icon/arc-icon';
- <arc-icon name="home"></arc-icon>

+ import '@arc-web/components/src/components/icon/house/arc-icon-house';
+ <arc-icon-house></arc-icon-house>

```

2. Update all `ArcButton` components with no color property set to `primary` if you wish to maintain the same appearance.

```diff
- <arc-button>Click Me</arc-button>
+ <arc-button color="primary">Click Me</arc-button>
```

3. Update all cherry-picked components from the `@arc-web/components` package to import from the `/src` directory.

```diff
- import '@arc-web/components/dist/src/components/button/arc-button';
+ import '@arc-web/components/src/components/button/arc-button';
```

<details>
<summary>React Only</summary>

4. Install the new `@arc-web/react` package.

```sh
npm i @arc-web/components@latest @arc-web/react@latest
```

5. Update all imports from the `@arc-web/components` package to the `@arc-web/react` package.

```diff
- import { ArcButton } from '@arc-web/components/react';
+ import { ArcButton } from '@arc-web/react';
```

</details>
