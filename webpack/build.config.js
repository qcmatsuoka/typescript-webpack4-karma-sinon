const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('../webpack.config');

const config = {
  mode: 'production',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist'),
  }
};

module.exports = merge(baseConfig, config);
