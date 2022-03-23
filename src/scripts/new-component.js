const fs = require("fs");

const componentName = process.argv[2];

try {
    // Create new directory for component
    fs.mkdir(`./src/components/${componentName}`, { recursive: true }, (err) => {
        if (err) throw err;
    });

    // Create a new component file for it
    fs.writeFile(
        `./src/components/${componentName}/${componentName}.tsx`,
        `
        import React, { Component } from 'react';

        interface ComponentProps {}

        interface ComponentState {}

        export class ${componentName} extends Component<ComponentProps, ComponentState> {
            state: ComponentState = {};

            render(){
                return (
                    // Add the ${componentName} code here
                );
            }
        }
        `,
        () => {
            return true;
        }
    );
    // Create component index file
    fs.writeFile(
        `./src/components/${componentName}/index.ts`,
        `
    export { default } from "./${componentName}";
`,
        () => {
            return true;
        }
    );

    // Add the new component file to the default exports
    fs.appendFileSync(
        "./src/components/index.ts",
        `
export { default as ${componentName} } from "./${componentName}";
`
    );
} catch (error) {
    console.error("Making new component failed.");
    console.error(error);
    return false;
}

console.log("Completed generating new component: " + componentName + ".tsx");
return true;
