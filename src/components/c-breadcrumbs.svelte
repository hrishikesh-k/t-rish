<script lang="ts">
  import CIcon from '~/client/components/c-icon.svelte'
  import {page} from '$app/stores'
</script>
<ul class="font-leading-4 flex flex-wrap gap-1 items-center list-none m-0 p-0">
  {#each $page.data.breadcrumbs as breadcrumb, i}
    <li>
      <a class="hover:bg-blue-100 box-border border-rounded-2 decoration-none flex gap-1 items-center text-current p-2 transition-duration-240" href="{breadcrumb.href}">
        <CIcon name="{breadcrumb.icon}"/>
        <span>{breadcrumb.name}</span>
      </a>
    </li>
    {#if i < $page.data.breadcrumbs.length - 1}
      <li class="text-gray-500">
        <CIcon name="caret-right" size="{2}"/>
      </li>
    {/if}
  {/each}
</ul>