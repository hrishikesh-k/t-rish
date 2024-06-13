import img1 from '~/client/routes/assets/img-1.png?meta'
import type {LayoutLoad} from './$types'
export const load : LayoutLoad = () => {
  return {
    breadcrumbs: [{
      href: '/',
      icon: 'house-blank',
      name: 'Home'
    }],
    description: 'Home',
    resources: {
      img1: {
        alt: '',
        ...img1,
      }
    },
    title: 'T-Rish'
  }
}
export const prerender = true
export const trailingSlash = 'always'