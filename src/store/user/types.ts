export type tState = {
  name: string
  avatar: string
  balance:number
}


export const types = {
  setUser: "AUTH_SAGA_TYPE_SET_USER",
}

export const reducerTypes = {
  setUser: "AUTH_REDUCER_TYPE_SET_USER",
  logout: "AUTH_REDUCER_TYPE_LOGOUT",
}