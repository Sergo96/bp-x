import { useAppDispatch, useAppSelector } from '@vj-store'
import { FC, useEffect }                  from 'react'
import { toast, ToastContainer }          from 'react-toastify'


export const MyToastNotifications: FC = () => {
  const myNotification = useAppSelector(state => state.notification)
  const {Actions: {notification}, dispatch} = useAppDispatch()


  useEffect(() => {
    if (myNotification.type && myNotification.message) {
      toast(myNotification.message, {type: myNotification.type})
      setTimeout(() => dispatch(notification.remove()), 20)
    }
  }, [!!myNotification.message, !!myNotification.type])


  return <ToastContainer/>
}
