import { iHomePage }              from '@vj-interfaces/homePageData'
import { DefaultPage }            from '@vj-layouts/defaultPage'
import { getInitialPropsWrapper } from '@vj-layouts/getInitialPropsWrapper'
import { iPageWrapper }           from '@vj-layouts/pageWrapper'
import { Home }                   from '@vj-pages'
import { AboutMinApi, BannerApi } from '@vj-services'

interface iProps extends iPageWrapper {
  data: iHomePage
}

export default getInitialPropsWrapper<iProps>(
  DefaultPage<iHomePage>(
    ({data}) => <Home {...data}/>,
    {
      title   : 'Home',
      style   : 'home',
      animated: true,
      getProps: async (): Promise<iProps> => {

        const bannerData = await BannerApi.getBanner()
        const aboutMinData = await AboutMinApi.getAboutMin()

        return {
          data: {
            aboutMin: aboutMinData.data,
            banner  : bannerData.data,
          },
        }
      },
    },
  ),
)
