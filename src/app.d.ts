import {icons} from '~/client/components/c-icon.svelte'
declare global {
  declare module '*?meta' {
    export default {} as {
      height : number
      src : string
      width : number
    }
  }
  namespace App {
    interface PageData {
      breadcrumbs : Array<{
        href : string
        icon : keyof typeof icons
        name : string
      }>
      description : string
      resources : Record<string, {
        alt : string
        height : number
        src : string
        width : number
      }>
      title : string
    }
  }
}
export {}