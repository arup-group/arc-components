# Table of contents
1. Quick start
2. Installation
   1. Local installation
   2. Cherry Picking
      1. No framework
      2. React
      3. NextJS
      4. Vue
      5. Angular
3. TypeScript
4. Useful utilities
   1. FOUC

# Quick start

Add the following code to your page, where @x.x.x stands for the version of @arc-web/components.

```bash
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@arc-web/components@x.x.x/dist/themes/index.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@arc-web/components@x.x.x/dist/themes/light.css">
<script type="module" src="https://cdn.jsdelivr.net/npm/@arc-web/components@x.x.x/dist/arc.js"></script>
```

Now you have access to all the ARC components.

> **Note**: This will load all the ARC components, but you should probably only load the ones you're actually using.
> Continue reading to learn how to cherry-pick ARC components and for other ways to install ARC.

# Installation

You can use ARC by installing it locally.
You can also cherry-pick individual components for faster load times.

## Local Installation

You can install ARC locally with the following command.

```bash
npm install @arc-web/components
```

or with Yarn

```bash
yarn add @arc-web/components
```

It's up to you to make the source files available to your app.
One way to do this is to create a route in your app called /arc that serves static files from node_modules/@arc-web/components.

Add the following tags to your page. Make sure to update `href` and `src`, so they point to the route you created.

```bash
<head>
  <link rel="stylesheet" href="/arc/dist/themes/index.css">
  <link rel="stylesheet" href="/arc/dist/themes/light.css">
  <script type="module" src="/arc/dist/arc.js"></script>
</head>
```

## Cherry Picking

The previous approach is the easiest way to load ARC, but that isn't always efficient.
You'll incur the full size of the library even if you only use a handful of components.
This is convenient for prototyping, but may result in longer load times in production.
To improve this, you can cherry-pick the components you need.

Cherry-picking can be done from your local install or directly from the CDN.
This will limit the number of files the browser has to download and reduce the amount of bytes being transferred.
The disadvantage is that you need to load components manually.

### Any application that uses a bundler such as Webpack / Parcel / Rollup etc.
```bash
# index.html / base.html
<body>
  <arc-container theme="dark"></arc-container>
  <script type="module" src="index.js"></script>
</body>
```

```bash
# index.js
import '@arc-web/components/dist/themes/index.css';
import '@arc-web/components/dist/themes/light.css';
import '@arc-web/components/dist/themes/dark.css';

import '@arc-web/components/dist/components/container/arc-container.js';
```

### React
```bash
# index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import '@arc-web/components/dist/themes/index.css';
import '@arc-web/components/dist/themes/light.css';
import '@arc-web/components/dist/themes/dark.css';

ReactDOM.render(
  <App theme={'dark'} />,
  document.getElementById('root')
);
```

```bash
# App.js
import '@arc-web/components/dist/components/container/arc-container.js';

function App(props) {
  const { theme } = props;
  
  return (
    <arc-container theme={props.theme}></arc-container>
  );
}

export default App;
```

> **Note**: ARC ships with built-in icons for components like the `arc-icon-button` and the `arc-icon`.
Instead of using separate SVG files for each icon, ARC uses a single SVG sprite that contains all the icons, to reduce the overall file size of ARC.
In order for this to function, ARC uses the `import.meta.url` object.
React does not know how to handle this object and requires a bundler like Webpack to solve this.

More on the `import.meta.url` object can be found on: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import.meta

An example project on how to set this up can be found on: https://github.com/jasperwieringa/arc-react-test

### NextJS
```bash
# _app.tsx
import React from 'react';

import '@arc-web/components/dist/themes/index.css';
import '@arc-web/components/dist/themes/light.css';
import '@arc-web/components/dist/themes/dark.css';

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <Component {...pageProps} />
  )
}
```

```bash
# Layout.tsx
import React, { useEffect } from 'react';
import type { NextPage } from "next";
import Head from 'next/head';

export const siteTitle = 'Some title';

const Layout: NextPage = ({ children }) => {
    /* Import the required arc components */
    useEffect(() => {
        import('@arc-web/components/dist/components/container/arc-container.js');
    }, [])

    return (
        <>
            <Head>
                <link rel={'icon'} href={'/favicon.ico'}/>
                <meta
                    name={'description'}
                    content={'App description'}
                />
                <meta
                    name={'og:title'}
                    content={siteTitle}
                />
                <title>{siteTitle}</title>
            </Head>
            <arc-container>
              {children}
            </arc-container>
        </>
    )
}

export default Layout;
```

```bash
# Index.tsx
import React from 'react';
import type { NextPage } from 'next';
import Layout from './Layout';

const Home: NextPage = () => {
    return (
        <Layout>
            <div>Some content</div>
        </Layout>
    )
}

export default Home;  
```

### Vue
```bash
# Index.vue
<template>
  <App theme="dark"/>
</template>

<script>
import App from './components/App.vue'

import '@arc-web/components/dist/themes/index.css';
import '@arc-web/components/dist/themes/light.css';
import '@arc-web/components/dist/themes/dark.css';

export default {
  name: 'Index',
  components: {
    App
  }
}
</script>
```

```bash
# App.vue
<template>
  <arc-container :theme="theme"></arc-container>
</template>

<script>
import '@arc-web/components/dist/components/container/arc-container.js';

export default {
  name: 'Arc',
  props: {
    theme: String
  }
}
</script> 
```

> **Note**: To allow using web-components in Vue `v2.6.0+`, a specific rule needs to be added to the eslintConfig.
When using the `vue create app-name` command in the terminal, this information can be found in the package.json.

```bash
# package.json
"eslintConfig": {
  ...other,
  "rules": {
    "vue/no-deprecated-slot-attribute": "off" # Allows the use of the slot attribute
  }
} 
```

### Angular
```bash
#styles.css
@import '~@arc-web/components/dist/themes/index.css';
@import '~@arc-web/components/dist/themes/light.css';
@import '~@arc-web/components/dist/themes/dark.css';
```

```bash
#app.components.ts
import { Component } from '@angular/core';

import '@arc-web/components/dist/components/container/arc-container.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'arc-angular-test';
}
```

```bash
#app.component.html
<arc-container theme="dark"></arc-container>
```

> **Note**: To allow using web-components in Angular, a specific rule needs to be added to the '@NgModule.schemas' of the component.
When using the `ng new app-name` command in the terminal, this information can be found in the app.modules.ts.

```bash
# app.module.ts
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ] # Allows the use of web-components
})
export class AppModule { }
```

Component modules include side effects for registration purposes. 
Because of this, importing directly from @arc-web/components may result in a larger bundle size than necessary. 
For optimal tree shaking, always cherry-pick, i.e. import components and utilities from their respective files, as shown in the examples above.

# TypeScript

TypeScript cannot type check the ARC component templates due to it not knowing how to find the CustomElement class reference for the associated tag. 
You can add the tag(s) to the JSX.IntrinsicElements global interface, which will associate the tag to the class reference.
Create the following file in the main directory of your project.

```bash
# declarations.d.ts
import * as React from 'react';
import type ArcContainer from "@arc-web/components";

type CustomElement<T> = Partial<T & DOMAttributes<T> & { children: any }>;

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "arc-container": CustomElement<ArcContainer>;
    }
  }
}
```
Add each component into the interface like shown above.
More on this can be found on: https://coryrylan.com/blog/how-to-use-web-components-with-typescript-and-react


# Useful utilities
## Flash of unstyled content (FOUC)
A flash of unstyled content (FOUC, also flash of unstyled text) is an instance where a web page appears briefly with the browser's default styles prior to loading an external CSS stylesheet, 
due to the web browser engine rendering the page before all information is retrieved.
The page corrects itself as soon as the style rules are loaded and applied; however, 
the shift may be distracting or even seem unprofessional.
These problems can be resolved by using the built-in `noFOUC()` utility function as shown below.
This will only display the content once the document.readyState is equal to 'complete'.

```bash
/* index.html */
<body>
  <arc-container></arc-container>
  
  <script src="your-own-bundle.js"></script>
</body>
```

```bash
/* your-own-bundle.js */
import { noFOUC } from '@arc-web/components/dist/utilities/style-utils.js';
noFOUC();
```
