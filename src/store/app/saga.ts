import { iAction }         from '@vj-interfaces/store'
import { tLanguages }      from '@vj-types/languages'
import { put, takeLatest } from 'redux-saga/effects'
import { reducerActions }  from './reducer.actions'

import { types } from './types'


export function* watch() {
  yield takeLatest(types.changeLanguage, changeLanguage)
  // yield takeLatest(types.logout, logout)
  // yield takeLatest(types.editPhoneNumber, editPhoneNumber)
  // yield takeLatest(types.resend, resend)
  // yield takeLatest(types.verify, verify)
  // yield takeLatest(types.saveUserData, saveUserData)

}


function* changeLanguage(action: iAction<tLanguages>) {
  if (action.payload) {
    yield put(reducerActions.changeLanguage(action.payload))
    // service.changeLanguage(action.payload)
  }
}


