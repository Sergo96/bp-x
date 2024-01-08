import { DefaultPage }            from '@vj-layouts/defaultPage'
import { getInitialPropsWrapper } from '@vj-layouts/getInitialPropsWrapper'
import { useAppDispatch }         from '@vj-store'
import { anyObject }              from '@vj-types'

interface iProps {
  data: anyObject
}

export default getInitialPropsWrapper<iProps>(
  DefaultPage<anyObject>(
    () => {
      const {dispatch, Actions} = useAppDispatch()
      return (
        <div>
          <h1>Login page</h1>
          <button   onClick={() => dispatch(Actions.auth.login())} >login</button>
        </div>
        )
    },
    {
      title   : 'Sign In',
      style   : 'login.css',

    },
  ),
)
