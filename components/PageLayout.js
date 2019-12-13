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
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <link rel="manifest" href="/site.webmanifest" />

          {/* Icons */}
          <link rel="shortcut icon" href="favicon.ico" />
          <link rel="icon" type="image/png" sizes="32x32" href="images/icons/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="images/icons/favicon-16x16.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="images/icons/apple-touch-icon.png" />
          <link rel="mask-icon" href="images/icons/safari-pinned-tab.svg" color="#111d5e" />

          {/* PWA theme colors */}
          <meta name="msapplication-TileColor" content="#111d5e" />
          <meta name="theme-color" content="#ffffff" />

          {/* PWA Splash screens for iOS devices */}
          <link rel="apple-touch-startup-image" href="images/splash/launch-640x1136.png"
            media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" />
          <link rel="apple-touch-startup-image" href="images/splash/launch-750x1334.png"
            media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)" />
          <link rel="apple-touch-startup-image" href="images/splash/launch-1125x2436.png"
            media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" />
          <link rel="apple-touch-startup-image" href="images/splash/launch-1242x2208.png"
            media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)" />
          <link rel="apple-touch-startup-image" href="images/splash/launch-1536x2048.png"
            media="(min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait)" />
          <link rel="apple-touch-startup-image" href="images/splash/launch-1668x2224.png"
            media="(min-device-width: 834px) and (max-device-width: 834px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait)" />
          <link rel="apple-touch-startup-image" href="images/splash/launch-2048x2732.png"
            media="(min-device-width: 1024px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait)" />
        </Head>

        <NavBar />
        {this.props.children}
        <Footer />

      </>
    )
  }
}

export default PageLayout
