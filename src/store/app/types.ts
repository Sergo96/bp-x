import { tLanguages } from '@vj-types/languages'


export type tState = {
  language:tLanguages
}


export const types = {
  changeLanguage        : "AUTH_SAGA_TYPE_CHANGE_LANGUAGE",
  // logout         : "AUTH_SAGA_TYPE_LOG_OUT",
  // editPhoneNumber: "AUTH_SAGA_TYPE_EDIT_PHONE_NUMBER",
  // resend         : "AUTH_SAGA_TYPE_EDIT_RESEND",
  // verify         : "AUTH_SAGA_TYPE_EDIT_VERIFY",
  // saveUserData   : "AUTH_SAGA_TYPE_SAVE_USER_DATA",
}

export const reducerTypes = {
  changeLanguage        : "AUTH_REDUCER_TYPE_CHANGE_LANGUAGE",
  // setToken    : "AUTH_REDUCER_TYPE_SET_TOKEN",
  // logout      : "AUTH_REDUCER_TYPE_LOGOUT",
  // resend      : "AUTH_REDUCER_TYPE_RESEND",
  // authenticate: "AUTH_REDUCER_TYPE_AUTHENTICATE",
  // editUserType: "AUTH_REDUCER_TYPE_EDIT_USER)TYPE",

}