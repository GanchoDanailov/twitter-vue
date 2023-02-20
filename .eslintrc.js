module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
  ],
  rules: {
    'semi': [2, 'never'],
    'quotes': [2, 'single', { 'avoidEscape': true }],
    'vue/multi-word-component-names': 0
  },
}
