<script lang="ts">
  import CImage from '~/client/components/c-image.svelte'
  import {page} from '$app/stores'
</script>
<h1 class="font-300 font-serif m-0 text-12">{$page.data.title}</h1>
<h2 class="font-300 font-serif m-0 m-b-6 text-8">Hamilton Beach</h2>
<CImage name="hamilton-1"/>
<h2 class="font-300 font-serif m-0 m-b-6 text-8">Allstar</h2>
<CImage name="allstar-1"/>
<div class="flex gap-6">
  <div style="flex:calc({$page.data.resources['allstar-2'].width}/{$page.data.resources['allstar-2'].height})">
    <CImage name="allstar-2"/>
  </div>
  <div style="flex:calc({$page.data.resources['allstar-3'].width}/{$page.data.resources['allstar-3'].height})">
    <CImage name="allstar-3"/>
  </div>
</div>