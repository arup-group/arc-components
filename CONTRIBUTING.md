# Contributing

> This document outlines the guidelines and best practices to get started contributing to **ARC**.

We welcome all contributions and engagement with the **ARC** design system.

**ARC** is built using [LIT](https://lit.dev/) web components and is built on top of the Web Components standards. Every component is a native web component, with the power of interoperability. Web components work anywhere you use HTML, with any framework, or none at all. This makes using **ARC** ideal for building shareable components, or maintainable, future-ready sites and apps.

- [Development Environment](#development-environment)
- [Dependencies](#dependencies)
- [Workspace](#workspace)
- [Build System](#build-system)
- [Development Guidelines](#development-guidelines)
  - [Directory Structure](#directory-structure)
  - [Local Development Server](#local-development-server)
  - [Unit Tests](#unit-tests)
  - [Documentation](#documentation)
  - [Formatting and Linting](#formatting-and-linting)
- [Infrastructure](#infrastructure)
- [Guides](#guides)

## Development Environment

The following system native build dependencies are required for a local development environment:

- [git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en/)
- [Terraform](https://www.terraform.io/)
- [Azure CLI](https://learn.microsoft.com/en-us/cli/azure/)

<details>
  <summary>NIX</summary>

If you are using [NIX](https://nixos.org/) switch to the the provided development shell with:

```sh
nix develop
```

</details>

## Dependencies

Install all package dependencies using npm:

```sh
npm ci && npx playwright install --with-deps
```

<details>
  <summary>NIX</summary>

If you are using [NIX](https://nixos.org/) use the `[clean-install](https://github.com/arup-group/arc-components/blob/main/flake.nix#L19-L31)` deerivation:

```sh
clean-install
```

</details>

## Workspace

This worksapce is a monorepo containing all packages and playgrounds that relate to the **ARC** design system. The following directory structure is used:

```
├── assets              # Shared assets for storybook and playgrounds
├── infrastructure      # Infrastructure managed by Terraform
├── packages
│   ├── components      # @arc-web/components package source
│   └── react           # @arc-web/react package source
└── playgrounds
    ├── angular         # Angular + ARC playground
    ├── javascript      # Vanilla Javascript + ARC playground
    ├── node-ssr        # NodeJs SSR + ARC playground
    ├── react           # React + ARC playground
    └── vue             # Vue + ARC playground
```

## Build System

[NX](https://nx.dev/) is used as a build system and tasks are run using its [run tasks](https://nx.dev/core-features/run-tasks) core functionality:

```sh
npx nx run <project>:<target>:<configuration>
```

## Development Guidelines

All development contributions should adhere to the following guidelines:

### Directory Structure

The following directory structure should be followed when creating simple components:

```
└── packages
    └── components
        └─── src
           └── components
               └── foo
                   ├── ArcFoo.ts              # Component class implmentation
                   ├── arc-foo.stories.ts     # Storybook stories for component
                   ├── arc-foo.styles.ts      # Styles for component
                   ├── arc-foo.test.ts        # Tests for component
                   └── arc-foo.ts             # Component element registation
```

More complex compnents may also adher to the following:

```
└── packages
    └── components
        └─── src
           └── components
               └── foo
                   ├── constants
                   │   ├── FooConstants.test.ts    # Tests for constants
                   │   └── FooConstants.ts         # Constants for component
                   ├── ArcFoo.ts                   # Component class implmentation
                   ├── arc-foo.documentation.mdx   # Storybook documentation for component
                   ├── arc-foo.stories.tsx         # Storybook stories for component
                   ├── arc-foo.styles.ts           # Styles for component
                   ├── arc-foo.test.ts             # Tests for component
                   └── arc-foo.ts                  # Component element registration
```

### Local Development Server

During development use the following command to start a local development server in any of the playgrounds:

```sh
npx nx run <angular-playground | lit-playground | react-playground | vue-playground | vanilla-playground | node-playground>:serve
```

Or start the storybook development server with:

```sh
npx nx run components:storybook:serve
```

### Unit Tests

Unit tests must be written for all components and can be run using the following command:

```sh
npx nx run-many --target test
```

### Documentation

Every component requires the following documentation:

- Docstrings for all public methods and properties
- Storybook stories for all use cases
- Storybook documentation (auto-generated from stories for simple components)

### Formatting and Linting

Workspace files must adhere to the formatting and linting rules. You can run the formatter with the command:

```sh
npx nx format
```

And the linter for all projects with:

```sh
npx nx run-many --target lint
```

### Commit Messages, Branches and Pull Requests

Commit messages must adhere to the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification and branches much follow the [Gitflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow) branching model.

Pull requests will be squash merged by default the core maintainers, once accepted and approved, please ensure your PR title and description follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification to ensure the correct changelog is generated. More complex PR's may be merged using the merge commit strategy.

Link any commits, issues and pull requests to the relevant Jira ticket, if applicable.

### Infrastructure

The **ARC** project infrastucture is spread across the following deployment nodes:

```mermaid
C4Deployment
  Deployment_Node(browser, "Web Browser"){
    Container(browser-documentation, "Documentation", "Storybook")
  }

  Deployment_Node(azure, "Azure") {
    Deployment_Node(azure-resource-group-arc, "Azure Resource Group - ARC") {
      Container(azure-static-site-documentation, "S3 - Frontend", "Azure Static Site")
      Rel(browser-documentation, azure-static-site-documentation, "")
    }
  }
```

## Guides

### Icons

**ARC** uses [Nucleo](https://nucleoapp.com/) to keep track of the available icons and make an easy export of them.
All the icons are exported as a single SVG `symbol` file, using the following preferences:

If you need to add new icons to the existing library, take the following steps:

1. Import the current icons.svg file into your [Nucleo](https://nucleoapp.com/) app.
2. Drag and drop an svg file into the existing set.
3. Select all icons.
4. Press the `Export` button.
5. Select the SVG <symbol> format.
6. Make sure that the export preferences are as follows:
   1. Base class: ''
   2. Icon ID Prefix: 'arc-'
   3. Use external reference for `use` element: false
   4. Remove stroke-width values: true
   5. Remove `title`: true
   6. Use BEM naming convention: false
   7. Use CSS custom properties: true
7. If everything is correct, press the `Export Icons` button.

Most SVG icons that are exported contain a `fill` or a `stroke` color like `#1C1C1C` or `#fff`.
The `arc-icon` component inherits the color(s) from its parent to style the SVG,
so you can set the color property on the `arc-icon` element or an ancestor to change the color.
In order to make the icons work in any theme, the `fill` and/or `stroke` attributes of the exported icons.svg needs to be replaced with the `currentColor` value.

```html
<symbol id="arc-action-undo" viewBox="0 0 31 28">
  <g fill="none" class="nc-icon-wrapper" stroke="none">
    <g clip-path="url(#clip0_5238_4149)">
      <path d="M29.97 27.438h-.03a.76.76 0 0 1-.59-.25c-.151-.167-.237-.386-.257-.657a7.418 7.418 0 0 0-.197-1.14c-.111-.47-.464-1.224-1.06-2.266a10.522 10.522 0 0 0-2.316-2.781c-.948-.813-2.386-1.542-4.314-2.188-1.927-.645-4.162-.968-6.705-.968v5.75a.821.821 0 0 1-.045.28c-.03.084-.066.168-.106.25a.694.694 0 0 1-.167.22c-.07.062-.146.114-.227.156-.383.187-.726.146-1.03-.125L.364 12.969a1.023 1.023 0 0 1 0-1.563L12.927.781c.303-.27.64-.317 1.014-.14.373.177.56.484.56.922v5.593c.807.042 1.584.11 2.331.203.747.094 1.473.22 2.18.375a17.11 17.11 0 0 1 2.028.579c.646.229 1.261.494 1.847.796.585.302 1.14.63 1.665.985.524.354 1.019.745 1.483 1.172.464.427.898.88 1.302 1.359a13.739 13.739 0 0 1 2.134 3.578c.555 1.344.934 2.558 1.135 3.64a22.44 22.44 0 0 1 .364 3.313c.04 1.125.045 1.917.015 2.375-.03.459-.066.813-.106 1.063-.04.25-.141.453-.303.61a.836.836 0 0 1-.605.233zm-16.438-12.25c1.574 0 3.028.083 4.36.25 1.332.166 2.502.411 3.511.734 1.01.323 1.913.677 2.71 1.062.797.386 1.508.834 2.134 1.344.626.51 1.15.995 1.574 1.453a13.2 13.2 0 0 1 1.211 1.532c-.383-3.021-1.443-5.563-3.178-7.625-2.644-3.188-6.752-4.782-12.322-4.782a.917.917 0 0 1-.68-.297.976.976 0 0 1-.289-.703v-4.5l-10.08 8.531 10.08 8.626v-4.625c0-.271.091-.51.273-.72a.81.81 0 0 1 .212-.155c.08-.042.161-.073.242-.094a.968.968 0 0 1 .242-.031z" fill="currentColor" />
    </g>
    <defs>
      <clipPath id="clip0_5238_4149">
        <path fill="currentColor" d="M0 0h31v28H0z" />
      </clipPath>
    </defs>
  </g>
</symbol>
```

In the code example above, the `fill` attribute is provided with the `currentColor` value,
this ensures that the SVG is no longer responsible for the colours.

### Release

Use the `arc-release` script to set a new version for all packages within the workspace with:

```sh
npx nx run arc-release
```

Packages and storybook documentation for the release are built and published using the [publish](./.github/workflows/publish.yml) workflow upon a GitHub release being created.

### Updating Infrastucture

To update infrastructure:

1. Make changes to the [infrastructure](./infrastructure) terraform files.
2. Run `npx nx run infrastructure:plan` to see the changes that will be applied.
3. Submit a pull request with the changes. Include the output of `npx nx run infrastructure:plan` in the pull request description.
4. Once the pull request is approved and merged into main run the `npx nx run infrastructure:apply` to apply chanages.
