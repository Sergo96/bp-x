import storage    from 'redux-persist/lib/storage'
import { tState } from './types'


export const persistConfig = {
  key      : 'Notification',
  storage,
  whitelist: [],
}


export const initialState: tState = {}


