import { iAction }          from '@vj-interfaces/store'
import { initialState }     from './initialState'
import { reducerFunctions } from './reducer.functions'
import { tState }           from './types'


export const reducer = (state: tState = initialState, action: iAction): tState =>
  reducerFunctions[action.type] ?
    reducerFunctions[action.type](state, action.payload)
    : state

