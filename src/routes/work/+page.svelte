<script lang="ts">
  import CImage from '~/client/components/c-image.svelte'
  import {page} from '$app/stores'
  const works = [{
    draft: false,
    slug: 'four-forty-four',
    title: 'Four Forty Four'
  }]
</script>
<div class="gap-6 grid grid-cols-3" role="grid">
  {#each works as work}
    <a class="decoration-none group pos-relative text-current" href="{$page.url.pathname + work.slug}/">
      <CImage max_width="{640}" name="{work.slug}"/>
      <h2 class="bg-black/75 box-border flex font-300 font-serif h-full items-center justify-center m-0 opacity-0 group-hover:opacity-100 left-0 p-3 pos-absolute text-8 text-center text-white top-0 transition-duration-240 w-full">{work.title}</h2>
    </a>
  {/each}
</div>