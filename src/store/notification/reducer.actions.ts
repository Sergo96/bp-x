import { iAction }              from '@vj-interfaces/store'
import { reducerTypes, tState } from './types'


export const reducerActions = {
  add   : (payload: tState): iAction<tState> => ({type: reducerTypes.add, payload}),
  remove: (): iAction => ({type: reducerTypes.remove}),
}
