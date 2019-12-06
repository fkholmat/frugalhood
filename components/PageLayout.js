import React from 'react'
import Head from 'next/head'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import '../styles/global.scss'

class PageLayout extends React.Component {

  render () {
    return(
      < >
        <Head>
          <title>{this.props.page_title}</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
        </Head>
        <NavBar/>
        {this.props.children}
        <Footer/>
      </>
    )
  }
}

export default PageLayout
