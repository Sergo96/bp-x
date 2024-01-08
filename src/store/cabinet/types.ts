import { iSidebar } from '@vj-interfaces/sidebar'


export type tState = {
  links: iSidebar[]
}


export const types = {
  getLinks: "AUTH_SAGA_TYPE_GET_LINKS",
  // logout         : "AUTH_SAGA_TYPE_LOG_OUT",
  // editPhoneNumber: "AUTH_SAGA_TYPE_EDIT_PHONE_NUMBER",
  // resend         : "AUTH_SAGA_TYPE_EDIT_RESEND",
  // verify         : "AUTH_SAGA_TYPE_EDIT_VERIFY",
  // saveUserData   : "AUTH_SAGA_TYPE_SAVE_USER_DATA",
}

export const reducerTypes = {
  setLinks: "AUTH_REDUCER_TYPE_SET_LINKS",
  // logout      : "AUTH_REDUCER_TYPE_LOGOUT",
  // resend      : "AUTH_REDUCER_TYPE_RESEND",
  // authenticate: "AUTH_REDUCER_TYPE_AUTHENTICATE",
  // editUserType: "AUTH_REDUCER_TYPE_EDIT_USER)TYPE",

}