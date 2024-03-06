module.exports = {
  extends: [
    './base.js',
    './typescript.js',
  ],
  plugins: ['sort-keys-fix'],
  rules: {
    'sort-keys-fix/sort-keys-fix': 'error',
  },
};
