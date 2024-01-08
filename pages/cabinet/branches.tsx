import { CabinetLayout, PageWithLayoutType } from '@vj-layouts'
import { DefaultPage }                       from '@vj-layouts/defaultPage'
import { getInitialPropsWrapper }            from '@vj-layouts/getInitialPropsWrapper'
import { Cabinet }                           from '@vj-pages'
import { anyObject }                         from '@vj-types'


interface iProps {
  data: anyObject
}

const BranchesPage: PageWithLayoutType<iProps> = ({data}) =>
  <Cabinet {...data}/>

BranchesPage.title = 'Branches'
BranchesPage.style = 'cabinet.css'
BranchesPage.accessType = 'authed'
BranchesPage.layout = CabinetLayout


export default getInitialPropsWrapper<iProps>(
  DefaultPage<anyObject>(
    ({data}) => <Cabinet {...data}/>,
    {
      title     : 'Branches',
      style     : 'cabinet.css',
      accessType: 'authed',
      layout    : CabinetLayout,
    },
  ),
)