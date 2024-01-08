import { initialState }         from './initialState'
import { reducerTypes, tState } from './types'


type tReducerFunction = { [t: string]: (state: tState, payload?: any) => tState }

export const reducerFunctions: tReducerFunction = {
  // [reducerTypes.setToken]    : (state: tState, payload: string): tState => ({...state, token: payload}),
  [reducerTypes.logout]: (): tState => ({...initialState}),
  [reducerTypes.login] : (state: tState, payload: tState): tState => ({...state, ...payload}),
  // [reducerTypes.resend]      : (state: tState): tState => ({...state, resendCount: state.resendCount < 3 ? state.resendCount + 1 : state.resendCount}),
  // [reducerTypes.authenticate]: (state: tState, payload: { userType:tUser,token:string }): tState => ({...state,...payload, isAuthed: true,     resendCount: 0}),
  // [reducerTypes.editUserType]: (state: tState, payload: tUser): tState => ({...state, isAuthed: true, userType: payload, resendCount: 0}),

}
