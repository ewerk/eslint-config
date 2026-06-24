
# @ewerk/eslint-config – The all-in-one solution for linting and code formatting in frontend projects

[![NPM Version](https://img.shields.io/npm/v/%40ewerk%2Feslint-config?registry_uri=https%3A%2F%2Fregistry.npmjs.org)](https://www.npmjs.com/package/@ewerk/eslint-config)

This project contains rules for a consistent clean code style for frontend projects.
That includes rules for HTML, JavaScript, Typescript and (s)css. It is compatible for all kind of javascript based frontend projects.

Following tools are used:

- [eslint](https://eslint.org/): used for JS/TS/HTML files
- [prettier](https://prettier.io/): used for formatting HTML files
- [stylelint](https://stylelint.io/): used for CSS/SCSS files

The project is currently optimized and tested for Angular projects (>= 19).
The linting and formatting rules are very strict – maybe too strict for someone, but it is very helpful on working with large teams. The toolset and ruleset is completely modular. Take what you need.

The eslint rules are based on [eslint-config-alloy](https://github.com/AlloyTeam/eslint-config-alloy).

## Getting started

Install eslint, prettier, stylelint and this package:

```bash
$ npm i -D eslint prettier stylelint @ewerk/eslint-config
```

## Configuration
### ESLint

Note: This package now uses ESLint's new flat config format (ESLint 9+).
Create an `eslint.config.js` file in your project root:

Create an eslint config file, e.g. `.eslintrc.js`:
```js
// eslint.config.js

const baseConfig = require('@ewerk/eslint-config');
const typescriptConfig = require('@ewerk/eslint-config/typescript');
const angularConfig = require('@ewerk/eslint-config/angular');

module.exports = [
  ...baseConfig,       // basic rules for JS/TS/HTML
  ...typescriptConfig, // typescript specific rules
  ...angularConfig,    // angular specific rules
];
```

**Modular usage** – pick only what you need:

```js
// eslint.config.js

// Only base rules (no TypeScript)
module.exports = require('@ewerk/eslint-config');

// Base + TypeScript
module.exports = [
  ...require('@ewerk/eslint-config'),
  ...require('@ewerk/eslint-config/typescript'),
];

// Full stack (base + TypeScript + Angular)
module.exports = [
  ...require('@ewerk/eslint-config'),
  ...require('@ewerk/eslint-config/typescript'),
  ...require('@ewerk/eslint-config/angular'),
];
```

Feel free to add your own rules or override pre-defined rules.

```js
// eslint.config.js

module.exports = [
  ...require('@ewerk/eslint-config'),
  ...require('@ewerk/eslint-config/typescript'),
  {
    rules: {
      // your custom rules
      'no-console': 'off',
    },
  },
];
```

### prettier
Create a prettier config file, e.g. `.prettierrc.js`:
```js
// .prettierrc.js

module.exports = {
  ...require('@ewerk/eslint-config/prettierrc'),        // basic rules
  ...require('@ewerk/eslint-config/prettierrc.angular') // angular specific
};
```

Feel free to add your own rules or override pre-defined rules.

Create `.prettierignore` file with the following content to restrict prettier to only take care of HTML files.

```
# exclude all files
*.*

# include only html files
!*.html

###
# the following part is optional
# 
# to exclude e.g. the coverage files:
###

# exclude all sub directories
/*

# include e.g. only the real code 
!src/

```

### stylelint

Create a stylelint config file, e.g. `stylelint.config.js`:
```js
// stylelint.config.js

module.exports = {
  extends: [
    '@ewerk/eslint-config/stylelintrc',      // .css
    // or
    '@ewerk/eslint-config/stylelintrc.scss', // .scss
  ],
};
```

Feel free to add your own rules or override pre-defined rules.


## Usage

Add a few commands to the `package.json`. It depends highly on your project.
Here are a few suggestions:

```json
// package.json

{
  ...
  "scripts": {
    ...
    "lint": "eslint src --fix",
    "stylelint": "stylelint --fix \"src/**/*.scss\"",
    "format:check": "prettier --check .",
    "format:write": "prettier --write .",
    "fix-code-style": "npm run lint && npm run stylelint && npm run format:write"
  },
  ...
}
```

To fix the format of the whole code (js/ts/html/css) just run:
```
$ npm run fix-code-style
```

### Automate it

It is recommended to lint and format your code always before committing.
To automate it just use a commit hook. E.g. use [husky](https://www.npmjs.com/package/husky).

```bash
# .husky/pre-commit

npm run fix-code-style
```

But that's a bit overkill especially for a large codebase. You could use [lint-staged](https://www.npmjs.com/package/lint-staged) to lint and format only files you changed:

```js
// lint-staged.config.js

module.exports = {
  'src/**/*.{html,ts,js}': (filesArray) => {
    const files = filesArray.join(' ');
    return [
      `eslint --fix ${ files }`,
    ];
  },
  'src/**/*.scss': (filesArray) => {
    const files = filesArray.join(',');
    const filesPattern = filesArray.length > 1 ? `{${ files }}` : files;
    return [
      `stylelint --fix "{${ filesPattern }}"`,
    ];
  },
};
```

For formatting with prettier we sadly need another tool: [pretty-quick](https://www.npmjs.com/package/pretty-quick)
Just add another command to scripts in the `package.json`:

```
    "format-staged:write": "pretty-quick --staged",
```

Now finally integrate all of it into the pre-commit hook: 

```bash
# .husky/pre-commit

# run prettier for staged files
npm run format-staged:write

# run eslint fix for staged files
npx lint-staged --relative
```

## Troubleshooting

For nx projects: See [Using ESLint in Nx Workspaces](https://nx.dev/recipe/eslint)

### 'describe' or 'jest' is not defined no-undef error

If you're getting `no-undef` linting errors in test files and you're using jasmine try to add the following to the `.eslintrc.js`:

```js
module.exports = {
  ...,
  env: {
    jasmine: true, // 'describe' is not defined
    jest: true,    // 'jest' is not defined
  },
}
```

### ERESOLVE unable to resolve dependency tree (Vue peer dependencies)

If you encounter peer dependency conflicts related to `eslint-plugin-vue` during installation, this is due to `eslint-config-alloy` having optional peer dependencies on Vue packages. Since this config is focused on Angular/TypeScript projects, you don't need the Vue packages.

**Solution:** Add the following to your `package.json` to force compatible Vue package versions:

```json
{
  "overrides": {
    "eslint-plugin-vue": "9.28.0",
    "vue-eslint-parser": "9.4.3"
  }
}
```

These packages won't be used in your Angular project but need to be at compatible versions to satisfy the dependency resolver.

## Things ToDo

- [x] Update Dependencies
- [ ] Improve support for non-angular projects
- [ ] Use prettier for formatting json files
