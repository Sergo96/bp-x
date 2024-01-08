import { Axios } from './axios'

const {get} = Axios('about-min')

export const AboutMinApi = {
  getAboutMin:  ()=>get()
}
