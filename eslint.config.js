const baseConfig = require('./base.js');
const typescriptConfig = require('./typescript');
const sortKeysFix = require('eslint-plugin-sort-keys-fix');

module.exports = [
  ...baseConfig,
  ...typescriptConfig,
  {
    plugins: {
      'sort-keys-fix': sortKeysFix,
    },
    rules: {
      'sort-keys-fix/sort-keys-fix': 'error',
    },
  },
];
