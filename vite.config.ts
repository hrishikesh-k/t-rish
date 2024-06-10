import css from 'unocss/vite'
import {imagetools} from 'vite-imagetools'
import {defineConfig} from 'vite'
import {sveltekit} from '@sveltejs/kit/vite'
export default defineConfig({
  plugins: [
    css(),
    imagetools({
      defaultDirectives() {
        return new URLSearchParams('as=meta:height;src;width')
      }
    }),
    sveltekit()
  ]
})