<script lang="ts">
  import {page} from '$app/stores'
  $: about = $page.url.pathname.startsWith('/about')
  $: contact = $page.url.pathname.startsWith('/contact')
  $: work = $page.url.pathname.startsWith('/work')
</script>
<header class="bg-white box-border flex font-leading-4 items-center justify-between left-0 p-6 pos-fixed top-0 w-full z-1">
  <a class="decoration-none flex gap-4 items-center text-current" href="/">
    <div class="bg-black h-12 w-12"></div>
    <p class="m-0">T-Rish</p>
  </a>
  <nav class="flex gap-4">
    <a aria-current="{about ? 'page' : false}" class="{about ? 'text-gray-500' : 'text-current'} decoration-none" href="/about/">About</a>
    <a aria-current="{work ? 'page' : false}" class="{work ? 'text-gray-500' : 'text-current'} decoration-none" href="/work/">Work</a>
    <a aria-current="{contact ? 'page' : false}" class="{contact ? 'text-gray-500' : 'text-current'} decoration-none" href="/contact/">Contact</a>
  </nav>
</header>