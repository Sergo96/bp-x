import { iAction } from '@vj-interfaces/store'
import { types }   from '@vj-store/cabinet/types'


export const actions = {
  getLinks: (): iAction => ({type: types.getLinks}),
  // logout         : (): iAction => ({type: types.logout}),
  // editPhoneNumber: (): iAction => ({type: types.editPhoneNumber}),
  // resend         : (): iAction => ({type: types.resend}),
  // verify         : (payload: { code: string }): iAction => ({type: types.verify, payload}),
  // saveUserData   : (payload: iUser): iAction => ({type: types.saveUserData, payload})
}
