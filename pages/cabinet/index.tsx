import { CabinetLayout, PageWithLayoutType } from '@vj-layouts'
import { getInitialPropsWrapper }            from '@vj-layouts/getInitialPropsWrapper'
import { Cabinet }                           from '@vj-pages'
import { anyObject }                         from '@vj-types'


interface iProps {
  data: anyObject
}

const CabinetPage: PageWithLayoutType<iProps> = ({data}) =>
  <Cabinet {...data}/>


CabinetPage.title = 'Cabinet'
CabinetPage.style = 'cabinet.css'
CabinetPage.accessType = 'authed'
CabinetPage.layout = CabinetLayout

export default getInitialPropsWrapper<iProps>(CabinetPage)

