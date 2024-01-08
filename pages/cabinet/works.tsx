import { CabinetLayout }          from '@vj-layouts'
import { DefaultPage }            from '@vj-layouts/defaultPage'
import { getInitialPropsWrapper } from '@vj-layouts/getInitialPropsWrapper'
import { Cabinet }                from '@vj-pages'
import { anyObject }              from '@vj-types'


interface iProps {
  data: anyObject
}


export default getInitialPropsWrapper<iProps>(
  DefaultPage<anyObject>(
    ({data}) => <Cabinet {...data}/>,
    {
      title     : 'Works',
      style     : 'cabinet.css',
      accessType: 'authed',
      layout    : CabinetLayout,
    },
  ),
)
