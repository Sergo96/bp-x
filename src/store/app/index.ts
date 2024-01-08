import { persistReducer } from 'redux-persist'
import { persistConfig }  from './initialState'
import { reducer }        from './reducer'


export type { tState as tApp }                 from './types'
export { actions as appActions }               from './actions'
export { reducerActions as appReducerActions } from './reducer.actions'
export { watch as watchApp }                   from './saga'
export { initialState as appInitialState }     from './initialState'


export const app = persistReducer(persistConfig, reducer)