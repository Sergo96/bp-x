import { DefaultPage }            from '@vj-layouts/defaultPage'
import { getInitialPropsWrapper } from '@vj-layouts/getInitialPropsWrapper'
import { Example }                from '@vj-pages/example'
import { anyObject }              from '@vj-types'


interface iProps {
  data:anyObject
}

export default getInitialPropsWrapper<iProps>(
  DefaultPage(
    () => <Example />,
    {
      title   : 'Example',
      style   : 'example',
    },
  ),
)