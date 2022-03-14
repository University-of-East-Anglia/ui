# UEA Web Team's UI Library

This package contains a number of UI components which are used by the UEA's web development team.

## Installation

Run `npm i @ueaweb/ui`

Run `npm i -g tailwindcss@2.2.9 postcss` (more on this below)

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

### Why tailwindcss@2.2.9?

Because simply running `npm i -g tailwindcss` will install the latest version of the package, and 2.2.10 seems to have a bug wherein it is missing a dependency.

## Publishing

After making your changes but before publishing, run one of these commands to change the vesion number and commit the change. The command varies based on the scope of your change. See this [semver cheatsheet](https://devhints.io/semver) for more info.

- `npm version major` - If you removed functioality or made incompatible API changes
- `npm version minor` - If you added functionality without removing or changing old functionality.
- `npm version patch` - If you fixed bugs and didn't add or change any functionality.
