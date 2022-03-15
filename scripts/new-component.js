const fs = require("fs");

const movieQuote = require("popular-movie-quotes");

const componentName = process.argv[2];

try {
  // Create a new component file for it
  fs.writeFile(
    `./src/components/${componentName}.tsx`,
    `
import React, { Component } from 'react';

interface ComponentProps {}

interface ComponentState {}

export class ${componentName} extends Component<ComponentProps, ComponentState> {
	state: ComponentState = {};

	render(){
		return (
			// ${movieQuote.getRandomQuote()}
		);
	}
}
`,
    () => {
      return true;
    }
  );

  // Add the new component file to the default exports
  fs.appendFileSync(
    "./src/components/index.ts",
    `
import { ${componentName} } from "./${componentName}";

export { ${componentName} };
`
  );
} catch (error) {
  console.error("Making new component failed.");
  console.error(error);
  return false;
}

console.log("Completed generating new component: " + componentName + ".tsx");
return true;
