import { iAction }      from '@vj-interfaces/store'
import { tLanguages }   from '@vj-types/languages'
import { reducerTypes } from './types'


export const reducerActions = {
  changeLanguage: (payload: tLanguages): iAction<tLanguages> => ({type: reducerTypes.changeLanguage, payload}),
  // logout      : (): iAction => ({type: reducerTypes.logout}),
  // resend      : (): iAction => ({type: reducerTypes.resend}),
  // authenticate: (payload: { userType:tUser,token:string }): iAction => ({type: reducerTypes.authenticate, payload}),
  // editUserType: (payload: tUser): iAction => ({type: reducerTypes.editUserType, payload}),
}
