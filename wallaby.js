const path = require('path')
const babel = require('babel-core')

module.exports = function (wallaby) {
  return {
    files: [
      'server.js',
      'store.js',
      'src/**/*.js',
      'pages/**/*.js',
      'hoc/**/*.js',
      'utils/**/*.js',
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
        env: 'NODE_ENV=test;NODE_PATH=' + path.join(wallaby.projectCacheDir, '../')
      }
    },

    compilers: {
      '**/*.js': wallaby.compilers.babel({
        babel,
        babelrc: true
      })
    },

    testFramework: 'ava'
  }
}
