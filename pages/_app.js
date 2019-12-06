import React from 'react'
import App from 'next/app'
import PageLayout from '../components/PageLayout'

class MyApp extends App {
  render () {
    const { Component, pageProps, router } = this.props
    const siteName = process.env.SITE_NAME
    const pageTitle = router.query.name ? router.query.name + " - " + siteName : siteName

    return (
     <PageLayout page_title={pageTitle}>
       <Component {...pageProps} />
     </PageLayout> 
    )
  }
}

export default MyApp