module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ['airbnb-base'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'linebreak-style': 'off',
    'no-console': 'off',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'max-len': 'off',
    'object-curly-newline': ['error', { multiline: true }],
    'import/extensions': ['error', { ts: 'never' }],
  },
};
