import { iAction }      from '@vj-interfaces/store'
import { ToastContent } from 'react-toastify/dist/types'
import { types }        from './types'


export const actions = {
  newError  : (payload: ToastContent): iAction<ToastContent> => ({type: types.newError, payload}),
  newSuccess: (payload: ToastContent): iAction<ToastContent> => ({type: types.newSuccess, payload}),
  newInfo   : (payload: ToastContent): iAction<ToastContent> => ({type: types.newInfo, payload}),
  newWarning: (payload: ToastContent): iAction<ToastContent> => ({type: types.newWarning, payload}),
  remove    : (): iAction => ({type: types.remove}),
}
