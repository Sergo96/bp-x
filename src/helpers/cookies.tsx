const setCookie = (name: string, value: string, exDays?: number) => {
  const d = new Date()
  d.setTime(d.getTime() + ((exDays ? exDays * 864 : 36) * 100000))
  if (typeof document !== 'undefined')
    document.cookie = `${name}=${value};expires=${d.toUTCString()};path=/`
}
const getCookie = (name: string, cookie?: string) => {
  if (cookie === '' || (!cookie && typeof document === 'undefined')) return ''

  name = name + '='
  const decodedCookie = decodeURIComponent(cookie || document.cookie)
  const ca = decodedCookie.split(';')
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i]
    while (c.charAt(0) == ' ') {
      c = c.substring(1)
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length)
    }
  }
  return ''
}

const removeCookie = (name: string) => {
  if (typeof document === 'undefined') return false
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`
  return true
}

const titles = {
  authToken: 'auth-token',
  language : 'i18nextLng',

}


export const Cookie = {
  set   : setCookie,
  get   : getCookie,
  remove: removeCookie,

  setAuthToken   : (value: string, exDays?: number) => setCookie(titles.authToken, value, exDays),
  getAuthToken   : (cookie?: string) => getCookie(titles.authToken, cookie),
  removeAuthToken: () => removeCookie(titles.authToken),

  setLanguage   : (value: string, exDays?: number) => setCookie(titles.language, value, exDays),
  getLanguage   : (cookie?: string) => getCookie(titles.language, cookie),
  removeLanguage: () => removeCookie(titles.language),


  getAll: function (cookie?: string) {
    return {
      authToken: this.getAuthToken(cookie),
      language : this.getLanguage(cookie),

    }
  },
}
