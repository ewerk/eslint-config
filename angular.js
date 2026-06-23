module.exports = [
  // Angular TypeScript files
  {
    files: ['**/*.ts'],
    plugins: {
      '@angular-eslint': require('@angular-eslint/eslint-plugin'),
      'change-detection-strategy': require('eslint-plugin-change-detection-strategy'),
    },
    rules: require('./angular/ts/rules'),
  },
  // Angular template files
  {
    files: ['**/*.component.html'],
    languageOptions: {
      parser: require('@angular-eslint/template-parser'),
    },
    plugins: {
      '@angular-eslint/template': require('@angular-eslint/eslint-plugin-template'),
    },
    rules: require('./angular/html/rules'),
  },
];
