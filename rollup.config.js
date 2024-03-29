import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import postcss from "rollup-plugin-postcss";

//POSTCSS Plugins
import simplevars from "postcss-simple-vars";
import nested from "postcss-nested";
import cssnext from "postcss-cssnext";
import cssnano from "cssnano";

import { terser } from "rollup-plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

import copy from "rollup-plugin-copy";
import del from "rollup-plugin-delete";

const packageJson = require("./package.json");

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve({ browser: true }),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      postcss({
        extensions: [".css", ".scss"],
        plugins: [simplevars(), nested(), cssnext({ warnForDuplicates: true }), cssnano()],
        exlude: ["**/**/fonts.scss"],
        extract: true,
      }),
      terser(),
    ],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [
      { file: "dist/index.d.ts", format: "esm" },
      { file: "dist/index.js", format: "cjs" },
    ],
    plugins: [
      copy({
        targets: [{ src: "dist/cjs/index.css", dest: "dist" }],
        verbose: true,
        hook: "buildStart",
      }),
      del({
        targets: ["dist/cjs/index.css", "dist/esm/index.css"],
        verbose: true,
        hook: "buildEnd",
      }),
      dts(),
    ],
    external: [/\.scss$/],
  },
];
