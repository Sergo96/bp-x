import { Cookie }    from '@vj-helpers/cookies'
import { anyObject } from '@vj-types'
import axiosDefault  from 'axios'


const axios = axiosDefault.create({
  baseURL: 'https://bpxv.herokuapp.com/api/v1/',
})

axios.interceptors.request.use(
  function (config) {
    const token = Cookie.getAuthToken()

    if (config.headers) {
      if (token != null && token != '') {
        config.headers.Authorization = 'Token ' + token
      }

      config.headers['Content-Type'] = 'application/json'
    }
    return config
  },
  function (err) {
    return Promise.reject(err)
  },
)

axios.interceptors.response.use(
  (response) => {
    return response
  },
  function (error) {
    throw  error.message
  },
)


export const Axios = (baseUrl: string) => ({
  get   : (url ="") => axios.get(`/${baseUrl}/${url}`),
  put   : (url ="", data: anyObject) => axios.put(`/${baseUrl}/${url}`, data),
  post  : (url ="", data: anyObject) => axios.post(`/${baseUrl}/${url}`, data),
  delete: (url ="") => axios.delete(`/${baseUrl}/${url}`),

})

export class _Axios {
  baseUrl: string

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl
  }

  get(url = '') {
    return axios.get(`/${this.baseUrl}/${url}`)
  }

  put(url = '', data: anyObject) {
    return axios.put(`/${this.baseUrl}/${url}`, data)
  }

  post(url = '', data: anyObject) {
    return axios.post(`/${this.baseUrl}/${url}`, data)
  }

  delete(url = '') {
    return axios.delete(`/${this.baseUrl}/${url}`)
  }
}


export default axios
