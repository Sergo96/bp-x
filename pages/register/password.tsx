import { DefaultPage }            from '@vj-layouts/defaultPage'
import { getInitialPropsWrapper } from '@vj-layouts/getInitialPropsWrapper'
import { anyObject }              from '@vj-types'


interface iProps {
  data: anyObject
}

export default getInitialPropsWrapper<iProps>(
  DefaultPage<anyObject>(
    ({data}) => (
      <div>
        <h1>register Password page{JSON.stringify(data)}</h1>
      </div>
    ),
    {
      title   : 'Password',
      style   : 'password.css',
      getProps: async (): Promise<iProps> => {
        return {
          data: {},
        }
      },
    },
  ),
)
