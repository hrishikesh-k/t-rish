import adapterStatic from '@sveltejs/adapter-static'
import {vitePreprocess} from '@sveltejs/vite-plugin-svelte'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapterStatic(),
    alias: {
      '~/client/*': './src/*'
    },
    prerender: {
      handleHttpError(details) {
        if (details.path.startsWith('/.netlify/images')) {
          return
        }
        throw details.message
      }
    }
  },
  preprocess: [
    vitePreprocess()
  ]
}

export default config