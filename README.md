# Installation

You can use ARC by installing it locally.
You can also cherry-pick individual components for faster load times.

## Local Installation

You can install ARC locally with the following command.

```bash
npm install @arc-web/components
```

It's up to you to make the source files available to your app.
One way to do this is to create a route in your app called /arc that serves static files from node_modules/@arc-web/components.

Once you've done that, add the following tags to your page. Make sure to update href and src, so they point to the route you created.

```bash
<head>
  <link rel="stylesheet" href="/arc/dist/themes/light.css">
  <script type="module" src="/arc/dist/arc.js"></script>
</head>
```

## Setting the Base Path

Some components rely on assets and ARC needs to know where they're located.
For convenience, ARC will try to auto-detect the correct location based on the script you've loaded it from.

However, if you're cherry-picking or bundling ARC, you'll need to set the base path. You can do this one of two ways.

**Option 1: the data-arc attribute**
```bash
/* index.html */
<head>
  <script src='your-own-bundle.js' data-arc='/path/to/arc/'></script>
</head>
```

**Option 2: the setBasePath() method**
```bash
/* index.html */
<body>
  <arc-container></arc-container>

  <script src="your-own-bundle.js"></script>
  <script type="module">
    import { setBasePath } from '/arc/dist/utilities/base-path.js';
    setBasePath('/path/to/arc/');
  </script>
</body>
```

```bash
/* index.js */
import { setBasePath } from '@arc-web/components/dist/utilities/base-path.js';
setBasePath('/path/to/arc/');

# other imports etc.
```

## Cherry Picking

The previous approach is the easiest way to load ARC, but that isn't always efficient.
You'll incur the full size of the library even if you only use a handful of components.
This is convenient for prototyping, but may result in longer load times in production.
To improve this, you can cherry pick the components you need.

Cherry picking can be done from your local install or directly from the CDN.
This will limit the number of files the browser has to download and reduce the amount of bytes being transferred.
The disadvantage is that you need to load components manually.

### Django / Parcel / No framework
Here's an example that loads only the container component.
Again, if you're not using a module resolver, you'll need to adjust the path to point to the folder ARC is in.

```bash
/* index.html / base.html */
<body>
  <arc-container></arc-container>

  <script type="module" data-arc="/path/to/arc">
    import '@arc-web/components/dist/components/container/arc-container.js';
  </script>
</body>
```

### React

### Vue
```bash
/* Index.vue */
<template>
  <App theme="dark"/>
</template>

<script>
import App from './components/App.vue'

import '@arc-web/components/dist/themes/index.css';
import '@arc-web/components/dist/themes/light.css';
import '@arc-web/components/dist/themes/dark.css';

import { setBasePath } from '@arc-web/components/dist/utilities/base-path.js';
setBasePath('/');

export default {
  name: 'Index',
  components: {
    App
  }
}
</script>
```

```bash
/* App.vue */
<template>
  <arc-container :theme="theme">
    <arc-navbar slot="nav">
      <arc-button type="tab">Tab One</arc-button>
    </arc-navbar>
    <arc-sidebar slot="side">
      <div>Sidebar content</div>
    </arc-sidebar>
    Default content
  </arc-container>
</template>

<script>
import '@arc-web/components/dist/components/container/arc-container.js';
import '@arc-web/components/dist/components/navbar/arc-navbar.js';
import '@arc-web/components/dist/components/sidebar/arc-sidebar.js';
import '@arc-web/components/dist/components/button/arc-button.js';

export default {
  name: 'Arc',
  props: {
    theme: String
  }
}
</script> 
```

### Angular


```bash
/* index.js */
import '@arc-web/components/dist/components/container/arc-container.js';

# <arc-container> is ready to use!
```

Component modules include side effects for registration purposes. 
Because of this, importing directly from @arc-web/components may result in a larger bundle size than necessary. 
For optimal tree shaking, always cherry-pick, i.e. import components and utilities from their respective files, as shown above.
