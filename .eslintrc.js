module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', '@vue/airbnb'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};

// {
//   "env": {
//     "browser": true,
//     "es6": true,
//     "node": true
//   },
//   "parserOptions": {
//     "parser": "babel-eslint"
//   },
//   "extends": ["airbnb-base", "plugin:vue/recommended"],
//   "rules": {}
// }
