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
    colors: {
      orange: '#fb5605',
      peach: '#f59f76',
      yellow: '#f9d059'
    },
    fontFamily: {
      'h-01': '\'Helvetica W01 Light\', sans-serif',
      'h-04': '\'Helvetica LT W04 Roman\', sans-serif'
    },
    preflightRoot: '*'
  },
  transformers: [
    transformerDirectives()
  ]
})