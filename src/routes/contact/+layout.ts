import type {LayoutLoad} from './$types'
export const load : LayoutLoad = async event => {
  const parent = await event.parent()
  return {
    breadcrumbs: parent.breadcrumbs.concat({
      href: '/contact',
      icon: 'at',
      name: 'Contact'
    }),
    description: '',
    resources: {},
    title: 'Contact'
  }
}