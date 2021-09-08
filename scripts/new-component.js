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

  // Create test file for the new component
  fs.writeFile(
    `./src/components/${componentName}.test.tsx`,
    `
import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import { ${componentName} } from "./${componentName}";

describe("${componentName}", () => {
  afterEach(cleanup);

  it("renders successfully", () => {
    render(<${componentName} />);
    expect(screen.getByText(/Text from this component/i)).toBeInTheDocument();
  });

  it("has more than one test", () => {
    expect(false);
  });
});
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
