import storage    from 'redux-persist/lib/storage'
import { tState } from './types'


export const persistConfig = {
  key      : 'User',
  storage,
  whitelist: []
}

export const testUserData :tState = {
  name   : "same user",
  avatar : "https://i.imgur.com/1o1zEDM.png",
  balance: 34534
}
export const initialState: tState = {
  name   : "",
  avatar : "",
  balance: -1
};


