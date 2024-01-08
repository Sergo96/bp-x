import { iContactData } from '@vj-interfaces/contactUs'
import parse            from 'html-react-parser'
import Head             from 'next/head'
import { FC }           from 'react'


export interface iPageWrapper {
  meta?: string
  title?: string
  adminChangeableBlock?: string
  contactsData?: iContactData
}

export const PageWrapper: FC<iPageWrapper> = ({children, contactsData, title, meta, adminChangeableBlock}) => {

  return (
    <>
      {meta ? <Head> {parse(meta)} {title ? <title>{title}</title> : null}</Head> : null}
      {children}
      {adminChangeableBlock ? parse(adminChangeableBlock) : null}
    </>
  )
}
