# Wissem UI

Wissem UI is the shared Nuxt UI design system layer for Wissem's Industries
applications. It centralizes the visual foundations used across the
`wissem.pro` ecosystem while keeping each application in control of its own
pages and business logic.

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
nuxt.config.ts
README.md
LICENSE
package.json
```

The playground, CI configuration, build output and local development files are
excluded from the package.

## Publication

The package is configured as a public scoped package on npm. Before the first
publication, confirm that the npm account used by Wissem's Industries owns or
has access to the `@wissem` scope. GitHub organization ownership does not grant
npm scope ownership automatically.

After setting the final version and authenticating with npm:

```bash
bun run check
bun publish
```

`prepublishOnly` runs the full check again before a registry publication. The
CI workflow validates every push and pull request but never publishes a
release automatically.

## Project scope

This Layer shares the Wissem theme, tokens, Nuxt UI defaults and future
cross-application UI patterns. It must remain free of application-specific
content, authentication rules and other business logic.

## License

[MIT](./LICENSE)
