require('dotenv').config()

const withOffline = require('next-offline')
const withSass = require('@zeit/next-sass')
const { getMenuItems } = require('./helpers/getMenuItems')

const nextConfig = {
  env: {
    // Reference variables that were defined in the .env file and 
    // make it available at Build Time
    SITE_NAME: process.env.SITE_NAME,
    // Contenftul CMS
    CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
    CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN,
  },
  async exportPathMap() {
    // Pages we know about beforehand
    const pathMap = {
      '/': { page: '/' }
    }

    // Data generated pages
    const menuItems = await getMenuItems()
    menuItems.map(menuItem => {
      pathMap[`/${menuItem.link}`] = {
        page: "/[menuSlug]",
        query: { slug: menuItem.link, id: menuItem.id, name: menuItem.name }
      }

      // if (menuItem.hasChild) {
      //   pathMap[`/${menuItem.link}/${menuItem.link}`] = {page: `/${menuItem.link}/[menuSlug]`, query: {slug: menuItem.link, id: menuItem.id, name: menuItem.name}}
      // }
    })

    return pathMap
  },
}

module.exports = withOffline(withSass(nextConfig))
