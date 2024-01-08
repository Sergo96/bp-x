import Head   from 'next/head'
import { FC } from 'react'


interface iProps {
  url?: string
}

export const StyleSheet: FC<iProps> = ({url}) =>
  url
    ? <Head>
      <link rel="preload" href={url} as="style"/>
      <link type="text/css" rel="stylesheet" href={url}/>
    </Head>
    : null
