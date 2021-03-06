module.exports = {
  root: true,
  env: {
    node: true,
    mocha: true,
  },
  extends: ['plugin:vue/essential', '@vue/airbnb'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'arrow-parens': 0,
    'object-curly-newline': [
      'error',
      {
        ExportDeclaration: 'always',
      },
    ],
    'implicit-arrow-linebreak': 0,
    'max-len': ['error', { code: 80 }],
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
