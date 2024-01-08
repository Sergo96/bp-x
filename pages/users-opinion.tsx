import { DefaultPage }            from '@vj-layouts/defaultPage'
import { getInitialPropsWrapper } from '@vj-layouts/getInitialPropsWrapper'
import { anyObject }              from '@vj-types'

interface iProps {
  data: anyObject
}

export default getInitialPropsWrapper<iProps>(
  DefaultPage<anyObject>(
    ({data}) => <h1>Privacy Policy{JSON.stringify(data)}</h1>,
    {
      title   : 'Users Opinion',
      style   : 'userOpinion.css',
      getProps: async (): Promise<iProps> => {
        return {
          data:{}
        }
      },
    },
  ),
)