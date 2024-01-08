import { MyToastNotifications, StyleSheet } from '@vj-components'
import { initProgressBar }                  from '@vj-helpers/ProgressBar'
import { AppLayoutProps, DefaultLayout }    from '@vj-layouts'
import { wrapper }                          from '@vj-store/store'
import { anyObject }                        from '@vj-types'
import { appWithTranslation }               from 'next-i18next'
import Head                                 from 'next/head'
import { FC }                               from 'react'


const variableCss = '/styles/variables.css'
const baseCss = '/styles/base.css'
const favicon = '/favicon.ico'

function MyApp({Component, pageProps}: AppLayoutProps) {
  const Layout = Component.layout || DefaultLayout
  const Page = Component as FC<anyObject>
  const args = {}

  initProgressBar()

  return (
    <>
      <Head>
        <meta name="theme-color" content="#000000"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"/>
        <link rel="icon" href={favicon}/>
        <title>BP {Component.title ? `| ${Component.title}` : ''} </title>
      </Head>
      <StyleSheet url={variableCss}/>
      <StyleSheet url={baseCss}/>
      <StyleSheet url={Component.style}/>
      <Layout args={args}>
        <Page {...pageProps} />
      </Layout>
      <MyToastNotifications/>
    </>
  )
}

export default wrapper.withRedux(appWithTranslation(MyApp))
