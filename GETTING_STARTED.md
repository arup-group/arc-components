## Documentation

### Getting Started

#### 1: Installation

Install the latest version of the `@arc-web/components` package from [npm](https://www.npmjs.com/package/@arc-web/components):

```sh
npm install @arc-web/components@latest
```

#### 2: Setup Stylesheets

**ARC** components depend upon the stylesheet in the themes directory `@arc-web/components/themes` to be loaded at runtime. Ensure that the stylesheet is loaded by your application:

<details>
<summary>Build Script</summary>

Add a step to your build script that copies the contents of the `@arc-web/components/themes` directory into a directory that serves static assets by your applications web server:

```diff
+ cp -r node_modules/@arc-web/components/themes <public directory>
```

Load the stylesheet in your application:

```diff
  <html>
    <head>
    ...
+   <link rel="stylesheet" href="<public directory>/themes/index.css" />
    ...
    </head>
  </html>
```

</details>

<details>
<summary>Angular CLI</summary>

Add the stylesheet directly to the `styles` array in your `angular.json` configuration file:

```diff
  {
    ...
    "styles": [
+     "node_modules/@arc-web/components/themes/index.css",
      ...
    ]
    ...
  }
```

</details>

<details>
<summary>CSS Imports</summary>

Bundlers that support CSS imports allow you to import CSS files directly into your application's entry point. This is the recommended approach as it allows the bundler to optimize the CSS and remove any unused styles:

```diff
+ import '@arc-web/components/themes/index.css';
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

### Customization

**ARC** components can be customized at a high level through design tokens. This gives you control over theme colours and general styling. For more advanced customizations, web-components can expose something called CSS `parts`. To ensure that each application looks and feels the same, these `parts` are not being exposed from the **ARC** components.

#### Design Tokens

**ARC** makes use of several design tokens to provide a consistent appearance across components. You can customize them and use them in your own application with pure CSS. Design tokens offer a high-level approach to customizing your components, with minimal effort. There are no component-specific variables, however, as design tokens are intended to be generic and highly reusable.

Design tokens are accessed through CSS custom properties that are defined within the theme. Because design tokens live at the page level, they're prefixed with `--arc-` to avoid collisions with other libraries.

To customize a design token, simply override it in your stylesheet using a `:root` block. If you are including the ARC-provided theme stylesheets, be sure to import your own _after_ the ARC stylesheets so that your styles override the ARC-provided ones where relevant.

Here's an example implementation of a custom theme using design tokens. Note that you should use the ARC color palette, but if you _must_ provide a different color you should provide only the comma separated numbers to go inside an rgba block (e.g. `255,255,255,1`, not `rgba(255,255,255,1)` and not `#FFFFFF`)

```css
:root {
  --arc-light-brand-color: var(--arc-red-050);
  --arc-light-font-color: var(--arc-grey-100);
  --arc-light-input-color: var(--arc-grey-100);
  --arc-light-background-color: var(--arc-grey-010);
  --arc-light-container-color: var(--arc-white-000);
  --arc-light-color-default: var(--arc-grey-010);
  --arc-light-color-primary: var(--arc-blue-060);
  --arc-light-color-secondary: var(--arc-grey-090);
  --arc-light-color-error: var(--arc-red-070);
  --arc-light-background-color-error: var(--arc-red-000);
  --arc-light-color-warning: var(--arc-orange-070);
  --arc-light-background-color-warning: var(--arc-orange-000);
  --arc-light-color-info: var(--arc-blue-070);
  --arc-light-background-color-info: var(--arc-blue-000);
  --arc-light-color-success: var(--arc-green-070);
  --arc-light-background-color-success: var(--arc-green-000);
  --arc-light-box-shadow: var(--arc-box-shadow-01) var(--arc-darker-15),
    var(--arc-box-shadow-03) var(--arc-darker-13);
  --arc-light-hover-darker: var(--arc-darker-30);
  --arc-light-hover-dark: var(--arc-darker-10);
  --arc-light-hover-light: var(--arc-lighter-70);
  --arc-light-hover-lighter: var(--arc-lighter-90);
  --arc-dark-brand-color: var(--arc-white-000);
  --arc-dark-font-color: var(--arc-grey-000);
  --arc-dark-input-color: var(--arc-dark-font-color);
  --arc-dark-background-color: var(--arc-grey-090);
  --arc-dark-container-color: var(--arc-grey-100);
  --arc-dark-color-default: var(--arc-grey-090);
  --arc-dark-color-primary: var(--arc-blue-040);
  --arc-dark-color-secondary: var(--arc-grey-040);
  --arc-dark-color-error: var(--arc-red-070);
  --arc-dark-background-color-error: var(--arc-red-000);
  --arc-dark-color-warning: var(--arc-orange-070);
  --arc-dark-background-color-warning: var(--arc-orange-000);
  --arc-dark-color-info: var(--arc-blue-070);
  --arc-dark-background-color-info: var(--arc-blue-000);
  --arc-dark-color-success: var(--arc-green-070);
  --arc-dark-background-color-success: var(--arc-green-000);
  --arc-dark-box-shadow: var(--arc-box-shadow-01) var(--arc-darker-30),
    var(--arc-box-shadow-02) var(--arc-darker-15),
    var(--arc-box-shadow-03) var(--arc-darker-13);
  --arc-dark-hover-light: var(--arc-darker-85);
  --arc-dark-hover-lighter: var(--arc-darker-80);
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

### Alerts

> [!WARNING]
> The alert feature is currently in beta and may change in future releases.
> Please provide feedback on this feature and its API in the [GH discussion](https://github.com/arup-group/arc-components/discussions/316).

Call the `ArcContainer.dispatchAlert()` method to display an alert message:

``` js
const container = document.querySelector('arc-container');

container.dispatchAlert({
    title: 'Example Alert',
    message: 'This is an example alert message',
});
```

The `ArcContainer.dispatchAlert()` method will return a callback function that can be used to dismiss the alert:

``` js
const container = document.querySelector('arc-container');

const dismiss = container.dispatchAlert({
    title: 'Example Alert',
    message: 'This is an example alert message',
});


setTimeout(() => dismiss(), 5000);
```

### Notifications

> [!WARNING]
> The notification feature is currently in beta and may change in future releases.
> Please provide feedback on this feature and its API in the [GH discussion](https://github.com/arup-group/arc-components/discussions/315).

Call the `ArcContainer.dispatchNotification()` method to display a notification message:

``` js
const container = document.querySelector('arc-container');

container.dispatchNotification({
    title: 'Example Notification',
    message: 'This is an example notification message',
});
```

The `ArcContainer.dispatchNotification()` method will return callback functions that can be used to dismiss and remove the notification:

``` js
const container = document.querySelector('arc-container');

const [dismiss, remove] = container.dispatchNotification({
    title: 'Example Notification',
    message: 'This is an example notification message',
});

setTimeout(() => dismiss(), 5000);
```

Set the `ArcNavbar.notificationHistory` and `ArcBottombar.notificationHistory` properties to `true` to display a notification history in both the navigation and bottom bar.

``` html
<arc-container>
    <arc-navbar slot="nav" notificationHistory></arc-navbar>
    <arc-bottombar slot="bottom" notificationHistory></arc-bottombar>
</arc-container>
```

Currently the state of both `ArcNavbar.notification` and `ArcBottombar.notification` is not managed by ARC. You will need to repopulate the notification history when the page is reloaded.

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
