import storage    from 'redux-persist/lib/storage'
import { tState } from './types'


export const persistConfig = {
  key: 'Auth',
  storage,
  whitelist: ['isAuthed',  'userType']
}
export const testUser :tState={
  isAuthed   : true,
  userType   : 'owner',
}

export const initialState: tState = {
  isAuthed   : false,
  userType   : 'guest',
};


