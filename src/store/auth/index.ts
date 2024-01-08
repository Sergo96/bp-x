import { persistReducer } from 'redux-persist'
import { persistConfig }  from './initialState'
import { reducer }        from './reducer'


export type { tState as tAuth }                 from './types'
export { actions as authActions }               from './actions'
export { reducerActions as authReducerActions } from './reducer.actions'
export { watch as watchAuth }                   from './saga'
export { initialState as authInitialState }     from './initialState'


export const auth = persistReducer(persistConfig, reducer)