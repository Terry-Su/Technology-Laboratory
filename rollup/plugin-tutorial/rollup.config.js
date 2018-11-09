const PATH = require("path");
const myExample = require("./plugin/rollup-plugin-my-example");
const addFilePathAnnotation = require("./plugin/rollup-plugin-add-file-path-annoation");

module.exports = {
  input: "src/main.js",
  // input  : 'virtual-module',
  plugins: [
    // myExample({
    //   root: __dirname
    // }),
    addFilePathAnnotation({
      root: __dirname
    }),
  ],
  output: {
    file: "dist/bundle.js",
    format: "esm"
  }
};
