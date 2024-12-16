// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  // Your custom configs here
  {
    rules: {
      'vue/first-attribute-linebreak': 'off',
      'no-console': 'warn',
      'vue/no-multiple-template-root': 'off',
    }
  }
)
