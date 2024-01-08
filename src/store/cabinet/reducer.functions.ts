import { iSidebar }             from '@vj-interfaces/sidebar'
import { reducerTypes, tState } from './types'


type tReducerFunction = { [t: string]: (state: tState, payload?: any) => tState }

export const reducerFunctions: tReducerFunction = {
  [reducerTypes.setLinks]: (state: tState, links: iSidebar[]): tState => ({...state, links}),
  // [reducerTypes.logout]      : (): tState => ({...initialState}),
  // [reducerTypes.resend]      : (state: tState): tState => ({...state, resendCount: state.resendCount < 3 ? state.resendCount + 1 : state.resendCount}),
  // [reducerTypes.authenticate]: (state: tState, payload: { userType:tUser,token:string }): tState => ({...state,...payload, isAuthed: true,     resendCount: 0}),
  // [reducerTypes.editUserType]: (state: tState, payload: tUser): tState => ({...state, isAuthed: true, userType: payload, resendCount: 0}),

}
