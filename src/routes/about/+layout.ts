import imgTejal from '~/client/routes/about/assets/tejal.jpg?meta'
import type {LayoutLoad} from './$types'
export const load : LayoutLoad = async event => {
  const parent = await event.parent()
  return {
    breadcrumbs: parent.breadcrumbs.concat({
      href: '/about',
      icon: 'circle-info',
      name: 'About'
    }),
    description: '',
    resources: {
      tejal: {
        alt: 'Tejal Shinde\'s profile photo',
        height: imgTejal.height,
        src: imgTejal.src,
        width: imgTejal.width
      }
    },
    title: 'About'
  }
}