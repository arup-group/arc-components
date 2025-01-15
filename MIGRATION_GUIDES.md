# Migration Guides

## v3 to v4

v4 introdcues serval breaking chanages to the library. Please take care to read the following migration guide before upgrading.

#### Breaking Changes

- `ArcTable` component has been removed in favour of the **gridjs** theme.

#### Upgrade Steps

- Replace all instances of `ArcTable` with the new **gridjs** theme:

```diff
- import '@arc-web/components/src/components/table/arc-table';
- <arc-table></arc-table>

+ <link rel="stylesheet" href="@arc-web/components/themes/gridjs.css" />
+ <div id="grid"></div>
+ <script type="module">
+   import { Grid } from 'gridjs';
+
+   new Grid({ ... }).render(document.getElementById('grid'));
+ </script>

```

Please refer to the [official gridjs documentation](https://gridjs.io/) for more information.

## v2 to v3

In version 3 we have taken the opportunity to make several important breaking changes to the library. Please take care to read the following migration guide before upgrading.

#### Breaking Changes

- `ArcContainer` now renders an `ArcNavbar` component within its 'nav' slot by default.
- `ArcBottombar` now renders an `ArcIconButton` component by default to open the `ArcAccessibility` panel and emits an `arc-accessibility-open` event when clicked.
- `ArcIcon` has been replaced with generated components.
- `ArcButton` color property has been updated from `primary` to `default`.
- Cerry-picking components from the `@arc-web/components` package has changed from importing from the `/dist/src` directory to importing from the `/src` directory.
- React component wrappers have been moved from the `@arc-web/components` package to the `@arc-web/react` package.
- Auto theme now tracks system preference. It responds in real-time to changes in system preference (i.e. even after the page loads) and ignores the time of day.
- Dark and light theme styles have been moved to `index.css`, and `dark.css` and `light.css` have been deleted.
- The primary color in the default ARC theme has been updated from `--arc-red-050` to `--arc-blue-060` in light mode and from `--arc-grey-000` to `--arc-blue-050` in dark mode.

#### Upgrade Steps

- Replace all instances of `ArcIcon` with the new phosphor icons:

```diff
- import '@arc-web/components/src/components/icon/arc-icon';
- <arc-icon name="home"></arc-icon>

+ import '@arc-web/components/src/components/ph-icon/house/ph-icon-house';
+ <ph-icon-house></ph-icon-house>
```

- Update all cherry-picked components from the `@arc-web/components` package to import from the `/src` directory.

```diff
- import '@arc-web/components/dist/src/components/button/arc-button';
+ import '@arc-web/components/src/components/button/arc-button';
```

<details>
<summary>React Only</summary>

- Install the new `@arc-web/react` package.

```sh
npm i @arc-web/components@latest @arc-web/react@latest
```

5. Update all imports from the `@arc-web/components` package to the `@arc-web/react` package.

```diff
- import { ArcButton } from '@arc-web/components/react';
+ import { ArcButton } from '@arc-web/react';
```

</details>

- Update all `ArcButton` components with no color property set to `primary` if you wish to maintain the same appearance.

```diff
- <arc-button>Click Me</arc-button>
+ <arc-button color="primary">Click Me</arc-button>
```

> [!IMPORTANT]
> ARC had updated the primary color in the default theme from `--arc-red-050` to `--arc-blue-060` in light mode and from `--arc-grey-000` to `--arc-blue-050` in dark mode.
> This change should be adopted by all Arup branded applications.

- Remove references to separate dark and light theme stylesheets.

<details>
<summary>Build Script</summary>

```diff
  cp -r node_modules/@arc-web/components/themes <public directory>
```

Load the stylesheet in your application:

```diff
  <html>
    <head>
    ...
    <link rel="stylesheet" href="<public directory>/themes/index.css" />
-   <link rel="stylesheet" href="<public directory>/themes/light.css" />
-   <link rel="stylesheet" href="<public directory>/themes/dark.css" />
    ...
    </head>
  </html>
```

</details>

<details>
<summary>Angular CLI</summary>

```diff
  {
    ...
    "styles": [
      "node_modules/@arc-web/components/themes/index.css",
-     "node_modules/@arc-web/components/themes/light.css",
-     "node_modules/@arc-web/components/themes/dark.css",
      ...
    ]
    ...
  }
```

</details>

<details>
<summary>CSS Imports</summary>

```diff
  import '@arc-web/components/themes/index.css';
- import '@arc-web/components/themes/light.css';
- import '@arc-web/components/themes/dark.css';
```

</details>

- Adjust dark or light theme overrides.

```diff
- :root,
- :host,
- arc-container[theme='light'] {
-   --arc-color-primary: var(--arc-green-060);
- }
-
- :root,
- :host,
- arc-container[theme='dark'] {
-   --arc-color-primary: var(--arc-green-040);
- }

+ :root {
+   --arc-light-color-primary: var(--arc-green-060);
+   --arc-dark-color-primary: var(--arc-green-040);
+ }
```

- Remove setting base path

```js
- import { setBasePath } from '@arc-web/components';
- setBasePath('');
```
