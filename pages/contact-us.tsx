import { iContactData }           from '@vj-interfaces/contactUs'
import { DefaultPage }            from '@vj-layouts/defaultPage'
import { getInitialPropsWrapper } from '@vj-layouts/getInitialPropsWrapper'
import { Contact }                from '@vj-pages'
import { ContactUsApi }           from '@vj-services'


interface iProps {
  data: iContactData
}

export default getInitialPropsWrapper<iProps>(
  DefaultPage<iContactData>(
    ({data}) => <Contact {...data} />,
    {
      title   : 'Contact Us',
      animated: true,
      hasContactsBlock:false,
      getProps: async (): Promise<iProps> => {

        const contactData = await ContactUsApi.get()

        return {
          data: {...contactData}
        }
      },
    },
  ),
)



