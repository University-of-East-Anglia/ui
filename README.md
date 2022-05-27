## Commit your changes to the repo

Generate the build files with `npm run rollup`
`git add .`
`git commit -m "Commit message"`
`git push {branch}`

## Publishing

After making your changes but before publishing, run one of these commands to change the vesion number and commit the change. The command varies based on the scope of your change. See this [semver cheatsheet](https://devhints.io/semver) for more info.

- `npm version major` - If you removed functionality or made incompatible API changes
- `npm version minor` - If you added functionality without removing or changing old functionality.
- `npm version patch` - If you fixed bugs and didn't add or change any functionality.

Following the version update its `npm publish`

## Updating your application

Update the version number of the UI Library used in your application in the package.json. Delete the package-lock.json file and the node modules.

npm install

New version of the UI will be available in your application.

## Installing the UI Library to your application

In your application root run `npm install @ueaweb/ui`

## Importing components

Import your component to your application using `import { Component } from "@ueaweb/ui"`

To import multiple components just comma separate `import { Component1, Component2 } from "@ueaweb/ui"`

Add `<Component>` to your application along with any required props
