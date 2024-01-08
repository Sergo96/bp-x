import { DefaultPage }            from '@vj-layouts/defaultPage'
import { getInitialPropsWrapper } from '@vj-layouts/getInitialPropsWrapper'
import { anyObject }              from '@vj-types'


interface iProps {
  data: anyObject
}

export default getInitialPropsWrapper<iProps>(
  DefaultPage<anyObject>(
    ({data}) => <div>Partners {JSON.stringify(data)}</div>,
    {
      title   : 'Partner',
      style   : 'partner.css',
      getProps: async (): Promise<iProps> => {

        return {
          data: {},
        }
      },
    },
  ),
)