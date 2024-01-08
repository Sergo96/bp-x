import { notificationActions, tNotification }             from '@vj-store/notification'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { appActions, tApp }                               from './app'
import { authActions, tAuth }                             from './auth'
import { cabinetActions, tCabinet }                       from './cabinet'
import { tUser, userActions }                             from './user'


type RootState = {
  auth: tAuth
  app: tApp
  cabinet: tCabinet
  user: tUser
  notification: tNotification
}

export const Actions = {
  auth        : authActions,
  app         : appActions,
  cabinet     : cabinetActions,
  user        : userActions,
  notification: notificationActions,
}

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const useAppDispatch = () => {
  const dispatch = useDispatch()
  return {dispatch, Actions}
}






