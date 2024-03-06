module.exports = {
  overrides: [
    {
      extends: ['alloy'],
      files: [
        '*.ts',
        '*.js',
      ],
      plugins: [
        'eslint-plugin-import',
        'eslint-plugin-simple-import-sort',
        'modules-newlines',
        'unused-imports',
      ],
      rules: {
        'accessor-pairs': 'error',
        'array-bracket-newline': [
          'error',
          {
            multiline: true,
          },
        ],
        'array-bracket-spacing': [
          'error',
          'never',
        ],
        'array-callback-return': 'error',
        'array-element-newline': [
          'error',
          {
            minItems: 2,
            multiline: true,
          },
        ],
        'arrow-body-style': 'off',
        'arrow-spacing': 'error',
        'brace-style': 'error',
        'comma-dangle': [
          'error',
          {
            arrays: 'always-multiline',
            exports: 'always-multiline',
            functions: 'always-multiline',
            imports: 'always-multiline',
            objects: 'always-multiline',
          },
        ],
        'comma-spacing': [
          'error',
          {
            after: true,
            before: false,
          },
        ],
        'constructor-super': 'error',
        eqeqeq: [
          'error',
          'smart',
        ],
        'function-call-argument-newline': [
          'error',
          'consistent',
        ],
        'function-paren-newline': [
          'error',
          'consistent',
        ],
        'guard-for-in': 'error',
        'id-blacklist': 'off',
        'id-match': 'off',
        'import/no-deprecated': 'error',
        'import/no-duplicates': 'error',
        indent: [
          'error',
          2,
          { SwitchCase: 1 },
        ],
        'key-spacing': [
          'error',
          {
            afterColon: true,
            beforeColon: false,
          },
        ],
        'keyword-spacing': 'error',
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
        'no-multi-spaces': 'error',
        'no-new-wrappers': 'error',
        'no-param-reassign': 'error',
        'no-promise-executor-return': 'error',
        'no-restricted-imports': [
          'error',
          'rxjs/Rx',
        ],
        'no-return-assign': 'error',
        'no-throw-literal': 'error',
        'no-trailing-spaces': 'error',
        'no-undef-init': 'error',
        'no-underscore-dangle': 'off',
        'no-unused-vars': 'off',
        'no-useless-constructor': 'off',
        'no-var': 'error',
        'object-curly-newline': [
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
        'object-curly-spacing': [
          'error',
          'always',
        ],
        'object-property-newline': 'error',
        'prefer-const': 'error',
        'prefer-regex-literals': 'error',
        'prefer-template': 'error',
        'quote-props': [
          2,
          'as-needed',
        ],
        quotes: [
          2,
          'single',
          {
            avoidEscape: true,
          },
        ],
        radix: 'error',
        semi: [
          2,
          'always',
        ],
        'simple-import-sort/exports': 'error',
        'simple-import-sort/imports': 'error',
        'space-before-blocks': 'error',
        'space-before-function-paren': [
          'error',
          'never',
        ],
        'space-in-parens': [
          'error',
          'never',
        ],
        'space-infix-ops': 'error',
        'unused-imports/no-unused-imports': 'error',
      },
    },
    {
      files: ['*.html'],
      plugins: ['html'],
    },
  ],
};
