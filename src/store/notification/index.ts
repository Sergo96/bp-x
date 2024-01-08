import { persistReducer } from 'redux-persist'
import { persistConfig }  from './initialState'
import { reducer }        from './reducer'


export type { tState as tNotification }                 from './types'
export { actions as notificationActions }               from './actions'
export { reducerActions as notificationReducerActions } from './reducer.actions'
export { watch as watchNotification }                   from './saga'
export { initialState as notificationInitialState }     from './initialState'


export const notification = persistReducer(persistConfig, reducer)