import { initialState }         from './initialState'
import { reducerTypes, tState } from './types'


type tReducerFunction = { [t: string]: (state: tState, payload?: any) => tState }

export const reducerFunctions: tReducerFunction = {
  [reducerTypes.add]   : (state: tState, payload: tState): tState => ({...payload}),
  [reducerTypes.remove]: (): tState => ({...initialState}),
}
