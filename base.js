const eslintPluginImport = require('eslint-plugin-import');
const eslintPluginSimpleImportSort = require('eslint-plugin-simple-import-sort');
const eslintPluginModulesNewlines = require('eslint-plugin-modules-newlines');
const eslintPluginUnusedImports = require('eslint-plugin-unused-imports');
const eslintPluginHtml = require('eslint-plugin-html');
const alloy = require('eslint-config-alloy');
const stylistic = require('@stylistic/eslint-plugin');

module.exports = [
  // JS/TS files config
  {
    files: [
      '**/*.ts',
      '**/*.js',
    ],
    plugins: {
      '@stylistic': stylistic,
      import: eslintPluginImport,
      'modules-newlines': eslintPluginModulesNewlines,
      'simple-import-sort': eslintPluginSimpleImportSort,
      'unused-imports': eslintPluginUnusedImports,
    },
    rules: {
      ...alloy.rules,
      '@stylistic/array-bracket-newline': [
        'error',
        {
          multiline: true,
        },
      ],
      '@stylistic/array-bracket-spacing': [
        'error',
        'never',
      ],
      '@stylistic/array-element-newline': [
        'error',
        {
          minItems: 2,
          multiline: true,
        },
      ],
      '@stylistic/arrow-spacing': 'error',
      '@stylistic/brace-style': 'error',
      '@stylistic/comma-dangle': [
        'error',
        {
          arrays: 'always-multiline',
          exports: 'always-multiline',
          functions: 'always-multiline',
          imports: 'always-multiline',
          objects: 'always-multiline',
        },
      ],
      '@stylistic/comma-spacing': [
        'error',
        {
          after: true,
          before: false,
        },
      ],
      '@stylistic/function-call-argument-newline': [
        'error',
        'consistent',
      ],
      '@stylistic/function-paren-newline': [
        'error',
        'consistent',
      ],
      '@stylistic/indent': [
        'error',
        2,
        { SwitchCase: 1 },
      ],
      '@stylistic/key-spacing': [
        'error',
        {
          afterColon: true,
          beforeColon: false,
        },
      ],
      '@stylistic/keyword-spacing': 'error',
      '@stylistic/no-multi-spaces': 'error',
      '@stylistic/no-trailing-spaces': 'error',
      '@stylistic/object-curly-newline': [
        'error',
        {
          ExportDeclaration: 'never',
          ImportDeclaration: {
            minProperties: 2,
          },
          ObjectExpression: {
            consistent: true,
            multiline: true,
          },
          ObjectPattern: { consistent: true },
        },
      ],
      '@stylistic/object-curly-spacing': [
        'error',
        'always',
      ],
      '@stylistic/object-property-newline': 'error',
      '@stylistic/quote-props': [
        2,
        'as-needed',
      ],
      '@stylistic/quotes': [
        2,
        'single',
        {
          avoidEscape: true,
        },
      ],
      '@stylistic/semi': [
        2,
        'always',
      ],
      '@stylistic/space-before-blocks': 'error',
      '@stylistic/space-before-function-paren': [
        'error',
        'never',
      ],
      '@stylistic/space-in-parens': [
        'error',
        'never',
      ],
      '@stylistic/space-infix-ops': 'error',
      'accessor-pairs': 'error',
      'array-callback-return': 'error',
      'arrow-body-style': 'off',
      'constructor-super': 'error',
      eqeqeq: [
        'error',
        'smart',
      ],
      'guard-for-in': 'error',
      'id-blacklist': 'off',
      'id-match': 'off',
      'import/no-deprecated': 'error',
      'import/no-duplicates': 'error',
      'max-nested-callbacks': 'off',
      'max-params': 'off',
      'modules-newlines/export-declaration-newline': 'error',
      'modules-newlines/import-declaration-newline': 'error',
      'no-bitwise': 'error',
      'no-caller': 'error',
      'no-console': [
        'warn',
        {
          allow: [
            'log',
            'error',
            'dir',
            'timeLog',
            'assert',
            'clear',
            'count',
            'countReset',
            'group',
            'groupEnd',
            'table',
            'dirxml',
            'groupCollapsed',
            'Console',
            'profile',
            'profileEnd',
            'timeStamp',
            'context',
          ],
        },
      ],
      'no-constant-binary-expression': 'error',
      'no-debugger': 'error',
      'no-empty': 'off',
      'no-eq-null': 'error',
      'no-eval': 'error',
      'no-fallthrough': 'error',
      'no-new-wrappers': 'error',
      'no-param-reassign': 'error',
      'no-promise-executor-return': 'error',
      'no-restricted-imports': [
        'error',
        'rxjs/Rx',
      ],
      'no-return-assign': 'error',
      'no-throw-literal': 'error',
      'no-undef-init': 'error',
      'no-underscore-dangle': 'off',
      'no-unused-vars': 'off',
      'no-useless-constructor': 'off',
      'no-var': 'error',
      'prefer-const': 'error',
      'prefer-regex-literals': 'error',
      'prefer-template': 'error',
      radix: 'error',
      'simple-import-sort/exports': 'error',
      'simple-import-sort/imports': 'error',
      'unused-imports/no-unused-imports': 'error',
    },
  },
  // HTML files config
  {
    files: ['**/*.html'],
    plugins: {
      html: eslintPluginHtml,
    },
  },
];
