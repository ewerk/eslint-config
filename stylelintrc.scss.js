module.exports = {
  extends: [
    './stylelintrc',
    'stylelint-config-standard-scss',
  ],
  rules: {
    'at-rule-disallowed-list': ['import'],
    'scss/double-slash-comment-empty-line-before': null,
    'scss/no-global-function-names': null,
  },
};
