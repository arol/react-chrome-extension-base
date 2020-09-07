module.exports = {
  parser: 'babel-eslint',
  extends: ['prettier'],
  rules: {
    'react/display-name': [1, { ignoreTranspilerName: true }],
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': [1, { forbidDefaultForRequired: true }],
  },
}
