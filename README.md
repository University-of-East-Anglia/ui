## Publishing

After making your changes but before publishing, run one of these commands to change the vesion number and commit the change. The command varies based on the scope of your change. See this [semver cheatsheet](https://devhints.io/semver) for more info.

- `npm version major` - If you removed functionality or made incompatible API changes
- `npm version minor` - If you added functionality without removing or changing old functionality.
- `npm version patch` - If you fixed bugs and didn't add or change any functionality.

Following the version update its `npm publish`
