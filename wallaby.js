const path = require('path')
const babel = require('babel-core')

module.exports = function (wallaby) {
  return {
    files: [
      'src/**/*.js',
      'pages/**/*.js',
      'hoc/**/*.js',
      'components/**/*.js',
      'reducers/**/*.js'
    ],

    tests: [
      'test/**/*.test.js'
    ],

    env: {
      type: 'node',
      runner: 'node',
      params: {
        env: 'POSTGRES_DB=blog-js-test;NODE_ENV=test;NODE_PATH=' + path.join(wallaby.projectCacheDir, '../')
      }
    },

    compilers: {
      '**/*.js': wallaby.compilers.babel({ babel })
    },

    testFramework: 'ava'
  }
}
