import { iAction } from '@vj-interfaces/store'
import { types }   from '@vj-store/auth/types'


export const actions = {
  // getCode        : (payload: { phoneNumber: string }): iAction => ({type: types.getCode, payload}),
  logout     : (): iAction => ({type: types.logout}),
  login      : (): iAction => ({type: types.login}),
  checkIsUser: (): iAction => ({type: types.checkIsUser}),
  // login         : (): iAction => ({type: types.logout}),
  // editPhoneNumber: (): iAction => ({type: types.editPhoneNumber}),
  // resend         : (): iAction => ({type: types.resend}),
  // verify         : (payload: { code: string }): iAction => ({type: types.verify, payload}),
  // saveUserData   : (payload: iUser): iAction => ({type: types.saveUserData, payload})
}
