'use strict'
import axios from 'axios'


export const BaseUrl = process.env.BASE_URL || 'dfgsdg'
const config = {
  baseURL: '',
  timeout: 60 * 1000, // Timeout
}

const _axios = axios.create(config)

_axios.interceptors.request.use(
  async function(config) {
    // const auth = JSON.parse(await AsyncStorage.getItem("persist:Auth") || "{}")
    // if (auth.token) {
    //   const token = auth.token.replace(/"/g,"")
    //   config.headers.Authorization = `Bearer ${token}`;
    // }/

    return config;
  },
  function(error) {
    console.error("axios config", {error})
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
// _axios.interceptors.response.use(
//   function(response) {
//
//     return response;
//   }
//   // },
//   // function(error) {
//   //   console.error(error.message);
//   // }
// );

export default _axios;
