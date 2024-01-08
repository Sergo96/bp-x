import { initialState }         from './initialState'
import { reducerTypes, tState } from './types'


type tReducerFunction = { [t: string]: (state: tState, payload?: any) => tState }

export const reducerFunctions: tReducerFunction = {
  [reducerTypes.setUser]: (state: tState, payload: tState): tState => ({...state, ...payload}),
  [reducerTypes.logout] : (): tState => ({...initialState}),
}
