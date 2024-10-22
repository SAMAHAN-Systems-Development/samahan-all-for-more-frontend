/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
  ignorePatterns: ['.eslintrc.js', '*.config.js', '*.json'],

  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    extraFileExtensions: ['.json'],
    sourceType: 'module',
  },

  extends: [],

  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/no-unsafe-assignment': 'off',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'], // Apply the override to TypeScript files
      rules: {
        '@typescript-eslint/no-unsafe-assignment': 'off',
      },
    },
  ],
};
