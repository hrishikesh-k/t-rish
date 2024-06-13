<script lang="ts">
  import LazyLoad from 'vanilla-lazyload'
  import {onMount} from 'svelte'
  import {page} from '$app/stores'
  import 'virtual:uno.css'
  onMount(() => {
    window.ll = new LazyLoad()
  })
</script>
<svelte:head>
  <meta content="{$page.data.description}" name="description"/>
  <title>{$page.data.title}</title>
</svelte:head>
<a class="backdrop-blur block box-border decoration-none left-0 p-x-16 p-y-8 pos-fixed top-0 text-white hover:text-black transition-duration-480" href="/">
  <h1 class="font-400 font-h-01 font-leading-8 m-0 text-8">T-Rish</h1>
</a>
<div class="m-r-16">
  <slot/>
</div>
<div class="bg-yellow box-border flex flex-col h-full items-center justify-between p-y-24 pos-fixed right-0 top-0 w-16">
  <a class="block decoration-none font-h-01 rotate-90 text-6 text-white" href="/about/">About</a>
  <a class="block decoration-none font-h-01 rotate-90 text-6 text-white" href="/contact/">Contact</a>
</div>
<style>

/*  @font-face {
    font-display: swap;
    font-family: 'Helvetica LT W04 Roman';
    src: url(/fonts/helvetica-lt-w04-roman.woff2) format('woff2');
  }*/

  @font-face {
    font-display: swap;
    font-family: 'Helvetica W01 Light';
    src: url(/fonts/helvetica-w01-light.woff) format('woff');
  }

</style>