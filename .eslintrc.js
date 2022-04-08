module.exports = {
  root: true,

  env: {
    browser: true,
    node: true,
  },

  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2017,
    sourceType: 'module',
    project: './tsconfig.json',
  },

  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/recommended',
    'prettier',
    'prettier/vue',
    'prettier/@typescript-eslint',
  ],

  plugins: ['vue', '@typescript-eslint'],
};
