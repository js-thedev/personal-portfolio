import js from '@eslint/js';
import react from 'eslint-plugin-react';
import prettier from 'eslint-plugin-prettier';
import importPlugin from 'eslint-plugin-import';

export default [
  {
    ignores: ['node_modules/**', 'dist/**'],
  },
  js.configs.recommended,
  {
    files: ['**/*.js', '**/*.jsx'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },
    },
    plugins: {
      react,
      prettier,
      import: importPlugin,
    },
    rules: {
      // JavaScript rules
      ...js.configs.recommended.rules,

      // React rules
      ...react.configs.recommended.rules,

      // Import rules
      'import/no-unresolved': 'error',

      // Prettier integration
      'prettier/prettier': 'error',
    },
    settings: {
      'import/resolver': {
        alias: {
          map: [['@', './src']],
          extensions: ['.js', '.jsx', '.json', '.scss'],
        },
      },
      react: {
        version: 'detect',
      },
    },
  },
];
