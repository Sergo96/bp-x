import { iAction }              from '@vj-interfaces/store'
import { reducerTypes, tState } from '@vj-store/auth/types'


export const reducerActions = {
  // setLinks    : (payload: iSidebar[]): iAction<iSidebar[]> => ({type: reducerTypes.setL, payload}),
  logout: (): iAction => ({type: reducerTypes.logout}),
  login : (payload: tState): iAction<tState> => ({type: reducerTypes.login, payload}),
  // resend      : (): iAction => ({type: reducerTypes.resend}),
  // authenticate: (payload: { userType:tUser,token:string }): iAction => ({type: reducerTypes.authenticate, payload}),
  // editUserType: (payload: tUser): iAction => ({type: reducerTypes.editUserType, payload}),
}
