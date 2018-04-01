const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const baseConfig = require('../webpack.config');

const config = {
  mode: 'development',
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        exclude: path.resolve(__dirname, '../node_modules/'),
        test: /\.js$/,
        loader: 'source-map-loader',
      },
    ],
  },
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: null,
      test: /\.(ts|js)($|\?)/i
    })
  ]
};

module.exports = merge(baseConfig, config);
