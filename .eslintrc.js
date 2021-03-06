module.exports = {
  'root': true,
  'env': {
    'node': true,
    'es6': true,
    'browser': true,
    'jest/globals': true,
  },
  'plugins': [
    'react',
    'react-hooks',
    'jest',
  ],
  'parser': 'babel-eslint',
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  'rules': {
    'semi': ['error', 'never'],
    'quotes': ['error', 'single'],
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
  },
  'settings': {
    'react': {
      'pragma': 'React',
      'version': 'detect',
    },
  }
}

