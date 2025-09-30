import js from '@eslint/js'
import { defineConfig } from 'eslint/config'

export default defineConfig([
  {
    name: 'quitsmx/base',
    files: ['**/*.{js,mjs,ts}'],
    plugins: { js },
    rules: {
      semi: [2, 'never'],
      quotes: [2, 'single'],
    },
    languageOptions: {
      ecmaVersion: 2023,
    },
  },
])
