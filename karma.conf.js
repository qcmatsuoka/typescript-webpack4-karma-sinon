process.env.CHROME_BIN = require('puppeteer').executablePath();

module.exports = function(config) {
  var webpackConfig = require('./webpack/test.config.js');

  config.set({
    basePath: './src/',
    frameworks: ['jasmine'],
    files: [
        { pattern: '**/*.ts', watched: false },
    ],
    exclude: [],
    preprocessors: {
      '**/*.js': ['sourcemap'],
      '**/*.ts': ['webpack', 'sourcemap'],
    },
    webpack: webpackConfig,
    reporters: ['mocha'],
    mochaReporter: {
      output: 'minimal',
      divider: '='
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: true,
    concurrency: Infinity
  })
}
