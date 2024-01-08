import { iSidebar }              from '@vj-interfaces/sidebar'
import { reducerActions }        from '@vj-store/cabinet/reducer.actions'
import { service }               from '@vj-store/cabinet/service'
import { types }                 from '@vj-store/cabinet/types'
import { call, put, takeLatest } from 'redux-saga/effects'


function* getLinks() {
  // @ts-ignore
  const res = yield call(() => service.getLinks()) as iSidebar[]
  yield put(reducerActions.setLinks(res))
}

export function* watch() {
  yield takeLatest(types.getLinks, getLinks)
  // yield takeLatest(types.logout, logout)
  // yield takeLatest(types.editPhoneNumber, editPhoneNumber)
  // yield takeLatest(types.resend, resend)
  // yield takeLatest(types.verify, verify)
  // yield takeLatest(types.saveUserData, saveUserData)

}
