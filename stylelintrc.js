module.exports = {
  extends: 'stylelint-config-standard',
  plugins: ['stylelint-order'],
  rules: {
    'alpha-value-notation': 'number',
    'color-function-notation': 'legacy',
    'declaration-property-unit-allowed-list': {
      'line-height': [
        '%',
        'em',
      ],
    },
    'no-descending-specificity': null,
    'order/properties-alphabetical-order': true,
    'selector-class-pattern': null,
  },
};
