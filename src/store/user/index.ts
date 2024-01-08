import { persistReducer } from 'redux-persist'
import { persistConfig }  from './initialState'
import { reducer }        from './reducer'


export type { tState as tUser }                 from './types'
export { actions as userActions }               from './actions'
export { reducerActions as userReducerActions } from './reducer.actions'
export { watch as watchUser }                   from './saga'
export { initialState as userInitialState }     from './initialState'


export const user = persistReducer(persistConfig, reducer)