# @ewerk/eslint-config – The all-in-one solution for linting and code formatting in frontend projects

[![NPM Version](https://img.shields.io/npm/v/%40ewerk%2Feslint-config?registry_uri=https%3A%2F%2Fregistry.npmjs.org)](https://www.npmjs.com/package/@ewerk/eslint-config)

This project contains rules for a consistent clean code style for frontend projects.
That includes rules for HTML, JavaScript, Typescript and (s)css. It is compatible for all kind of javascript based frontend projects.

Following tools are used:

- [eslint](https://eslint.org/): used for JS/TS/HTML files
- [prettier](https://prettier.io/): used for formatting HTML files
- [stylelint](https://stylelint.io/): used for CSS/SCSS files

The project is currently optimized and tested for Angular projects (>= 14).
The linting and formatting rules are very strict – maybe too strict for someone, but it is very helpful on working with large teams. The toolset and ruleset is completely modular. Take what you need.

The eslint rules are based on [eslint-config-alloy](https://github.com/AlloyTeam/eslint-config-alloy).

## Getting started

Install eslint, prettier, stylelint and this package:
```
$ npm i -D eslint prettier stylelint @ewerk/eslint-config
```

### eslint

Create an eslint config file, e.g. `.eslintrc.js`:
```js
// .eslintrc.js

module.exports = {
  extends: [
    '@ewerk/eslint-config',            // basic rules
    '@ewerk/eslint-config/typescript', // typescript specific rules
    '@ewerk/eslint-config/angular',    // angular specific rules
  ],
};
```

Feel free to add your own rules or override pre-defined rules.

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

## Things ToDo

- [ ] Update Dependencies
- [ ] Improve support for non-angular projects
- [ ] Use prettier for formatting json files
