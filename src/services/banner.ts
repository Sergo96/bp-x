import { Axios } from './axios'

const {get} = Axios('banner')

export const BannerApi = {
  getBanner:  ()=>get()
}
