module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [],
  // paerser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {}, //'react/jsx-uses-react': 'error', 'react/jsx-uses-vars': 'error'
}
