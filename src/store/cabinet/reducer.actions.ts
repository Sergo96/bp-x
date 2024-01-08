import { iSidebar }     from '@vj-interfaces/sidebar'
import { iAction }      from '@vj-interfaces/store'
import { reducerTypes } from './types'


export const reducerActions = {
  setLinks: (payload: iSidebar[]): iAction<iSidebar[]> => ({type: reducerTypes.setLinks, payload}),
  // setToken    : (payload: string): iAction => ({type: reducerTypes.setToken, payload}),
  // logout      : (): iAction => ({type: reducerTypes.logout}),
  // resend      : (): iAction => ({type: reducerTypes.resend}),
  // authenticate: (payload: { userType:tUser,token:string }): iAction => ({type: reducerTypes.authenticate, payload}),
  // editUserType: (payload: tUser): iAction => ({type: reducerTypes.editUserType, payload}),
}
