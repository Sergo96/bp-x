import { AuthedLayout }           from '@vj-layouts'
import { DefaultPage }            from '@vj-layouts/defaultPage'
import { getInitialPropsWrapper } from '@vj-layouts/getInitialPropsWrapper'
import { anyObject }              from '@vj-types'


interface iProps {
  data: anyObject
}

export default getInitialPropsWrapper<iProps>(
  DefaultPage<anyObject>(
    ({data,...props}) =>  <>gsdagsdgasd{JSON.stringify(data)}<br/>{JSON.stringify(props)}</>,
    {
      title   : 'Notification',
      style   : 'notification.css',
      accessType:'authed',
      layout:AuthedLayout,

      getProps: async (): Promise<iProps> => {

        return {
          data: {},
        }
      },
    },
  ),
)