module.exports = {
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    project: './tsconfig.json',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  rules: {
    // https://github.com/typescript-eslint/typescript-eslint/issues/46#issuecomment-470486034
    'no-unused-vars': 'off',
    'react/prop-types': [0, { customValidators: 'children' }],
    'react/display-name': [0, { acceptTranspilerName: true }],
    camelcase: [1, { properties: 'always' }],
  },
};
