var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = module.exports = {
  context: __dirname,
  entry: './js_src/entry.js',
  plugins: [
    new ExtractTextPlugin('../../../public/styles.css')
  ]
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
  alias: {
    'babel-runtime/regenerator': require.resolve('babel-runtime/regenerator')
  },
  modulesDirectories: [ 'node_modules' ]
};

config.module = {
  loaders: [
    {
      test: /\.js$/,
      include: path.resolve(__dirname, './js_src'),
      loader: 'babel',
      query: {
        presets: ['es2015', 'react']
      }
    },
    {
      test: /\.css$/,
      include: [path.resolve(__dirname, './js_src'), path.resolve(__dirname, './node_modules')],
      loader: ExtractTextPlugin.extract('style', 'css?-autoprefixer!postcss')
    }
  ]
}

