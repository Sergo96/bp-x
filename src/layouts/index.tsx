import { iPageWrapper }              from '@vj-layouts/pageWrapper'
import { anyObject }                 from '@vj-types'
import { NextPage, NextPageContext } from 'next'
import { AppProps }                  from 'next/app'
import { AuthedLayout }              from './authed'
import { CabinetLayout }             from './cabinet'
import { UnAuthedLayout }            from './unAuthed'


export { AuthedLayout }         from './authed'
export { UnAuthedLayout }       from './unAuthed'
export { DefaultLayout }        from './default'
export { CabinetLayout }        from './cabinet'

export interface iLayout {
  args: tBaseLayoutProps
}

export type tBaseLayoutProps = {
  fullScreen?: boolean
  animated?: boolean


}

export type tBaseProps = {
  title?: string
  accessType?: tAccess
  redirectTo?: string
  redirectBack?: boolean
  style?: string
  hasMeta?: boolean
  hasContactsBlock?: boolean
  getProps?: (CTX: NextPageContext & { token?: string }) => anyObject
  hasAdminChangeableBlock?: boolean
  layout?: typeof UnAuthedLayout | typeof AuthedLayout | typeof CabinetLayout
}


export type PageWithLayoutType<T = anyObject & iPageWrapper> = NextPage<T> & tBaseProps & tBaseLayoutProps

export type tAccess = 'authed' | 'unAuthed' | 'universal'

export type AppLayoutProps = AppProps & {
  Component: PageWithLayoutType
  pageProps: any
}
