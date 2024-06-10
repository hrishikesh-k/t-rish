import imgFourFortyFour from '~/client/routes/work/assets/four-forty-four.jpg?meta'
import type {LayoutLoad} from './$types'
export const load : LayoutLoad = async event => {
  const parent = await event.parent()
  return {
    breadcrumbs: parent.breadcrumbs.concat({
      href: '/work',
      icon: 'briefcase',
      name: 'Work'
    }),
    description: '',
    resources: {
      'four-forty-four': {
        alt: '',
        height: imgFourFortyFour.height,
        src: imgFourFortyFour.src,
        width: imgFourFortyFour.width
      }
    },
    title: 'Work'
  }
}