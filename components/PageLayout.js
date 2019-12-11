import React from 'react'
import Head from 'next/head'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import '../styles/global.scss'

class PageLayout extends React.Component {

  render() {
    return (
      < >
        <Head>
          <title>{this.props.page_title}</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta name="msapplication-TileColor" content="#00aba9" />
          <meta name="theme-color" content="#ffffff" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#180241" />
        </Head>
        <NavBar />
        {this.props.children}
        <Footer />
      </>
    )
  }
}

export default PageLayout
