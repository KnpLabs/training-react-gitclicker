module.exports = {
    root: true,
    env: {
      node: true,
      browser: true,
      es6: true,
      'jest/globals': true,
    },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
      'plugin:@typescript-eslint/recommended',
    ],
    plugins: [
      'react',
      'react-hooks',
      '@typescript-eslint',
      'jest'
    ],
    parser: '@typescript-eslint/parser',
    rules: {
      semi: ['error', 'never'],
      quotes: ['error', 'single'],
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'error',
      'react/jsx-uses-vars': 'error',
    },
    settings: {
      react: {
        pragma: 'React',
        version: 'detect',
      },
    },
}
