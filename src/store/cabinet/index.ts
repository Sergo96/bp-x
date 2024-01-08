import { persistReducer } from 'redux-persist'
import { persistConfig }  from './initialState'
import { reducer }        from './reducer'


export type { tState as tCabinet }                 from './types'
export { actions as cabinetActions }               from './actions'
export { reducerActions as cabinetReducerActions } from './reducer.actions'
export { watch as watchCabinet }                   from './saga'
export { initialState as cabinetInitialState }     from './initialState'


export const cabinet = persistReducer(persistConfig, reducer)