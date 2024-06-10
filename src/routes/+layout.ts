import type {LayoutLoad} from './$types'
export const load : LayoutLoad = () => {
  return {
    breadcrumbs: [{
      href: '/',
      icon: 'house-blank',
      name: 'Home'
    }],
    description: 'Home',
    resources: {},
    title: 'T-Rish'
  }
}
export const prerender = true
export const trailingSlash = 'always'