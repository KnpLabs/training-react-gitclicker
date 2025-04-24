import js from '@eslint/js'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import stylistic from '@stylistic/eslint-plugin'
import vitest from '@vitest/eslint-plugin'
import testingLibrary from 'eslint-plugin-testing-library'

export default tseslint.config(
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
  {
    plugins: {
      '@stylistic': stylistic,
    },
    rules: {
      ...stylistic.configs.recommended.rules,
      '@stylistic/jsx-one-expression-per-line': ['error', { allow: 'non-jsx' }],
    },
  },
  {
    files: ['**/*.test.ts?(x)'],
    languageOptions: {
      globals: {
        ...vitest.environments.env.globals,
      },
    },
    plugins: {
      vitest,
      'testing-library': testingLibrary,
    },
    rules: {
      ...vitest.configs.recommended.rules,
      ...testingLibrary.configs['flat/react'].rules,
    },
  },
  { ignores: ['dist'] },
)
