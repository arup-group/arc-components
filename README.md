> This branch and README cover version 3. Please view version 2 [here](https://github.com/arup-group/arc-components/tree/v2)

<h1><img src="/assets/arc-red.svg" style="height: 1em;" /> ARC </h1>

> Arup Reusable Components

[Storybook](https://arc.arup.com) | [Documentation](#documentation) | [Playgrounds](#playgrounds) | [Sharepoint (Arup Internal)](https://arup.sharepoint.com/:u:/r/sites/ARCDesignSystem/SitePages/ARC-Design-System.aspx?csf=1&web=1&e=bkD3kw)

Thanks to the popularity of frameworks such as Angular, Vue, and React, component-driven development has become a part of our everyday lives. Components help us encapsulate styles and behaviours into reusable building blocks. They make a lot of sense in terms of design, development, and testing.

Unfortunately, framework-specific components fail us in a number of ways:

- You can only use them in the framework they're designed for
- Their lifespan is limited to that of the framework's
- New frameworks/versions can lead to breaking changes, requiring substantial effort to update components

**ARC** is built with Web Components. These are sharable and standalone pieces of code (HTML/JS/CSS) that offer visual style and interactivity out of the box. They're supported by all [modern browsers](https://caniuse.com/custom-elementsv1), they're framework-agnostic, and they're [part of the standard](https://developer.mozilla.org/en-US/docs/Web/Web_Components), so we know they'll be supported for many years to come.

## What problem does this solve?

**ARC** provides a collection of professionally designed UI components built on a framework-agnostic technology. Why spend hundreds of hours (or more) building a design system from scratch? Why make a component library that only works with one framework?

With **ARC**, you can:

- Start building things faster (no need to roll your own buttons)
- Build multiple apps with different frameworks that all share the same UI components
- Fully customize components to match your existing designs
- Incrementally adopt components as needed (no need to ditch your framework)
- Upgrade or switch frameworks without rebuilding foundational components

## Documentation

- [Getting Started](#getting-started): Install and setup **ARC**
  - [1: Installation](#1-installation): Install the latest version of **ARC**
  - [2: Setup Stylesheets](#2-setup-stylesheets): Setup **ARC** stylesheets
  - [3: Import and Use Components](#4-import-and-use-components): Import and use **ARC** components
- [Migration Guides](https://github.com/arup-group/arc-components/blob/main/MIGRATION_GUIDES.md): Migrate to the latest version of **ARC**
  - [v2 to v3](https://github.com/arup-group/arc-components/blob/main/MIGRATION_GUIDES.md#v2-to-v3): Migrate from **ARC** v2 to v3
- [Typescript](#typescript): Use **ARC** components in a Typescript project
- [React](#react): Use **ARC** components in a React project
- [Customization](#customization): Customize **ARC** components
- [Icons](#icons): Icon components
- [Forms](#forms): Form control validation and serialization
- [Flash of unstyled content (FOUC)](#flash-of-unstyled-content-fouc): Prevent FOUC
- [Playgrounds](#playgrounds): Prebuild playground examples
- [Storybook](https://arc.arup.com): Interactive component documentation
- [Issues](https://github.com/arup-group/arc-components/issues): Report bugs and issues
- [Discussions](https://github.com/arup-group/arc-components/discussions): Ask questions and share ideas with the community
- [Contributing](https://github.com/arup-group/arc-components/blob/main/CONTRIBUTING.md): Contribute to **ARC**
- [Code Of Conduct](https://github.com/arup-group/arc-components/blob/main/CODE_OF_CONDUCT.md): **ARC** community code of conduct
- [Security](https://github.com/arup-group/arc-components/blob/main/SECURITY.md): Security policy
- [License](https://github.com/arup-group/arc-components/blob/main/LICENSE): **ARC** is released under the **MIT** open-source license

### Getting Started

#### 1: Installation

Install the latest version of the `@arc-web/components` package from [npm](https://www.npmjs.com/package/@arc-web/components):

```sh
npm install @arc-web/components@latest
```

#### 2: Setup Stylesheets

**ARC** components depend upon the stylesheets in the themes directory `@arc-web/components/themes` to be loaded at runtime. Ensure that the following stylesheets are loaded by your application:

<details>
<summary>Build Script</summary>

Add a step to your build script that copies the contents of the `@arc-web/components/themes` directory into a directory that serves static assets by your applications web server:

```diff
+ cp -r node_modules/@arc-web/components/themes <public directory>
```

Load the stylesheets in your application:

```diff
  <html>
    <head>
    ...
+   <link rel="stylesheet" href="<public directory>/themes/index.css" />
+   <link rel="stylesheet" href="<public directory>/themes/light.css" />
+   <link rel="stylesheet" href="<public directory>/themes/dark.css" />
    ...
    </head>
  </html>
```

</details>

<details>
<summary>Angular CLI</summary>

Add the stylesheets directly to the `styles` array in your `angular.json` configuration file:

```diff
  {
    ...
    "styles": [
+     "node_modules/@arc-web/components/themes/index.css",
+     "node_modules/@arc-web/components/themes/light.css",
+     "node_modules/@arc-web/components/themes/dark.css",
      ...
    ]
    ...
  }
```

</details>

<details>
<summary>CSS Imports</summary>

Bunderlers that support CSS imports allow you to import CSS files directly into your application's entry point. This is the recommended approach as it allows the bundler to optimize the CSS and remove any unused styles:

```diff
+ import '@arc-web/components/themes/index.css';
+ import '@arc-web/components/themes/light.css';
+ import '@arc-web/components/themes/dark.css';
...
```

</details>

#### 3: Import and Use Components

Import the `@arc-web/components` package:

```ts
import '@arc-web/components';
```

Components are now be available to use in your application:

```html
<arc-button>Click Me</arc-button>
```

<details>
<summary>Cherry Pick Components</summary>

Import only required components individually over importing the entire `@arc-web/components` package to reduce the bundle size of your application:

```ts
import `@arc-web/components/src/components/button/arc-button`;
```

</details>

See the [Storybook](https://arc.arup.com) for a full list of available components and their documentation.

> [!IMPORTANT]
> Icons are not imported by default and must be cherry picked.

### Typescript

**ARC** components are written in Typescript and come with their own type definitions. This means you can use them in a Typescript project without any additional setup. Import an **ARC** component and its type definition:

```ts
import type { ArcButton } from '@arc-web/components';
import '@arc-web/components;
```

<details>
<summary>Cherry Pick Components</summary>

```ts
import type { ArcButtton } from '@arc-web/components/src/components/button/arc-button';
import '@arc-web/components/src/components/button/arc-button';
```

</details>

### React

React can render web components, however, makes assumptions about HTML elements that don't always hold for custom elements, while also treating lower-case tag names differently from upper-cased. This makes working with web components harder than necessary to use. React is working on fixes to these issues, but in the meantime, the `@arc-web/react` provides a wrapper that takes care of setting properties and listening to events for you. Read more about why we need this wrapper [here](https://lit.dev/docs/frameworks/react/#why-are-wrappers-needed)

Install both the `@arc-web/components` and `@arc-web/react` packages from npm:

```sh
npm install @arc-web/components@latest @arc-web/react@latest
```

Setup the `@arc-web/components` package as described above, however, import components from the `@arc-web/react` package instead:

```tsx
import { ArcButton } from '@arc-web/react';

export const App = () => {
  return <ArcButton>Click Me</ArcButton>;
};
```

### Customization

**ARC** components can be customized at a high level through design tokens. This gives you control over theme colours and general styling. For more advanced customizations, web-components can expose something called CSS `parts`. To ensure that each application looks and feels the same, these `parts` are not being exposed from the **ARC** components.

#### Design Tokens

**ARC** makes use of several design tokens to provide a consistent appearance across components. You can customize them and use them in your own application with pure CSS. Design tokens offer a high-level approach to customizing your components, with minimal effort. There are no component-specific variables, however, as design tokens are intended to be generic and highly reusable.

Design tokens are accessed through CSS custom properties that are defined within the theme. Because design tokens live at the page level, they're prefixed with `--arc-` to avoid collisions with other libraries.

To customize a design token, simply override it in your stylesheet using a `:root` block. Here's an example that changes the primary color of the light theme.

```css
:root,
:host,
arc-container[theme='light'] {
  --arc-color-primary: var(--arc-green-050);
}
```

#### Custom Properties

For convenience, some components expose CSS custom properties you can override. These are not design tokens, nor do they have the same `--arc-` prefix since they're scoped to a component.

You can set custom properties on a component in your stylesheet.

```css
arc-button {
  --btn-color: green;
}
```

This will also work if you need to target a subset of components with a specific class.

```css
arc-button.green {
  --btn-color: rgb(var(--arc-green-050));
}

arc-button.blue {
  --btn-color: rgb(var(--arc-blue-050));
}
```

Alternatively, you can set them inline directly on the component.

```html
<arc-button style="--btn-color=rgb(var(--arc-green-050))">My Button</arc-button>
```

Not all components expose CSS custom properties. For those that do, they can be found in the component's API documentation. In the properties table, these can be found under the `CSS CUSTOM PROPERTIES` row.

### Icons

ARC used the [Phosphor Icons](https://phosphoricons.com/) icon set and provides a web component for each icon. To use an icon, import the icon component and use it in your application as you would any other component cherry picked as follows:

```js
import '@arc-web/components/src/components/ph-{icon-name}/ph-icon-{icon-name}.js';
```

```html
<ph-icon-{icon-name}></ph-icon-{icon-name}>
```

### Forms

Every **ARC** component makes use of a [shadow DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM) to encapsulate markup, styles and behaviour. One caveat of this approach is that native `form` elements do not recognize form controls located inside a shadow root.

**ARC** solves this problem by using the [formData](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/formdata_event) event, which is available in all [modern browsers](https://caniuse.com/mdn-api_htmlformelement_formdata_event). This means, when a form is submitted, **ARC** form controls (i.e. arc-radio) will automatically append their values to the `FormData` object that is used to submit the form. In most cases, things will 'just work.' However, if you are using a form serialization library, it might need to be adapted to recognize **ARC** form controls.

#### Form Serialization

When you are relying on standard form submissions, e.g. `<form action="...">`, you can probably skip this section. However, most modern apps use the Fetch API or a library such as axios to submit forms using JavaScript.

The [FormData](https://developer.mozilla.org/en-US/docs/Web/API/FormData) interface offers a standard way to serialize forms in the browser. You can create a `FormData` object from any `<form>` element like this.

```js
const form = document.querySelector('form');
const data = new FormData(form);

// All form control data is available in a FormData object
```

However, if you find `FormData` tricky to work with, or need to pass a JSON payload to the server,
**ARC** offers a serialization utility that gathers form data and returns a simple JavaScript object instead.

```js
import { serialize } from '@arc-web/components/utilities/form-utils.js';

const form = document.querySelector('form');
const data = serialize(form);

// All form control data is available in a plain object
```

This results in an object with name/value pairs that map to each form control. If more than one form control shares the same name, the values will be passed as an array, e.g. `{ name: ['value1', 'value2'] }`.

#### Form Control Validation

Client-side validation can be enabled through the browser's [Constraint Validation API](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Constraint_validation) for ARC form controls. You can activate it using attributes such as `required`, `minlength` and `maxlength`. **ARC** implements many of the same attributes as native form controls, but checks each form control's documentation for a list of all supported properties.

```html
<form>
  <arc-switch name="arc_is_great" value="true" required>Do you love arc?</arc-switch>
  <arc-button submit>Submit</arc-button>
</form>
<script type="module">
  const form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(form.checkValidity());
  });
</script>
```

When the switch does NOT have the `checked` state, it will be invalid, as the `required` property is defined on the component. You can log the validity of the form by calling `checkValidity()`. You can also report the validity of the input element, by calling `reportValidity()`. Calling the `reportValidity()` method on the component itself will return `true` or `false`. If the component is `invalid`, the browser will show the user a relevant error message.

```html
<form>
  <arc-switch name="arc_is_great" value="true" required>Do you love arc?</arc-switch>
  <arc-button submit>Submit</arc-button>
</form>

<script type="module">
  const arcSwitch = document.querySelector('arc-switch');
  arcSwitch.reportValidity();
</script>
```

As the user interacts with a form control, its `invalid` attribute will reflect its validity based on its current value and the constraints that have been defined. When a form control is invalid, the containing form will not be submitted. Instead, the browser will show the user a relevant error message.

All form controls support validation, but not all validation props are available for every component. Refer to a component's documentation to see which validation props it supports.

#### Custom validation

To create a custom validation error, pass a non-empty string to the `setCustomValidity()` method. This will override any existing validation constraints. The form will not be submitted when a custom validity is set and the browser will show a validation error when the containing form is submitted. To make the input valid again, call `setCustomValidity()` again with an empty string.

```html
<form>
  <arc-switch name="arc_is_great" value="true">Do you love arc?</arc-switch>
  <arc-button submit>Submit</arc-button>
</form>

<script type="module">
  const arcSwitch = document.querySelector('arc-switch');
  arcSwitch.setCustomValidity('This will never submit the form!');

  const form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(form.checkValidity());
  });
</script>
```

### Flash of unstyled content (FOUC)

A flash of unstyled content (FOUC, also flash of unstyled text) is an instance where a web page appears briefly with the browser's default styles prior to loading an external CSS stylesheet, due to the web browser engine rendering the page before all information is retrieved. The page corrects itself as soon as the style rules are loaded and applied; however, the shift may be distracting or even seem unprofessional. These problems can be resolved by using the built-in noFOUC() utility function as shown below. This will only display the content once the document.readyState is equal to 'complete'.

```html
<body>
  <arc-container></arc-container>
  <script>
    import '@arc-web/components;
  </script>
</body>
```

```ts
import { noFOUC } from '@arc-web/components/utilities/style-utils.js';

noFOUC();
```

### Server Side Rendering (SSR)

Server-side rendering (SSR) is a technique for generating and serving the HTML of your components, including shadow DOM and styles, before their JavaScript implementations have loaded and executed.

You can use SSR for a variety of reasons:

- Performance. Some sites can render faster if they render static HTML first without waiting for JavaScript to load, then (optionally) load the page's JavaScript and hydrate the components.
- SEO and web crawlers. While the major search-engine web crawlers render pages with full JavaScript-enabled browsers, not all web crawlers support JavaScript.
- Robustness. Static HTML renders even if the JavaScript fails to load or the user has JavaScript disabled.

For a deeper dive into server-side rendering concepts and techniques generally, see [Rendering on the Web](https://web.dev/articles/rendering-on-the-web) on web.dev.

| Component          | Current Support Level | Comments |
| ------------------ | --------------------- | -------- |
| `ArcAccessibility` | No current support    |          |
| `ArcAvatar`        | No current support    |          |
| `ArcBottombar`     | No current support    |          |
| `ArcButton`        | Full support          |          |
| `ArcChip`          | No current support    |          |
| `ArcContainer`     | No current support    |          |
| `ArcDrawer`        | No current support    |          |
| `ArcDropdown`      | No current support    |          |
| `ArcHero`          | No current support    |          |
| `ArcIcon`          | No current support    |          |
| `ArcIconButton`    | No current support    |          |
| `ArcImage`         | No current support    |          |
| `ArcMenu`          | No current support    |          |
| `ArcMenuItem`      | No current support    |          |
| `ArcNavbar`        | No current support    |          |
| `ArcRadio`         | No current support    |          |
| `ArcRadioGroup`    | No current support    |          |
| `ArcSidebar`       | No current support    |          |
| `ArcSpinner`       | Full support          |          |
| `ArcSso`           | No current support    |          |
| `ArcSwitch`        | No current support    |          |
| `ArcTable`         | No current support    |          |
| `ArcTooltip`       | No current support    |          |

### Playgrounds

Prebuild playgrounds provide examples of how to use **ARC** components in various frameworks and environments:

- [Angular](https://github.com/arup-group/arc-components/tree/main/playgrounds/angular) An Angular application build with the Angular CLI.
- [LIT](https://github.com/arup-group/arc-components/tree/main/playgrounds/lit) A LIT application build and bundled with Vite.
- [React](https://github.com/arup-group/arc-components/tree/main/playgrounds/react) A React application build and bundled with Vite.
- [Vue](https://github.com/arup-group/arup-components/tree/main/playgrounds/vue) A Vue application build and bundled with Vite.
- [Vanilla JS](https://github.com/arup-group/arup-components/tree/main/playgrounds/vanilla) A Vanilla JS application build and bundled with Vite.
- [Node SSR](https://github.com/arup-group/arup-components/tree/main/playgrounds/node-ssr) A Node application that uses The Koa framework to server side render and hydrate **ARC** components.
- [Node Prerender](https://github.com/arup-group/arup-components/tree/main/playgrounds/node-prerender) A Node application that prerenders a static index.html file that included \*_ARC_ components.

<details>
<summary>Running Playgrounds Locally</summary>

To run a playground locally, clone the repository and run the following commands:

```sh
npm ci
npx nx run <playground-name>:serve
```

</details>
