import { ToastContent } from 'react-toastify/dist/types'


export type tState = {
  type?: tNotification
  message?: ToastContent
}

type tNotification = 'error' | 'info' | 'success' | 'warning'

export const types = {
  newError  : 'AUTH/SAGA/newError',
  newSuccess: 'AUTH/SAGA/newSuccess',
  newInfo   : 'AUTH/SAGA/newInfo',
  newWarning: 'AUTH/SAGA/newWarning',
  remove    : 'AUTH/SAGA/remove',
}

export const reducerTypes = {
  add   : 'AUTH/REDUCER/add',
  remove: 'AUTH/REDUCER/remove',
}