/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential', // hapus spasi setelah 'plugin:'
    'eslint:recommended', // hapus spasi setelah 'eslint:'
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting',
  ],
  parserOptions: {
    // 'parserOptions' bukan 'parseOptions'
    ecmaVersion: 'latest', // 'latest' harus dalam string
  },
  rules: {
    'vue/multi-word-component-names': 'off',
  },
}
