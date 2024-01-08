import { Cookie }                      from '@vj-helpers/cookies'
import { ContactUsApi }                from '@vj-services'
import { anyObject }                   from '@vj-types'
import { NextPageContext }             from 'next'
import { PageWithLayoutType, tAccess } from '.'


type tGetIP = <T = anyObject>(Component: PageWithLayoutType<T>) => PageWithLayoutType<T>


const userCanContinue = async (url: string, token: string, accessType?: tAccess): Promise<boolean> => {

  if (accessType === 'authed') {
    if (!token) return false
  }
  if (accessType === 'unAuthed') {
    if (token) return false
  }

  try {
    return true///await axios.post(dataUrls.userAccess, {url})
  } catch (e) {
    return true
  }
  return true
}


export const getInitialPropsWrapper: tGetIP = (Component) => {


  Component.getInitialProps = async <T>(ctx: NextPageContext): Promise<T> => {

    const token = Cookie.getAuthToken(ctx.req?.headers.cookie)
    const lang = Cookie.getLanguage(ctx.req?.headers.cookie) || ''
    const url = ctx.asPath || ''
    const goToHome = () => {
      const Location = Component.redirectBack
        ? ctx.pathname.split('/').slice(-1).join('/')
        : Component.redirectTo || '/404'
      ctx.res?.writeHead(307, {Location})
      ctx.res?.end()
      return {}
    }
    const getProps = async () => {
      if (Component.getProps) {
        try {
          return await Component.getProps({...ctx, token})
        } catch (e) {
          goToHome()
        }
      }
      return {}
    }

    const userAccess = userCanContinue(url, token, Component.accessType)

    if (!userAccess) goToHome()

    const result: anyObject = {
      ...await getProps(),
    }

    if (Component.hasMeta) {
      // try {
      //   result.meta = await axios.post(dataUrls.meta, {url})
      // } catch (e) {
      result.meta = '<meta name="keywords" content="Keyword1, Keyword2, Keyword3">'
      // }
    }

    if (Component.hasContactsBlock) {

      result.contactsData = await ContactUsApi.get()

    }

    if (Component.hasAdminChangeableBlock) {
      // try {
      //   result.adminChangeableBlock = await axios.post(dataUrls.adminChangeableBlock, {url})
      // } catch (e) {
      result.adminChangeableBlock = '<h1>URRAAAAA!!!</h1>'
      // }
    }

    return result as T

  }


  return Component
}
