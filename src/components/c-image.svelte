<script lang="ts">
  import {page} from '$app/stores'
  export let max_width : number = 1200
  export let name : keyof typeof $page.data.resources
  const preset_widths = [
    360,
    640,
    768,
    1024,
    1200
  ]
  function generate_image_cdn_url(w : number) {
    return `/.netlify/images?url=${src}&w=${w}`
  }
  function lt_max_width(num : number) {
    return num < max_width
  }
  $: alt = $page.data.resources[name].alt
  $: widths = preset_widths.filter(lt_max_width).concat([
    max_width
  ])
  $: src = $page.data.resources[name].src
</script>
<picture>
  <!--
    The logic for the following block is as follows:
      - For each width of the generated widths array, do the following:
        - if the current width is last in the array:
          - if the widths array has more than 1 items:
            - set the min width to the second last width, but generate the image for the current width.
              this would be required when you're at the max width
          - else:
            - set the current width as the only available width.
              this would happen if you set a width lower than or equal to the min width from preset_widths
        - else:
          - set the current width as the max width and generate the image for the current width.
      - end loop
  -->
  {#each widths as width, i}
    {#if i === widths.length - 1}
      {#if widths.length > 1}
        <source media="(min-width: {widths[i - 1]}px)" srcset="{generate_image_cdn_url(width)}"/>
      {:else}
        <source srcset="{generate_image_cdn_url(width)}"/>
      {/if}
    {:else}
      <source media="(max-width: {width}px)" srcset="{generate_image_cdn_url(width)}"/>
    {/if}
  {/each}
  <img alt="{alt}" class="h-full object-contain w-full" src="{generate_image_cdn_url(64)}"/>
</picture>