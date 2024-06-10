import imgAllStar1 from '~/client/routes/work/four-forty-four/assets/allstar-1.jpg?meta'
import imgAllStar2 from '~/client/routes/work/four-forty-four/assets/allstar-2.png?meta'
import imgAllStar3 from '~/client/routes/work/four-forty-four/assets/allstar-3.png?meta'
import imgHamilton1 from '~/client/routes/work/four-forty-four/assets/hamilton-1.gif?meta'
import type {LayoutLoad} from './$types'
export const load : LayoutLoad = async event => {
  const parent = await event.parent()
  return {
    breadcrumbs: parent.breadcrumbs.concat({
      href: '/work/four-forty-four',
      icon: 'diagram-project',
      name: 'Four Forty Four'
    }),
    description: 'Creatively crafted four fictional campaigns for four diverse brands, showcasing informed creative direction in four unique industries.',
    resources: {
      'allstar-1': {
        alt: '',
        height: imgAllStar1.height,
        src: imgAllStar1.src,
        width: imgAllStar1.width
      },
      'allstar-2': {
        alt: '',
        height: imgAllStar2.height,
        src: imgAllStar2.src,
        width: imgAllStar2.width
      },
      'allstar-3': {
        alt: '',
        height: imgAllStar3.height,
        src: imgAllStar3.src,
        width: imgAllStar3.width
      },
      'hamilton-1': {
        alt: '',
        height: imgHamilton1.height,
        src: imgHamilton1.src,
        width: imgHamilton1.width
      }
    },
    title: 'Four Forty Four'
  }
}