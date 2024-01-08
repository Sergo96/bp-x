export type tUser = 'guest' | 'owner' | 'administrator' | 'worker' | 'client'
export type tTheme = 'light' | 'dark'

export type voidFn<T = any> = (arg?: T) => void

export type anyObject = { [K: string]: any }
