const { composePlugins, withNx } = require('@nx/webpack');
const { withReact } = require('@nx/react');
const CopyPlugin = require("copy-webpack-plugin");
const path = require('path');

// Nx plugins for webpack.
module.exports = composePlugins(withNx(), withReact(), (config) => {
  // Update the webpack config as needed here.
  // e.g. `config.plugins.push(new MyPlugin())`
  config.plugins.push(new CopyPlugin({
    patterns: [
      { from: path.join(__dirname, './src/manifest.json')},
      { from: path.join(__dirname, 'public')},
    ],
  }),);
  return config;
});
