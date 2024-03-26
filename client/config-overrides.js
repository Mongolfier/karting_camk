const {
  addBabelPlugin, override,
} = require("customize-cra");
const babelTsTransformPlugin = require("babel-plugin-transform-typescript-metadata");

module.exports = override(
  addBabelPlugin(babelTsTransformPlugin),
);