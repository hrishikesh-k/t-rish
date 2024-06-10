import {defineConfig, presetUno} from 'unocss'
import transformerDirectives from '@unocss/transformer-directives'
export default defineConfig({
  blocklist: [
    'me'
  ],
  content: {
    filesystem: [
      './src/app.html'
    ]
  },
  presets: [
    presetUno()
  ],
  theme: {
    fontFamily: {
      sans: '\'Noto Sans\', sans-serif',
      serif: '\'Noto Serif\', serif'
    },
    preflightRoot: '*'
  },
  transformers: [
    transformerDirectives()
  ]
})