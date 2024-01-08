import { PageWithLayoutType, tBaseLayoutProps, tBaseProps, UnAuthedLayout } from '@vj-layouts'
import { iPageWrapper, PageWrapper }                                        from '@vj-layouts/pageWrapper'
import { anyObject }                                                        from '@vj-types'
import { FC }                                                               from 'react'


interface iProps<T = anyObject> {
  data: T
}


export function DefaultPage<T>(MyPage: FC<iProps<T>>, options?: tBaseLayoutProps & tBaseProps): PageWithLayoutType<iPageWrapper & iProps<T>> {
  const Page: PageWithLayoutType<iPageWrapper & iProps<T>> = ({data, ...props}) => {
    return (
      <PageWrapper {...props}>
        <MyPage data={data}/>
      </PageWrapper>
    )
  }
  Page.animated = options?.animated || false
  Page.layout = options?.layout || UnAuthedLayout
  Page.title = options?.title
  Page.style = options?.style?`/styles/pages/${options.style}.css`:undefined
  Page.accessType = options?.accessType || 'universal'
  Page.redirectTo = options?.redirectTo
  Page.redirectBack = options?.redirectBack
  Page.hasMeta = options?.hasMeta!== undefined ?options.hasMeta : options?.accessType === 'universal'
  Page.hasAdminChangeableBlock = options?.hasAdminChangeableBlock
  Page.getProps = options?.getProps


  return Page

}
