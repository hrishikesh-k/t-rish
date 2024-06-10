<script lang="ts">
  import CBreadcrumbs from '~/client/components/c-breadcrumbs.svelte'
  import CHeader from '~/client/components/c-header.svelte'
  import {page} from '$app/stores'
  import 'virtual:uno.css'
</script>
<svelte:head>
  <meta content="{$page.data.description}" name="description"/>
  <title>{$page.data.title}</title>
</svelte:head>
<CHeader/>
<CBreadcrumbs/>
<main class="m-x-auto max-w-320">
  <slot/>
</main>
<footer class="box-border p-6 text-center">&copy; 2024 T-Rish</footer>

<style>

  /* Noto Sans (Latin Italic) */
  @font-face {
    font-display: swap;
    font-family: 'Noto Sans';
    font-stretch: 62.5% 100%;
    font-style: italic;
    font-weight: 100 900;
    src: url(/fonts/noto-sans/latin-italic.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }

  /* Noto Sans (Latin Normal) */
  @font-face {
    font-display: swap;
    font-family: 'Noto Sans';
    font-stretch: 62.5% 100%;
    font-style: normal;
    font-weight: 100 900;
    src: url(/fonts/noto-sans/latin-normal.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }

  /* Noto Serif (Latin Italic) */
  @font-face {
    font-display: swap;
    font-family: 'Noto Serif';
    font-style: italic;
    font-weight: 100 900;
    font-stretch: 62.5% 100%;
    src: url(/fonts/noto-serif/latin-italic.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }

  /* Noto Serif (Latin Normal) */
  @font-face {
    font-display: swap;
    font-family: 'Noto Serif';
    font-stretch: 62.5% 100%;
    font-style: normal;
    font-weight: 100 900;
    src: url(/fonts/noto-serif/latin-normal.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
  }
</style>