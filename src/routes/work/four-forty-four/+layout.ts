import imgAllStar1 from '~/client/routes/work/four-forty-four/assets/allstar-1.jpg?meta'
import imgAllStar2 from '~/client/routes/work/four-forty-four/assets/allstar-2.png?meta'
import imgAllStar3 from '~/client/routes/work/four-forty-four/assets/allstar-3.png?meta'
import imgDurex1 from '~/client/routes/work/four-forty-four/assets/durex-1.jpg?meta'
import imgDurex2 from '~/client/routes/work/four-forty-four/assets/durex-2.jpg?meta'
import imgHamilton1 from '~/client/routes/work/four-forty-four/assets/hamilton-1.gif?meta'
import imgHamilton2 from '~/client/routes/work/four-forty-four/assets/hamilton-2.jpg?meta'
import imgHersheys1 from '~/client/routes/work/four-forty-four/assets/hershey\'s-1.png?meta'
import imgHersheys2 from '~/client/routes/work/four-forty-four/assets/hershey\'s-2.png?meta'
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
      'durex-1': {
        alt: '',
        height: imgDurex1.height,
        src: imgDurex1.src,
        width: imgDurex1.width
      },
      'durex-2': {
        alt: '',
        height: imgDurex2.height,
        src: imgDurex2.src,
        width: imgDurex2.width
      },
      'hamilton-1': {
        alt: '',
        height: imgHamilton1.height,
        src: imgHamilton1.src,
        width: imgHamilton1.width
      },
      'hamilton-2': {
        alt: '',
        height: imgHamilton2.height,
        src: imgHamilton2.src,
        width: imgHamilton2.width
      },
      'hersheys-1': {
        alt: '',
        height: imgHersheys1.height,
        src: imgHersheys1.src,
        width: imgHersheys1.width
      },
      'hersheys-2': {
        alt: '',
        height: imgHersheys2.height,
        src: imgHersheys2.src,
        width: imgHersheys2.width
      }
    },
    title: 'Four Forty Four'
  }
}