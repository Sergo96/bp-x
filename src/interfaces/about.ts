import { iImage, iOpinion, iPartners } from '@vj-interfaces'


export interface iAboutPage {
  aboutMin: iAboutMin
  howToEasy: iHowToEasy
  alreadyWithOur: iAlreadyWithOur
  userOpinion:iUsersOpinion
}

export interface iAboutMin {
  title?: string
  img: iImage
  description?: string
}

export interface iHowToEasy {
  steps: iHowToEasyStep[]
}


export interface iHowToEasyStep {
  title?: string
  img: iImage
  description?: string
}

export interface iAlreadyWithOur {
  partners: iPartners[]
  viewMoreUrl:string
}
export interface iUsersOpinion {
  opinions: iOpinion[]
  viewMoreUrl:string
}
