var path = require('path');
var webpack = require('webpack');

var config = module.exports = {
  context: __dirname,
  entry: './js_src/entry.js',
};

config.output = {
  path: path.join(__dirname, 'app', 'assets', 'javascripts'),
  filename: 'bundle.js',
  publicPath: '/assets',
  devtoolModuleFilenameTemplate: '[resourcePath]',
  devtoolFallbackModuleFilenameTemplate: '[resourcePath]?[hash]',
};

config.resolve = {
  extensions: ['', '.js'],
  modulesDirectories: [ 'node_modules' ]
};
