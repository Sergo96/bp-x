import { iContactData } from '@vj-interfaces/contactUs'
import { Axios }        from './axios'


const {get} = Axios('contact-us')


let contactsData: iContactData | null = null


export const ContactUsApi = {
  get:  async ():Promise<iContactData | undefined> => {
    if (contactsData) return contactsData

    try {
      const res = await get()
      if (res?.data) {
        contactsData = res.data
        return res.data
      }
    } catch (e) {
      console.error(e)
    }
  }

}


