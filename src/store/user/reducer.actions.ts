import { iAction }              from '@vj-interfaces/store'
import { reducerTypes, tState } from '@vj-store/user/types'


export const reducerActions = {
  logout : (): iAction => ({type: reducerTypes.logout}),
  setUser: (payload: tState): iAction<tState> => ({type: reducerTypes.setUser, payload}),
}
