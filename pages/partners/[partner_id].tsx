import { DefaultPage }            from '@vj-layouts/defaultPage'
import { getInitialPropsWrapper } from '@vj-layouts/getInitialPropsWrapper'


interface iProps {
  data: {
    partnerId?: string | string[]
  }
}

export default getInitialPropsWrapper<iProps>(
  DefaultPage<{ partnerId?: string | string[] }>(
    ({data}) => <div>Partner - {JSON.stringify(data)}</div>,
    {
      title   : 'Partner',
      style   : 'partner.css',
      getProps: async ({query}): Promise<iProps> => {

        return {
          data: {
            partnerId: query.partner_id,
          },
        }
      },
    },
  ),
)
