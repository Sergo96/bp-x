import { iAboutPage }             from '@vj-interfaces/about'
import { DefaultPage }            from '@vj-layouts/defaultPage'
import { getInitialPropsWrapper } from '@vj-layouts/getInitialPropsWrapper'
import { About }                  from '@vj-pages/about'
import { AboutMinApi }            from '@vj-services'

interface iProps {
  data: iAboutPage
}

export default getInitialPropsWrapper<iProps>(
  DefaultPage<iAboutPage>(
    ({data}) => <About {...data}/>,
    {
      title   : 'About',
      style   : 'about.css',
      getProps: async (): Promise<iProps> => {
        const aboutMinData = await AboutMinApi.getAboutMin()

        return {
          data: {
            aboutMin : aboutMinData.data,
            howToEasy: {
              steps: [
                {
                  title      : 'dsfasd',
                  description: 'The Global Times newspaper claimed it was the ever closer relationship and bond between China and Russia [that is] the last defence that protects the world order, while a report by state news agency Xinhua said the US was attempting to divert domestic attention and revive its influence over Europe The Global Times newspaper claimed it was the ever closer relationship and bond between China and Russia [that is] the last defence that protects the world order, while a report by state news agency Xinhua said the US was attempting to divert domestic attention and revive its influence over EuropeThe Global Times newspaper claimed it was the ever closer relationship and bond between China and Russia [that is] the last defence that protects the world order, while a report by state news agency Xinhua said the US was attempting to divert domestic attention and revive its influence over EuropeThe Global Times newspaper claimed it was the ever closer relationship and bond between China and Russia [that is] the last defence that protects the world order, while a report by state news agency Xinhua said the US was attempting to divert domestic attention and revive its influence over EuropeThe Global Times newspaper claimed it was the ever closer relationship and bond between China and Russia [that is] the last defence that protects the world order, while a report by state news agency Xinhua said the US was attempting to divert domestic attention and revive its influence over EuropeThe Global Times newspaper claimed it was the ever closer relationship and bond between China and Russia [that is] the last defence that protects the world order, while a report by state news agency Xinhua said the US was attempting to divert domestic attention and revive its influence over EuropeThe Global Times newspaper claimed it was the ever closer relationship and bond between China and Russia [that is] the last defence that protects the world order, while a report by state news agency Xinhua said the US was attempting to divert domestic attention and revive its influence over Europe',
                  img        : {
                    url: 'https://swall.teahub.io/photos/small/78-781764_nice-and-beautiful-wallpapers-beautiful-background-images-nature.jpg',
                  },
                },

                {
                  title      : 'dsfa121 2121h jg sd',
                  description: 'sdadfasd fa fas dfa sdfas dfa sdf as df asd f asdf as df asd f asdfasdfasd f',
                  img        : {
                    url: 'https://swall.teahub.io/photos/small/78-781764_nice-and-beautiful-wallpapers-beautiful-background-images-nature.jpg',
                  },
                },
                {
                  title      : 'dsfasd',
                  description: 'sdadfasd',
                  img        : {
                    url: 'https://swall.teahub.io/photos/small/78-781764_nice-and-beautiful-wallpapers-beautiful-background-images-nature.jpg',
                  },
                },
                {
                  title      : 'dsfasd',
                  description: 'sdadfasd',
                  img        : {
                    url: 'https://swall.teahub.io/photos/small/78-781764_nice-and-beautiful-wallpapers-beautiful-background-images-nature.jpg',
                  },
                },
              ],
            },
            alreadyWithOur: {
              partners   : [
                {
                  logo: {
                    url: 'https://swall.teahub.io/photos/small/78-781764_nice-and-beautiful-wallpapers-beautiful-background-images-nature.jpg',
                  },
                  page: '/partners/jhlakjkafh1',
                }, {
                  logo: {
                    url: 'https://swall.teahub.io/photos/small/78-781764_nice-and-beautiful-wallpapers-beautiful-background-images-nature.jpg',
                  },
                  page: '/partners/jhlakjkafh2',
                }, {
                  logo: {
                    url: 'https://swall.teahub.io/photos/small/78-781764_nice-and-beautiful-wallpapers-beautiful-background-images-nature.jpg',
                  },
                  page: '/partners/jhlakjkafh3',
                }, {
                  logo: {
                    url: 'https://swall.teahub.io/photos/small/78-781764_nice-and-beautiful-wallpapers-beautiful-background-images-nature.jpg',
                  },
                  page: '/partners/jhlakjkafh4',
                },
              ],
              viewMoreUrl: '/partners',
            },
            userOpinion   : {
              opinions   : [
                {
                  name    : 'Vardanik',
                  opinion : ' sdj haslkdhgfaklgjkdsh glkjash dlkahsldkj haslkklh alh alkasjsdhg lkjshd lkjsah dljh a',
                  stars   : 4,
                  createAt: '01.15.2021',
                }, {
                  name    : 'Vardanik',
                  opinion : ' sdj haslkdhgfaklgjkdsh glkjash dlkahsldkj haslkklh alh alkasjsdhg lkjshd lkjsah dljh a',
                  stars   : 3,
                  createAt: '01.15.2021',
                },
              ],
              viewMoreUrl: '/users-opinion',
            },
          },
        }
      },
    },
  ),
)