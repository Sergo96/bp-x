import { tUser } from '@vj-types'


export type tState = {
  isAuthed: boolean,
  userType: tUser
}


export const types = {
  // getCode        : "AUTH_SAGA_TYPE_GET_CODE",
  logout     : 'AUTH/SAGA/LOG_OUT',
  login      : 'AUTH_SAGA_TYPE_LOG_IN',
  checkIsUser: 'AUTH_SAGA_TYPE_CHECK_IS_USER',
  // editPhoneNumber: "AUTH_SAGA_TYPE_EDIT_PHONE_NUMBER",
  // resend         : "AUTH_SAGA_TYPE_EDIT_RESEND",
  // verify         : "AUTH_SAGA_TYPE_EDIT_VERIFY",
  // saveUserData   : "AUTH_SAGA_TYPE_SAVE_USER_DATA",
}

export const reducerTypes = {
  // setToken    : "AUTH_REDUCER_TYPE_SET_TOKEN",
  logout: 'AUTH/REDUCER/LOG_OUT',
  login : 'AUTH/REDUCER/TYPE_LOGIN',
  // resend      : "AUTH_REDUCER_TYPE_RESEND",
  // authenticate: "AUTH_REDUCER_TYPE_AUTHENTICATE",
  // editUserType: "AUTH_REDUCER_TYPE_EDIT_USER)TYPE",

}