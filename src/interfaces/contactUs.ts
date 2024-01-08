export interface iContactResult {
  _id: string | number
  value: string
  url?: string
}

export interface iContact {
  type?: 'address' | 'email' | 'phone'
  icon?: string
  data: iContactResult[]
}

export interface iSocial {
  _id: string | number
  url: string
  svg: string
}

export interface iContactData {
  social?: iSocial[]
  address?: iContact
  email?: iContact
  phone?: iContact
}
