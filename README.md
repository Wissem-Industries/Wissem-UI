# Wissem UI

<p align="center">
  <strong>The shared Nuxt design system for Wissem’s Industries.</strong><br />
  Reusable visual foundations for the applications in the <code>wissem.pro</code> ecosystem.
</p>

<p align="center">
  <a href="https://ci.wissem.pro/repos/1"><img alt="Woodpecker CI" src="https://ci.wissem.pro/api/badges/1/status.svg" /></a>
  <a href="https://github.com/Wissem-Industries/Wissem-UI/releases"><img alt="Latest version" src="https://img.shields.io/github/v/tag/Wissem-Industries/Wissem-UI?sort=semver&label=version" /></a>
  <a href="https://github.com/orgs/Wissem-Industries/packages/npm/package/ui"><img alt="GitHub Packages" src="https://img.shields.io/badge/GitHub%20Packages-@wissem--industries%2Fui-181717?logo=github&logoColor=white" /></a>
  <a href="LICENSE"><img alt="MIT license" src="https://img.shields.io/github/license/Wissem-Industries/Wissem-UI" /></a>
</p>

<p align="center">
  <img alt="Nuxt 4" src="https://img.shields.io/badge/Nuxt-4-00DC82?logo=nuxt.js&logoColor=white" />
  <img alt="Vue 3" src="https://img.shields.io/badge/Vue-3-4FC08D?logo=vuedotjs&logoColor=white" />
  <img alt="Bun 1.4" src="https://img.shields.io/badge/Bun-1.4-FBF0DF?logo=bun&logoColor=000" />
  <img alt="Biome" src="https://img.shields.io/badge/Biome-2-60A5FA?logo=biome&logoColor=white" />
</p>

Wissem UI is a Nuxt Layer built with Nuxt 4, Vue 3, Nuxt UI 4 and Tailwind CSS
4. Applications extend `@wissem-industries/ui` to share the theme and component
defaults while keeping their own pages and business logic.

The package is a Nuxt Layer built with Nuxt 4, Vue 3, Nuxt UI 4 and Tailwind
CSS 4. Applications inherit the theme and Nuxt UI configuration by extending
`@wissem-industries/ui`; no component wrappers are required.

## Requirements

- Node.js 22 or newer
- Bun 1.4 or newer
- A Nuxt 4 application

## Use in another project

### 1. Install the package

Install the Layer as a development dependency of the consuming application:

```bash
bun add --dev @wissem-industries/ui
```

`@nuxt/ui`, Tailwind CSS and the icon collections used by the theme are
dependencies of this package. A consuming application does not need to install
or register them again. Geist and Geist Mono are also bundled locally, so a
consumer build does not depend on Google Fonts being reachable.

The WissemHome favicon is included automatically at `/favicon.ico`. To use a
different favicon for one application, add its own `public/favicon.ico` to
override the design system asset.

### 2. Extend the Layer

Add `@wissem-industries/ui` to the application's `nuxt.config.ts`:

```ts
export default defineNuxtConfig({
  extends: ['@wissem-industries/ui'],
})
```

### 3. Add the Nuxt UI provider

Keep the root structure inside the consuming application and wrap it with
`UApp` in `app/app.vue`:

```vue
<template>
  <UApp>
    <NuxtPage />
  </UApp>
</template>
```

Nuxt UI components are now auto-imported and use the shared Wissem theme:

```vue
<template>
  <UCard>
    <UBadge label="New" />
    <UButton label="Continue" />
  </UCard>
</template>
```

### 4. Override the theme for one application

The consuming application always has priority over the Layer. Add only the
exceptions that application needs to its own `app/app.config.ts`:

```ts
export default defineAppConfig({
  ui: {
    colors: {
      primary: 'blue',
    },
    button: {
      defaultVariants: {
        variant: 'solid',
      },
    },
  },
})
```

The configuration priority is:

```text
Nuxt UI defaults < @wissem-industries/ui defaults < application overrides
```

## Test an unpublished version locally

Create an archive from this repository:

```bash
bun pm pack
```

Then install the generated archive in another Nuxt project:

```bash
bun add --dev ../wissem-ui/wissem-ui-0.1.0.tgz
```

Use the same `extends: ['@wissem-industries/ui']` and `UApp` configuration shown above.
This reproduces how the Layer behaves after registry publication.

## Development

Install dependencies and start the playground:

```bash
bun install
bun run dev
```

The repository root is the distributable Layer. `.playground` is a small Nuxt
application that extends the root locally and is used only for visual and
integration checks.

## Quality checks

Run every publication check with one command:

```bash
bun run check
```

The command runs Biome, Nuxt type checking, the production build and a dry run
of the package archive. Individual commands remain available:

```bash
bun run lint
bun run typecheck
bun run build
bun run pack:check
```

Biome is a repository development tool and is not imposed on consuming
applications.

## Package contents

Only the files required by consumers are published:

```text
app/
public/
nuxt.config.ts
README.md
LICENSE
package.json
```

The playground, CI configuration, build output and local development files are
excluded from the package.

## Publication

The package is published to the GitHub Packages npm registry at
`https://npm.pkg.github.com`. Local consumers need a GitHub token with
`read:packages` access in their user-level `.npmrc`; CI uses the shared
`github_packages_token` Woodpecker secret.

Version tags matching `v*` run the Woodpecker pipeline. It verifies the tag
against `package.json`, runs all quality checks, publishes the package and
records the result in GitHub Deployments under `package-registry`. Release
titles follow the `Wissem UI vX.Y.Z` format.

## Project scope

This Layer shares the Wissem theme, tokens, Nuxt UI defaults and future
cross-application UI patterns. It must remain free of application-specific
content, authentication rules and other business logic.

## License

[MIT](./LICENSE)
