import { iAction }         from '@vj-interfaces/store'
import { ToastContent }    from 'react-toastify/dist/types'
import { put, takeLatest } from 'redux-saga/effects'
import { reducerActions }  from './reducer.actions'
import { types }           from './types'


function* newError(payload: iAction<ToastContent>) {
  yield put(reducerActions.add({type: 'error', message: payload.payload}))
}

function* newInfo(payload: iAction<ToastContent>) {
  yield put(reducerActions.add({type: 'info', message: payload.payload}))
}

function* newSuccess(payload: iAction<ToastContent>) {
  yield put(reducerActions.add({type: 'success', message: payload.payload}))
}

function* newWarning(payload: iAction<ToastContent>) {
  yield put(reducerActions.add({type: 'warning', message: payload.payload}))
}

function* remove() {
  yield put(reducerActions.remove())
}


export function* watch() {
  yield takeLatest(types.newError, newError)
  yield takeLatest(types.newInfo, newInfo)
  yield takeLatest(types.newSuccess, newSuccess)
  yield takeLatest(types.newWarning, newWarning)
  yield takeLatest(types.remove, remove)
}
