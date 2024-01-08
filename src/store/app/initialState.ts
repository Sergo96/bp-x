import storage    from 'redux-persist/lib/storage'
import { tState } from './types'


export const persistConfig = {
  key      : 'App',
  storage,
  whitelist: ['language']
}


export const initialState: tState = {
  language:"en"
};


