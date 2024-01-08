import storage    from 'redux-persist/lib/storage'
import { tState } from './types'


export const persistConfig = {
  key      : 'Cabinet',
  storage,
  whitelist: ['links']
}


export const initialState: tState = {
  links: []
};


