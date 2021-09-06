# UEA Web Team's UI Library

## Installation

Run `npm i @ueaweb/ui`

Run `npm i -g tailwindcss postcss` (more on this below)

Import the component you need with `import { Button } from '@ueaweb/ui';`

Have at it!

## Development

### Scripts

- `npm ci` Install from package-lock.json
- `npm start` Start developing with Storybook
- `npm run component [new-component-name]` Create boilerplate for a new component. This adds a new .tsx file to `./src/components/` and appends its import/export to `./src/components/index.ts`.
- `npm run build` Compiles your development work into browser-ready code in the dist folder. This folder is what gets published to npm.

### Why do I have to install tailwindcss and postcss globally?

Tailwind v2 requires Postcss v8. Postcss v8 requires Webpack v5. Webpack v5 is not supported by react-scripts v4.0.3. So if we install Postcss v8, so we can run a production build, Storybook's local development mode breaks. We can get around this by installing Tailwind and Postcss globally, and using those versions to run the production build.
