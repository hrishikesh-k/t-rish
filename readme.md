# T-Rish

This repository holds the source code for T-Rish website (hosted on Netlify). It's the 1<sup>st</sup> iteration of the website, this one being built with SvelteKit.

Note that, this is not a theme for SvelteKit. It is a standalone website, which uses SvelteKit as a Static Site Generator (SSG). Thus, if you wish to use this as a template, you will most likely have to directly modify the source code. This document tries to cover all the (important) aspects of the website, and should be enough to get you started.

## Directory structure

The directory structure is as follows (with the explanation following the diagram):

```
.
├── src/
│   ├── components/
│   │   ├── c-breadcrumbs.svelte
│   │   ├── c-header.svelte
│   │   ├── c-icon.svelte
│   │   └── c-image.svelte
│   ├── routes/
│   │   ├── about/
│   │   |   ├── assets/
│   │   |   |   └── [file.ext]
│   │   |   ├── +layout.ts
│   │   |   └── +page.svelte
│   │   ├── contact/
│   │   |   ├── +layout.ts
│   │   |   └── +page.svelte
│   │   ├── work/
│   │   |   ├── assets/
│   │   |   |   └── [file.ext]
│   │   |   ├── [project]/
|   |   |   |   ├── assets/
│   │   |   |   |   └── [file.ext]
│   │   |   |   ├── +layout.ts
│   │   |   |   └── +page.svelte
│   │   |   ├── +layout.ts
│   │   |   └── +page.svelte
|   |   ├── +layout.svelte
|   |   ├── +layout.ts
|   |   └── +page.svelte
|   ├── app.d.ts
|   └── app.html
├── static/
│   ├── fonts/
│   │   ├── noto-sans/
│   │   │   ├── latin-italic.woff2
│   │   │   └── latin-normal.woff2
│   │   └── noto-serif/
│   │       ├── latin-italic.woff2
│   │       └── latin-normal.woff2
│   └── favicon.ico
├── .gitattributes
├── .gitignore
├── bun.lockb
├── license.md
├── netlify.toml
├── package.json
├── readme.md
├── svelte.config.js
├── tsconfig.json
├── uno.config.ts
└── vite.config.ts
```

This is a typical directory structure for a SvelteKit website. If there are some unknowns, please refer to the [SvelteKit documentation on directory structure](https://kit.svelte.dev/docs/project-structure). Some additional files and folders may get created during the lifetime of the project. Anything that's not listed above can most likely be safely deleted.