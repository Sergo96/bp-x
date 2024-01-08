import { iAboutMin }             from '@vj-interfaces/about'
import { Settings as ISettings } from 'react-slick'


export interface iHomePage {
  aboutMin: iAboutMin
  banner: iBanner

}

export interface iBanner {
  settings: ISettings
  items: iSliderItem[]
}

export interface iSliderItemColors {
  title?: string,
  description?: string,
  readMore?: string,
  viewMore?: string,
  readMoreText?:string
  viewMoreText?:string
}

export interface iSliderItem extends iSliderItemColors {
  _id: string,
  status: 'active' | 'passive' | 'deleted'
  position: number
  bgImage: string,
  colors?: iSliderItemColors
}