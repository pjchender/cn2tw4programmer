{
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 2017,
    "sourceType": "module",
  },
  "plugins": [
    "jest"
  ],
  "extends": [
    "eslint:recommended",
    "plugin:jest/recommended"
  ],
  "rules": {
    // don't force es6 functions to include space before paren
    "space-before-function-paren": 0
  },
  "env": {
    "browser": true,
    "node": true,
    "jest/globals": true
  }
}
